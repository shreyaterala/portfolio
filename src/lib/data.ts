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
            <h2>Overview</h2>
            <p>Museums have limited accessibility for those with visual impairments, restricting their engagement with exhibits. Traditional audio guides often fail to convey the physical intricacies of artifacts.</p>
            <p>To address this, we developed a <strong>tactile display device</strong> consisting of a 7x5 pin array with a pin-wise replication control system and a silicone overlay. The tactile display aims to convey shape through the pattern of the actuated pins and color through the height of the corresponding pins.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>7x5 Pin Array:</strong> High-resolution tactile output for detailed shape rendering.</li>
                <li><strong>Variable Height Control:</strong> Pins actuate to different heights to represent color intensity or depth.</li>
                <li><strong>Silicone Overlay:</strong> Smooths the interaction surface, providing a more organic touch experience.</li>
            </ul>

            <h2>Engineering Details</h2>
            <p>The system was designed with a focus on mechanical reliability and user comfort.</p>
            <ul>
                <li><strong>Mechanism:</strong> Custom CAM mechanisms with tight tolerances to ensure pin stability and smooth actuation.</li>
                <li><strong>Electronics:</strong> developed control logic in Arduino to map digital image inputs to pin height outputs.</li>
                <li><strong>Material Selection:</strong> Iterated on various silicone blends for the overlay to balance sensitivity with durability.</li>
            </ul>

            <h2>Gallery</h2>
            <div class="modal-gallery">
                <img src="/portfolio/assets/haptic_museum/pin_array_cad.png" alt="CAD Design">
                <img src="/portfolio/assets/haptic_museum/haptic_museum_main.jpg" alt="Main View">
                <img src="/portfolio/assets/haptic_museum/pin_array_electronics.png" alt="Electronics">
                <img src="/portfolio/assets/haptic_museum/pin_array_w_silicone.png" alt="Prototype with Silicone">
                <img src="/portfolio/assets/haptic_museum/pin_array_image.png" alt="System View">
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
            <h2>Overview</h2>
            <p>RUBI is an interactive learning tool designed to solve a scrambled Rubik's cube autonomously. The goal was to create a system that demonstrates robotics and computer vision in an approachable form factor.</p>
            <p>Unlike simple solvers that blindly reverse moves, RUBI intelligently scans the cube's state and computes an optimal solution path.</p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Computer Vision Scanning:</strong> A webcam pipeline detects color stickers on each face to map the cube's state.</li>
                <li><strong>Optimal Solving:</strong> Uses the Kociemba algorithm to calculate the shortest move sequence.</li>
                <li><strong>Autonomous Actuation:</strong> Stepper motors physically rotate the cube faces to execute the solution.</li>
            </ul>

            <h2>Engineering Details</h2>
            <ul>
                <li><strong>Vision System:</strong> OpenCV (Python) used to isolate face regions and classify colors under varying lighting.</li>
                <li><strong>Mechanical Design:</strong> Custom 3D printed grippers driven by high-torque stepper motors for precise 90-degree turns.</li>
                <li><strong>Control Logic:</strong> Integrated Python script coordinates the vision capture, solving algorithm, and motor drivers.</li>
            </ul>

            <h2>Technologies Used</h2>
            <div class="tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Mechatronics</span>
                <span>3D Printing</span>
                <span>Stepper Motors</span>
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
        image: "/assets/breath_sense/breath_sense.jpg",
        content: `
            <h2>Overview</h2>
            <p>breathSense is a wearable haptic feedback device designed to aid in meditation and anxiety management. By providing gentle physical cues, the device guides users into a rhythmic breathing pattern without demanding cognitive attention.</p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Tactile Guidance:</strong> Uses vibration motors to signal inhale/exhale timing, allowing users to close their eyes and focus.</li>
                <li><strong>Ergonomic Design:</strong> Compact, wearable form factor created via 3D printing for comfort during extended use.</li>
            </ul>

            <h2>Engineering Details</h2>
            <ul>
                <li><strong>Mechanical:</strong> Iterative CAD modeling in Fusion 360 to house electronics compactly.</li>
                <li><strong>Electronics:</strong> Microcontroller-driven PWM signals control vibration intensity and accumulation.</li>
            </ul>

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
