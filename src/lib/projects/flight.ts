import { Project } from "../types";

export const flight: Project = {
    id: "flight",
    title: "ATL Flight Price Predictor",
    meta: "Oct 2023 - Dec 2023 | Machine Learning Project",
    image: "/portfolio/assets/flight_predictor/flight_price_predictor.png",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Random Forest", "KNN", "Lasso Regression"],
    summary: "Developed a comprehensive machine learning pipeline to predict economy flight prices for ATL routes. Achieved ~96% accuracy using Random Forest after benchmarking against KNN and Linear Regression models.",
    features: [
        "Comparative analysis of 3 models: Linear Regression, KNN, and Random Forest",
        "Achieved ~96% accuracy (R² = 0.96) with Random Forest optimizer",
        "Lasso Regression used for feature selection and dimensionality reduction",
        "Processed Kaggle dataset specifically filtering for economy flights to/from ATL"
    ],
    takeaways: [
        "Random Forest proved superior (MSE: 88.46) compared to Linear Regression (MSE: 1076)",
        "Linear Regression's poor performance (~50% accuracy) confirmed non-linear pricing relationships",
        "Total travel distance and arrival date were identified as the highest-impact features",
        "Trade-off observed between model accuracy (Random Forest) and interpretability (Linear models)"
    ],
    content: `<div>
        <h2>Project Definition</h2>
        <p>Flight ticket prices are highly dynamic and significantly influence consumer travel choices. This project aimed to develop a machine learning model specifically geared towards <strong>Georgia Tech students</strong>, predicting costs for economy-class flights to and from <strong>Hartsfield-Jackson Atlanta International Airport (ATL)</strong>. By focusing strictly on economy seats and pruning unrelated data, we aimed to create a highly specific and accurate predictor.</p>

        <h2>Data Pipeline & Feature Engineering</h2>
        <p>We utilized a <strong>Kaggle Flight Prices Dataset</strong>, applying a rigorous cleaning process that involved simple imputation for missing values, normalization of numerical data, and pruning of irrelevant features. To identify the most predictive variables, we employed <strong>Lasso Regression</strong> for feature selection.</p>
        
        <h3 class="text-lg font-semibold mt-4 mb-2">Key Features (Ranked by Importance)</h3>
        <ul class="list-decimal pl-5 space-y-1 mb-6 text-slate-700">
            <li><strong>Total Travel Distance:</strong> The primary driver of cost.</li>
            <li><strong>Arrival Date:</strong> Day of year (1-365).</li>
            <li><strong>Departure Time:</strong> Minute of the day (0-1439).</li>
            <li><strong>Arrival Time:</strong> Minute of the day (0-1439).</li>
            <li><strong>Starting Airport:</strong> IATA code.</li>
            <li><strong>Segments Duration:</strong> Total flight time in seconds.</li>
            <li><strong>Destination Airport:</strong> IATA code.</li>
        </ul>

        <h2>Model Development & Results</h2>
        <p>We implemented and compared three distinct supervised learning algorithms to determine the best approach for price prediction:</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div class="bg-red-50 p-4 rounded-lg border border-red-100">
                <h4 class="font-bold text-red-800 mb-2">Linear Regression</h4>
                <p class="text-sm text-slate-700 mb-2">Failed to capture complexities.</p>
                <ul class="text-sm space-y-1">
                    <li><strong>Accuracy:</strong> ≈50%</li>
                    <li><strong>MSE:</strong> 1076</li>
                    <li><strong>R-squared:</strong> 0.51</li>
                </ul>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h4 class="font-bold text-blue-800 mb-2">K-Nearest Neighbors</h4>
                <p class="text-sm text-slate-700 mb-2">High accuracy, low interpretability.</p>
                <ul class="text-sm space-y-1">
                    <li><strong>Accuracy:</strong> ≈90%</li>
                    <li><strong>MSE:</strong> ~210</li>
                    <li><strong>R-squared:</strong> ~0.905</li>
                </ul>
            </div>

            <div class="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm">
                <h4 class="font-bold text-green-800 mb-2">Random Forest</h4>
                <p class="text-sm text-slate-700 mb-2">Best performance.</p>
                <ul class="text-sm space-y-1">
                    <li><strong>Accuracy:</strong> ≈96%</li>
                    <li><strong>MSE:</strong> 88.46</li>
                    <li><strong>R-squared:</strong> 0.9599</li>
                </ul>
            </div>
        </div>

        <h2>Discussion & Conclusion</h2>
        <p>Our analysis revealed a clear hierarchy in model performance using the selected features. <strong>Linear Regression</strong> was largely unreliable, with an MSE of 1076, proving that flight pricing follows non-linear patterns that simple regression cannot capture. <strong>KNN</strong> performed significantly better (~90% accuracy), but lacked transparency in how specific features influenced the output.</p>
        <p>The <strong>Random Forest</strong> model emerged as the superior choice, achieving an <strong>R-squared of 0.96</strong> and the lowest error rate (MSE 88.46). While it sacrifices some interpretability compared to linear models, its ability to handle non-linear interactions between features like travel distance and seasonality made it the most effective tool for this specific problem domain.</p>
    </div>`,
};
