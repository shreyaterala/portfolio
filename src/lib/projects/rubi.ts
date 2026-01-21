import { Project } from "../types";

export const rubi: Project = {
    id: "rubi",
    title: "RUBI - Self Solving Cube",
    meta: "Oct 2024 - Dec 2024 | Mechatronics & Computer Vision",
    image: "/portfolio/assets/rubi/demo.png",
    technologies: ["Python", "YOLOv8", "OpenCV", "BLE"],
    summary: "Autonomous Rubik's Cube solving system integrating real-time computer vision with precision mechatronics to scan, solve, and execute maneuvers.",
    features: [
        "Custom YOLOv8 Object Detection pipeline for robust facelet classification",
        "Master-Slave architecture: PC (Vision/Kociemba) + Seeed XIAO nRF52840 (Control)",
        "6x NEMA-17 stepper motors with custom 3D-printed gearboxes",
        "Bluetooth Low Energy (BLE) using Bleak for wireless command serialization"
    ],
    takeaways: [
        "Achieved average solve time of ~45 seconds (15s scan, <1s compute)",
        "Eliminated lighting sensitivity issues common in HSV solvers via AI approach",
        "Demonstrated effective reliable actuation of 6 independent faces"
    ],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>The Rubik's Cube is a classic puzzle with over 43 quintillion permutations. RUBI is an autonomous solving system designed to demystify robotic manipulation and computer vision. By integrating real-time object detection with a precision actuation mechanism, RUBI scans, solves, and physically executes the solution for a scrambled cube without human intervention.</p>
        
        <h2>System Architecture</h2>
        <p>The system operates on a master-slave architecture: A PC-based Vision & Computation subsystem handles the heavy lifting (AI/Solving), while a microcontroller handles the real-time motor control.</p>
        <div class="system-diagram">
            <div class="diagram-node">
                <strong>PC Vision Subsystem</strong>
                <span>YOLOv8 + Kociemba</span>
            </div>
            <div class="diagram-arrow">
                <span class="arrow-label">BLE UART</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Embedded Control</strong>
                <span>Seeed XIAO nRF52840</span>
            </div>
             <div class="diagram-arrow">
                <span class="arrow-label">Step/Dir Pulses</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Actuation</strong>
                <span>6x NEMA-17 Motors</span>
            </div>
        </div>

        <h2>Engineering Implementation</h2>
        <h3>Computer Vision Pipeline</h3>
        <p>Robustly identifying sticker colors under varying lighting is a notorious challenge. Instead of simple color thresholding, I implemented a robust AI-driven pipeline:</p>
        <ul>
            <li><strong>YOLOv8 Object Detection:</strong> Trained a custom YOLOv8 model (<code>best.pt</code>) to detect and classify individual cube facelets (White, Yellow, Red, Orange, Green, Blue) with >99% confidence.</li>
            <li><strong>State Reconstruction:</strong> The system captures 6 faces sequentially. A custom mapping algorithm reorders the raw detection stream into a flattened 54-element string compatible with the standard cube notation.</li>
            <li><strong>Solving Algorithm:</strong> Integrated the <code>kociemba</code> Python library, which implements the Two-Phase Algorithm to find near-optimal solutions (typically &lt;20 moves) in milliseconds.</li>
        </ul>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <img src="/portfolio/assets/rubi/cv_training_pipeline.png" alt="CV Training Pipeline" class="rounded-lg border border-slate-200/50">
            <img src="/portfolio/assets/rubi/computer_vision.jpeg" alt="YOLOv8 Cube Detection" class="rounded-lg border border-slate-200/50">
        </div>

        <h3>Mechatronics & Embedded Control</h3>
        <p>The physical solver requires precise, synchronized actuation of 6 faces. We iterated through multiple gearbox designs to ensure torque density.</p>
        <img src="/portfolio/assets/rubi/rubi_cube.jpg" alt="RUBI System Overview" class="rounded-lg border border-slate-200/50">
        <img src="/portfolio/assets/rubi/cube_protyping_iterations.png" alt="Prototyping Iterations" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
        
        <ul>
            <li><strong>Wireless Communication:</strong> Utilized the <strong>Bleak</strong> library to establish a Bluetooth Low Energy (BLE) link between the Python backend and the robot's <strong>Seeed XIAO nRF52840</strong> microcontroller. Move commands are serialized and written to a custom GATT characteristic.</li>
            <li><strong>Actuation:</strong> 6x NEMA-17 stepper motors drive the faces via custom 5-way 3D-printed gearboxes. The grippers feature compliant TPU inserts to accommodate cube tolerances.</li>
        </ul>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <img src="/portfolio/assets/rubi/cube_internal.jpeg" alt="Internal Mechanism" class="rounded-lg border border-slate-200/50">
            <div class="flex flex-col">
                <img src="/portfolio/assets/rubi/wiring_diagram.png" alt="Wiring Schematic" class="rounded-lg border border-slate-200/50 w-full">
                <img src="/portfolio/assets/rubi/electrical_wiring.jpeg" alt="Physical Wiring" class="rounded-lg border border-slate-200/50 w-full">
            </div>
        </div>

        <h2>Performance</h2>
        <ul>
            <li><strong>Solve Speed:</strong> Average total time of ~45 seconds (Scan: 15s, Compute: &lt;1s, Actuation: 30s).</li>
            <li><strong>Reliability:</strong> The YOLO-based vision system eliminated color calibration issues common in HSV-based solvers, working robustly even in dim or warm lighting.</li>
        </ul>

        <div class="mt-8 text-center">
            <a href="/portfolio/assets/rubi/Final Project Demo.pdf" target="_blank" class="inline-block px-6 py-3 bg-slate-800 text-black rounded-lg hover:bg-slate-700 transition-colors">
                📄 View Full Project Report (PDF)
            </a>
        </div>
    </div>`,
};
