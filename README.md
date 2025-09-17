Cognitive Skills & Student Performance Dashboard

This project is something I worked on to connect my **data science learning** with a bit of **full-stack development**.  
The idea was simple: analyze how cognitive skills (like attention, focus, retention, comprehension, engagement time) affect student performance, and then bring those findings to life in an interactive dashboard.


What I Did
(Python + Jupyter Notebook)
- Created a **synthetic student dataset** (`students.csv`).
- Ran **exploratory data analysis**:
  - Looked at distributions of scores.
  - Checked correlations between skills and performance.
  - Plotted heatmaps and boxplots.
- Built models:
  - **Linear Regression** (baseline).
  - **Random Forest** (performed better and showed which skills mattered most).
- Did **clustering (KMeans)** to group students into “learning personas” and visualized them with PCA.

 Dashboard (Next.js + Recharts)
I didn’t just want to stop at Jupyter Notebook. So, I built a **Next.js app** to make the findings interactive:
- **Overview cards** → total students, average score, and the top-performing class.
- **Charts**:
  - Bar chart: Average score per skill group.
  - Scatter plot: Attention vs. assessment score.
  - Radar chart: Profile of a single student.
- **Student Table** with:
  - Search by name,
  - Sorting by score/name,
  - Pagination,
  - Export filtered rows to CSV.
- **Insights Section** → key takeaways from the analysis.
- Made the dashboard responsive (desktop + mobile) and added tooltips, hover animations, and consistent colors.

 Project Structure
 ├── notebooks/ # Jupyter notebook analysis
│ └── student_analysis.ipynb
├── data/ # Dataset
│ └── students.csv
├── docs/screenshots/ # Saved visuals & dashboard screenshots
├── web/nextjs-app/ # Next.js dashboard
│ ├── app/ or pages/
│ ├── components/
│ └── public/data.json
└── README.md


---

How to Run

### 1. Clone the repo
git clone https://github.com/Chandana0048/student-performance-dashboard.git
cd student-dashboard/web/nextjs-app

install dependencies
npm install

start the app
npm run dev


Deployment

I deployed this on Vercel:

Pushed the repo to GitHub.

Imported it into Vercel
Set the root directory to web/nextjs-app.

Got a live link:
https://student-dashboard.vercel.app

Findings

Some of the interesting things I noticed:

Students with higher attention levels scored 10–15% better.

Retention had a strong relationship with engagement time.

Class 8th turned out to be the overall top performer.

A subgroup of students consistently struggled with comprehension → this could be an area for interventions.

Tech I Used

Python (Pandas, Seaborn, Scikit-learn) for analysis & modeling.

Next.js (React) for the interactive dashboard.

Recharts for visualizations.

Tailwind CSS for styling.

Vercel for deployment.



