import { Project } from "../types";

export const cis: Project = {
    id: "cis",
    title: "Computer Integrated Surgery",
    meta: "Oct 2025 - Dec 2025 | Academic Project",
    image: "/portfolio/assets/cis1/cis_cover.png",
    technologies: ["MATLAB", "Linear Algebra (SVD)", "Bernstein Polynomials"],
    content: `<div>
        <h2>Context & Motivation</h2>
        <p>In modern neurosurgery, sub-millimeter precision is not optional—it is a requirement. "Computer Integrated Surgery" focused on building a complete stereotactic navigation system from scratch. This project addresses the critical "interventional loops" of tracking, calibration, registration, and error correction, translating preoperative imaging (CT/MRI) into real-time surgical guidance.</p>

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

        <h2>Mathematical Implementation</h2>
        <p>The system relies on rigorous linear algebra and computational geometry principles to map between the <strong>Calibration Frame ($F_c$)</strong>, <strong>Optical Tracker Frame ($F_A$)</strong>, and <strong>EM Tracker Frame ($F_D$)</strong>.</p>
        
        <h3>1. Rigid Body Registration (Arun's Method)</h3>
        <p>To align the coordinate systems, we implemented a 3D Point Set Registration algorithm.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
             <div>
                <h4 class="font-bold text-sm mb-2">Algorithm Steps:</h4>
                <ul class="list-decimal pl-5 text-sm space-y-1">
                    <li><strong>Centroid Alignment:</strong> Compute centroids $\\bar{x}$, $\\bar{X}$ and center the points to remove translation.</li>
                    <li><strong>SVD:</strong> Compute the cross-covariance matrix $H = \\sum x'_i (X'_i)^T$ and its Singular Value Decomposition $[U, S, V] = \\text{svd}(H)$.</li>
                    <li><strong>Rotation:</strong> solve $R = V U^T$. We ensure $\\det(R) = +1$ to prevent reflection artifacts.</li>
                     <li><strong>Translation:</strong> Recalculate $t = \\bar{X} - R\\bar{x}$.</li>
                </ul>
            </div>
            <div>
                 <img src="/portfolio/assets/cis1/cis1%20pa1%20problem%204.png" alt="Registration Setup" class="rounded-lg border border-slate-200/50">
                 <p class="text-xs text-center mt-2 text-slate-500">Registration Reference Frames</p>
            </div>
        </div>

        <h3>2. Pivot Calibration</h3>
        <p>We solve for the unknown tool tip offset $t_{tip}$ and the fixed pivot point $p_{dimple}$ by treating it as a linear least-squares problem:</p>
        <div class="bg-slate-100 p-4 rounded-lg my-4 font-mono text-sm text-center">
            $[R_i | -I] \\cdot [t_{tip} ; p_{dimple}] = -t_i$
        </div>
        <p>By stacking matrices for $N$ frames, we solve $Ax=b$ using the <code>lsqr</code> method to find the 6-unknowns (3 for tip, 3 for pivot).</p>
        <img src="/portfolio/assets/cis1/cis1%20pa1%20problem%205_6.png.jpg" alt="Pivot Calibration Setup" style="width: 100%; max-width: 600px; display: block; margin: 1.5rem auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">

        <h3>3. Distortion Correction (Bernstein Polynomials)</h3>
        <p>Electromagnetic tracking is susceptible to field distortion. We implemented a 5th-order 3D Bernstein polynomial correction map. This required solving for 216 coefficients ($6^3$) to map distorted EM readings back to the ground-truth optical space.</p>
        <img src="/portfolio/assets/cis1/cis1%20pa2%20(1).jpg" alt="Distortion Correction Mapping" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">

        <h2>Algorithmic Modules</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div>
                <h3 class="font-bold text-lg mb-2">Iterative Closest Point (ICP)</h3>
                 <p>For surface registration, we implemented a <strong>Generalized ICP</strong> algorithm with anisotropic covariance weighting. This improved convergence speed by 50% (11.0s vs 37.2s) compared to standard point-to-point ICP.</p>
                 <img src="/portfolio/assets/cis1/cis1%20pa3%20icp.png.jpg" alt="ICP Convergence" class="rounded-lg mt-4 border border-slate-200/50">
            </div>
            <div>
                <h3 class="font-bold text-lg mb-2">Covariance Trees</h3>
                 <p>To support real-time interaction with high-res anatomical meshes, we constructed spatial search trees (Covariance Trees). This reduced closest-point query complexity from linear $O(N)$ to logarithmic $O(\\log N)$.</p>
                 <img src="/portfolio/assets/cis1/Covariance_Tree_Visual.png" alt="Covariance Tree Structure" class="rounded-lg mt-4 border border-slate-200/50">
            </div>
        </div>

        <h2>Performance & Results</h2>
        <h3 class="text-lg font-bold mt-4">Error Analysis & Robustness</h3>
        <p>We validated the system against three noise models to quantify registration error. The <strong>Bernstein Polynomial</strong> correction was critical in mitigating the >3mm error introduced by EM field distortion.</p>
        
        <div class="overflow-x-auto my-6">
            <table class="w-full text-sm text-left text-slate-600 border border-slate-200 rounded-lg overflow-hidden">
                <thead class="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th class="px-6 py-3 font-bold">Noise Condition</th>
                        <th class="px-6 py-3">Mean Diff Norm (mm)</th>
                        <th class="px-6 py-3">Max Diff Norm (mm)</th>
                        <th class="px-6 py-3">Impact</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 bg-white">
                    <tr class="hover:bg-slate-50">
                        <td class="px-6 py-4 font-medium text-ink">Baseline (None)</td>
                        <td class="px-6 py-4">0.00</td>
                        <td class="px-6 py-4">0.01</td>
                        <td class="px-6 py-4 text-green-600">Ideal</td>
                    </tr>
                    <tr class="hover:bg-slate-50">
                        <td class="px-6 py-4 font-medium text-ink">Optical Tracker Jiggle</td>
                        <td class="px-6 py-4">0.01</td>
                        <td class="px-6 py-4">0.03</td>
                        <td class="px-6 py-4 text-green-600">Negligible</td>
                    </tr>
                    <tr class="hover:bg-slate-50">
                        <td class="px-6 py-4 font-medium text-ink">EM Noise</td>
                        <td class="px-6 py-4">0.46</td>
                        <td class="px-6 py-4">0.79</td>
                        <td class="px-6 py-4 text-yellow-600">Minor</td>
                    </tr>
                    <tr class="hover:bg-slate-50">
                        <td class="px-6 py-4 font-medium text-ink">EM Distortion</td>
                        <td class="px-6 py-4 font-bold text-red-600">3.51</td>
                        <td class="px-6 py-4 text-red-600">7.09</td>
                        <td class="px-6 py-4 text-red-600">Critical (Requires Correction)</td>
                    </tr>
                     <tr class="bg-indigo-50/50 hover:bg-indigo-50">
                        <td class="px-6 py-4 font-medium text-indigo-700">With Correction</td>
                        <td class="px-6 py-4 text-indigo-700">&lt; 0.50</td>
                        <td class="px-6 py-4 text-indigo-700">~ 1.10</td>
                        <td class="px-6 py-4 text-indigo-700">Clinical Standard Met</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <ul class="list-disc pl-5 my-2">
            <li><strong>Registration Accuracy:</strong> The unit tests confirmed rotation and translation recovery errors $< 1 \\times 10^{-6}$.</li>
            <li><strong>Search Efficiency:</strong> Covariance Trees reduced point-to-mesh query times from linear $O(N)$ to logarithmic $O(\\log N)$.</li>
        </ul>
        <img src="/portfolio/assets/cis1/pa1-debug-c-2D_error_visual.png" alt="Error Analysis Visual" style="width: 100%; border-radius: 8px; margin: 1.5rem 0; border: 1px solid rgba(255,255,255,0.1);">
    </div>`,
};
