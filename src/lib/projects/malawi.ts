import { Project } from "../types";

export const malawi: Project = {
    id: "malawi",
    title: "EWB - GT Malawi Project",
    meta: "Oct 2021 - Dec 2024 | Project & Technical Lead",
    image: "/portfolio/assets/ewb/ewb_malawi.jpg",
    technologies: ["Civil Engineering", "Project Management", "AutoCAD"],
    summary: "Designed and implemented a sustainable sanitation facility for Mpitilira Primary School in Malawi, replacing condemned infrastructure with a locally-buildable solution.",
    features: [
        "Reinforced concrete ring beam foundation to prevent differential settlement in soft soil",
        "Solar-driven Ventilated Improved Pit (VIP) mechanism for odor control",
        "Remote WhatsApp-based construction oversight protocol for QA/QC",
        "Sustainable design using locally sourced bricks, sand, and cement"
    ],
    takeaways: [
        "Provided safe sanitation for 20 staff members, directly reducing cholera risk",
        "Completed on-time and under the $15,000 budget despite currency fluctuations",
        "Won 3rd Place in GAWP competition for technical merit and social impact"
    ],
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
};
