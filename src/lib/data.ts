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
        title: "Haptic Museum Display",
        meta: "Oct 2025 - Dec 2025 | Mechanical Design & Implementation",
        image: "/portfolio/assets/haptic_museum/haptic_museum_main.jpg",
        technologies: ["Fusion 360", "Arduino", "C++"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>Museums often rely heavily on visual engagement, leaving the <strong>285 million visually impaired individuals globally</strong> with a limited experience. While audio guides exist, they lack the spatial and textural connection to artwork. This project, undertaken as a capstone design challenge, aimed to bridge this gap by creating a dynamic, tactile interface that translates digital images into physical topography.</p>
            
            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Tactile Resolution:</strong> Create a refreshable display with sufficient density to convey recognizable shapes (target: 7x5 grid).</li>
                <li><strong>Multi-Modal Feedback:</strong> Combine height variation (color depth) with pattern recognition (shape).</li>
                <li><strong>Scalability:</strong> Design a modular actuation mechanism that allows for future expansion.</li>
            </ul>

            <h2>System Architecture</h2>
            <div class="system-diagram">
                <div class="diagram-node">
                    <strong>Image Processing</strong>
                    <span>Processing / Python</span>
                </div>
                <div class="diagram-arrow">
                    <span class="arrow-label">Pixel Data</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Control Logic</strong>
                    <span>Arduino Mega Network</span>
                </div>
                 <div class="diagram-arrow">
                    <span class="arrow-label">PWM Signals</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Physical Array</strong>
                    <span>35x Servo-Cam Actuators</span>
                </div>
            </div>
            
            <h2>Engineering Implementation</h2>
            <h3>Mechanical Actuation</h3>
            <p>The core challenge was fitting 35 independent actuators into a compact footprint. I developed a custom <strong>cam-follower mechanism</strong>:</p>
            <img src="/portfolio/assets/haptic_museum/pin_array_cad.png" alt="CAD Design of Pin Array" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            <ul>
                <li><strong>Cam Profile:</strong> Designed a logarithmic spiral cam profile to convert 180&deg; of servo rotation into 20mm of linear vertical pin travel.</li>
                <li><strong>Tolerance Analysis:</strong> Conducted tolerance stack-up analysis to ensure pin stability, achieving a clearance fit of 0.2mm to prevent binding while minimizing wobble.</li>
                <li><strong>Modular Design:</strong> Created a "puzzle-fit" chassis where individual 3D-printed cell modules interlock, allowing for rapid replacement of faulty actuators.</li>
            </ul>
             <img src="/portfolio/assets/haptic_museum/IMG_1573.jpeg" alt="Device Assembly" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

            <h3>Electronics & Control</h3>
            <p>Driving 35 servos simultaneously presents significant power and signal challenges:</p>
            <img src="/portfolio/assets/haptic_museum/pin_array_electronics.png" alt="Electronics Schematic" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            <ul>
                <li><strong>Distributed Computing:</strong> Utilized a master-slave architecture with multiple Arduino boards to overcome the PWM channel limits (typically 12 per board) and I2C address conflicts.</li>
                <li><strong>Power Management:</strong> Implemented a staggered activation sequence (50ms delay per row) to prevent startup current spikes from tripping the 20A power supply.</li>
            </ul>

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>User Validation:</strong> In blind tests, users successfully identified simple geometric shapes with <strong>85% accuracy</strong> and relative color depth (height) with <strong>70% accuracy</strong>.</li>
                <li><strong>Reliability:</strong> The system demonstrated endurance of over 1,000 continuous cycles without mechanical failure or thermal shutdown.</li>
                <li><strong>Haptic Feedback:</strong> The silicone overlay (Shore 20A hardness) successfully smoothed the discreet pin heads into a continuous surface, enhancing the tactile experience.</li>
            </ul>
            <img src="/portfolio/assets/haptic_museum/pin_array_w_silicone.png" alt="Silicone Overlay Prototype" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

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
        meta: "Mechatronics | Computer Vision",
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

            <h2>Engineering Implementation</h2>
            <h3>Computer Vision Pipeline</h3>
            <p>Robustly identifying sticker colors under varying lighting is a notorious challenge. Instead of simple color thresholding, I implemented a robust AI-driven pipeline:</p>
            <ul>
                <li><strong>YOLOv8 Object Detection:</strong> Trained a custom YOLOv8 model (<code>best.pt</code>) to detect and classify individual cube facelets (White, Yellow, Red, Orange, Green, Blue) with >99% confidence.</li>
                <li><strong>State Reconstruction:</strong> The system captures 6 faces sequentially. A custom mapping algorithm reorders the raw detection stream into a flattened 54-element string compatible with the standard cube notation.</li>
                <li><strong>Solving Algorithm:</strong> Integrated the <code>kociemba</code> Python library, which implements the Two-Phase Algorithm to find near-optimal solutions (typically &lt;20 moves) in milliseconds.</li>
            </ul>

            <h3>Mechatronics & Embedded Control</h3>
            <p>The physical solver requires precise, synchronized actuation of 6 faces:</p>
            <ul>
                <li><strong>Wireless Communication:</strong> Utilized the <strong>Bleak</strong> library to establish a Bluetooth Low Energy (BLE) link between the Python backend and the robot's <strong>Seeed XIAO nRF52840</strong> microcontroller. Move commands are serialized and written to a custom GATT characteristic.</li>
                <li><strong>Actuation:</strong> 6x NEMA-17 stepper motors drive the faces via custom 5-way 3D-printed gearboxes. The grippers feature compliant TPU inserts to accommodate cube tolerances.</li>
            </ul>

            <h2>Performance</h2>
            <ul>
                <li><strong>Solve Speed:</strong> Average total time of ~45 seconds (Scan: 15s, Compute: &lt;1s, Actuation: 30s).</li>
                <li><strong>Reliability:</strong> The YOLO-based vision system eliminated color calibration issues common in HSV-based solvers, working robustly even in dim or warm lighting.</li>
            </ul>
        </div>`,
    },
    "sock": {
        id: "sock",
        title: "Amputee Residual Limb Monitoring Sock",
        meta: "Oct 2024 - Nov 2024 | Mechanical Design & Software Implementation",
        image: "/portfolio/assets/compression_sock/compression_sock.jpg",
        technologies: ["Wearable Tech", "Soft Robotics", "Sensors"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>For amputees, the residual limb is a dynamic and sensitive environment. Fluctuations in volume and temperature can lead to improper prosthetic fit, causing skin breakdown and infection. This project, the "Smart Shrinker," was designed to provide clinicians with continuous, quantitative data on the limb's health, replacing subjective patient reporting.</p>
            
            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Non-Invasive Sensing:</strong> Integrate sensors into a standard compression sock without compromising its elasticity or comfort.</li>
                <li><strong>Early Detection:</strong> Identify temperature spikes indicative of inflammation before visible sores appear.</li>
                <li><strong>User-Centric Data:</strong> Present complex sensor data in an intuitive mobile format for both patients and clinicians.</li>
            </ul>

            <h2>Engineering Implementation</h2>
            <h3>Soft Robotics & Sensor Integration</h3>
            <p>The primary challenge was maintaining the mechanical properties of the compression fabric while embedding rigid electronics:</p>
            <ul>
                <li><strong>Textile Integration:</strong> We utilized conductive thread to weave pressure and temperature sensor arrays directly into the knit of the sock. This "soft circuit" approach allowed the sock to stretch naturally (up to 20% strain) without breaking connections.</li>
                <li><strong>Sensor Logic:</strong> Implemented a matrix addressing scheme to read 12 distinct pressure points using only 7 GPIO pins, optimizing the microcontroller's limited I/O.</li>
            </ul>

            <h3>Firmware & Signal Processing</h3>
            <p>Amputee gait creates significant motion artifacts in sensor readings. To isolate clinically relevant data:</p>
            <ul>
                <li><strong>Digital Filtering:</strong> Applied a <strong>Low-Pass Butterworth Filter</strong> ($f_c = 5Hz$) on the microcontroller to attenuate high-frequency noise from walking impacts.</li>
                <li><strong>Drift Compensation:</strong> Developed an auto-calibration routine that establishes a baseline pressure reading each time the user dons the device, accounting for daily limb volume fluctuations.</li>
            </ul>

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Clinical Relevance:</strong> Successfully detected localized temperature increases of $0.5^circ C$, a key early marker for subcutaneous inflammation.</li>
                <li><strong>Durability:</strong> The textile sensor array survived 50 wash cycles with no degradation in signal-to-noise ratio.</li>
                <li><strong>Connectivity:</strong> Bluetooth Low Energy (BLE) transmission range maintained up to 10 meters, allowing continuous logging to the mobile app.</li>
            </ul>
        </div>`,
    },
    "epic": {
        id: "epic",
        title: "EPIC Lab - Exoskeleton Research",
        meta: "Undergraduate Researcher",
        image: "/portfolio/assets/epic_lab/epic_lab_research.jpg",
        technologies: ["Control Theory", "Machine Learning", "Python"],
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
            <h3>Control Systems Design</h3>
            <p>To model the complex interaction between the human leg and the robotic limb, we moved beyond simple PID control:</p>
            <ul>
                <li><strong>State Space Modeling:</strong> Developed a dynamic model of the human-exoskeleton system: $dot{x} = Ax + Bu$. This allowed us to apply <strong>LQR (Linear Quadratic Regulator)</strong> control to minimize energy consumption while maximizing tracking accuracy.</li>
                <li><strong>Admittance Control:</strong> Implemented an admittance controller that renders the robot as a virtual mass-spring-damper system, allowing the user to "drive" the robot with their own movement intent.</li>
            </ul>

            <h3>Machine Learning for Intent</h3>
            <p>Detecting the transition from "sitting" to "standing" is critical for timing the assist:</p>
            <ul>
                <li><strong>CNN Architecture:</strong> Trained a 1D Convolutional Neural Network (CNN) on time-series IMU data (acceleration, angular velocity) to classify movement phases.</li>
                <li><strong>Real-Time Inference:</strong> Optimized the model to run on an NVIDIA Jetson TX2 with $< 10ms$ inference latency.</li>
            </ul>

            <h3>Data-Driven GRF Estimation</h3>
            <p>To improve state estimation, we integrated high-resolution pressure data from <strong>XSensor Insoles</strong> to predict Ground Reaction Forces (GRF). I engineered a full ML pipeline to map pressure heatmaps to force vectors:</p>
            <ul>
                <li><strong>Signal Conditioning (MATLAB):</strong> Raw 1000Hz sensor data was processed using a <strong>4th-Order Butterworth Low-Pass Filter</strong> with a 6Hz cutoff to remove gait artifacts and sensor noise.</li>
                <li><strong>Model Architecture (TensorFlow):</strong> Comparative analysis of FCN vs. CNN using Leave-One-Subject-Out (LOSO) cross-validation.
                    <div class="bg-slate-100 p-4 rounded-lg my-2 font-mono text-xs text-slate-600">
                        Input (N×N Heatmap) -> Conv2D(32, 3x3) -> MaxPool(2x2) -> Conv2D(64, 3x3) -> Dense(64) -> Output(Force_N)
                    </div>
                </li>
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
        meta: "Mechanical Designer",
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
        meta: "Machine Learning Project",
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
        meta: "Project & Technical Lead",
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
            <div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
                <img src="/portfolio/assets/ewb/staff_latrine_designs.png" alt="Engineering Blueprints" style="width: 48%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); object-fit: cover;">
                <div style="width: 48%;">
                    <ul>
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
        meta: "Software Lead",
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
        meta: "Medical Device | Embeded Systems",
        image: "/portfolio/assets/breath/poster.jpg",
        technologies: ["C++", "PCB Design", "Signal Processing", "Haptics"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>Trauma victims and individuals capable of dissociation often lose "interoception"—the ability to sense their own internal bodily states. <strong>breathSense</strong> is a wearable haptic device designed to restore this connection. By providing real-time, organic vibration feedback synchronized with the user's breathing, it acts as an external "anchor," significantly improving outcomes in mindfulness and grounding therapy.</p>

            <h2>System Architecture</h2>
            <p className="font-mono text-sm p-4 bg-slate-100 rounded-md my-4">
                [Strain Sensor] -> [NAU7802 ADC] -> [ESP32 Processing] -> [DRV2605 Driver] -> [LRA Haptic Motor]
            </p>

            <h2>Engineering Implementation</h2>
            <h3>Precision Sensing & Signal Processing</h3>
            <p>Detecting subtle chest expansion through clothing requires high-fidelity signal acquisition. I eschewed standard analog reads for a 24-bit ADC architecture:</p>
            <ul>
                <li><strong>Data Acquisition:</strong> Utilized the <strong>NAU7802</strong> 24-bit ADC with a Wheatstone Bridge configuration to interpret minute resistance changes in the conductive rubber stretch sensor.</li>
                <li><strong>Digital Filtering:</strong> Implemented a <strong>Moving Average Filter (N=80)</strong> to smooth signal noise without introducing perceptible latency.</li>
                <li><strong>Adaptive Thresholding:</strong> Developed a dynamic state machine that calculates a rolling baseline. It triggers "Exhale" states based on computed derivative thresholds (<code>startOffset</code> / <code>endOffset</code>), ensuring the device works across different users and breathing rates.</li>
            </ul>

            <h3>Haptic Feedback Engine</h3>
            <p>To prevent the device from feeling "robotic" or jarring, I focused on organic haptic synthesis:</p>
            <ul>
                <li><strong>LRA Actuation:</strong> Selected a Linear Resonant Actuator (LRA) driven by a <strong>TI DRV2605</strong> driver. Unlike eccentric rotating mass (ERM) motors, LRAs offer precise start/stop control and complex waveform playback.</li>
                <li><strong>Waveform Design:</strong> Programmed custom effects (e.g., "Soft Bump", "Transition Hum") that mimic the natural "thud" of a heartbeat, proving 30% more effective in user trials than standard buzz alerts.</li>
            </ul>

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
            <p>In modern neurosurgery, sub-millimeter precision is not optionalùit is a requirement. "Computer Integrated Surgery" focused on building a complete stereotactic navigation system from scratch. This project addresses the critical "interventional loops" of tracking, calibration, registration, and error correction, translating preoperative imaging (CT/MRI) into real-time surgical guidance.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Accuracy:</strong> Achieve a target registration error (TRE) of $< 2mm$, the clinical standard for safe cranial navigation.</li>
                <li><strong>Distortion Correction:</strong> Implement algorithms to correct for electromagnetic (EM) field distortion, a common source of error in tracking systems.</li>
                <li><strong>Real-Time Performance:</strong> Ensure the closest-point search algorithms run efficiently enough to render instrument position updates at $> 30Hz$.</li>
            </ul>

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
            <p>The system relies on rigorous linear algebra and computational geometry principles:</p>
            <ul>
                <li><strong>Rigid Body Registration (Arun's Method):</strong> Solved rotation $R$ via Singular Value Decomposition (SVD) of the cross-covariance matrix $H$:
                    <br><code>[U, S, V] = svd(H); R = V * U';</code>
                    <br>Ensured $det(R) = +1$ to prevent reflection artifacts.
                </li>
                <li><strong>Pivot Calibration:</strong> Formulated as a linear least-squares problem $[R_i | -I] [t_{tip} ; p_{dimple}] = -t_i$ to solve for the tool tip offset $t_{tip}$ and pivot point $p_{dimple}$ simultaneously from $N$ frames.</li>
                <li><strong>Distortion Correction:</strong> Modeled using <strong>5th-order 3D Bernstein polynomials</strong> with 216 basis terms ($6^3$):
                    <br>$f(u,v,w) = sum_{i,j,k=0}^5 c_{ijk} B_{5,i}(u) B_{5,j}(v) B_{5,k}(w)$
                </li>
            </ul>

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Registration Accuracy:</strong> Maintained unit test error bounds of $< 1 	imes 10^{-6}$ for rotation and translation recovery.</li>
                <li><strong>Distortion Recovery:</strong> 5th-order Bernstein fitting achieved sub-millimeter mapping accuracy, successfully recovering ground truth optical coordinates (e.g., <code>[104.85, 107.53, 57.87]</code>) from distorted EM tracker data.</li>
                <li><strong>Search Efficiency:</strong> Covariance Tree implementation reduced point-to-mesh query times from linear $O(N)$ to logarithmic, supporting real-time interaction with high-resolution anatomical meshes.</li>
            </ul>

            <h2>Algorithmic Modules</h2>
            <h3>PA3 & PA4: Spatial Search & Surface Registration</h3>
            <ul>
                <li>Implemented <strong>Generalized ICP</strong> with anisotropic covariance weighting, achieving <strong>50% faster convergence</strong> (11.0s vs 37.2s) compared to standard point-to-point ICP.</li>
                <li>Constructed bounding sphere hierarchies (Covariance Trees) to accelerate closest-point queries.</li>
            </ul>
        </div>`,
    },
    "ur5": {
        id: "ur5",
        title: "UR5 Manipulator Control",
        meta: "Fall 2025 | Robotics Control",
        image: "/portfolio/assets/ur5_control.png",
        technologies: ["MATLAB", "ROS", "Kinematics", "Controls"],
        content: `
    <p class="mb-4">Implemented Resolved-Rate and Inverse Kinematics control algorithms for a UR5 robot arm to perform a pick-and-place manipulation task. Interfaced with ROS to communicate with the robot hardware.</p>
    <p class="mb-4">Key achievements include:</p>
    <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Calculated forward and inverse kinematics for the UR5 manipulator.</li>
        <li>Generated smooth trajectories in SE(3) space using linear path interpolation.</li>
        <li>Analyzed positioning errors for both control schemes.</li>
        <li>Demonstrated successful pick-and-place operations in simulation and on real hardware.</li>
    </ul>
    `,
    },
    "tom": {
        id: "tom",
        title: "Cascading Shower Handle",
        meta: "TOM: GT Makeathon 2022 | Assistive Technology",
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
    "pid": {
        id: "pid",
        title: "Ad Astra - PID Autonomous Control",
        meta: "VEX Change Up | C++ Implementation",
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
        const order = ["pid", "tom", "ur5", "cis", "rubi", "haptic", "sock", "epic", "battlebot", "flight", "malawi", "me2110", "breath"];
        return order.map(id => projectsData[id]).filter(Boolean);
    },
    findById: async (id: string) => projectsData[id]
};

export default projectsData;
