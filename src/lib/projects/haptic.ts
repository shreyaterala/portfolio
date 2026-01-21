import { Project } from "../types";

export const haptic: Project = {
    id: "haptic",
    title: "VISTA - Haptic Museum Display",
    meta: "Oct 2025 - Dec 2025 | Haptics & Assitive Technology",
    image: "/portfolio/assets/haptic_museum/haptic_museum_main.jpg",
    technologies: ["Fusion 360", "Arduino", "C++", "Soft Robotics"],
    summary: "Designed a tactile display (VISTA) with a 7x5 pin array to convey art structure and appearance to visually impaired individuals.",
    features: [
        "7x5 pin array with independent cam-actuated height control",
        "Color-to-Height mapping algorithm (Yellow > Red > Blue > White)",
        "Silicone overlay (Ecoflex 00-30) for continuous tactile surface",
        "Distributed Arduino control architecture handling 35 servos"
    ],
    takeaways: [
        "Achieved 100% success rate in shape recognition (Flag Identification Study)",
        "Demonstrated feasibility of multi-modal encoding (Shape + Color via Height)",
        "Validated the need for a tactile legend to improve color distinguishability"
    ],
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
        <p class="text-slate-500 italic text-sm">Demo videos unavailable.</p>
    </div>`,
};
