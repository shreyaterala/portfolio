import { Project } from "../types";

export const breath: Project = {
    id: "breath",
    title: "breathSense",
    meta: "Aug 2024 - Dec 2024 | Medical Aid",
    image: "/portfolio/assets/breath_sense/poster.jpg",
    technologies: ["C++", "PCB Design", "FEA", "Haptics", "User Research"],
    summary: "Haptic wearable for trauma victims to aid 'interoception' and grounding therapy by delivering vibrations synchronized to the user's exhale.",
    features: [
        "Wearable Racerback vest with localized strain gauge respiration sensing",
        "ESP32-S3 and NAU7802 24-bit ADC for high-fidelity signal acquisition",
        "Linear Resonant Actuator (LRA) for organic, pacing-matched haptic feedback",
        "Validated thermal and structural safety via ANSYS FEA"
    ],
    takeaways: [
        "Achieved <50ms system latency for causal feedback",
        "Rated 8.4/10 for comfort in clinical trials",
        "Offers non-pharmaceutical intervention for anxiety/PTSD"
    ],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>Trauma victims and individuals capable of dissociation often lose "interoception"—the ability to sense their own internal bodily states. While 17.3% of US adults practice meditation, survivors of PTSD face barriers engaging with traditional breath-focused techniques.</p>
        <p>Driven by Dr. Negar Fani's research at Emory University, <strong>breathSense</strong> utilizes external mechanoreceptor stimulation to anchor the user. Dr. Fani's lab found that vibration synchronized to the exhale significantly improves outcomes in grounding therapy compared to vibration alone.</p>
        
        <h2>Project Objectives</h2>
        <ul>
            <li><strong>Latency:</strong> Achieve a vibration response delay of <strong>&lt; 250ms</strong> (human reaction time threshold) to ensure causal linkage for the user.</li>
            <li><strong>Haptic Strength:</strong> Deliver a vibration intensity of <strong>&gt; 0.8 Grms</strong> to be perceptible through clothing and tissue.</li>
            <li><strong>Usability:</strong> Design for the 5th percentile female to 95th percentile male, with a "donning time" of under 1 minute for unassisted Setup.</li>
        </ul>

        <h2>System Architecture</h2>
        <p>The solution integrates a wearable "Racerback" vest with a modular electronics core. The system follows a localized processing loop:</p>
        <p className="font-mono text-sm p-4 bg-slate-100 rounded-md my-4">
            [Chest Expansion] -> [Strain Gauge] -> [Wheatstone Bridge] -> [NAU7802 24-bit ADC] -> [ESP32 S3] -> [DRV2605 Driver] -> [LRA Haptic Motor]
        </p>
        <img src="/portfolio/assets/breath_sense/functional_block_diagram.png" alt="System Block Diagram" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

        <h2>Engineering Implementation</h2>
        <h3>Concept & Form Factor Selection</h3>
        <p>We utilized a Morphological Chart to explore combinations of 5 sensor modalities and various wearable form factors. The <strong>Strain Gauge</strong> was selected for its superior sensitivity to relative respiratory volume compared to accelerometers.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
             <img src="/portfolio/assets/breath_sense/design_concepts.png" alt="Morphological Chart" class="rounded-lg border border-slate-200/50">
             <img src="/portfolio/assets/breath_sense/design_evaluation.png" alt="Evaluation Matrix" class="rounded-lg border border-slate-200/50">
        </div>
        <p>The <strong>Racerback Vest</strong> was chosen to decoupled the sensing band (xiphoid process) from the vibration source (manubrium), ensuring a consistent <strong>~5N holding force</strong>.</p>

        <h3>Electronics & Prototyping</h3>
        <p>We iterated through multiple housing designs to optimize for compact integration and thermal performance. The final circuit utilizes an <strong>ESP32-S3</strong> for processing and a <strong>NAU7802 24-bit ADC</strong> for high-fidelity signal acquisition.</p>
        <img src="/portfolio/assets/breath_sense/electrical_wiring_diagram.png" alt="Wiring Diagram" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
        
        <p><strong>Haptic Evolution:</strong> Early prototypes used ERM motors, but they lacked the "organic" rise and fall needed for breath pacing. The team transitioned to a <strong>Linear Resonant Actuator (LRA)</strong> driven by a TI DRV2605, enabling complex waveforms like "Soft Bump" and "Ramp Up".</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <img src="/portfolio/assets/breath_sense/electronic_housing_unit_prototying.png" alt="Housing Evolution" class="rounded-lg border border-slate-200/50">
            <img src="/portfolio/assets/breath_sense/vibration_puck_prototyping.png" alt="Vibration Puck Prototyping" class="rounded-lg border border-slate-200/50">
        </div>


        <h2>Feasibility & Analysis</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div>
                <h4 class="font-bold mb-2">Structural Integrity</h4>
                <p class="text-sm">Static FEA simulation (ANSYS) validated the housing against a <strong>25lbf load</strong>, yielding a safety factor of 1.5. Destructive testing confirmed failure only at >32lbf.</p>
                <img src="/portfolio/assets/breath_sense/fea_von_mises_stress.png" alt="FEA Stress Analysis" class="rounded-lg mt-2 border border-slate-200/50">
            </div>
            <div>
                <h4 class="font-bold mb-2">Thermal Safety</h4>
                <p class="text-sm">Steady-state thermal analysis ensured the device remains safe for skin contact. The simulation predicted a max surface temp of <strong>32&deg;C</strong>, well below the ISO 43&deg;C limit.</p>
                <img src="/portfolio/assets/breath_sense/steday_state_thermal_analysis.png" alt="Thermal Analysis" class="rounded-lg mt-2 border border-slate-200/50">
            </div>
        </div>
        
        <h2>Final Design & Validation</h2>
        <p>The final integrated system features a streamlined user interface, adjustable fit, and robust cable management. Clinical trials (n=10) demonstrated:</p>
        <ul class="list-disc pl-5 mb-4">
            <li><strong>Synchronization:</strong> Average latency of <strong>150-350ms</strong>, matching human reaction time.</li>
            <li><strong>Comfort:</strong> Rated <strong>8.4/10</strong> for extended wear (>30 min).</li>
        </ul>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <img src="/portfolio/assets/breath_sense/final_product.png" alt="Final Product Rendering" class="rounded-lg border border-slate-200/50">
            <img src="/portfolio/assets/breath_sense/final_prototype.png" alt="Physical Prototype" class="rounded-lg border border-slate-200/50">
        </div>

        <h2>Societal Impact</h2>
        <p>Ideally, breathSense offers a non-pharmaceutical intervention for managing anxiety and PTSD symptoms. By strictly adhering to IEC 62368-1 (Consumer Electronics Safety) and ISO 10993 (Biocompatibility), the team ensured the device is safe for at-home use, potentially democratizing access to grounding therapy.</p>

        <h2>Performance</h2>
        <ul>
            <li><strong>Responsiveness:</strong> Achieved a total system latency of &lt;50ms, providing feedback that feels instantaneous and causal to the user.</li>
            <li><strong>Battery Life:</strong> Integrated LiPo power management with voltage monitoring on the ESP32 (reading pin A13) to ensure all-day operation, with automatic low-battery indication.</li>
        </ul>
    </div>`,
};
