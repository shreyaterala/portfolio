import { Project } from "../types";

export const battlebot: Project = {
    id: "battlebot",
    title: "Battlebot \"Insaniti\"",
    meta: "Oct 2021 - Mar 2022 | Mechanical Designer",
    image: "/portfolio/assets/battlebot/battlebot_insaniti.jpg",
    technologies: ["SolidWorks", "FEA", "Rapid Prototyping"],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>Combat robotics is an extreme engineering stress test where mechanical failure is guaranteed without rigorous design. "Insaniti" was a 3lb (Beetleweight) entry designed to compete in the highly destructive RoboJackets internal tournament. The goal: survive 3 minutes in the arena while delivering catastrophic kinetic energy to opponents.</p>

        <h2>Project Objectives</h2>
        <ul>
            <li><strong>Kinetic Energy:</strong> Maximize weapon tip speed and MOI to deliver $> 100J$ of energy per hit.</li>
            <li><strong>Spin-Up Time:</strong> Achieve operational RPM in <strong>&lt; 4 seconds</strong> to allow for rapid recovery and counter-attacks.</li>
            <li><strong>Durability:</strong> Survive direct impacts from rival horizontal spinners without chassis fracture.</li>
        </ul>

        <h2>Engineering Implementation</h2>
        
        <h3 class="text-lg font-bold mt-6 mb-3">Weapon Motor Simulation & Selection</h3>
        <p>To optimize the lethality of the robot, I developed a custom <strong>MATLAB simulation</strong> to model the weapon's physical behavior. Simply attempting to "max out" power often leads to burned stators or batteries that can't supply the burst current. I simulated the system dynamics using a Forward Euler integration method:</p>
        
        <div class="bg-slate-100 p-4 rounded-lg my-4 font-mono text-sm">
            <p class="mb-2 text-xs text-slate-500">// Forward Euler State Space Model</p>
            <div>
                <p>Current: <span class="text-blue-600">i(t)</span> = (V - &omega;(t)/K<sub>v</sub>) / R</p>
                <p>Torque: <span class="text-blue-600">&tau;</span> = K<sub>i</sub> * i(t)</p>
                <p>Acceleration: <span class="text-blue-600">&alpha;(t)</span> = (1/J) * (&tau; - D*&omega;(t))</p>
                <p>Update: <span class="text-purple-600">&omega;(t+dt)</span> = &omega;(t) + &alpha;(t)*dt</p>
            </div>
        </div>

        <p>This script allowed us to iterate through a database of brushless outrunner motors. We selected the <strong>Scorpion SII-3020-1110KV</strong> for its optimal balance of torque and KV rating.</p>
        <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Motor Specs:</strong> 1110 KV, 0.031&Omega; Internal Resistance.</li>
            <li><strong>Reduction:</strong> Implemented a <strong>3:1 pulley reduction</strong> to multiply torque for faster spin-up.</li>
            <li><strong>Performance:</strong> The simulation predicted a spin-up time of <strong>&lt; 4s</strong> to operational speed, ensuring rapid recovery after hits.</li>
        </ul>
        <h3>Mechanical Analysis & FEA</h3>
        <p>Survival depends on material selection and geometry:</p>
        <img src="/portfolio/assets/battlebot/iso_view.jpeg" alt="Robot Iso View CAD" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
        <ul>
            <li><strong>Hybrid Chassis:</strong> Designed a "frame-and-armor" architecture. The internal skeleton was CNC-machined <strong>6061-T6 Aluminum</strong> for structural rigidity, encased in <strong>UHMW (Ultra-High Molecular Weight Polyethylene)</strong> armor. UHMW's high toughness allows it to absorb impact energy via plastic deformation rather than shattering.</li>
            <li><strong>Shock Isolation:</strong> Implemented TPU shock mounts for the electronics bay (receiver, ESCs, battery) to decouple high-frequency impact acceleration ($> 50g$) from sensitive components.</li>
        </ul>

        <h3>Weapon System Design</h3>
        <p>The primary offensive weapon was a vertical asymmetrical drummer spinner:</p>
        <ul>
            <li><strong>Tooth Geometry:</strong> Optimized the single-tooth S7 Tool Steel weapon profile for "bite," ensuring it engages with the opponent's armor rather than grinding.</li>
            <li><strong>Reliability:</strong> Utilized a live-shaft assembly with dual angular contact bearings to handle both radial and axial loads during off-axis hits.</li>
        </ul>
        <img src="/portfolio/assets/battlebot/top_view.jpeg" alt="Top View CAD" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
    </div>`,
};
