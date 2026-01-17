export interface Project {
    id: string;
    title: string;
    meta: string;
    image: string;
    technologies: string[];
    content: string;
}

export const projectsData: Record<string, Project> = {
    "haptic": {
        id: "haptic",
        title: "VISTA - Haptic Museum Display",
        meta: "Oct 2025 - Dec 2025 | Mechanical Design & Implementation",
        image: "/portfolio/assets/haptic_museum/haptic_museum_main.jpg",
        technologies: ["Fusion 360", "Arduino", "C++", "Soft Robotics"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>According to the American Alliance of Museums, 7 million visually impaired individuals in the US face a largely inaccessible cultural landscape. This project introduces <strong>VISTA (Visual Information through Sensory Tactile Array)</strong>, a novel tactile display designed by our team to convey both the <em>structure</em> and <em>appearance</em> of art through touch.</p>
            
            <h2>System Architecture</h2>
            <p>The system utilizes a 7x5 pin array where <strong>Shape</strong> is rendered by actuated pins and <strong>Color</strong> is encoded via variable pin height.</p>
            <div class="system-diagram">
                <div class="diagram-node">
                    <strong>Input Image</strong>
                    <span>Processing / Python</span>
                </div>
                <div class="diagram-arrow">
                    <span class="arrow-label">Downsample (7x5)</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Mapping Logic</strong>
                    <span>Color &rarr; Height &rarr; Angle</span>
                </div>
                 <div class="diagram-arrow">
                    <span class="arrow-label">Servo Cmds</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Physical Array</strong>
                    <span>35x Cam Actuators</span>
                </div>
            </div>
            
            <h2>Engineering Implementation</h2>
            <h3>Mechanical Actuation & Constraints</h3>
            <p>The device requires precise independent control of 35 pins. I optimized the mechanical packaging to bring the pins as closely together as possible:</p>
            <img src="/portfolio/assets/haptic_museum/pin_array_cad.png" alt="CAD Design of Pin Array" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            <ul>
                <li><strong>Cam Design:</strong> The cams have a 1.5" pitch radius to achieve the 4 distinct height levels. This necessitated a pin spacing of <strong>1.6 inches</strong>, creating a coarse but intelligible grid for palm-based interaction.</li>
                <li><strong>Silicone Interface:</strong> To bridge the gap between discrete pins and a continuous image, the team designed and fabricated a <strong>Smooth-On Ecoflex™ 00-30</strong> silicone overlay. The surface was coated in cornstarch to reduce friction and utilized a 3-level tensioning system to optimize tactile transmission.</li>
            </ul>
            <img src="/portfolio/assets/haptic_museum/pin_array_w_silicone.png" alt="Silicone Overlay Prototype" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h3>Electronics & Logic Pipeline</h3>
            <p>The team developed a control system to translate pixel data into physical topography using a custom mapping algorithm:</p>
            <ul>
                <li><strong>Color-to-Height Mapping:</strong> We quantized colors into 4 discernable height levels to convey depth:
                    <div class="bg-slate-100 p-4 rounded-lg my-2 font-mono text-sm">
                        Yellow (17.5mm) &gt; Red (9.8mm) &gt; Blue (6.3mm) &gt; White (2.7mm)
                    </div>
                </li>
                <li><strong>Distributed Control:</strong> The team implemented an electronic architecture with two Arduino boards managing 35 servo motors (one per pin) to handle the high PWM channel load. Each pin was actuated individually to render an image to ensure the servo motors did not surpass the Arduinos’ current limits.</li>
            </ul>
             <img src="/portfolio/assets/haptic_museum/pin_array_electronics.png" alt="Electronics Schematic" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Performance & Results</h2>
            <p>We validated the device using a "Flag Identification" study (Japan, Sweden, Denmark) to test shape vs. color recognition:</p>
            <ul>
                <li><strong>Shape Recognition:</strong> 100% of participants successfully distinguished flags with differing geometries (e.g., Japan vs. Sweden).</li>
                <li><strong>Color Distinguishability:</strong> While pure color differentiation (Sweden vs. Denmark) proved challenging (35% error rate initially), the addition of a tactile legend allowed users to accurately map height to color.</li>
            </ul>

            <h2>Demos</h2>
             <div class="video-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
                <video controls style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                    <source src="/portfolio/assets/haptic_museum/IMG_1565.mov" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <video controls style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                    <source src="/portfolio/assets/haptic_museum/IMG_6826.mov" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>`,
    },
    "rubi": {
        id: "rubi",
        title: "RUBI - Self Solving Cube",
        meta: "Oct 2024 - Dec 2024 | Mechatronic & Computer Vision",
        image: "/portfolio/assets/rubi/demo.jpg",
        technologies: ["Python", "YOLOv8", "OpenCV", "Arduino", "BLE"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <div class="flex flex-col md:flex-row gap-6 mb-6">
                 <div class="md:w-1/2">
                    <p>Not only is a self-solving Rubik’s cube a novel idea, but for people who do not know how to solve a Rubik’s cube, this is a great learning tool to understand the mechanics of a solution. When first trying to solve a Rubik’s cube, the number of permutations (43,252,003,274,489,856,000) may appear daunting and discouraging to someone who has yet to solve one. Observing one solve itself in under 5 minutes with fewer than 50 moves can help lower the bar to learn how to solve it.</p> 
                    <p class="mt-4">Our self-solving Rubik’s cube system was designed to solve itself from any scrambled position using a computer vision system and an internally motorized Rubik’s cube. After reading the faces of the scrambled cube using the vision system, RUBI calculates an algorithm-based solution and autonomously executes it.</p>
                 </div>
                 <div class="md:w-1/2">
                    <img src="/portfolio/assets/rubi/rubi_cube.jpg" alt="RUBI Prototype" class="rounded-lg shadow-md border border-white/10 w-full h-auto" />
                 </div>
            </div>

            <h2>System Architecture</h2>
            <p>The system operates on a master-slave architecture: A PC-based Vision & Computation subsystem handles the heavy lifting (AI/Solving), while a microcontroller handles the real-time motor control.</p>
            <p className="font-mono text-sm p-4 bg-slate-100 rounded-md my-4">
                [Camera Input] -> [YOLOv8 Detection] -> [State Mapping] -> [Kociemba Solver] -> [BLE Transmission] -> [XIAO nRF52840] -> [Stepper Motors]
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/portfolio/assets/rubi/RUBI.jpg" alt="RUBI System Overview" class="rounded-lg border border-slate-200/50">
                <img src="/portfolio/assets/rubi/representative_image.png" alt="System Design Render" class="rounded-lg border border-slate-200/50">
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
                <img src="/portfolio/assets/rubi/computer_vision.jpeg" alt="YOLOv8 Cube Detection" class="rounded-lg border border-slate-200/50">
                <img src="/portfolio/assets/rubi/cv_training_pipeline.png" alt="CV Training Pipeline" class="rounded-lg border border-slate-200/50">
            </div>

            <h3>Mechatronics & Embedded Control</h3>
            <p>The physical solver requires precise, synchronized actuation of 6 faces. We iterated through multiple gearbox designs to ensure torque density.</p>
            <img src="/portfolio/assets/rubi/cube_protyping_iterations.png" alt="Prototyping Iterations" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            
            <ul>
                <li><strong>Wireless Communication:</strong> Utilized the <strong>Bleak</strong> library to establish a Bluetooth Low Energy (BLE) link between the Python backend and the robot's <strong>Seeed XIAO nRF52840</strong> microcontroller. Move commands are serialized and written to a custom GATT characteristic.</li>
                <li><strong>Actuation:</strong> 6x NEMA-17 stepper motors drive the faces via custom 5-way 3D-printed gearboxes. The grippers feature compliant TPU inserts to accommodate cube tolerances.</li>
            </ul>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/portfolio/assets/rubi/cube_internal.jpeg" alt="Internal Mechanism" class="rounded-lg border border-slate-200/50">
                <img src="/portfolio/assets/rubi/wiring_diagram.png" alt="Wiring Schematic" class="rounded-lg border border-slate-200/50">
            </div>
            <div class="flex justify-center my-4">
                 <img src="/portfolio/assets/rubi/electrical_wiring.jpeg" alt="Physical Wiring" class="rounded-lg border border-slate-200/50 w-2/3">
            </div>

            <h2>Performance</h2>
            <ul>
                <li><strong>Solve Speed:</strong> Average total time of ~45 seconds (Scan: 15s, Compute: &lt;1s, Actuation: 30s).</li>
                <li><strong>Reliability:</strong> The YOLO-based vision system eliminated color calibration issues common in HSV-based solvers, working robustly even in dim or warm lighting.</li>
            </ul>

            <div class="mt-8 text-center">
                <a href="/portfolio/assets/rubi/Final Project Demo.pdf" target="_blank" class="inline-block px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                    📄 View Full Project Report (PDF)
                </a>
            </div>
        </div>`,
    },
    "sock": {
        id: "sock",
        title: "Smart Shrinker Compression Sleeve",
        meta: "Aug 2024 - Dec 2024 | Medical Device Design",
        image: "/portfolio/assets/compression_sock/compression_sock.jpg",
        technologies: ["Wearable Tech", "ESP32", "Signal Processing", "Bluetooth"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>Over 500,000 Americans experience limb loss annually. Post-amputation care is critical, as fluctuations in residual limb volume can lead to improper prosthetic fit, skin breakdown, and infection. Existing solutions (shrinkers, rigid bandages) provide compression but lack <strong>real-time monitoring capabilities</strong>, forcing clinicians to rely on subjective patient feedback.</p>
            <p>This project introduces a "Smart Shrinker" that combines traditional compression therapy with integrated sensing to track limb volume, temperature, and humidity, enabling early detection of complications like lymphedema.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Multi-Sensor Data Collection:</strong> Integrate force sensing resistors and conductive fabric to track limb dimensional changes within <strong>&plusmn;0.5 cm</strong>.</li>
                <li><strong>Infection Monitoring:</strong> Detect early signs of inflammation via real-time temperature and humidity tracking.</li>
                <li><strong>Wireless Telemetry:</strong> Transmit sensor data via Bluetooth (every 2s) to a clinical dashboard for remote monitoring.</li>
            </ul>

            <h2>System Architecture</h2>
            <p>The system is built around an <strong>ESP32 microcontroller</strong> powered by a LiPo battery. It aggregates data from three distinct sensor modalities before wirelessly transmitting it to a laptop-based clinician dashboard.</p>
            <img src="/portfolio/assets/compression_sock/functional_block_diagram.png" alt="System Block Diagram" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            
            <h2>Engineering Implementation</h2>
            <h3>Sensing Principle: Conductive Fabric</h3>
            <p>Unlike standard strain gauges, we utilized <strong>Conductive Fabric</strong> to measure limb circumference changes. As the fabric stretches, its electrical resistance changes. We implemented a voltage divider circuit to measure this resistance:</p>
            <ul>
                <li><strong>Circuit Topology:</strong> The conductive fabric acts as the variable resistor ($R_{fabric}$) in series with a known reference resistor. By measuring the voltage drop, we calculate the instantaneous resistance.</li>
                <li><strong>Signal Conditioning:</strong> To mitigate noise, the firmware takes the mean of <strong>20 ADC readings</strong> over a 1-second interval before calculating the resistance.</li>
            </ul>
             <img src="/portfolio/assets/compression_sock/signal_processing_formulas.png" alt="Signal Processing Logic" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h3>Electronics & Packaging</h3>
            <p>A key design constraint was maintaining the "soft" feel of the textile while housing rigid components.</p>
            <ul>
                <li><strong>Snap-Fit Housing:</strong> Designed a custom 3D-printed enclosure that clips onto the sleeve. It features a snap-fit lid for easy battery access and protects the ESP32 from impact during daily use.</li>
                <li><strong>Safety:</strong> The system operates on low-voltage battery power with proper electrical isolation to ensure user safety during prolonged skin contact.</li>
            </ul>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/portfolio/assets/compression_sock/electronics_housing.jpeg" alt="CAD Housing" class="rounded-lg border border-slate-200/50">
                <img src="/portfolio/assets/compression_sock/electrical_wiring_diagram.png" alt="Wiring Diagram" class="rounded-lg border border-slate-200/50">
            </div>

            <h2>Testing & Validation</h2>
            <h3>Simulated Limb Trials</h3>
            <p>We validated the device using an <strong>Inflatable Air Bladder</strong> to mimic the swelling and shrinking of a residual limb. This allowed us to controllably vary the circumference by < 0.5cm increments while recording sensor outputs.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/portfolio/assets/compression_sock/test_setup.jpg" alt="Air Bladder Test Setup" class="rounded-lg border border-slate-200/50">
                <img src="/portfolio/assets/compression_sock/tracking_interface.png" alt="Real-time Dashboard" class="rounded-lg border border-slate-200/50">
            </div>

            <h3>Material Selection Study</h3>
            <p>We compared three conductive fabric candidates to optimize sensitivity:</p>
            <ul>
                <li><strong>Candidates:</strong> Sheet Texture vs. Cloth Texture with varying resistivities (55&Omega;, 77&Omega;, 46&Omega;).</li>
                <li><strong>Result:</strong> The <strong>77&Omega; Sheet Texture</strong> fabric demonstrated the highest linearity and dynamic range under stretch, making it suitable for detecting subtle limb volume changes.</li>
            </ul>
             <img src="/portfolio/assets/compression_sock/fabric_testing_measurements.png" alt="Fabric Sensitivity Data" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Precision:</strong> successfully tracked limb circumference changes as small as <strong>0.5cm</strong> in benchtop trials.</li>
                <li><strong>Environmental Sensing:</strong> The DHT sensor accurately captured humidity and temperature shifts (settling time ~40s), validated by comparing "on-body" vs. "ambient" readings.</li>
                <li><strong>Connectivity:</strong> The Bluetooth link maintained a reliable stream (0.5Hz update rate) to the custom Python-based GUI for real-time visualization.</li>
            </ul>
        </div>`,
    },
    "epic": {
        id: "epic",
        title: "EPIC Lab - Exoskeleton Research",
        meta: "Aug 2022 - Dec 2024 | Undergraduate Researcher",
        image: "/portfolio/assets/epic_lab/epic_lab_research.jpg",
        technologies: [
            "Python (PyTorch)",
            "C++ (CUDA)",
            "ROS",
            "SolidWorks",
            "Control Theory",
            "Human-Robot Interaction"
        ],
        content: `<div>
            <div class="video-container mb-6">
                <img src="/portfolio/assets/epic_lab/epic_lab_research.jpg" alt="EPIC Lab Research Overview" class="w-full h-auto rounded-lg shadow-lg" />
            </div>

            <h2>Context & Motivation</h2>
            <p>The <strong>DoE Exoskeleton Team</strong> at EPIC Lab aims to bridge the gap between rigid, high-power active assistance and ergonomic, lightweight passive assistance. Our goal is to develop back and lower-limb exoskeletons that significantly reduce user muscle fatigue during physically demanding tasks.</p>
            <p>My work specifically addresses the <strong>GRAHAM Suit</strong>, a knee exoskeleton equipped with a sensor suit and an electronics backpack, designed to assist mobility-impaired individuals and preserve their independence.</p>

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
            <div class="flex flex-col md:flex-row gap-6 mb-6 items-center">
                <div class="md:w-1/2">
                    <p>To support autonomous operation, I designed the <strong>Computational Backpack (V8)</strong> using SolidWorks. This ruggedized chassis houses the NVIDIA Jetson TX2, batteries, and a custom USB hub, featuring optimized airflow for thermal management.</p>
                    <p class="mt-2">I also iterated through multiple versions of <strong>IMU Holders</strong> (mk1 to mk4) to ensure rigid, drift-free alignment of inertial sensors with the user's kinematic chain.</p>
                </div>
                <div class="md:w-1/2">
                    <img src="/portfolio/assets/epic_lab/exo_sid.png" alt="GRAHAM Exoskeleton Side View" class="w-full h-auto rounded-lg shadow-md border border-white/10" />
                    <p class="text-sm text-gray-400 mt-2 text-center">Custom IMU Sensor Mount</p>
                </div>
            </div>

            <h3 class="font-bold text-lg mt-6 mb-2">Sensor Feedback & ML</h3>
            <p>Accurate state estimation relies on fusing data from multiple modalities:</p>
            
            <h4 class="font-bold text-md mt-4 mb-2">1. Pressure Insole Analysis</h4>
            <p>We developed a machine learning pipeline to estimate Ground Reaction Forces (GRF) from pressure heatmaps:</p>
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
    },
    "battlebot": {
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
                <div class="space-y-1">
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

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Combat Record:</strong> Achieved a 3-1 record in the tournament, reaching the semi-finals.</li>
                <li><strong>Damage Assessment:</strong> The UHMW armor successfully deflected three direct hits from a horizontal spinner. The internal aluminum frame remained within 0.5mm geometric tolerance post-competition.</li>
                <li><strong>Weapon Efficacy:</strong> The spinner successfully severed the drive belt of an opponent in Match 2, achieving an instant knockout.</li>
            </ul>
        </div>`,
    },
    "flight": {
        id: "flight",
        title: "ATL Flight Price Predictor",
        meta: "Oct 2023 - Dec 2023 | Machine Learning Project",
        image: "/portfolio/assets/flight_predictor/flight_price_predictor.png",
        technologies: ["Python", "Amadeus API", "Lasso Regression", "Pandas"],
        content: `<div>
            <h2>Context & Background</h2>
            <p>Flight ticket prices are highly dynamic, often fluctuating based on opaque algoirthms. Our research explored existing predictive models, such as Mulkalla's work on AI-driven pricing and Pratsath et al.'s K-Nearest Neighbors approach (81.77% accuracy). However, we identified that many existing studies relied on limited public datasets (like DB1B) or assumed linear relationships between variables. This project aimed to improve upon these baselines by integrating real-time, high-dimensional data.</p>

            <h2>Dataset & Features</h2>
            <p>We utilized the <strong>Amadeus Flight Offers Search API</strong> to access a live database of over 400 airlines. Unlike static historical datasets, this allowed us to query real-time pricing. We engineered a model based on 13 key features:</p>
            <div class="grid grid-cols-2 gap-2 text-sm mb-4">
                <ul class="list-disc pl-4">
                    <li>Booking Date & Time</li>
                    <li>Flight Duration</li>
                    <li>Departure Date/Time</li>
                    <li>Arrival Date/Time</li>
                    <li>Number of Stops</li>
                </ul>
                <ul class="list-disc pl-4">
                    <li>Airline Carrier</li>
                    <li>Source/Destination</li>
                    <li>Seats Remaining</li>
                    <li>Day of Week</li>
                </ul>
            </div>

            <h2>Engineering Implementation</h2>
            <h3>Data Pipeline & Preprocessing</h3>
            <p>Raw flight data contains many redundant variables. I implemented a robust cleaning pipeline in Python:</p>
            <ul>
                <li><strong>Duration Standardization:</strong> Wrote custom scripts to convert ISO 8601 duration strings (e.g., "PT2H30M") into total minutes for numerical analysis.</li>
                <li><strong>Dimensionality Reduction:</strong> Utilized <strong>Lasso Regression (L1 Regularization)</strong> to penalize less important features and prevent overfitting.</li>
            </ul>
            
            <div class="bg-slate-100 p-4 rounded-lg my-4 font-mono text-sm">
                <p class="mb-2 text-xs text-slate-500">// Feature Importance Analysis (Lasso Coef)</p>
                <p>1. <span class="text-blue-600">seatsRemaining</span> (-25.64): Rare supply drives price up.</p>
                <p>2. <span class="text-blue-600">segmentsAirlineName</span> (-14.56): Different carriers have distinct base pricing models.</p>
                <p>3. <span class="text-red-500">departureDate</span> (0.00): Dropped by Lasso model as statistically insignificant relative to other time factors.</p>
            </div>

            <h3>Key Findings</h3>
            <p>The analysis revealed that <strong>inventory scarcity</strong> (searchDate, seatsRemaining) played a much larger role in dynamic pricing logic than the simple calendar date of the flight. This suggests that airlines price purely on demand curves rather than seasonal baselines for the routes analyzed.</p>
        </div>`,
    },
    "malawi": {
        id: "malawi",
        title: "EWB - GT Malawi Project",
        meta: "Oct 2021 - Dec 2024 | Project & Technical Lead",
        image: "/portfolio/assets/ewb/ewb_malawi.jpg",
        technologies: ["Civil Engineering", "Project Management", "AutoCAD"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>Mpitilira Primary School in Malawi faced a critical sanitation crisis, with failing latrines posing a severe health risk to students and staff. As part of Engineers Without Borders (EWB), our chapter was tasked with designing and implementing a sustainable, locally-buildable solution to replace the condemned infrastructure.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Public Health:</strong> Design a waste containment system that prevents groundwater contamination relative to the local water table.</li>
                <li><strong>Sustainability:</strong> Utilize locally sourced materials (bricks, sand, cement) to ensure the community can maintain the facility without external aid.</li>
                <li><strong>Durability:</strong> Engineer the superstructure to withstand heavy seasonal rains and high usage rates (50+ users/day).</li>
            </ul>

            <h2>Engineering Implementation</h2>
            <h3>Civil & Structural Design</h3>
            <p>I led the technical design of the latrine superstructure and foundation:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 items-start">
                <div class="h-full flex items-center justify-center">
                    <img src="/portfolio/assets/ewb/staff_latrine_designs.png" alt="Engineering Blueprints" class="w-auto max-h-[400px] object-contain rounded-lg border border-slate-200/50 shadow-sm" style="margin: 0 auto !important;">
                </div>
                <div>
                    <ul class="mt-0">
                        <li><strong>Foundation Design:</strong> Calculated bearing capacity requirements for the unreinforced masonry walls. Specified a reinforced concrete ring beam to distribute loads evenly and preventing differential settlement in the soft soil.</li>
                        <li><strong>Ventilation Design:</strong> Integrated a solar-driven "VIP" (Ventilated Improved Pit) mechanism. Black PVC vent pipes heat up in the sun, creating an updraft that pulls odors out of the pit.</li>
                    </ul>
                </div>
            </div>

            <h3>Project Management & Logistics</h3>
            <p>Executing a construction project 8,000 miles away required rigorous planning:</p>
            <ul>
                <li><strong>Remote Oversight:</strong> Established a WhatsApp-based reporting protocol with local contractors, reviewing photo evidence of rebar spacing and concrete mix ratios before authorizing pour phases.</li>
                <li><strong>Cost Estimation:</strong> Managed a $15,000 budget, accounting for volatile local material prices and currency exchange fluctuations.</li>
            </ul>
             <img src="/portfolio/assets/ewb/malawi_project_objectives.png" alt="Project Objectives & Timeline" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Completion:</strong> The facility was successfully constructed on-time and under budget.</li>
                <li><strong>Impact:</strong> Provided safe sanitation for 20 staff members, directly reducing the risk of cholera and other waterborne diseases.</li>
                <li><strong>Recognition:</strong> The project design won <strong>3rd Place</strong> in the Georgia Association of Water Professionals (GAWP) competition for its technical merit and social impact.</li>
            </ul>
             <img src="/portfolio/assets/ewb/completed_student_latrine.png" alt="Completed Structure" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
        </div>`,
    },
    "me2110": {
        id: "me2110",
        title: "ME2110: Autonomous Electromechanical Robot",
        meta: "Aug 2022 - Nov 2022 | System Integration & Design",
        image: "/portfolio/assets/me2110/front_iso_view.jpeg",
        technologies: ["Mechatronics", "Pneumatics", "System Integration", "Rapid Prototyping"],
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
    },
    "breath": {
        id: "breath",
        title: "breathSense",
        meta: "Aug 2024 - Dec 2024 | Medical Aid",
        image: "/portfolio/assets/breath/poster.jpg",
        technologies: ["C++", "PCB Design", "FEA", "Haptics", "User Research"],
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
    },
    "cis": {
        id: "cis",
        title: "Computer Integrated Surgery",
        meta: "Oct 2025 - Dec 2025 | Academic Project",
        image: "/portfolio/assets/cis1/navigation.png",
        technologies: ["MATLAB", "Linear Algebra (SVD)", "Bernstein Polynomials"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>In modern neurosurgery, sub-millimeter precision is not optional—it is a requirement. "Computer Integrated Surgery" focused on building a complete stereotactic navigation system from scratch. This project addresses the critical "interventional loops" of tracking, calibration, registration, and error correction, translating preoperative imaging (CT/MRI) into real-time surgical guidance.</p>

            <h2>System Architecture</h2>
            <div class="system-diagram">
                <div class="diagram-node">
                    <strong>Pre-Op Imaging</strong>
                    <span>CT / MRI</span>
                </div>
                <div class="diagram-arrow">
                    <span class="arrow-label">Registration</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Surgical Plan</strong>
                    <span>3D Coordinates</span>
                </div>
                 <div class="diagram-arrow">
                    <span class="arrow-label">Tracking</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Intervention</strong>
                    <span>Navigated Tool</span>
                </div>
            </div>
            <img src="/portfolio/assets/cis1/navigation.png" alt="Stereotactic Navigation Interface" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Mathematical Implementation</h2>
            <p>The system relies on rigorous linear algebra and computational geometry principles to map between the <strong>Calibration Frame ($F_c$)</strong>, <strong>Optical Tracker Frame ($F_A$)</strong>, and <strong>EM Tracker Frame ($F_D$)</strong>.</p>
            
            <h3>1. Rigid Body Registration (Arun's Method)</h3>
            <p>To align the coordinate systems, we implemented a 3D Point Set Registration algorithm.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                 <div>
                    <h4 class="font-bold text-sm mb-2">Algorithm Steps:</h4>
                    <ul class="list-decimal pl-5 text-sm space-y-1">
                        <li><strong>Centroid Alignment:</strong> Compute centroids $\\bar{x}$, $\\bar{X}$ and center the points to remove translation.</li>
                        <li><strong>SVD:</strong> Compute the cross-covariance matrix $H = \\sum x'_i (X'_i)^T$ and its Singular Value Decomposition $[U, S, V] = \\text{svd}(H)$.</li>
                        <li><strong>Rotation:</strong> solve $R = V U^T$. We ensure $\\det(R) = +1$ to prevent reflection artifacts.</li>
                         <li><strong>Translation:</strong> Recalculate $t = \\bar{X} - R\\bar{x}$.</li>
                    </ul>
                </div>
                <div>
                     <img src="/portfolio/assets/cis1/cis1%20pa1%20problem%204.png" alt="Registration Setup" class="rounded-lg border border-slate-200/50">
                     <p class="text-xs text-center mt-2 text-slate-500">Registration Reference Frames</p>
                </div>
            </div>

            <h3>2. Pivot Calibration</h3>
            <p>We solve for the unknown tool tip offset $t_{tip}$ and the fixed pivot point $p_{dimple}$ by treating it as a linear least-squares problem:</p>
            <div class="bg-slate-100 p-4 rounded-lg my-4 font-mono text-sm text-center">
                $[R_i | -I] \\cdot [t_{tip} ; p_{dimple}] = -t_i$
            </div>
            <p>By stacking matrices for $N$ frames, we solve $Ax=b$ using the <code>lsqr</code> method to find the 6-unknowns (3 for tip, 3 for pivot).</p>
            <img src="/portfolio/assets/cis1/cis1%20pa1%20problem%205_6.png.jpg" alt="Pivot Calibration Setup" style="width: 100%; max-width: 600px; display: block; margin: 1.5rem auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">

            <h3>3. Distortion Correction (Bernstein Polynomials)</h3>
            <p>Electromagnetic tracking is susceptible to field distortion. We implemented a 5th-order 3D Bernstein polynomial correction map. This required solving for 216 coefficients ($6^3$) to map distorted EM readings back to the ground-truth optical space.</p>
            <img src="/portfolio/assets/cis1/cis1%20pa2%20(1).jpg" alt="Distortion Correction Mapping" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Algorithmic Modules</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div>
                    <h3 class="font-bold text-lg mb-2">Iterative Closest Point (ICP)</h3>
                     <p>For surface registration, we implemented a <strong>Generalized ICP</strong> algorithm with anisotropic covariance weighting. This improved convergence speed by 50% (11.0s vs 37.2s) compared to standard point-to-point ICP.</p>
                     <img src="/portfolio/assets/cis1/cis1%20pa3%20icp.png.jpg" alt="ICP Convergence" class="rounded-lg mt-4 border border-slate-200/50">
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-2">Covariance Trees</h3>
                     <p>To support real-time interaction with high-res anatomical meshes, we constructed spatial search trees (Covariance Trees). This reduced closest-point query complexity from linear $O(N)$ to logarithmic $O(\\log N)$.</p>
                     <img src="/portfolio/assets/cis1/Covariance_Tree_Visual.png" alt="Covariance Tree Structure" class="rounded-lg mt-4 border border-slate-200/50">
                </div>
            </div>

            <h2>Performance & Results</h2>
            <h3 class="text-lg font-bold mt-4">Error Analysis & Robustness</h3>
            <p>We validated the system against three noise models to quantify registration error. The <strong>Bernstein Polynomial</strong> correction was critical in mitigating the >3mm error introduced by EM field distortion.</p>
            
            <div class="overflow-x-auto my-6">
                <table class="w-full text-sm text-left text-slate-600 border border-slate-200 rounded-lg overflow-hidden">
                    <thead class="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th class="px-6 py-3 font-bold">Noise Condition</th>
                            <th class="px-6 py-3">Mean Diff Norm (mm)</th>
                            <th class="px-6 py-3">Max Diff Norm (mm)</th>
                            <th class="px-6 py-3">Impact</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 bg-white">
                        <tr class="hover:bg-slate-50">
                            <td class="px-6 py-4 font-medium text-ink">Baseline (None)</td>
                            <td class="px-6 py-4">0.00</td>
                            <td class="px-6 py-4">0.01</td>
                            <td class="px-6 py-4 text-green-600">Ideal</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="px-6 py-4 font-medium text-ink">Optical Tracker Jiggle</td>
                            <td class="px-6 py-4">0.01</td>
                            <td class="px-6 py-4">0.03</td>
                            <td class="px-6 py-4 text-green-600">Negligible</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="px-6 py-4 font-medium text-ink">EM Noise</td>
                            <td class="px-6 py-4">0.46</td>
                            <td class="px-6 py-4">0.79</td>
                            <td class="px-6 py-4 text-yellow-600">Minor</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="px-6 py-4 font-medium text-ink">EM Distortion</td>
                            <td class="px-6 py-4 font-bold text-red-600">3.51</td>
                            <td class="px-6 py-4 text-red-600">7.09</td>
                            <td class="px-6 py-4 text-red-600">Critical (Requires Correction)</td>
                        </tr>
                         <tr class="bg-indigo-50/50 hover:bg-indigo-50">
                            <td class="px-6 py-4 font-medium text-indigo-700">With Correction</td>
                            <td class="px-6 py-4 text-indigo-700">&lt; 0.50</td>
                            <td class="px-6 py-4 text-indigo-700">~ 1.10</td>
                            <td class="px-6 py-4 text-indigo-700">Clinical Standard Met</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ul class="list-disc pl-5 my-2">
                <li><strong>Registration Accuracy:</strong> The unit tests confirmed rotation and translation recovery errors $< 1 \\times 10^{-6}$.</li>
                <li><strong>Search Efficiency:</strong> Covariance Trees reduced point-to-mesh query times from linear $O(N)$ to logarithmic $O(\\log N)$.</li>
            </ul>
            <img src="/portfolio/assets/cis1/pa1-debug-c-2D_error_visual.png" alt="Error Analysis Visual" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
        </div>`,
    },
    "ur5": {
        id: "ur5",
        title: "UR5 Manipulator Control",
        meta: "Dec 2025 | Robotics Control",
        image: "/portfolio/assets/ur5/ur5_control.png",
        technologies: ["MATLAB", "ROS", "Kinematics", "Controls"],
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
                    <iframe src="https://drive.google.com/file/d/1FYQMh2KW9Rv3A3gGAT-YKX8QYoL6xuYt/preview" width="100%" height="300" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;" allow="autoplay"></iframe>
                </div>
                <div>
                    <h4 class="text-center font-bold mb-2">Inverse Kinematics</h4>
                    <iframe src="https://drive.google.com/file/d/1d5jaDda3MjKu2gZaqD9U8fD0ui-C3039/preview" width="100%" height="300" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;" allow="autoplay"></iframe>
                </div>
            </div>
        </div>`,
    },
    /*
    "tom": {
        id: "tom",
        title: "Cascading Shower Handle",
        meta: "Feb 2022 | Mechanical Design",
        image: "/portfolio/assets/tom/IMG_1959.JPG",
        technologies: ["3D Printing", "Rapid Prototyping", "Product Design"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>Sarah, a 20-year-old college student, was diagnosed with Postural Orthostatic Tachycardia Syndrome (POTS). This condition causes improper blood flow, leading to dizziness, fatigue, and fainting—especially when standing in heat. For Sarah, taking a hot shower became a dangerous activity with a high risk of injury.</p>
            
            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Stability:</strong> Provide a reliable physical support handle for Sarah to hold while showering.</li>
                <li><strong>Safety:</strong> Integrate a waterproof phone attachment to allow immediate contact with loved ones in case of an emergency.</li>
                <li><strong>Portability:</strong> Design a collapsible system that can be used at home or while traveling.</li>
            </ul>

            <h2>Engineering Implementation</h2>
            <h3>Design & Fabrication</h3>
            <p>We developed a custom solution using rapid prototyping techniques:</p>
            <ul>
                <li><strong>Structure:</strong> Utilized 1-1/4" Schedule 40 PVC pipe for the main handle structure, ensuring lightweight durability.</li>
                <li><strong>Custom Joints:</strong> Designed and 3D printed custom corner brackets and end caps to connect the PVC segments.</li>
                <li><strong>Attachment:</strong> Employed strong M6 threaded suction cups for non-invasive, temporary mounting to shower walls.</li>
                <li><strong>Collapsibility:</strong> Integrated neodymium magnets (0.04" x 0.04") into the joints to allow the handle to snap together and break down easily for transport.</li>
            </ul>
            <img src="/portfolio/assets/tom/IMG_1961.JPG" alt="Prototype Assembly" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Performance</h2>
            <ul>
                <li><strong>Lightweight:</strong> The entire assembly weighs approximately 1.44 ounces, maximizing portability.</li>
                <li><strong>User Impact:</strong> The device provides Sarah with physical stability and peace of mind, restoring her independence in daily hygiene.</li>
            </ul>
             <div class="video-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
                 <img src="/portfolio/assets/tom/Corner.JPG" alt="3D Printed Corner" style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                 <img src="/portfolio/assets/tom/Hook.JPG" alt="Phone Attachment Hook" style="width: 100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
            </div>
        </div>`,
    },
    */

    "pid": {
        id: "pid",
        title: "Ad Astra - PID Autonomous Control",
        meta: "Apr 2020 - Apr 2021 | C++ Implementation",
        image: "/portfolio/assets/pid/pid_robot_v5.png",
        technologies: ["C++", "PID Control", "Odometry", "Sensor Fusion"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>In high-stakes VEX Robotics competition, consistency is king. For the "Change Up" season, Team 8823A "Ad Astra" needed an autonomous routine that could reliably score points in the 15-second autonomous period. Standard time-based movements were too inaccurate, so we developed a robust custom PID (Proportional-Integral-Derivative) controller in C++.</p>

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
            <p>One set of constants doesn't fit all movements. Short, precise adjustments need different gain values than long cross-field sprints. I implemented an <strong>Adaptive PID system</strong> that dynamically switches gain scheduling based on the target distance:</p>
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
            <p>Drift is the enemy of dead-reckoning. To combat gyroscope drift and electro-mechanical noise, we implemented a <strong>Triple-Redundant Sensor Fusion algorithm</strong>:</p>
            <ul>
                <li><strong>Hardware Redundancy:</strong> We mounted three separate V5 Inertial Sensors (A, B, C) on the chassis.</li>
                <li><strong>Voter Algorithm:</strong> The code continuously calculates the mean and standard deviation of all three sensors. If any single sensor deviates significantly from the consensus (by > 1 standard deviation), it is dynamically excluded, and the heading is derived from the remaining two.</li>
            </ul>
             <pre style="background: #1e1e1e; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8em; color: #d4d4d4;">
// Outlier Rejection Logic (Turns.cpp)
avgAll = (InertialA + InertialB + InertialC) / 3;
standardDev = sqrt((1/3) * (pow(InertialA - avgAll, 2) + ...));

if (fabs(InertialA) > fabs(standardDev + avgAll)) {
  currentDeg = avgBC; // Exclude Sensor A if it's an outlier
} else {
  currentDeg = avgAll;
}
            </pre>

            <h3>Motion Profiling (Slew Rate)</h3>
            <p>To prevent wheel slip and reduce mechanical stress on the drivetrain, we implemented a <strong>Lookup-Table Based Slew Rate Limiter</strong>:</p>
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
             <div class="video-container" style="background: #000; border-radius: 8px; overflow: hidden; margin-top: 1.5rem; border: 1px solid rgba(255,255,255,0.1);">
                 <video controls loop muted class="w-full h-auto rounded-lg">
                    <source src="/portfolio/assets/pid/skills_run.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                 </video>
                 <p class="text-sm text-gray-400 mt-2 text-center py-2">Autonomous Skills Run - 126 Points</p>
            </div>
        </div>`,
    },
};

export const Project = {
    findAll: async () => {
        const projects = Object.values(projectsData);

        // Helper to parse date from "Start - End | Role" or "Date | Role" string
        const parseDate = (meta: string) => {
            const datePart = meta.split('|')[0].trim();
            // If it's a range (contains "-"), take the second part (end date)
            const dateStr = datePart.includes('-') ? datePart.split('-')[1].trim() : datePart;
            return new Date(dateStr).getTime();
        };

        return projects.sort((a, b) => parseDate(b.meta) - parseDate(a.meta));
    },
    findById: async (id: string) => projectsData[id]
};

export default projectsData;
