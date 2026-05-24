import { Project } from "../types";

export const safe_rl: Project = {
    id: "safe_rl",
    title: "Safe RL with NEWT — FormulaOne Racecar",
    meta: "Nov 2025 - May 2026 | Robot Learning",
    image: "/portfolio/assets/safe_rl/summary_bars.png",
    category: "Machine Learning",
    technologies: ["Python", "PyTorch", "TD3", "Safety Gymnasium", "MuJoCo", "World Models"],
    summary: "Head-to-head comparison of three safety paradigms — unconstrained TD3, Lagrangian Safe-RL, and an online Control Barrier Function shield — layered on top of a frozen NEWT world-model encoder, evaluated on the SafetyRacecarFormulaOne1-v0 racing environment.",
    features: [
        "Frozen NEWT world-model encoder shared across all three agents for a controlled comparison",
        "Lagrangian Safe-RL warm-started from a SafetyCarRun-v0 expert (transfer of a cost-aware policy prior)",
        "Online Learned Control Barrier Function shield with PPOLag demo warm-start and live replay-buffer adaptation",
        "SafetyMetricsTracker logging CVR, cumulative cost, λ trajectory, and shield intervention rate"
    ],
    takeaways: [
        "Vanilla TD3 reached the highest reward (~2.38) but incurred 50–370 cost steps/episode — unsafe by every metric",
        "CBF-shielded agent achieved the best Safety-Constrained Return (0.856) with mean cost ~12 — strongest reward-under-safety",
        "Lagrangian agent drove final cost to 1.3 and CVR to 4.5% but at a lower return (0.214) — the most conservative",
        "Confirmed the classic safe-RL Pareto: cost ↓ trades off against return ↓, and the choice of shield matters more than the encoder"
    ],
    headlineMetrics: [
        { value: "0.86", label: "Best SC-Return (CBF)" },
        { value: "4.5%", label: "Final CVR (Lagrangian)" },
        { value: "3", label: "Safety paradigms compared" },
    ],
    featured: true,
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>Modern world-model agents like <strong>NEWT</strong> (Hansen et al., 2025) achieve strong reward on continuous-control benchmarks, but they're trained with no notion of <em>safety</em> — a deployed racing car that maximizes lap reward will happily collide with hazards if reward dominates. The goal of this project was to take a fixed, pretrained NEWT encoder and ask: <em>given the same perceptual backbone, which safety paradigm produces the best reward-under-constraint?</em> I evaluated three approaches on the <code>SafetyRacecarFormulaOne1-v0</code> environment from Safety Gymnasium, controlling for encoder, RL backbone (TD3), and seed.</p>

        <h2>System Architecture</h2>
        <p>All three agents share a frozen NEWT encoder feeding a TD3 actor-critic. The only thing that varies is the <strong>safety layer</strong> stacked on top.</p>
        <div class="system-diagram">
            <div class="diagram-node">
                <strong>Observation</strong>
                <span>LiDAR + state</span>
            </div>
            <div class="diagram-arrow">
                <span class="arrow-label">o<sub>t</sub></span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>NEWT Encoder</strong>
                <span>Frozen (5M)</span>
            </div>
            <div class="diagram-arrow">
                <span class="arrow-label">z<sub>t</sub></span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Safety Layer</strong>
                <span>None / λ / CBF</span>
            </div>
            <div class="diagram-arrow">
                <span class="arrow-label">a<sub>t</sub></span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Racecar</strong>
                <span>MuJoCo Sim</span>
            </div>
        </div>

        <h2>Three Safety Paradigms</h2>

        <h3 class="text-lg font-bold mt-6 mb-3">1. Vanilla TD3 (Unconstrained Baseline)</h3>
        <p>A standard TD3 agent on the NEWT latent. No cost signal enters the optimization — the agent is only told to maximize episodic return. This establishes the reward ceiling and the unsafe lower bound for the comparison.</p>

        <h3 class="text-lg font-bold mt-6 mb-3">2. Lagrangian Safe-RL (Warm-Started from CarRun Expert)</h3>
        <p>A two-stage pipeline. First, a Lagrangian TD3 agent is trained on the simpler <code>SafetyCarRun-v0</code> environment to produce a cost-aware policy prior. The weights — including a learned Lagrange multiplier λ — are then transferred and continued on FormulaOne:</p>
        <div class="bg-slate-100 p-4 rounded-lg my-2 font-mono text-sm text-center">
            max<sub>π</sub> &nbsp; E[R(τ)] &nbsp;&minus;&nbsp; λ &middot; (E[C(τ)] &minus; δ)
        </div>
        <p>λ is updated by gradient ascent on the constraint violation, automatically tightening when the agent exceeds the per-step cost budget δ = 0.1. Warm-starting from CarRun avoids the cold-start problem where λ explodes before the actor has any useful behavior.</p>

        <h3 class="text-lg font-bold mt-6 mb-3">3. Online Control Barrier Function Shield</h3>
        <p>Instead of penalizing cost in the reward, the CBF approach <strong>filters</strong> unsafe actions at runtime. A neural CBF <i>h</i>(<i>z</i>) is trained over the NEWT latent: <i>h</i> &gt; 0 means safe, <i>h</i> &lt; 0 triggers a brake override. The CBF is warm-started supervised on PPOLag demonstration transitions, then continuously updated online from the replay buffer:</p>
        <div class="bg-slate-100 p-4 rounded-lg my-4 font-mono text-xs overflow-x-auto">
            <div class="opacity-50 mb-2">// Per step</div>
            z = NEWT(o);  h = LearnedCBF(z)<br>
            a = (h &gt; 0) ? &pi;<sub>TD3</sub>(z) : brake<br><br>
            <div class="opacity-50 mb-2">// Every cbf_update_freq steps</div>
            L = L<sub>cls</sub> + 0.5 &middot; L<sub>cbf</sub><br>
            L<sub>cls</sub> = weighted hinge(&minus;h(z) &middot; label),&nbsp;unsafe &times; 10<br>
            L<sub>cbf</sub> = mean clamp(&minus;(h(z') &minus; (1&minus;&gamma;)&middot;h(z)), 0)
        </div>
        <p>L<sub>cbf</sub> enforces forward invariance — once safe, the system should remain safe. γ = 0.2 controls how fast h is allowed to decrease along trajectories.</p>

        <h2>Quantitative Results</h2>
        <p>All agents were evaluated at matched timesteps (30k) on the same environment seed. The <strong>Safety-Constrained Return</strong> reports the best eval return achieved while staying under a cost budget of 25 steps/episode.</p>

        <div class="overflow-hidden border border-slate-200 rounded-xl my-6 shadow-sm">
            <table class="w-full text-sm text-left">
                <thead class="bg-slate-50 text-slate-700 uppercase font-bold text-xs">
                    <tr>
                        <th class="px-6 py-3 border-b">Agent</th>
                        <th class="px-6 py-3 border-b text-right">Peak Return</th>
                        <th class="px-6 py-3 border-b text-right">Mean Cost</th>
                        <th class="px-6 py-3 border-b text-right">CVR</th>
                        <th class="px-6 py-3 border-b text-right">SC-Return</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    <tr class="bg-white">
                        <td class="px-6 py-4 font-medium text-slate-900">Vanilla TD3</td>
                        <td class="px-6 py-4 text-right font-mono">2.38</td>
                        <td class="px-6 py-4 text-right font-mono text-red-600">53 &ndash; 371</td>
                        <td class="px-6 py-4 text-right font-mono">12.1%</td>
                        <td class="px-6 py-4 text-right font-mono text-slate-400">~0.00</td>
                    </tr>
                    <tr class="bg-slate-50/50">
                        <td class="px-6 py-4 font-medium text-slate-900">Lagrangian Safe-RL</td>
                        <td class="px-6 py-4 text-right font-mono">0.26</td>
                        <td class="px-6 py-4 text-right font-mono text-green-700">1.3</td>
                        <td class="px-6 py-4 text-right font-mono text-green-700">4.5%</td>
                        <td class="px-6 py-4 text-right font-mono">0.214</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="px-6 py-4 font-medium text-slate-900">CBF Shielded</td>
                        <td class="px-6 py-4 text-right font-mono">0.86</td>
                        <td class="px-6 py-4 text-right font-mono">11.6</td>
                        <td class="px-6 py-4 text-right font-mono">2.8%</td>
                        <td class="px-6 py-4 text-right font-mono text-blue-600 font-bold">0.856</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div>
                <img src="/portfolio/assets/safe_rl/summary_bars.png" alt="Final metric bar chart" class="rounded-lg border border-slate-200 w-full">
                <p class="text-xs text-center text-slate-500 mt-2">Final-step metric comparison</p>
            </div>
            <div>
                <img src="/portfolio/assets/safe_rl/tradeoff_scatter.png" alt="Safety-reward tradeoff scatter" class="rounded-lg border border-slate-200 w-full">
                <p class="text-xs text-center text-slate-500 mt-2">Reward vs. cost Pareto frontier</p>
            </div>
        </div>

        <img src="/portfolio/assets/safe_rl/eval_dashboard.png" alt="6-panel evaluation dashboard" class="rounded-lg border border-slate-200 w-full my-4">
        <p class="text-xs text-center text-slate-500">Per-checkpoint eval dashboard: return, cost, CVR, cost rate, SC-return, and λ trajectory</p>

        <h2>Qualitative Behavior</h2>
        <p>The recordings below are each agent's best evaluation episode. Note the difference in driving style — the vanilla agent cuts corners aggressively, the Lagrangian agent crawls along the safe centerline, and the CBF agent balances the two by braking <em>only when</em> the learned barrier predicts an upcoming hazard.</p>

        <div class="video-container" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
            <div>
                <h4 class="text-center font-bold mb-2 text-sm">Vanilla TD3</h4>
                <video controls muted loop playsInline class="w-full rounded-lg shadow-sm">
                    <source src="/portfolio/assets/safe_rl/vanilla_demo.mp4" type="video/mp4">
                </video>
            </div>
            <div>
                <h4 class="text-center font-bold mb-2 text-sm">Lagrangian Safe-RL</h4>
                <video controls muted loop playsInline class="w-full rounded-lg shadow-sm">
                    <source src="/portfolio/assets/safe_rl/saferl_demo.mp4" type="video/mp4">
                </video>
            </div>
            <div>
                <h4 class="text-center font-bold mb-2 text-sm">CBF Shielded</h4>
                <video controls muted loop playsInline class="w-full rounded-lg shadow-sm">
                    <source src="/portfolio/assets/safe_rl/cbf_demo.mp4" type="video/mp4">
                </video>
            </div>
        </div>

        <h2>Training Dynamics</h2>
        <img src="/portfolio/assets/safe_rl/training_dashboard.png" alt="Per-episode training curves" class="rounded-lg border border-slate-200 w-full my-4">
        <p>The Lagrangian λ climbs monotonically from 65 → 75 over 30k steps as the agent repeatedly exceeds its cost budget — the constraint genuinely binds rather than acting as a soft regularizer. The CBF intervention rate is the inverse story: it starts at 100% (the untrained barrier rejects everything), drops to ~1% during the supervised warm-start as the agent learns to act on its own, and re-rises to ~100% once the online updates kick in and the barrier sharpens on FormulaOne-specific failure modes.</p>

        <h2>Engineering Lessons</h2>
        <ul>
            <li><strong>Warm-starting matters more than the algorithm.</strong> A CBF trained from scratch on FormulaOne takes &gt;100k steps to do anything useful; warm-started from 50k PPOLag demo transitions, it's usable in 5k steps. Same story for Lagrangian — the CarRun prior is doing most of the work.</li>
            <li><strong>Frozen-encoder transfer worked.</strong> The NEWT encoder was pretrained on a different task family, but its latents proved discriminative enough that a small (3-layer MLP) CBF head learned a useful safety classifier on top — no fine-tuning required.</li>
            <li><strong>"Safety-Constrained Return" is the right headline metric.</strong> Looking only at reward picks vanilla TD3 every time; looking only at cost picks the agent that never moves. SC-return forces the comparison to live on the actual Pareto frontier.</li>
            <li><strong>CBF beats Lagrangian on this task</strong> — but the win is environment-specific. Lagrangian is harder to tune but provides asymptotic constraint guarantees the CBF doesn't.</li>
        </ul>
    </div>`,
};
