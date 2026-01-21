import { Project } from "../types";

export const pid: Project = {
    id: "pid",
    title: "PID Autonomous Control",
    meta: "Apr 2020 - Apr 2021 | C++ Implementation",
    image: "/portfolio/assets/pid/pid_robot_v5.png",
    technologies: ["C++", "PID Control", "Odometry", "Sensor Fusion"],
    summary: "Developed a robust custom PID controller in C++ for VEX Robotics 'Change Up' season to enable reliable autonomous scoring.",
    features: [
        "Adaptive Gain Scheduling adjusting kP, kD, kI based on target distance",
        "Triple-Redundant Inertial Sensor Fusion with outlier rejection",
        "Lookup-Table Based Slew Rate Limiter for traction control",
        "State Machine Logic for complex multi-goal autonomous routines"
    ],
    takeaways: [
        "Achieved high-reliability navigation for 15-second autonomous period",
        "Eliminated wheel slip and mechanical stress via motion profiling",
        "Successfully navigated all 9 goal zones in Autonomous Skills Strategy"
    ],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>As the Lead Programmer for Team 8823A during the VEX Robotics "Change Up" season, I was responsible for creating an autonomous routine that could reliably score points in the 15-second autonomous period. Finding standard time-based movements too inaccurate, I developed a robust custom PID (Proportional-Integral-Derivative) controller in C++.</p>

        <h2>System Architecture</h2>
        <div class="system-diagram">
            <div class="diagram-node">
                <strong>Target State</strong>
                <span>Distance / Heading</span>
            </div>
            <div class="diagram-arrow">
                <span class="arrow-label">Error</span>
                <div class="arrow-line"></div>
            </div>
             <div class="diagram-node">
                <strong>Adaptive PID</strong>
                <span>Gain Scheduling</span>
            </div>
             <div class="diagram-arrow">
                <span class="arrow-label">Power</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Slew Rate</strong>
                <span>Ramp Limits</span>
            </div>
             <div class="diagram-arrow">
                <span class="arrow-label">Voltage</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>V5 Motors</strong>
                <span>Actuation</span>
            </div>
        </div>

        <h2>Engineering Implementation</h2>
        <h3>Adaptive PID Controller</h3>
        <p>We found that one set of constants doesn't fit all movements and short, precise adjustments need different gain values than long cross-field sprints. I implemented an <strong>Adaptive PID system</strong> that dynamically switches gain scheduling based on the target distance:</p>
        <ul>
            <li><strong>Gain Scheduling:</strong> The system checks the target distance against defined ranges (e.g., <code>0-11</code>, <code>11-24</code>, <code>24-48</code> inches) and loads the optimal <code>kP</code>, <code>kD</code>, and <code>kI</code> values from a lookup table.</li>
            <li><strong>Struct-Based Configuration:</strong> A custom <code>PIDValue</code> struct stores these tuned constants, along with <code>motorPowerThresholds</code> to prevent stalling.</li>
        </ul>
        <div class="bg-slate-100 p-4 rounded-lg my-4 font-mono text-sm">
            const PIDValue movepidValues[] = { <br>
            &nbsp;&nbsp;{0, 11, 0.1155, 0.045, 0.0325, ...}, // Precise Short Range <br>
            &nbsp;&nbsp;{24, 48, 0.1155, 0.045, 0.010, ...}, // Mid Range <br>
            };
        </div>

        <h3>Inertial Sensor Fusion</h3>
        <p>To combat gyroscope drift and electro-mechanical noise, I implemented a <strong>Triple-Redundant Sensor Fusion algorithm</strong>:</p>
        <ul>
            <li><strong>Hardware Redundancy:</strong> We mounted three separate V5 Inertial Sensors (A, B, C) on the chassis.</li>
            <li><strong>Voter Algorithm:</strong> The code continuously calculates the mean and standard deviation of all three sensors. If any single sensor deviates significantly from the consensus (by > 1 standard deviation), it is dynamically excluded, and the heading is derived from the remaining two.</li>
        </ul>
        <div class="bg-slate-100 p-4 rounded-lg my-4 font-mono text-sm">
            // Outlier Rejection Logic (Turns.cpp) <br>
            avgAll = (InertialA + InertialB + InertialC) / 3; <br>
            standardDev = sqrt((1/3) * (pow(InertialA - avgAll, 2) + ...)); <br>

            if (fabs(InertialA) > fabs(standardDev + avgAll)) { <br>
            &nbsp;&nbsp;currentDeg = avgBC; // Exclude Sensor A if it's an outlier <br>
            } ... <br>
            else { <br>
            &nbsp;&nbsp;currentDeg = avgAll; <br>
            } <br>
        </div>

        <h3>Motion Profiling (Slew Rate)</h3>
        <p>To prevent wheel slip and reduce mechanical stress on the drivetrain, I implemented a <strong>Lookup-Table Based Slew Rate Limiter</strong>:</p>
        <ul>
            <li><strong>Acceleration Curves:</strong> Instead of calculating acceleration in real-time, the system references a pre-computed array <code>speedChange[] = {1, 1.5, 2... 81}</code>.</li>
            <li><strong>Traction Control:</strong> This ensures the voltage applied to the motors ramps up according to a curve optimized for the robot's mass and wheel friction, preventing "burnouts" on the anti-static foam tiles.</li>
        </ul>

        <h2>Autonomous Skills Strategy</h2>
        <p>For the "Change Up" Skills Challenge, the robot had to autonomously score balls in 9 goals distributed across the arena. I architected a robust <code>skillsBackLeftRoom</code> routine:</p>
        <ul>
            <li><strong>State Machine Logic:</strong> The routine is broken down into discrete "Goal" states. Each state consists of a sequence: <code>Move -> Turn -> Intake -> Score</code>.</li>
            <li><strong>Jig-Based Calibration:</strong> The routine relies on a precise starting "Jig" placement (Top/Left slots) to minimize initial angular error.</li>
            <li><strong>Performance:</strong> The routine successfully navigates to all 9 goals, using <code>Turn(degrees, direction)</code> commands with <code>timeout</code> failsafes to ensure the robot never gets stuck in an infinite loop if a sensor fails.</li>
        </ul>
         <div class="video-container" overflow: hidden; margin-top: 1.5rem; border: 1px solid rgba(255,255,255,0.1);">
             <video controls loop muted class="w-full h-auto rounded-lg">
                <source src="/portfolio/assets/pid/skills_run.mp4" type="video/mp4">
                Your browser does not support the video tag.
             </video>
        </div>
    </div>`,
};
