import { Project } from "../types";

export const epic: Project = {
    id: "epic",
    title: "EPIC Lab - Exoskeleton Research",
    meta: "Aug 2022 - Dec 2024 | Undergraduate Researcher",
    image: "/portfolio/assets/epic_lab/epic_lab_research.jpg",
    technologies: [
        "Python (PyTorch)",
        "ROS",
        "SolidWorks",
        "Control Theory",
        "Human-Robot Interaction"
    ],
    summary: "Developing back and lower-limb exoskeletons (GRAHAM Suit) to bridge the gap between rigid active assistance and lightweight passive assistance, reducing muscle fatigue for mobility-impaired individuals.",
    features: [
        "Hierarchical control architecture (High-level intent, Mid-level admittance, Low-level PID)",
        "Adjustable aluminum struts for 5th-95th percentile user accommodation",
        "Pressure insole analysis using CNNs for GRF estimation",
        "Custom 3D-printed cable management system"
    ],
    takeaways: [
        "Achieved 15% reduction in metabolic energy expenditure",
        "Reduced trajectory tracking error by 40% with State Space control",
        "Improved identifying user intent and joint loading"
    ],
    content: `<div>
        <h2>Context & Motivation</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 hidden md:grid">
            <img src="/portfolio/assets/epic_lab/epic_lab_research.jpg" alt="EPIC Lab Research Overview" class="!w-full !m-0 h-auto rounded-lg shadow-lg md:col-span-1 object-cover" />    
            <div class="md:col-span-2 flex flex-col justify-center">
                <p class="!mb-4">The <strong>DoE Exoskeleton Team</strong> at EPIC Lab aims to bridge the gap between rigid, high-power active assistance and ergonomic, lightweight passive assistance. Our goal is to develop back and lower-limb exoskeletons that significantly reduce user muscle fatigue during physically demanding tasks.</p>
                <p class="!mb-0">My work specifically addresses the <strong>GRAHAM Suit</strong>, a knee exoskeleton equipped with a sensor suit and an electronics backpack, designed to assist mobility-impaired individuals and preserve their independence.</p>
            </div>
        </div>
        <div class="md:hidden space-y-6">
            <img src="/portfolio/assets/epic_lab/epic_lab_research.jpg" alt="EPIC Lab Research Overview" class="w-full h-auto rounded-lg shadow-lg" />
             <div>
                <p>The <strong>DoE Exoskeleton Team</strong> at EPIC Lab aims to bridge the gap between rigid, high-power active assistance and ergonomic, lightweight passive assistance. Our goal is to develop back and lower-limb exoskeletons that significantly reduce user muscle fatigue during physically demanding tasks.</p>
                <p>My work specifically addresses the <strong>GRAHAM Suit</strong>, a knee exoskeleton equipped with a sensor suit and an electronics backpack, designed to assist mobility-impaired individuals and preserve their independence.</p>
             </div>
        </div>

        <h2>Project Objectives</h2>
        <ul>
            <li><strong>Torque Transparency:</strong> Ensure the exoskeleton allows free movement (zero impedance) when assistance is not required.</li>
            <li><strong>Hierarchical Control:</strong> Implement a multi-level control architecture ranging from low-level motor drives to high-level intent recognition.</li>
            <li><strong>Safety & Stability:</strong> Guarantee user safety through strict range-of-motion limits and stable interaction dynamics.</li>
        </ul>

        <h2>System Architecture</h2>
        <div class="system-diagram my-6">
            <div class="diagram-node">
                <strong>Sensor Suit</strong>
                <span>IMUs / Pressure / Load Cells</span>
            </div>
            <div class="diagram-arrow">
                <span class="arrow-label">Data Stream</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Controller</strong>
                <span>Orin / Jetson (High-Level)</span>
            </div>
             <div class="diagram-arrow">
                <span class="arrow-label">Torque Ref</span>
                <div class="arrow-line"></div>
            </div>
            <div class="diagram-node">
                <strong>Actuator</strong>
                <span>BLDC Motor (Low-Level)</span>
            </div>
        </div>

        <h2>Controller Levels</h2>
        <p>We implemented a robust hierarchical control strategy to manage the complex human-robot interaction:</p>
        <ul>
            <li><strong>Offline Learning:</strong> Training <strong>Joint Loading Estimates</strong> models using collected biomechanical data to understand user exertion profiles.</li>
            <li><strong>Real-Time Control:</strong>
                <ul>
                    <li><strong>High-Level:</strong> Real-time estimation of joint loading and user intent.</li>
                    <li><strong>Mid-Level:</strong> <strong>State Space Controller</strong> modeling the system as a spring-damper system for smooth admittance control.</li>
                    <li><strong>Low-Level:</strong> High-frequency <strong>PID Motor Controller</strong> for precise torque tracking.</li>
                </ul>
            </li>
        </ul>

        <h2>Engineering Implementation</h2>
        
        <h3 class="font-bold text-lg mt-6 mb-2">Hardware Design (GRAHAM Suit)</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <img src="/portfolio/assets/epic_lab/exo_sid.png" alt="GRAHAM Exoskeleton Side View" class="!w-full !m-0 h-auto rounded-lg shadow-md border border-white/10" />
            <div class="md:col-span-2 flex flex-col justify-center">
                <p class="!mb-4">To improve the universality of the exoskeleton, I designed and manufactured new <strong>adjustable aluminum struts</strong> to accommodate users ranging from the 5th to 95th percentile in height. This modular design ensured correct joint alignment for a diverse participant pool during clinical trials.</p>
                <p class="!mb-0">I also overhauled the <strong>backpack's cable management system</strong>, designing custom 3D-printed wire holders and routing paths. This significantly reduced setup time and eliminated signal noise caused by loose connections during dynamic walking tasks.</p>
            </div>
        </div>

        <h3 class="font-bold text-lg mt-6 mb-2">Sensor Feedback & ML</h3>
        <p>Accurate state estimation relies on fusing data from multiple modalities:</p>
        
        <h4 class="font-bold text-md mt-4 mb-2">1. Pressure Insole Analysis</h4>
        <p>Currently, the lab has a scaling relationship to extract GRF from pressure insoles, however these relationships are not linear and are affected by various factors such as the user's weight. I developed a shallowmachine learning pipeline to estimate Ground Reaction Forces (GRF) from pressure heatmaps to establish a more accurate relationship:</p>
        <ul>
            <li><strong>Data Processing:</strong> Collection, cleaning, and dimensionality reduction of pressure data (XSensor).</li>
            <li><strong>Model Comparison:</strong> Evaluated <strong>Fully Convolutional Neural Networks (FCNN)</strong> versus <strong>CNNs</strong>. The CNN approach demonstrated superior performance by leveraging the spatial structure of the pressure footprint.</li>
        </ul>

        <h4 class="font-bold text-md mt-4 mb-2">2. Load Cell Automation</h4>
        <p>To streamline experimental trials, I wrote Python scripts to automate the initialization and "broadcasting" of load cell data, ensuring synchronization with the main control loop.</p>

        <h2>Performance & Results</h2>
        <ul>
            <li><strong>Metabolic Cost:</strong> Achieved a <strong>15% reduction</strong> in metabolic energy expenditure for elderly subjects.</li>
            <li><strong>Tracking Accuracy:</strong> The State Space controller reduced trajectory tracking error by <strong>40%</strong> compared to PID baselines.</li>
        </ul>
    </div>`,
};
