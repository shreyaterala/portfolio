import { Project } from "../types";

export const sock: Project = {
    id: "sock",
    title: "Smart Shrinker Compression Sleeve",
    meta: "Aug 2024 - Dec 2024 | Bioinstrumentation",
    image: "/portfolio/assets/compression_sock/compression_sock.jpg",
    technologies: ["Wearable Tech", "Mechatronics", "Signal Processing"],
    summary: "'Smart Shrinker' compression sleeve combining traditional therapy with integrated sensing to track limb volume, temp, and humidity for amputees.",
    features: [
        "Conductive Fabric sensor utilizing resistance changes to measure circumference",
        "ESP32 microcontroller with LiPo power for wireless telemetry",
        "Integrated DHT sensor for early inflammation detection",
        "Custom Voltage Divider circuit with signal averaging for noise mitigation"
    ],
    takeaways: [
        "Successfully tracked limb circumference changes as small as 0.5cm",
        "Validated 77 Ohm Sheet Texture fabric for highest linearity",
        "Enabled remote patient monitoring via Bluetooth dashboard"
    ],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>Over 500,000 Americans experience limb loss annually. Post-amputation care is critical, as fluctuations in residual limb volume can lead to improper prosthetic fit, skin breakdown, and infection. Existing solutions (shrinkers, rigid bandages) provide compression but lack <strong>real-time monitoring capabilities</strong>, forcing clinicians to rely on subjective patient feedback.</p>
        <p>This project introduces a "Smart Shrinker" that combines traditional compression therapy with integrated sensing to track limb volume, temperature, and humidity, enabling early detection of complications like lymphedema.</p>

        <h2>Project Objectives</h2>
        <ul>
            <li><strong>Multi-Sensor Data Collection:</strong> Integrate force sensing resistors and conductive fabric to track limb dimensional changes within <strong>&plusmn;0.5 cm</strong>.</li>
            <li><strong>Infection Monitoring:</strong> Detect early signs of inflammation via real-time temperature and humidity tracking.</li>
            <li><strong>Wireless Telemetry:</strong> Transmit sensor data via Bluetooth to a clinical dashboard for remote monitoring.</li>
        </ul>

        <h2>System Architecture</h2>
        <p>The system is built around an <strong>ESP32 microcontroller</strong> powered by a LiPo battery. It aggregates data from three distinct sensor modalities before wirelessly transmitting it to a laptop-based clinician dashboard.</p>
        <div class="flex justify-center my-6">
            <img src="/portfolio/assets/compression_sock/functional_block_diagram.png" alt="System Block Diagram" class="max-w-full h-auto" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
        </div>
        
        <h2>Engineering Implementation</h2>
        <h3>Sensing Principle: Conductive Fabric</h3>
        <p>Unlike standard strain gauges, we utilized <strong>Conductive Fabric</strong> to measure limb circumference changes. As the fabric stretches, its electrical resistance changes. We implemented a voltage divider circuit to measure this resistance:</p>
        <ul>
            <li><strong>Circuit Topology:</strong> The conductive fabric acts as the variable resistor ($R_{fabric}$) in series with a known reference resistor. By measuring the voltage drop, we calculate the instantaneous resistance.</li>
            <li><strong>Signal Conditioning:</strong> To mitigate noise, the firmware takes the mean of <strong>20 ADC readings</strong> over a 1-second interval before calculating the resistance.</li>
        </ul>
         <img src="/portfolio/assets/compression_sock/signal_processing_formulas.png" alt="Signal Processing Logic" class="center-img" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">


        <h3>Material Selection Study</h3>
        <p>We compared three conductive fabric candidates to optimize sensitivity:</p>
        <ul>
            <li><strong>Candidates:</strong> Sheet Texture vs. Cloth Texture with varying resistivities (55&Omega;, 77&Omega;, 46&Omega;).</li>
            <li><strong>Result:</strong> The <strong>77&Omega; Sheet Texture</strong> fabric demonstrated the highest linearity and dynamic range under stretch, making it suitable for detecting subtle limb volume changes.</li>
        </ul>
         <img src="/portfolio/assets/compression_sock/fabric_testing_measurements.png" alt="Fabric Sensitivity Data" class="max-w-full h-auto" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
        <h3>Electronics & Packaging</h3>
        <p>A key design constraint was maintaining the "soft" feel of the textile while housing rigid components.</p>
        <ul>
            <li><strong>Snap-Fit Housing:</strong> Designed a custom 3D-printed enclosure that clips onto the sleeve. It features a snap-fit lid for easy battery access and protects the ESP32 from impact during daily use.</li>
            <li><strong>Safety:</strong> The system operates on low-voltage battery power with proper electrical isolation to ensure user safety during prolonged skin contact.</li>
        </ul>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <img src="/portfolio/assets/compression_sock/electronics_housing.jpeg" alt="CAD Housing" class="rounded-lg border border-slate-200/50 md:col-span-1 object-cover h-full">
            <img src="/portfolio/assets/compression_sock/electrical_wiring_diagram.png" alt="Wiring Diagram" class="rounded-lg border border-slate-200/50 md:col-span-2">
        </div>

        <h2>Testing & Validation</h2>
        <h3>Simulated Limb Trials</h3>
        <p>We validated the device using an <strong>Inflatable Air Bladder</strong> to mimic the swelling and shrinking of a residual limb. This allowed us to controllably vary the circumference by < 0.5cm increments while recording sensor outputs.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <img src="/portfolio/assets/compression_sock/test_setup.jpg" alt="Air Bladder Test Setup" class="rounded-lg border border-slate-200/50 md:col-span-1 object-cover h-full w-full">
            <img src="/portfolio/assets/compression_sock/tracking_interface.png" alt="Real-time Dashboard" class="rounded-lg border border-slate-200/50 md:col-span-2 w-full">
        </div>

        <h2>Performance & Results</h2>
        <ul>
            <li><strong>Precision:</strong> successfully tracked limb circumference changes as small as <strong>0.5cm</strong> in benchtop trials.</li>
            <li><strong>Environmental Sensing:</strong> The DHT sensor captured humidity and temperature shifts, validated by comparing "on-body" vs. "ambient" readings.</li>
            <li><strong>Connectivity:</strong> The Bluetooth link maintained a reliable stream (0.5Hz update rate) to the custom Python-based GUI for real-time visualization.</li>
        </ul>
    </div>`,
};
