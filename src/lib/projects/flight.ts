import { Project } from "../types";

export const flight: Project = {
    id: "flight",
    title: "ATL Flight Price Predictor",
    meta: "Oct 2023 - Dec 2023 | Machine Learning Project",
    image: "/portfolio/assets/flight_predictor/flight_price_predictor.png",
    technologies: ["Python", "Amadeus API", "Lasso Regression", "Pandas"],
    summary: "Developed a flight price prediction model using real-time Amadeus API data to overcome limitations of static datasets and linear assumptions.",
    features: [
        "Amadeus Flight Offers Search API integration for real-time data from 400+ airlines",
        "Feature engineering of 13 key variables including scarce inventory metrics",
        "Custom data cleaning pipeline for ISO 8601 duration conversion",
        "Lasso Regression (L1) for dimensionality reduction and feature selection"
    ],
    takeaways: [
        "Identified 'seatsRemaining' as the most significant predictor, indicating scarcity drives pricing",
        "Discovered airline carrier choice significantly impacts base pricing models",
        "Found departure date to be statistically insignificant compared to dynamic supply metrics"
    ],
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
};
