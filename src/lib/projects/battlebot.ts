import { Project } from "../types";

export const battlebot: Project = {
    id: "battlebot",
    title: "3lb Battlebot \"Insaniti\"",
    meta: "Oct 2021 - Mar 2022 | Mechanical Designer",
    image: "/portfolio/assets/battlebot/battlebot_insaniti.jpg",
    technologies: ["SolidWorks", "Metal Fabrication", "MATLAB"],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>Combat robotics is an extreme engineering stress test where mechanical failure is guaranteed without rigorous design. "Insaniti" was a 3lb (Beetleweight) entry designed to compete in the highly destructive RoboJackets internal tournament and <strong>Motorama 2022</strong>. Following the team's standard design methodology (Research &rarr; Sketch &rarr; CAD &rarr; Sim &rarr; Build), the goal was to survive 3 minutes in the arena while delivering catastrophic kinetic energy to opponents.</p>

        <h2>Design Requirements</h2>
        <p>Designing for the 3lb Beetleweight class requires strict mass budgeting while maximizing offensive output. The core design objectives were:</p>
        <ul class="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Kinetic Energy:</strong> Deliver catastrophic energy (<strong>&gt; 2kJ</strong>) to disable opponents in a single hit.</li>
            <li><strong>Spin-Up Time:</strong> Achieve operational speed (67%) in <strong>&lt; 2 seconds</strong> to allow for rapid counter-attacks.</li>
            <li><strong>Survivability:</strong> Withstand high-g environment and direct impacts from rival horizontal spinners.</li>
        </ul>

        <h2>Weapon System Design</h2>
        <p>The robot was designed around its primary weapon: a vertical, asymmetrical drummer spinner.</p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
            <div>
                <h3 class="text-lg font-bold mb-2">Mechanical Architecture</h3>
                <p>Following standard combat robot material guidelines, we utilized a mix of materials optimized for their specific roles:</p>
                <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-slate-700">
                    <li><strong>Striking Surface (Steel):</strong> <strong>S7 Tool Steel</strong> was selected for the weapon body. As per standard practice for high-stress striking components, steel provides the necessary hardness and density to resist deformation during impact rather than absorbing it.</li>
                    <li><strong>Rotational Assembly:</strong> The distinct "drum" consists of the steel weapon bolted to a custom <strong>Aluminum 6061-T6</strong> pulley. Aluminum was chosen here to reduce rotational mass in non-striking areas while maintaining sufficient structural strength.</li>
                </ul>
            </div>
             <div class="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm h-fit">
                <h4 class="font-bold border-b border-slate-200 pb-2 mb-3 text-slate-900">Weapon Assembly Bill of Materials</h4>
                <table class="w-full text-sm">
                    <tbody class="divide-y divide-slate-100 text-slate-600">
                        <tr><td class="py-2">Tool Steel Weapon</td><td class="text-right font-mono">0.759 lbs</td></tr>
                        <tr><td class="py-2">Aluminum Pulley (2.5")</td><td class="text-right font-mono">2.25" Groove</td></tr>
                        <tr><td class="py-2">x2 Ball Bearings</td><td class="text-right font-mono">7/8" OD</td></tr>
                        <tr><td class="py-2">SS Shoulder Screw (Axle)</td><td class="text-right font-mono">3/8" Dia</td></tr>
                        <tr class="text-slate-900 bg-slate-100"><td class="py-2 pl-2 rounded-l font-medium">Total Assembly Mass</td><td class="text-right pr-2 rounded-r font-bold font-mono">1.052 lbs</td></tr>
                        <tr class="text-slate-900"><td class="py-2 font-medium">Moment of Inertia</td><td class="text-right font-bold font-mono">1.847 lb/in²</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <img src="/portfolio/assets/battlebot/weapon_CAD.png" alt="Weapon Front CAD" class="rounded-lg border border-slate-200 w-full">
            <img src="/portfolio/assets/battlebot/weapon_back_CAD.png" alt="Weapon Back CAD" class="rounded-lg border border-slate-200 w-full">
        </div>

        <h3 class="text-xl font-bold mt-8 mb-4">Motor Selection & Dynamics Simulation</h3>
        <p>While basic motor selection often relies on static equations (e.g., <code>RPM = KV * V</code> and <code>t = 3 * J * &omega; / &tau;</code>), these approximations fail to account for current limiting and voltage sag. To properly size the motor, I developed a custom <strong>MATLAB simulation</strong> using a Forward Euler integration method. This allowed us to match the motor's torque curve to the weapon's massive Moment of Inertia (1.85 lb/in²).</p>
        
        <div class="bg-slate-900 text-slate-100 p-4 rounded-lg my-4 font-mono text-xs overflow-x-auto shadow-inner">
            <div class="opacity-50 mb-2">// Forward Euler State Space Model</div>
            <div>
                <span class="text-purple-400">Current:</span> i(t) = (V - &omega;(t)/K<sub>v</sub>) / R<br>
                <span class="text-purple-400">Torque:</span> &tau; = K<sub>i</sub> * i(t)<br>
                <span class="text-purple-400">Accel:</span> &alpha;(t) = (1/J) * (&tau; - D*&omega;(t))<br>
                <span class="text-purple-400">Update:</span> &omega;(t+dt) = &omega;(t) + &alpha;(t)*dt<br>
            </div>
        </div>

        <div style="height: 3rem;"></div>
        <div class="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div class="flex-1 space-y-4">
                <div>
                    <strong class="text-lg mb-1">Actuation System</strong>
                    <ul class="list-disc pl-5 text-sm text-slate-600">
                        <li><strong>Motor:</strong> Scorpion SII-3020-1110KV (Brushless)</li>
                        <li><strong>Reduction:</strong> 1.6:1 Timing Belt Drive</li>
                        <li><strong>Geometry:</strong> 1.125" (Weapon Rad) : 0.7" (Motor Rad)</li>
                    </ul>
                </div>
                 <div>
                    <h4 class="font-bold mb-3 border-b border-blue-200 pb-2">Simulated Performance</h4>
                    <div class="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
                        <div>
                            <div class="text-[10px] text-blue-500 uppercase tracking-wider font-bold">Max Energy</div>
                            <div class="font-mono text-2xl font-bold">2126 J</div>
                        </div>
                        <div>
                            <div class="text-[10px] text-blue-500 uppercase tracking-wider font-bold">Max RPM</div>
                            <div class="font-mono text-2xl font-bold">12,210</div>
                        </div>
                        <div class="col-span-2">
                            <div class="text-[10px] text-blue-500 uppercase tracking-wider font-bold">Spin-Up Time (67%)</div>
                            <div class="font-mono text-xl font-bold">1.03 sec <span class="text-sm font-normal text-blue-600">(to 8181 RPM)</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1">
                 <img src="/portfolio/assets/battlebot/weapon_spin_up_sim.png" alt="Simulation Graph" class="rounded-lg border border-slate-200 w-full shadow-sm">
                 <p class="text-xs text-center text-slate-500 mt-2">MATLAB Output: Angular Velocity vs. Time</p>
            </div>
        </div>

        <h2>Chassis & Structural Design</h2>
        <p>The chassis serves two roles: structural armor against incoming attacks and a mounting point for the intricate electronics.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            <div>
                 <img src="/portfolio/assets/battlebot/iso_view.jpeg" alt="Robot Iso View" class="rounded-lg border border-slate-200 w-full mb-2">
                 <img src="/portfolio/assets/battlebot/robot_CAD.png" alt="Robot CAD" class="rounded-lg border border-slate-200 w-full">
            </div>
            <div>
               <h3 class="text-lg font-bold">Hybrid Armor Architecture</h3>
               <p>The chassis design follows the "Frame and Armor" philosophy to balance rigidity and toughness:</p>
               <ul class="list-disc pl-5 space-y-3 mt-4 text-slate-700">
                    <li><strong>Skeleton (Rigidity):</strong> CNC-machined <strong>3/16" Aluminum (Side Plates)</strong> and <strong>1/8" Aluminum (Front/Back/Base)</strong> provided the rigid internal structure necessary for precise bearing alignment and motor mounting.</li>
                    <li><strong>Armor (Energy Dissipation):</strong> The top plate utilized <strong>1/8" HDPE (High-Density Polyethylene)</strong>. Unlike brittle metals, HDPE dissipates kinetic energy by tearing and deforming ("gouging") rather than transferring the full shock impulse to the frame, effectively "bouncing" glancing blows.</li>
                    <li><strong>Invertibility:</strong> Extended "ears" on the internal plates were designed to allow the robot to drive even when flipped upside down.</li>
               </ul>
               
               <h3 class="text-lg font-bold mt-8">Drive Train</h3>
               <p>Locomotion is provided by 2 independent drive motors coupled to <strong>3" diameter foam wheels</strong>.</p>
               <ul class="list-disc pl-5 mt-2 text-sm text-slate-600">
                    <li><strong>Motors:</strong> x2 Brushed Drive Motors (0.161 lbs each)</li>
                    <li><strong>Mounting:</strong> x2 Aluminum Brackets (~0.1 lbs)</li>
               </ul>
            </div>
        </div>

        <!-- BOM / Specs Table for Robot -->
        <h3 class="text-lg font-bold mt-8 mb-4">Total System Mass Budget</h3>
        <div class="overflow-hidden border border-slate-200 rounded-xl mb-12 shadow-sm">
            <table class="w-full text-sm text-left">
                <thead class="bg-slate-50 text-slate-700 uppercase font-bold text-xs">
                    <tr>
                        <th class="px-6 py-3 border-b">Sub-System</th>
                        <th class="px-6 py-3 border-b">Components</th>
                        <th class="px-6 py-3 border-b text-right">Mass</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    <tr class="bg-white">
                        <td class="px-6 py-4 font-medium text-slate-900">Chassis Structure</td>
                        <td class="px-6 py-4 text-slate-600">
                            2x Side (3/16" Al), 2x Front/Back/Base (1/8" Al)<br>
                            1x Top (1/8" HDPE), 2x Internal (1/8" Al)
                        </td>
                        <td class="px-6 py-4 text-right font-mono text-slate-600">~1.23 lbs</td>
                    </tr>
                    <tr class="bg-slate-50/50">
                        <td class="px-6 py-4 font-medium text-slate-900">Electronics</td>
                        <td class="px-6 py-4 text-slate-600">
                             Drive Motors, Wheels, ESCs, Battery, Receiver, Switch
                        </td>
                        <td class="px-6 py-4 text-right font-mono text-slate-600">0.519 lbs</td>
                    </tr>
                     <tr class="bg-white">
                        <td class="px-6 py-4 font-medium text-slate-900">Weapon System</td>
                        <td class="px-6 py-4 text-slate-600">Motor, ESC, Pulley, Weapon, Hardware</td>
                        <td class="px-6 py-4 text-right font-mono text-slate-600">1.05 lbs</td>
                    </tr>
                     <tr class="bg-slate-100 font-bold border-t border-slate-200">
                        <td class="px-6 py-4 text-slate-900">TOTAL WEIGHT</td>
                        <td class="px-6 py-4"></td>
                        <td class="px-6 py-4 text-right text-blue-600 font-mono">~2.8 lbs</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Performance Analysis & Lessons Learned</h2>
        <p>At <strong>Motorama 2022</strong>, Insaniti faced significant challenges, ending with a 0-2 record. While the chassis and armor performed to spec, critical sub-system failures highlighted the importance of robust electronics integration.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
            <div>
                <h4 class="font-bold text-red-900 border-b border-red-200 pb-2 mb-3">Critical Failure Modes</h4>
                <ul class="list-disc pl-5 space-y-2 text-sm text-red-800">
                    <li><strong>Electrical System:</strong> The master switch was stripped due to poor mechanical support (held only by wires), leading to a total loss of power in the Battle Box against <em>Carrotz</em> and <em>Mombot</em>.</li>
                    <li><strong>Weapon Drive:</strong> The decision to omit a belt tensioner caused the weapon belt to slip under load. Non-adjustable motor mounts meant we could not re-tension the system in the pits.</li>
                    <li><strong>Traction:</strong> 3" foam wheels struggled to find grip on the arena floor, and the aluminum invertibility stand added excessive friction when driving inverted.</li>
                </ul>
            </div>
             <div>
                <h4 class="font-bold text-green-900 border-b border-green-200 pb-2 mb-3">Design Validations</h4>
                <ul class="list-disc pl-5 space-y-2 text-sm text-green-800">
                    <li><strong>Survivability:</strong> Despite the losses, the HDPE top plate and 1/8" Aluminum base successfully absorbed heavy hits from <em>Chonkii</em> and <em>Mauri</em> in testing without structural failure.</li>
                    <li><strong>Manufacturability:</strong> The "Long Prismatic" chassis design proved extremely easy to machine, validating the decision to avoid complex internal geometry for a V1 prototype.</li>
                    <li><strong>Key Takeaway:</strong> "Rigorous design" must extend beyond the chassis—wire strain relief and serviceability (adjustable mounts) are just as critical as armor thickness.</li>
                </ul>
            </div>
        </div>
    </div>`,
};
