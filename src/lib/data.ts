export interface ProjectData {
    id: string;
    title: string;
    meta: string;
    image: string;
    content: string; // HTML content or Markdown
}

const projectsData: Record<string, ProjectData> = {
    "haptic": {
        id: "haptic",
        title: "Haptic Museum Display",
        meta: "Mechanical Design Lead | Fusion 360, Arduino, Fabrication",
        image: "/portfolio/assets/haptic_museum/haptic_museum_main.jpg",
        content: `
            <h2>Motivation</h2>
            <p>Museums have limited accessibility for those with visual impairments, leaving individuals with these impairments often disappointed and unwelcome in art spaces. Introducing a refreshable tactile display will enable all museum-goers the ability to interact with art in a different way and enable a richer, more inclusive museum experience.</p>
            
            <h2>Problem Statement</h2>
            <p>Limited accessibility in museums for visually impaired individuals to experience visual art.</p>

            <div class="highlight-box">
                <strong>Solution:</strong> A 7x5 refreshable pin array with a pin-wise replication control system and a silicone overlay. The display conveys shape through the pattern of the actuated pins and color through the height of the corresponding pins. Users interact with the device to sense contours and colors representing artworks.
            </div>
            
            <h2>Outcome</h2>
            <ul>
                <li>Designed and developed a 7x5 refreshable pin array with software controlling pin height based on image replication.</li>
                <li>Successfully tested the device, proving that shape can be distinguished easily and color can be taught after an initial learning curve.</li>
            </ul>

            <h2>Technical Details</h2>
            <ul>
                <li><strong>Mechanical Design:</strong> Iteratively prototyped a single pin and cam system using 3D prints, identifying the need for custom CAM design and tight tolerances for pin stability. Scaled to a 7x5 grid.</li>
                <li><strong>Construction:</strong> Base and structural components were laser cut; pin and cam systems were 3D printed. Puzzle-fit design allows for stability and easy maintenance.</li>
                <li><strong>Electronics & Software:</strong> Each pin is driven by a servo motor. Two motor shields (16 channels each) control 32 servos, with 3 remaining servos directly connected to an Arduino. Separate Arduinos manage each motor shield due to I2C broadcasting issues. Sequential actuation of servos prevents exceeding the maximum current draw.</li>
                <li><strong>Silicone Overlay:</strong> Fabricated via a custom 3D printed mold. A corner pin system allows for easy tension adjustment. Coated in cornstarch for a smooth, low-friction texture.</li>
            </ul>

            <h2>Gallery</h2>
            <div class="modal-gallery">
                <img src="/portfolio/assets/haptic_museum/IMG_1573.jpeg" alt="Device Assembly">
                <img src="/portfolio/assets/haptic_museum/pin_array_cad.png" alt="CAD Design">
                <img src="/portfolio/assets/haptic_museum/haptic_museum_main.jpg" alt="Main View">
                <img src="/portfolio/assets/haptic_museum/pin_array_electronics.png" alt="Electronics">
                <img src="/portfolio/assets/haptic_museum/pin_array_w_silicone.png" alt="Prototype with Silicone">
                <img src="/portfolio/assets/haptic_museum/pin_array_image.png" alt="System View">
            </div>

            <h2>Demos</h2>
            <div class="video-container" style="margin-top: 2rem;">
                <video controls style="width: 100%; border-radius: var(--border-radius); border: 1px solid var(--border-color); margin-bottom: 1rem;">
                    <source src="/portfolio/assets/haptic_museum/IMG_1565.mov" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <video controls style="width: 100%; border-radius: var(--border-radius); border: 1px solid var(--border-color);">
                    <source src="/portfolio/assets/haptic_museum/IMG_6826.mov" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Fusion 360</span>
                <span>Arduino</span>
                <span>C++</span>
                <span>Rapid Prototyping</span>
                <span>Mechatronics</span>
            </div>
        `
    },
    "rubi": {
        id: "rubi",
        title: "RUBI - Self Solving Cube",
        meta: "Oct 2024 - Dec 2024 | Mechatronics & CV",
        image: "/portfolio/assets/rubi/rubi_cube.jpg",
        content: `
            <h2>Motivation</h2>
            <p>The Rubik's Cube is a classic puzzle with over <strong>43 quintillion permutations</strong>, yet only about <strong>4% of the population</strong> can solve it. The steep learning curve discourages many from engaging with this iconic engineering challenge.</p>

            <h2>Problem Statement</h2>
            <p>Create an approachable, interactive robotic system that lowers the barrier to entry for solving Rubik's Cubes, demonstrating complex mechatronics and computer vision principles in a tangible way.</p>

            <div class="highlight-box">
                <strong>Solution:</strong> RUBI, a fully autonomous self-solving cube. It scans the scrambled state using computer vision, computes the optimal solution, and physically executes the moves using a custom-designed gear train.
            </div>

            <h2>System Architecture</h2>
            <div class="system-diagram">
                <div class="diagram-node">
                    <strong>Computer Vision</strong>
                    <span>Laptop / OpenCV</span>
                </div>
                <div class="diagram-arrow">
                    <span class="arrow-label">Bluetooth</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Controller</strong>
                    <span>ESP32 MCU</span>
                </div>
                 <div class="diagram-arrow">
                    <span class="arrow-label">GPIO</span>
                    <div class="arrow-line"></div>
                </div>
                <div class="diagram-node">
                    <strong>Actuation</strong>
                    <span>Stepper Motors</span>
                </div>
            </div>
            <p>The system operates on a closed-loop control architecture designed for speed and reliability:</p>
            <ul>
                <li><strong>High-Level Control (Laptop):</strong> Runs the Computer Vision pipeline (OpenCV) to map the cube's state and the Kociemba solving algorithm to generate the move sequence.</li>
                <li><strong>Communication:</strong> Solution steps are transmitted via <strong>Bluetooth</strong> to the on-board microcontroller.</li>
                <li><strong>Low-Level Control (ESP32):</strong> Parses move commands and drives the stepper motors with precise timing to execute 90-degree face rotations.</li>
            </ul>

            <h2>Engineering Details</h2>
            <ul>
                <li><strong>Mechanism:</strong> A compact <strong>5-Way Bevel Gear Train</strong> allows a single DC motor to drive any of the 6 faces. This design significantly reduced weight and complexity compared to 6-motor designs.</li>
                <li><strong>Vision Pipeline:</strong> Custom OpenCV algorithm filters for sticker colors under varying lighting conditions, achieving <strong>100% face detection accuracy</strong> in testing.</li>
                <li><strong>Solving Algorithm:</strong> Implemented Kociemba's Two-Phase algorithm, consistently finding solutions in <strong>under 20 moves</strong> (God's Number).</li>
            </ul>

            <h2>Results</h2>
            <ul>
                <li><strong>Success Rate:</strong> Achieved a 100% success rate in autonomous solving during final demonstrations.</li>
                <li><strong>Performance:</strong> Average solve time of <strong>< 1 minute</strong> from scan to completion.</li>
                <li><strong>Integration:</strong> Successfully synchronized mechanical actuation with real-time state tracking.</li>
            </ul>

            <h2>Gallery</h2>
            <div class="modal-gallery">
                <img src="/portfolio/assets/rubi/RUBI.jpg" alt="RUBI System Overview">
                <img src="/portfolio/assets/rubi/rubi_cube.jpg" alt="Cube Mechanism Detail">
            </div>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>ESP32</span>
                <span>SolidWorks</span>
                <span>Kociemba Algorithm</span>
            </div>
        `
    },
    "sock": {
        id: "sock",
        title: "Amputee Residual Limb Monitoring Sock",
        meta: "Mechanical Design & Software Lead",
        image: "/portfolio/assets/compression_sock/compression_sock.jpg",
        content: `
            <h2>Overview</h2>
            <p>This project focused on developing a "Smart Shrinker" compression sleeve for amputees. The device monitors the residual limb environment to detect early signs of infection and inflammation, which are critical for patient recovery and prosthetic fitting.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Real-Time Monitoring:</strong> Continuous tracking of temperature and pressure distribution inside the socket.</li>
                <li><strong>Mobile Dashboard:</strong> Bluetooth data streaming to a clinician-facing app for easy visualization.</li>
                <li><strong>Alert System:</strong> Automated warnings triggered by abnormal inflammation patterns or pressure spikes.</li>
            </ul>

            <h2>Engineering Details</h2>
            <p>The core challenge was integrating electronics into a flexible form factor without compromising comfort.</p>
            <ul>
                <li><strong>Soft Circuits:</strong> Integrated sensor arrays directly into the textile weave to maintain flexibility.</li>
                <li><strong>Data Processing:</strong> Microcontroller firmware filters noise from motion artifacts to ensure accurate readings.</li>
            </ul>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Wearable Tech</span>
                <span>Soft Robotics</span>
                <span>Sensors</span>
                <span>Mobile App Dev</span>
            </div>
        `
    },
    "epic": {
        id: "epic",
        title: "EPIC Lab - Exoskeleton Research",
        meta: "Undergraduate Researcher",
        image: "/portfolio/assets/epic_lab/epic_lab_research.jpg",
        content: `
            <h2>Overview</h2>
            <p>As a researcher at the EPIC Lab, I contributed to the development of the <strong>GRAHAM Suit</strong>, a knee exoskeleton combined with a sensor suit and electronics backpack designed to assist mobility.</p>

            <h2>My Contributions</h2>
            <ul>
                <li><strong>Control Systems:</strong> Developed real-time PID motor controllers to provide precise assist torque based on movement.</li>
                <li><strong>System Dynamics:</strong> Implemented State Space controllers to model and manage the interaction between the user and the exoskeleton.</li>
                <li><strong>Machine Learning:</strong> Trained Fully Convolutional Networks (FCNs) and CNNs to estimate joint loading, allowing the suit to predict user intent.</li>
            </ul>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Control Theory</span>
                <span>Machine Learning</span>
                <span>Python</span>
                <span>MATLAB</span>
                <span>Robotics</span>
            </div>
        `
    },
    "battlebot": {
        id: "battlebot",
        title: "Battlebot \"Insaniti\"",
        meta: "Mechanical Designer | 3lb Combat Robot",
        image: "/portfolio/assets/battlebot/battlebot_insaniti.jpg",
        content: `
            <h2>Overview</h2>
            <p>Designed and built "Insaniti", a 3lb combat robot managed by the RoboJackets Battlebots team. The project emphasized robust mechanical design to survive high-kinetic energy impacts in a competitive arena.</p>

            <h2>Engineering Details</h2>
            <ul>
                <li><strong>Chassis Design:</strong> Utilized UHMW and Aluminum to balance weight reduction with impact resistance.</li>
                <li><strong>Weapon System:</strong> Designed a stable weapon mount system to deliver high-speed attacks without self-damage.</li>
                <li><strong>Fabrication:</strong> Employed CNC machining and 3D printing for rapid prototyping and final assembly.</li>
            </ul>

            <h2>Gallery</h2>
            <div class="modal-gallery">
                <img src="/portfolio/assets/battlebot/iso_view.jpeg" alt="CAD Iso View">
                <img src="/portfolio/assets/battlebot/top_view.jpeg" alt="CAD Top View">
            </div>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>SolidWorks</span>
                <span>FEA</span>
                <span>Rapid Prototyping</span>
                <span>Machining</span>
            </div>
        `
    },
    "flight": {
        id: "flight",
        title: "ATL Flight Price Predictor",
        meta: "Machine Learning Project",
        image: "/portfolio/assets/flight_predictor/flight_price_predictor.png",
        content: `
            <h2>Overview</h2>
            <p>Developed a machine learning model to predict flight costs for Georgia Tech students flying out of ATL. The project utilized Kaggle datasets to analyze pricing trends and optimize booking times.</p>

            <h2>Key Results</h2>
            <ul>
                <li><strong>Model Optimization:</strong> Compared performance of KNN, Linear Regression, and Random Forest algorithms.</li>
                <li><strong>High Accuracy:</strong> The Random Forest model achieved an R-squared of <strong>0.9557</strong>, outperforming others.</li>
                <li><strong>Feature Analysis:</strong> Identified key price drivers such as seasonality, airline choice, and flight duration via feature importance visualization.</li>
            </ul>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Python</span>
                <span>Scikit-Learn</span>
                <span>Pandas</span>
                <span>Data Visualization</span>
            </div>
        `
    },
    "malawi": {
        id: "malawi",
        title: "EWB - GT Malawi Project",
        meta: "Project & Technical Lead",
        image: "/portfolio/assets/ewb/ewb_malawi.jpg",
        content: `
            <h2>Overview</h2>
            <p>Served as Technical Lead for an Engineers Without Borders project to improve sanitation at Mpitilira Primary School in Malawi. The project aimed to design and construct sustainable latrines for school staff.</p>

            <h2>Key Responsibilities</h2>
            <ul>
                <li><strong>Project Management:</strong> Managed remote contractor bidding, selection, and budget oversight.</li>
                <li><strong>Engineering Design:</strong> Created structural designs for the sanitation facility using concrete and brick masonry.</li>
                <li><strong>Implementation:</strong> Conducted remote construction oversight via digital communication tools to ensure design compliance.</li>
            </ul>

            <p class="highlight-box">The project was awarded <strong>3rd Place in the GAWP Competition</strong> for its impact and execution.</p>

            <h2>Gallery</h2>
            <div class="modal-gallery">
                <img src="/portfolio/assets/ewb/completed_student_latrine.png" alt="Completed Latrine">
                <img src="/portfolio/assets/ewb/staff_latrine_designs.png" alt="Design Blueprints">
                <img src="/portfolio/assets/ewb/malawi_project_objectives.png" alt="Project Objectives">
            </div>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Civil Engineering</span>
                <span>Project Management</span>
                <span>AutoCAD</span>
                <span>Remote Collaboration</span>
            </div>
        `
    },
    "me2110": {
        id: "me2110",
        title: "Autonomous Competition Robot",
        meta: "Software Lead | Arduino, C++",
        image: "/portfolio/assets/me2110/me2110_robot.jpg",
        content: `
            <h2>Overview</h2>
            <p>As Software Lead, I programmed an autonomous robot to navigate a complex maze and perform physical tasks under strict time constraints. The robot required robust logic to handle variability in the arena.</p>

            <h2>Engineering Details</h2>
            <ul>
                <li><strong>Navigation:</strong> Implemented precise DC motor control with PID loops and encoder feedback for straight-line driving and turns.</li>
                <li><strong>Sensing:</strong> Integrated ultrasonic sensors for dynamic obstacle avoidance and maze mapping.</li>
                <li><strong>Task Execution:</strong> Servo-driven mechanisms deployed to interact with game elements (e.g., retrieving objects).</li>
                <li><strong>Logic:</strong> Finite state machine architecture to manage transitions between maze solving, wall following, and object manipulation.</li>
            </ul>

            <h2>Gallery & Demo</h2>
            <div class="modal-gallery">
                <img src="/assets/me2110/project_poster.jpg" alt="Project Poster">
            </div>
            
            <div class="video-container">
                <h3>Robot Run</h3>
                <video controls>
                    <source src="/assets/me2110/robot_run.mov" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Arduino</span>
                <span>C++</span>
                <span>PID Control</span>
                <span>Mechatronics</span>
            </div>
        `
    },
    "breath": {
        id: "breath",
        title: "breathSense",
        meta: "Haptic Feedback Device | Healthcare Tech",
        image: "/portfolio/assets/breath_sense/breath_sense.jpg",
        content: `
            <h2>Motivation</h2>
            <p>Trauma victims suffering from dissociative disorders often experience a loss in interoception (sensing internal bodily signals). Research shows that providing vibration feedback to the sternum synchronized with breathing yields better mindfulness outcomes than unassisted practice.</p>

            <h2>Problem Statement</h2>
            <p>Amplify breath sensation to improve the effectiveness of mindfulness practice for trauma victims and general users.</p>

            <div class="highlight-box">
                <strong>Solution:</strong> A haptic meditation aid that tracks the user’s exhale and outputs a synchronized vibration response on the sternum to support a mind-body connection.
            </div>

            <h2>Outcome</h2>
            <ul>
                <li>Developed a device that met all engineering specifications in testing.</li>
                <li>Successful operation: Worn without assistance, no training required, no external wiring.</li>
                <li>Performance: Vibration delay < 250ms, sampling every 5ms, continuous use > 180 mins.</li>
            </ul>

            <h2>Technical Details</h2>
            <ul>
                <li><strong>Sensors & Haptics:</strong> Receives breath signal and delivers synced vibrations (force > 5N, strength 0-100%). Control over vibration feel and strength.</li>
                <li><strong>Energy:</strong> USB-C rechargeable 1200mAh battery with > 3-hour continuous battery life and < 2-hour charge time.</li>
                <li><strong>Ergonomics:</strong> Designed for a general audience (5th-95th percentile). Minimalistic design for public use. Weight target: 350-500g.</li>
            </ul>

            <h2>Gallery</h2>
            <div class="modal-gallery">
                <img src="/portfolio/assets/breath_sense/IMG_0775.jpeg" alt="Device Close-up">
            </div>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>SolidWorks/Fusion 360</span>
                <span>Arduino</span>
                <span>3D Printing</span>
                <span>Human-Computer Interaction</span>
            </div>
        `
    }
};

export default projectsData;

// Simulated Database Logic
export class Project {
    static async findById(id: string): Promise<ProjectData | null> {
        // Simulate async database call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(projectsData[id] || null);
            }, 10);
        });
    }

    static async findAll(): Promise<ProjectData[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.values(projectsData));
            }, 10);
        });
    }
}
