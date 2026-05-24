/**
 * Skills grouped by capability axis.
 *
 * Each skill has `aliases` — substrings matched (case-insensitive) against any
 * project's `technologies` array to compute which projects demonstrate that
 * skill at runtime. This keeps the source of truth in the project files
 * themselves rather than duplicating mappings here.
 */

export interface Skill {
    name: string;
    aliases: string[]; // matched against project.technologies (case-insensitive substring)
}

export interface SkillGroup {
    axis: string;
    blurb: string;
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        axis: "Mechanical Design",
        blurb: "CAD, FEA, fabrication, mechatronic systems",
        skills: [
            { name: "SolidWorks", aliases: ["SolidWorks", "Solidworks"] },
            { name: "Creo Parametric", aliases: ["Creo Parametric", "Creo"] },
            { name: "Fusion 360", aliases: ["Fusion 360"] },
            { name: "AutoCAD", aliases: ["AutoCAD"] },
            { name: "FEA / ANSYS", aliases: ["FEA", "ANSYS"] },
            { name: "PCB Design", aliases: ["PCB Design"] },
            { name: "Rapid Prototyping", aliases: ["Rapid Prototyping", "Fabrication", "Metal Fabrication"] },
            { name: "Mechatronics", aliases: ["Mechatronics"] },
            { name: "Pneumatics", aliases: ["Pneumatics"] },
        ],
    },
    {
        axis: "Robotics & Controls",
        blurb: "Kinematics, manipulation, classical & modern control",
        skills: [
            { name: "ROS", aliases: ["ROS"] },
            { name: "Kinematics", aliases: ["Kinematics"] },
            { name: "Control Theory", aliases: ["Control Theory", "Controls", "PID Control"] },
            { name: "Linear Algebra", aliases: ["Linear Algebra"] },
            { name: "Odometry", aliases: ["Odometry"] },
            { name: "Sensor Fusion", aliases: ["Sensor Fusion"] },
            { name: "Soft Robotics", aliases: ["Soft Robotics"] },
            { name: "Human-Robot Interaction", aliases: ["Human-Robot Interaction"] },
            { name: "System Integration", aliases: ["System Integration"] },
        ],
    },
    {
        axis: "Machine Learning & RL",
        blurb: "Deep learning, reinforcement learning, classical ML",
        skills: [
            { name: "PyTorch", aliases: ["PyTorch"] },
            { name: "TD3", aliases: ["TD3"] },
            { name: "World Models", aliases: ["World Models"] },
            { name: "Scikit-Learn", aliases: ["Scikit-Learn"] },
            { name: "Random Forest", aliases: ["Random Forest"] },
            { name: "Lasso Regression", aliases: ["Lasso Regression"] },
            { name: "KNN", aliases: ["KNN"] },
            { name: "YOLOv8 / OpenCV", aliases: ["YOLOv8", "OpenCV"] },
            { name: "Safety Gymnasium", aliases: ["Safety Gymnasium"] },
            { name: "Pandas", aliases: ["Pandas"] },
        ],
    },
    {
        axis: "Embedded & Hardware",
        blurb: "Microcontroller firmware, sensors, wireless",
        skills: [
            { name: "Arduino", aliases: ["Arduino"] },
            { name: "BLE", aliases: ["BLE"] },
            { name: "Wearable Tech", aliases: ["Wearable Tech"] },
            { name: "Signal Processing", aliases: ["Signal Processing"] },
            { name: "Haptics", aliases: ["Haptics"] },
            { name: "MuJoCo", aliases: ["MuJoCo"] },
            { name: "Bernstein Polynomials", aliases: ["Bernstein Polynomials"] },
            { name: "User Research", aliases: ["User Research"] },
        ],
    },
    {
        axis: "Languages & Tooling",
        blurb: "Day-to-day programming languages and environments",
        skills: [
            { name: "Python", aliases: ["Python"] },
            { name: "C++", aliases: ["C++"] },
            { name: "MATLAB", aliases: ["MATLAB"] },
            { name: "Git", aliases: ["Git"] },
            { name: "Project Management", aliases: ["Project Management", "Agile", "Scrum"] },
            { name: "Civil Engineering", aliases: ["Civil Engineering"] },
            { name: "Bioinstrumentation", aliases: ["Bioinstrumentation"] },
        ],
    },
];
