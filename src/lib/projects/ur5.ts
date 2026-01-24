import { Project } from "../types";

export const ur5: Project = {
    id: "ur5",
    title: "UR5 Manipulator Control",
    meta: "Dec 2025 | Robotics Control",
    image: "/portfolio/assets/ur5/ur5_control.png",
    technologies: ["MATLAB", "Python", "ROS", "Kinematics", "Controls"],
    summary: "Implemented and compared Resolved-Rate (differential kinematics) and Inverse Kinematics control paradigms for a UR5e manipulator completing a 'Push-and-Place' task.",
    features: [
        "Resolved-Rate Control using Damped Least-Squares Body Jacobian inversion",
        "Analytic Inverse Kinematics with cost function for optimal branch selection",
        "Singularity monitoring and avoidance logic",
        "SE(3) interpolation for linear Cartesian path generation"
    ],
    takeaways: [
        "IK achieved machine-precision accuracy (error ~10^-15) beating RR (~10^-5)",
        "RR proved more robust to external disturbances due to instantaneous feedback",
        "Demonstrated trade-off between absolute accuracy (IK) and smooth real-time control (RR)"
    ],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>Robotic manipulation requires precise coordination in SE(3) space. This project focused on a "Push-and-Place" task: programming a UR5e robot to push a target object 3cm along a local axis, lift, and return it. The core objective was to implement and compare two distinct control paradigms: <strong>Resolved-Rate (RR) Control</strong> (differential kinematics) and <strong>Inverse Kinematics (IK)</strong> (analytic plotting).</p>

        <h2>System Architecture</h2>
        <p>The control framework was implemented in MATLAB, interfacing with the robot via ROS (Robot Operating System) and RTDE (Real-Time Data Exchange).</p>
        <div class="system-diagram">
             <div class="diagram-node">
                <strong>Task Planner</strong>
                <span>Waypoints in SE(3)</span>
            </div>
            <div class="diagram-arrow">
                <span class="arrow-label">g_desired</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Controller</strong>
                <span>RR vs. IK</span>
            </div>
             <div class="diagram-arrow">
                <span class="arrow-label">q_dot / q_sol</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>UR5e Robot</strong>
                <span>Joint Actuation</span>
            </div>
        </div>

        <h2>Engineering Implementation</h2>
        
        <h3 class="text-lg font-bold mt-6 mb-3">1. Resolved-Rate Control (Differential Kinematics)</h3>
        <p>RR control drives the robot by iteratively minimizing the error twist &xi;<sub>err</sub> between the current pose <i>g</i><sub>cur</sub> and desired pose <i>g</i><sub>des</sub>. It relies on the Body Jacobian <i>J</i><sub>b</sub>(<i>q</i>) to map Cartesian velocities to joint velocities.</p>
        <ul>
            <li><strong>Mathematical Formulation:</strong> The control law is derived from &xi; = <i>J</i><sub>b</sub>(<i>q</i>)<i>q̇</i>. We invert this finding the damped least-squares solution:
                <div class="bg-slate-100 p-4 rounded-lg my-2 font-mono text-sm text-center">
                    <i>q̇</i> = <i>K</i> &middot; <i>J</i><sup>&dagger;</sup> &middot; &xi;<sub>err</sub>
                </div>
                where <i>J</i><sup>&dagger;</sup> is the pseudoinverse and <i>K</i> is the proportional gain (<i>K</i><sub>rr</sub> = 0.15).
            </li>
            <li><strong>Singularity Handling:</strong> The system continuously monitors manipulability (<i>w</i> = &radic;<span style="border-top:1px solid">det(<i>JJ</i><sup>T</sup>)</span>). If the robot approaches a singular configuration where the Jacobian becomes ill-conditioned, the controller safeguards by aborting motion to prevent infinite joint velocities.</li>
        </ul>

        <h3 class="text-lg font-bold mt-6 mb-3">2. Analytic Inverse Kinematics</h3>
        <p>Unlike RR, which serves towards a solution, IK solves for the exact final joint angles analytically. This decouples the path planning from the control loop.</p>
        <ul>
            <li><strong>Multiple Solution Optimization:</strong> The UR5 analytic solution yields up to 8 valid joint configurations for a given <i>g</i><sub>des</sub>. To ensure smooth motion, I implemented a cost function to select the optimal branch:
                 <div class="bg-slate-100 p-4 rounded-lg my-2 font-mono text-xs text-slate-600">
                    q_best = argmin(|| wrapToPi(<i>q</i><sub>sol_i</sub> - <i>q</i><sub>current</sub>) ||)
                </div>
                This prevents dangerous "elbow-flipping" or discontinuous jumps between waypoints.
            </li>
            <li><strong>Trajectory Generation:</strong> Intermediate waypoints are generated using SE(3) interpolation (screw motion) between keyframes to ensure the end-effector traces a straight line in Cartesian space.</li>
        </ul>

        <h2>Performance & Results</h2>
        <p>We compared the accuracy of both controllers in reaching the target "Home" pose after the task:</p>
        <ul>
            <li><strong>Accuracy:</strong> IK achieved near-perfect positioning with rotational error on the order of 10<sup>-15</sup> (machine precision), whereas RR settled with errors around 10<sup>-5</sup> due to the convergence threshold/gain trade-off.</li>
            <li><strong>Smoothness:</strong> While IK provided higher accuracy, RR via RTDE offered smoother real-time motion control by continuously updating based on instantaneous feedback, making it robust to small external disturbances.</li>
        </ul>

        <div class="video-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
            <div>
                <h4 class="text-center font-bold mb-2">Resolved-Rate Control</h4>
                <video src="/portfolio/assets/ur5/RDKDC%20Final%20Project%20-%20RR.MOV" autoplay muted loop playsinline width="100%" height="auto" class="rounded-lg shadow-sm"></video>
            </div>
            <div>
                <h4 class="text-center font-bold mb-2">Inverse Kinematics</h4>
                <video src="/portfolio/assets/ur5/RDKDC%20Final%20Project%20-%20IK%20Demo.MOV" autoplay muted loop playsinline width="100%" height="auto" class="rounded-lg shadow-sm"></video>
            </div>
        </div>
    </div>`,
};
