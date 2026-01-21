import { Project } from "../types";

export const me2110: Project = {
    id: "me2110",
    title: "ME2110: Autonomous Electromechanical Robot",
    meta: "Aug 2022 - Nov 2022 | System Integration & Design",
    image: "/portfolio/assets/me2110/front_iso_view.jpeg",
    technologies: ["Solidworks", "Rapid Prototyping", "Arduino", "Fabrication", "Mechatronics", "Pneumatics", "System Integration"],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>For the ME 2110 "Lord of the Rings" design challenge, we were tasked with building an autonomous robot to complete a complex set of tasks within 40 seconds. The machine had to fit within a 12"x24"x18" volume, strictly adhere to a $100 budget, and integrate multiple electromechanical subsystems to score points.</p>
        
        <h2>Mission Objectives</h2>
        <ul>
            <li><strong>Ring Placement (High Priority):</strong> Extend upwards to place a ring on "Mt. Doom" (31/16" height).</li>
            <li><strong>Orc Defense:</strong> Deploy barriers to push enemy "Orc" blocks into the opposing zone.</li>
            <li><strong>Troop Deployment:</strong> Transport and release "Soldier" figurines and a red arrow into specific battle stations.</li>
            <li><strong>Legolas Rescue:</strong> Autonomous retrieval of the "Legolas" ball from a moving platform.</li>
        </ul>

        <h2>System Architecture</h2>
        <p>We prioritized a <strong>reliability-first</strong> design philosophy, focusing on structural rigidity and the seamless integration of five distinct subsystems.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div>
                 <img src="/portfolio/assets/me2110/front_iso_view.jpeg" alt="Final Robot Isometric View" class="rounded-lg border border-slate-200/50 shadow-sm">
                 <p class="text-xs text-center mt-2 text-slate-500">Robot Configuration (Front View)</p>
            </div>
             <div>
                 <img src="/portfolio/assets/me2110/back_iso_view.jpeg" alt="Final Robot Back View" class="rounded-lg border border-slate-200/50 shadow-sm">
                 <p class="text-xs text-center mt-2 text-slate-500">Drivetrain & Electronics Integration</p>
            </div>
        </div>

        <h2>Engineering Implementation</h2>
        <h3>1. Pneumatic Scissor Lift (Ring Placement)</h3>
        <p>To reach the 31-inch target height of "Mt. Doom" within the size constraints, we engineered a <strong>six-stage pneumatic scissor lift</strong>. </p>
        <ul>
            <li><strong>Actuation:</strong> Powered by a single pneumatic piston, ensuring a consistent and purely mechanical extension every time.</li>
            <li><strong>Stability:</strong> Constructed from reinforced beams with bolt joints to minimize lateral sway during the 2-second deployment window.</li>
        </ul>
        <img src="/portfolio/assets/me2110/ring_scissor_lift.jpeg" alt="Scissor Lift Mechanism" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

        <h3>2. Gravity-Fed Wing Deployment (Orc Defense)</h3>
        <p>We avoided using extra motors for the defensive "wings" by integrating their deployment with the drivetrain.</p>
        <ul>
            <li><strong>Mechanism:</strong> Large MDF wings were hinged to the chassis side. A small extrusion on the wheel hubs "nudged" the wings open as the robot drove forward, allowing gravity to lock them into full extension.</li>
            <li><strong>Result:</strong> Effectively cleared "Orc" blocks from our zone without consuming electrical power.</li>
        </ul>
        <img src="/portfolio/assets/me2110/robot_wing.jpeg" alt="Wing Deployment" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

        <h3>3. Solenoid Ramp & Conveyor (Troop & Legolas)</h3>
        <p>We integrated the troop deployment and rescue systems to save space:</p>
        <ul>
            <li><strong>Solenoid Ramp:</strong> A gravity-fed ramp controlled by two linear solenoids released the "Red Arrow" and "Soldiers" at precise timing intervals.</li>
            <li><strong>Legolas Conveyor:</strong> Positioned directly above the pick-up zone, this belt drive used friction flaps to scoop the "Legolas" ball and deposit it into the soldier ramp for simultaneous deployment.</li>
        </ul>
        <img src="/portfolio/assets/me2110/soldier_release_solenoid.jpeg" alt="Solenoid Release Mechanism" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

        <h3>4. Button Platform & Drivetrain</h3>
        <p>The robot featured a custom <strong>Multi-Height Button Platform</strong> to interface with the varying heights of the battle stations. The drivetrain used a U-shaped 4-wheel configuration with a dedicated rear steering wheel for precise alignment.</p>

        <h2>Performance & Results</h2>
        <p>The system was iteratively tested through two design sprints. In the final competition, the robot demonstrated high reliability:</p>
        <ul>
            <li><strong>Consistency:</strong> Successfully scored the Ring on Mt. Doom before any opponent in the final matches.</li>
            <li><strong>Defense:</strong> The passive wing system consistently cleared the "Orc" zone, securing defensive points.</li>
            <li><strong>Outcome:</strong> In the final game, the robot was on track to outscore all three opponents (projected 740 points) but faced a disqualification due to a logic error that caused movement after the buzzer.</li>
        </ul>
         <div class="video-container" style="background: #1e1e1e; padding: 1rem; border-radius: 8px; text-align: center; color: white;">
             <img src="/portfolio/assets/me2110/project_poster.jpg" alt="Design Poster" style="width: 100%; border-radius: 8px; opacity: 0.9;">
             <p class="text-xs mt-2 text-slate-400">Competition Project Poster</p>
        </div>
    </div>`,
};
