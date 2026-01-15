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
        meta: "Mechanical Design Lead",
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
        meta: "Oct 2024 - Dec 2024 | Personal Project",
        image: "/portfolio/assets/rubi/rubi_cube.jpg",
        technologies: ["Python", "OpenCV", "ESP32"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>The Rubik's Cube is a classic puzzle with over <strong>43 quintillion permutations</strong>, yet fewer than 5% of the population can solve it. This project focused on demystifying the complexity of robotic manipulation and computer vision by creating an accessible, transparent, and fully autonomous solving machine.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Autonomy:</strong> Create a system that scans, solves, and actuates without human intervention.</li>
                <li><strong>Speed:</strong> Achieve a total solve time (scan + compute + actuate) of under 60 seconds.</li>
                <li><strong>Simplicity:</strong> Design a mechanical system that uses a single actuator per face to reduce cost and weight compared to industrial solvers.</li>
            </ul>

            <h2>System Architecture</h2>
            <div class="system-diagram">
                <div class="diagram-node">
                    <strong>Vision System</strong>
                    <span>OpenCV / HSV Filtering</span>
                </div>
                <div class="diagram-arrow">
                    <span class="arrow-label">Cube State</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Solver Core</strong>
                    <span>Kociemba Algorithm</span>
                </div>
                 <div class="diagram-arrow">
                    <span class="arrow-label">Move String</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Motion Control</strong>
                    <span>ESP32 & Steppers</span>
                </div>
            </div>

            <h2>Engineering Implementation</h2>
            <h3>Computer Vision Pipeline</h3>
            <p>The vision system must robustly identify sticker colors under varying ambient lighting. I implemented a custom pipeline in Python:</p>
            <div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
                <img src="/portfolio/assets/rubi/RUBI.jpg" alt="Rubi Vision System" style="width: 48%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); object-fit: cover;">
                <div style="width: 48%;">
                     <ul>
                        <li><strong>HSV Color Thresholding:</strong> Converted RGB frames to Hue-Saturation-Value space to isolate color channels more effectively than standard RGB.</li>
                        <li><strong>Contour Detection:</strong> Used <code>cv2.findContours</code> with area filtering to locate the 9 facelets on each side, applying a perspective transform to normalize the grid.</li>
                        <li><strong>Kociemba Algorithm:</strong> Integrated the two-phase algorithm (Phase 1: Reduction to G1 group, Phase 2: Solve to G0), which guarantees solutions in $le 20$ moves (God's Number).</li>
                    </ul>
                </div>
            </div>

            <h3>Mechatronic Design</h3>
            <p>The mechanical constraint was to drive 6 faces independently in a compact volume:</p>
            <img src="/portfolio/assets/rubi/rubi_cube.jpg" alt="Internal Gear Mechanism" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
            <ul>
                <li><strong>5-Way Bevel Gear:</strong> Designed a custom 3D-printed gearbox that directs torque from a vertically mounted NEMA-17 stepper motor to the horizontal axis of the cube face.</li>
                <li><strong>Interference Fit:</strong> Engineered the grippers with compliant TPU inserts to hold the cube securely during high-speed 90&deg; rotations without damaging the plastic surface.</li>
            </ul>

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Reliability:</strong> Achieved <strong>100% autonomous success rate</strong> across 50 consecutive trial runs.</li>
                <li><strong>Speed:</strong> Average solve time of <strong>48 seconds</strong> (10s scan, 2s compute, 36s execution), beating the target by 20%.</li>
                <li><strong>Accuracy:</strong> Computer vision system demonstrated 100% accuracy in state classification under standard indoor lighting.</li>
            </ul>
        </div>`,
    },
    "sock": {
        id: "sock",
        title: "Amputee Residual Limb Monitoring Sock",
        meta: "Mechanical Design & Software Lead",
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
                <li><strong>Durability:</strong> Survive direct impacts from rival horizontal spinners without chassis fracture.</li>
                <li><strong>Drivability:</strong> Maintain traction and control even after losing armor panels or wheels.</li>
            </ul>

            <h2>Engineering Implementation</h2>
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
        technologies: ["Python", "Scikit-Learn", "Pandas"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>For college students, flight prices are a major budget constraint. With prices fluctuating wildly based on opaque algorithmic factors, finding the optimal time to book is difficult. This project applied machine learning to historical flight data to decode these patterns and predict future costs for routes out of Hartsfield-Jackson (ATL).</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Prediction Accuracy:</strong> Build a model capable of predicting ticket prices within a $20 margin of error.</li>
                <li><strong>Feature Extraction:</strong> Identify the most statistically significant factors driving price changes (e.g., day of week vs. days to departure).</li>
                <li><strong>Model Benchmarking:</strong> rigoriously compare multiple regression algorithms to select the optimal approach.</li>
            </ul>

            <h2>Engineering Implementation</h2>
            <h3>Data Pipeline & Feature Engineering</h3>
            <p>The dataset was sourced from Kaggle, containing thousands of flight records. Raw data required significant preprocessing:</p>
            <ul>
                <li><strong>One-Hot Encoding:</strong> Converted categorical variables (Airline, Destination, Departure Time Block) into binary vector representations for model ingestion.</li>
                <li><strong>Feature Engineering:</strong> Created new features such as "Days_Left" (Date of Flight - Booking Date) and "Route_Frequency" to capture supply-demand dynamics.</li>
            </ul>

            <h3>Model Selection & Tuning</h3>
            <p>I evaluated three distinct algorithms using 5-fold cross-validation:</p>
            <ul>
                <li><strong>Linear Regression:</strong> Served as a baseline. Failed to capture non-linear relationships ($R^2 = 0.62$).</li>
                <li><strong>K-Nearest Neighbors (KNN):</strong> Improved accuracy but struggled with high-dimensional data sparsity.</li>
                <li><strong>Random Forest Regressor:</strong> The chosen model. I performed grid search hyperparameter tuning to optimize <code>n_estimators</code> (trees) and <code>max_depth</code>, balancing bias and variance.</li>
            </ul>

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Final Accuracy:</strong> The optimized Random Forest model achieved an <strong>$R^2$ of 0.9557</strong> on the test set, explaining 95% of the price variance.</li>
                <li><strong>Key Insights:</strong> "Days_Left" was the #1 predictor of price, with an exponential price hike occurring at the 14-day mark.</li>
                <li><strong>Visualization:</strong> Developed Matplotlib dashboards showing "Price vs. Departure Date" curves for top student destinations (e.g., NYC, Chicago).</li>
            </ul>
             <img src="/portfolio/assets/flight_predictor/flight_price_predictor.png" alt="Price Prediction Dashboard" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
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
            <h3>Mechatronics & Sensing</h3>
            <p>Our robot, "The Negotiator," featured a modular sensor suite:</p>
            <ul>
                <li><strong>Ultrasonic Mapping:</strong> Mounted three HC-SR04 sensors (Left, Front, Right) to perform real-time wall following and gap detection.</li>
                <li><strong>Line Following:</strong> Used an IR reflectance array to track the arena's central tape line for precise navigation to the scoring zone.</li>
            </ul>

            <h3>Control Logic</h3>
            <p>I architected the software using a <strong>Finite State Machine (FSM)</strong> approach in C++:</p>
            <ul>
                <li><strong>State Management:</strong> Defined distinct states (e.g., <code>FIND_WALL</code>, <code>FOLLOW_MAZE</code>, <code>DEPLOY_ARM</code>). This modularity allowed us to debug specific behaviors in isolation.</li>
                <li><strong>PID Control:</strong> Implemented a PID loop on the differential drive motors to correct heading errors during wall following.
                    <br><code>error = target_dist - measured_dist;</code>
                    <br><code>correction = Kp*error + Kd*(error - last_error);</code>
                </li>
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
        meta: "Haptic Feedback Device",
        image: "/portfolio/assets/breath_sense/breath_sense.jpg",
        technologies: ["SolidWorks/Fusion 360", "Arduino", "3D Printing"],
        content: `<div>
            <h2>Context & Motivation</h2>
            <p>Trauma victims suffering from dissociative disorders often experience a loss in interoception (sensing internal bodily signals). Clinical research shows that providing external vibration feedback synchronized with the user's breathing can amplify these internal signals, yielding significantly better mindfulness outcomes than unassisted practice.</p>

            <h2>Project Objectives</h2>
            <ul>
                <li><strong>Latency:</strong> Provide haptic feedback within 50ms of the exhale onset to ensure the sensation feels causal and organic.</li>
                <li><strong>Comfort:</strong> Create a wearable form factor that is unobtrusive and suitable for hour-long meditation sessions.</li>
                <li><strong>Signal Clarity:</strong> Reliably detect breathing phases despite motion noise and sensor drift.</li>
            </ul>

            <h2>System Architecture</h2>
            <div class="system-diagram">
                <div class="diagram-node">
                    <strong>Input</strong>
                    <span>Stretch Sensor</span>
                </div>
                <div class="diagram-arrow">
                    <span class="arrow-label">Analog Voltage</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Processing</strong>
                    <span>Arduino Nano</span>
                </div>
                 <div class="diagram-arrow">
                    <span class="arrow-label">I2C / PWM</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Output</strong>
                    <span>LRA Haptic Motor</span>
                </div>
            </div>

            <h2>Engineering Implementation</h2>
            <h3>Signal Processing Pipeline</h3>
            <p>The core challenge was distinguishing a true "exhale" from random body movements. I implemented a multi-stage software filter:</p>
            <ul>
                <li><strong>Moving Average Filter:</strong> Applied a rolling window ($N=10$) to smooth raw analog readings from the conductive rubber stretch sensor, removing high-frequency electrical noise.</li>
                <li><strong>Adaptive Thresholding:</strong> Breathing rates vary. The algorithm dynamically calculated a "baseline" respiration value over the last 10 seconds. Exhale detection was triggered only when the slope of the signal (derivative) became negative <em>and</em> the absolute value crossed the dynamic threshold.</li>
            </ul>

            <h3>Haptic Driver Integration</h3>
            <p>For premium feel, I eschewed simple ERM vibration motors for a Linear Resonant Actuator (LRA):</p>
            <ul>
                <li><strong>Driver IC:</strong> Interfaced with the <strong>TI DRV2605L</strong> haptic driver via I2C to execute pre-loaded waveform libraries.</li>
                <li><strong>Effects:</strong> Selected a "Soft Bump" effect (Waveform ID 7) that creates a gentle, non-jarring thud on the sternum, mimicking a heartbeat rather than a phone buzz.</li>
            </ul>

            <h2>Performance & Results</h2>
            <ul>
                <li><strong>Accuracy:</strong> Achieved $>90%$ accuracy in detecting exhale phases across varying breathing rates (10-20 breaths/min) in static seated tests.</li>
                <li><strong>Latency:</strong> Total system response time measured at $< 50ms$, meeting the design requirement for "instantaneous" feedback.</li>
                <li><strong>User Feedback:</strong> Blind testing with 5 subjects indicated that users felt "more grounded" and maintained focus 30% longer with the haptic aid compared to unassisted conditions.</li>
            </ul>
            <img src="/portfolio/assets/breath_sense/IMG_0775.jpeg" alt="Device Prototypes" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
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
};

export const Project = {
    findAll: async () => {
        const order = ["ur5", "cis", "rubi", "haptic", "sock", "epic", "battlebot", "flight", "malawi", "me2110", "breath"];
        return order.map(id => projectsData[id]).filter(Boolean);
    },
    findById: async (id: string) => projectsData[id]
};

export default projectsData;
