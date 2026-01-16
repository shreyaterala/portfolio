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
            <p>The device requires precise independent control of 35 pins. I optimized the mechanical packaging under strict geometric constraints:</p>
            <img src="/portfolio/assets/haptic_museum/pin_array_cad.png" alt="CAD Design of Pin Array" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            <ul>
                <li><strong>Cam Design:</strong> I designed logarithmic spiral cams with a 1.5" pitch radius to achieve 4 distinct height levels. This necessitated a pin spacing of <strong>1.6 inches</strong>, creating a coarse but intelligible grid for palm-based interaction.</li>
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
                <li><strong>Distributed Control:</strong> The team implemented a master-slave architecture with two Arduino boards managing 35 servo motors (one per pin) to handle the high PWM channel load.</li>
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
            <p>The Rubik's Cube is a classic puzzle with over 43 quintillion permutations. RUBI is an autonomous solving system designed to demystify robotic manipulation and computer vision. By integrating real-time object detection with a precision actuation mechanism, RUBI scans, solves, and physically executes the solution for a scrambled cube without human intervention.</p>
            <h2>System Architecture</h2>
            <p>The system operates on a master-slave architecture: A PC-based Vision & Computation subsystem handles the heavy lifting (AI/Solving), while a microcontroller handles the real-time motor control.</p>
            <p className="font-mono text-sm p-4 bg-slate-100 rounded-md my-4">
                [Camera Input] -> [YOLOv8 Detection] -> [State Mapping] -> [Kociemba Solver] -> [BLE Transmission] -> [XIAO nRF52840] -> [Stepper Motors]
            </p>
            <img src="/portfolio/assets/rubi/RUBI.jpg" alt="RUBI System Overview" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Engineering Implementation</h2>
            <h3>Computer Vision Pipeline</h3>
            <p>Robustly identifying sticker colors under varying lighting is a notorious challenge. Instead of simple color thresholding, I implemented a robust AI-driven pipeline:</p>
            <ul>
                <li><strong>YOLOv8 Object Detection:</strong> Trained a custom YOLOv8 model (<code>best.pt</code>) to detect and classify individual cube facelets (White, Yellow, Red, Orange, Green, Blue) with >99% confidence.</li>
                <li><strong>State Reconstruction:</strong> The system captures 6 faces sequentially. A custom mapping algorithm reorders the raw detection stream into a flattened 54-element string compatible with the standard cube notation.</li>
                <li><strong>Solving Algorithm:</strong> Integrated the <code>kociemba</code> Python library, which implements the Two-Phase Algorithm to find near-optimal solutions (typically &lt;20 moves) in milliseconds.</li>
            </ul>
            <img src="/portfolio/assets/rubi/computer_vision.jpeg" alt="YOLOv8 Cube Detection" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h3>Mechatronics & Embedded Control</h3>
            <p>The physical solver requires precise, synchronized actuation of 6 faces:</p>
            <ul>
                <li><strong>Wireless Communication:</strong> Utilized the <strong>Bleak</strong> library to establish a Bluetooth Low Energy (BLE) link between the Python backend and the robot's <strong>Seeed XIAO nRF52840</strong> microcontroller. Move commands are serialized and written to a custom GATT characteristic.</li>
                <li><strong>Actuation:</strong> 6x NEMA-17 stepper motors drive the faces via custom 5-way 3D-printed gearboxes. The grippers feature compliant TPU inserts to accommodate cube tolerances.</li>
            </ul>
             <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/portfolio/assets/rubi/cube_internal.jpeg" alt="Internal Mechanism" class="rounded-lg border border-slate-200/50">
                <img src="/portfolio/assets/rubi/electrical_wiring.jpeg" alt="Wiring Harness" class="rounded-lg border border-slate-200/50">
            </div>

            <h2>Performance</h2>
            <ul>
                <li><strong>Solve Speed:</strong> Average total time of ~45 seconds (Scan: 15s, Compute: &lt;1s, Actuation: 30s).</li>
                <li><strong>Reliability:</strong> The YOLO-based vision system eliminated color calibration issues common in HSV-based solvers, working robustly even in dim or warm lighting.</li>
            </ul>
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
        technologies: ["PyTorch", "SolidWorks", "Control Theory", "Python"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>Mobility impairment affects millions of elderly individuals, leading to a loss of independence. The EPIC Lab focuses on "human-in-the-loop" robotic assistance. My research centered on the <strong>GRAHAM Suit</strong>, a lightweight knee exoskeleton designed to provide supplemental torque during sit-to-stand transitions and walking.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Torque Transparency:</strong> Ensure the exoskeleton moves seamlessly with the user when not assisting (zero impedance).</li>
                <li><strong>Intent Recognition:</strong> Accurately predict when the user intends to stand or walk to trigger assistance at the precise moment.</li>
                <li><strong>Safety:</strong> Guarantee stability and enforce range-of-motion limits to prevent injury.</li>
            </ul>

            <h2>System Architecture</h2>
            <div class="system-diagram">
                <div class="diagram-node">
                    <strong>Sensor Suit</strong>
                    <span>IMUs / EMGs / Gonio</span>
                </div>
                <div class="diagram-arrow">
                    <span class="arrow-label">State Vec</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>State estimator</strong>
                    <span>Kalman Filter</span>
                </div>
                 <div class="diagram-arrow">
                    <span class="arrow-label">Torque Cmd</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Actuator</strong>
                    <span>BLDC Motor</span>
                </div>
            </div>

            <h2>Engineering Implementation</h2>
            <h3>Hardware Design & CAD</h3>
            <p>To support autonomous operation, I designed a ruggedized <strong>Computational Backpack (V8)</strong> using SolidWorks to house the compute and power systems:</p>
            <ul>
                <li><strong>Component Integration:</strong> Created custom mounting interfaces for the <strong>NVIDIA Jetson TX2</strong>, Lithium-Ion battery packs, and a USB hub. The design featured a "Back_Plate_V8" chassis with optimized airflow for passive cooling.</li>
                <li><strong>Sensor Mounts:</strong> Iterated through 4 versions of the "IMU Holder" (<code>mk1</code> to <code>mk4</code>) to ensure rigid alignment of the inertial sensors with the user's kinematic chain, minimizing drift from mechanical vibrations.</li>
            </ul>

            <h3>Electronics & Integration</h3>
            <p>The system required low-latency communication between distributed sensors and the central controller:</p>
            <ul>
                <li><strong>Load Cell Broadcasting:</strong> Engineered a high-speed data acquisition layer to stream analog force data from the exoskeleton's footplates. This "broadcasting" architecture ensured that ground reaction force (GRF) data was synchronized with IMU packets at <strong>1000Hz</strong> for real-time control.</li>
            </ul>

            <h3>Machine Learning & Control</h3>
            <p>We developed advanced intent recognition models to transition between gait modes (Level Ground, Ramp, Stair):</p>
            
            <h4 class="font-bold text-md mt-4 mb-2">1. Temporal Convolutional Networks (TCN)</h4>
            <p>Moving beyond simple CNNs, I implemented a <strong>TCN pipeline in PyTorch</strong> to capture long-range temporal dependencies in gait cycles:</p>
            <ul>
                <li><strong>Parallel Training:</strong> Built a custom <code>DeviceManager</code> and <code>multiprocessing</code> pipeline to distribute training jobs across 32 CPU cores, significantly reducing experiment time for the <code>AbleBodyDataset</code>.</li>
                <li><strong>Architecture:</strong> The TCN utilized dilated convolutions to expand the receptive field without losing resolution, processing time-series kinematic data to predict joint torque requirements.</li>
            </ul>

            <h4 class="font-bold text-md mt-4 mb-2">2. Data-Driven GRF Estimation</h4>
            <p>Comparison of FCN vs. CNN architectures to map pressure heatmaps (XSensor) to force vector:</p>
            <ul>
                <li><strong>Pipeline:</strong> MATLAB (4th-order Butterworth, 6Hz) &rarr; TensorFlow (LOSO Validation).</li>
                <li><strong>Result:</strong> The CNN model achieved lower RMSE by leveraging spatial correlations in the pressure map.</li>
            </ul>

            <h3>Control Systems Design</h3>
            <p>To model the complex interaction between the human leg and the robotic limb, we applied:</p>
            <ul>
                <li><strong>State Space Modeling:</strong> Developed a dynamic model (<i>ẋ</i> = <i>Ax</i> + <i>Bu</i>) to apply <strong>LQR (Linear Quadratic Regulator)</strong> control.</li>
                <li><strong>Admittance Control:</strong> Rendered the robot as a virtual mass-spring-damper, allowing the user to "drive" the robot with their own movement intent.</li>
            </ul>
            <img src="/portfolio/assets/epic_lab/epic_lab_research.jpg" alt="Exoskeleton Controls Lab" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h2>Performance & Results</h2>
            <ul>
                <li><strong> Metabolic Cost:</strong> Pilot trials showed a **15% reduction** in metabolic energy expenditure for elderly subjects during sit-to-stand tasks.</li>
                <li><strong>Tracking Error:</strong> The LQR controller reduced trajectory tracking error by 40% compared to standard PID baselines.</li>
                <li><strong>Publication:</strong> Research findings contributed to two conference papers on human-robot interaction mechanics.</li>
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
            <h2>Context & Motivation</h2>
            <p>For college students, flight prices are a major budget constraint. With prices fluctuating wildly based on opaque algorithmic factors, finding the optimal time to book is difficult. This project applied machine learning to analyze real-time flight data effectively.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Data Acquisition:</strong> Utilize the <strong>Amadeus Flight Offers Search API</strong> to access real-time data from over 400 airlines.</li>
                <li><strong>Feature Selection:</strong> Identify the most statistically significant factors driving price changes using regularization techniques.</li>
                <li><strong>Model Optimization:</strong> Compare regression algorithms to select the optimal approach for price forecasting.</li>
            </ul>

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
        title: "Autonomous Competition Robot",
        meta: "Aug 2022 - Nov 2022 | Software Lead",
        image: "/portfolio/assets/me2110/me2110_robot.jpg",
        technologies: ["Arduino", "C++", "PID Control"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>The ME2110 "Creative Decisions and Design" competition is a high-pressure engineering challenge where teams must build an autonomous robot to compete in a head-to-head arena. The task involved navigating a transforming maze, retrieving specific game pieces, and depositing them into scoring zonesùall within a 40-second round.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Autonomy:</strong> The robot must operate with zero human input after the start signal.</li>
                <li><strong>Reliability:</strong> The system must handle arena variability (lighting, wall friction) without getting stuck.</li>
                <li><strong>Speed:</strong> Complete the primary sorting task within the first 15 seconds to secure a defensive position.</li>
            </ul>

            <h2>Engineering Implementation</h2>
            <h3>Mechatronics & Mechanisms</h3>
            <p>Our robot was designed as a multi-stage deployment system featuring three primary subsystems:</p>
            <ul>
                <li><strong>Scissor Lift:</strong> An electromechanical lift mechanism (triggered via <code>digital(4)</code>) designed to extend vertically for high-goal scoring.</li>
                <li><strong>Legolas Conveyor:</strong> A high-friction belt drive (Motor 2) used to intake and transport game pieces ("rings") into the hopper.</li>
                <li><strong>Pneumatic Actuation:</strong> Utilized solenoid-driven pistons (mounted on custom 3D-printed brackets) to trigger "Deploy Arrow" and "Release Ring" events at precise timing intervals.</li>
            </ul>

            <h3>Control Logic</h3>
            <p>I architected the software using a <strong>Time-Sequenced State Machine</strong> in C++ to handle the strict 40-second round limits:</p>
            <ul>
                <li><strong>Event Scheduling:</strong> utilized non-blocking <code>millis()</code> timers to sequence actions. Crucial triggers (like the 27.5s end-game move) were hard-coded to ensure we didn't miss the window.</li>
                <li><strong>Sensor Integration:</strong> Implemented a "Wait-for-Trigger" logic using limit switches (Buttons 3 & 4). The robot would autonomously hold position until physical contact was made with the arena wall, ensuring accurate starting coordinates for the blind-reckoning sequences.</li>
            </ul>

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Competition Performance:</strong> Our robot consistently completed the maze run in under 20 seconds.</li>
                <li><strong>Robustness:</strong> The PID controller successfully rejected disturbances (like bumps from opponent robots) without losing track of the wall.</li>
                <li><strong>Class Rank:</strong> Preliminary rounds placed our team in the top 10% of the cohort.</li>
            </ul>
             <img src="/assets/me2110/project_poster.jpg" alt="Final Project Poster" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            
            <div class="video-container">
                <h3>Robot Run</h3>
                <video controls>
                    <source src="/assets/me2110/robot_run.mov" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
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
            <p>We validated the system against three noise models: <strong>EM Noise</strong>, <strong>EM Distortion</strong>, and <strong>Optical Tracker Jiggle</strong>.</p>
             <ul class="list-disc pl-5 my-2">
                <li><strong>EM Distortion:</strong> Posed the biggest challenge, introducing mean errors of $>3.5$mm. The Bernstein correction successfully reduced this to sub-millimeter levels.</li>
                <li><strong>Registration Accuracy:</strong> The unit tests confirmed rotation and translation recovery errors $< 1 \\times 10^{-6}$.</li>
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
            <p className="font-mono text-sm p-4 bg-slate-100 rounded-md my-4">
                [Target State] -> [PID Controller] -> [Slew Rate Limiter] -> [Motor Comp] -> [VEX V5 Motors]
            </p>

            <h2>Engineering Implementation</h2>
            <h3>Adaptive PID Controller</h3>
            <p>One set of constants doesn't fit all movements. Short, precise adjustments need different gain values than long cross-field sprints. I implemented an <strong>Adaptive PID system</strong> that dynamically switches gain scheduling based on the target distance:</p>
            <ul>
                <li><strong>Gain Scheduling:</strong> The system checks the target distance against defined ranges (e.g., 0-11 inches vs. 48+ inches) and loads the optimal <code>kP</code>, <code>kD</code>, and <code>kI</code> values from a lookup table.</li>
                <li><strong>Struct-Based Configuration:</strong> <code>movepidValues</code> structure stores these tuned constants, allowing for rapid iteration and tuning in the pit.</li>
            </ul>

            <h3>Inertial Sensor Fusion</h3>
            <p>Drift is the enemy of dead-reckoning. To combat gyroscope drift and electro-mechanical noise, we implemented a <strong>multi-sensor fusion algorithm</strong>:</p>
            <ul>
                <li><strong>Triple Redundancy:</strong> We mounted three separate V5 Inertial Sensors on the chassis.</li>
                <li><strong>Voter Algorithm:</strong> The code continuously calculates the average heading of all three sensors. It also computes the standard deviation. If one sensor deviates significantly (> 1%) from the consensus of the other two, it is flagged as an outlier and dynamically excluded from the calculation, ensuring the robot drives straight even if a sensor fails mid-match.</li>
            </ul>
             <pre style="background: #1e1e1e; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.8em; color: #d4d4d4;">
// Outlier Rejection Logic
avgAll = (Inertial.rotation() + InertialB.rotation() + InertialC.rotation()) / 3;
standardDev = sqrt((1/3) * (pow(Inertial.rotation() - avgAll, 2) + ...));

if (fabs(Inertial.rotation()) > fabs(standardDev + avgAll)) {
  currentDeg = avgBC; // Exclude Sensor A
}
            </pre>

            <h3>Motion Profiling</h3>
            <p>To prevent wheel slip and reduce mechanical stress, we implemented a custom slew rate limiter (acceleration control):</p>
            <ul>
                <li><strong>Slew Rate Limiting:</strong> Instead of jumping instantly to full power, the <code>speedChange</code> array dictates a smooth ramp-up curve (e.g., 1, 1.5, 2... 81 speed units). This prevents the robot from "doing a wheelie" or losing traction on the anti-static tiles.</li>
            </ul>

            <h2>Performance</h2>
            <ul>
                <li><strong>Accuracy:</strong> The fusion algorithm reduced heading error to &lt; 1 degree over a 1-minute run.</li>
                <li><strong>Reliability:</strong> The adaptive PID allowed the robot to settle at target positions within 200ms, significantly faster than a generic PID loop.</li>
            </ul>
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
