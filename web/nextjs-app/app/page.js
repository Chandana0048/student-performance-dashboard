"use client";

import { useEffect, useState } from "react";
import SkillBar from "../components/SkillBar";
import AttentionScatter from "../components/AttentionScatter";
import StudentRadar from "../components/StudentRadar";
import StudentTable from "../components/StudentTable";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState(null);
  const [highlightTop, setHighlightTop] = useState(false);

  // Load dataset
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  if (students.length === 0) return <p className="p-6">Loading...</p>;

  // Overview stats
  const avgScore = (
    students.reduce((a, b) => a + b.assessment_score, 0) / students.length
  ).toFixed(1);

  const topClass = [...new Set(students.map((s) => s.class))]
    .map((cls) => {
      const scores = students
        .filter((s) => s.class === cls)
        .map((s) => s.assessment_score);
      return { cls, avg: scores.reduce((a, b) => a + b, 0) / scores.length };
    })
    .sort((a, b) => b.avg - a.avg)[0].cls;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold mb-6">
        📊 Student Performance Dashboard
      </h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-4 hover:scale-105 transition">
          <p className="text-gray-500">Total Students</p>
          <p className="text-2xl font-semibold">{students.length}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 hover:scale-105 transition">
          <p className="text-gray-500">Average Score</p>
          <p className="text-2xl font-semibold">{avgScore}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 hover:scale-105 transition">
          <p className="text-gray-500">Top Class</p>
          <p className="text-2xl font-semibold">{topClass}</p>
        </div>
      </div>

      {/* Charts */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-2">Average Score by Class</h2>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={highlightTop}
              onChange={(e) => setHighlightTop(e.target.checked)}
            />
            Highlight Top 5
          </label>
        </div>
        <SkillBar data={students} highlightTop={highlightTop} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Attention vs Score</h2>
        <AttentionScatter data={students} />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Student Profile (Radar)</h2>
        <button
          onClick={() => setSelected(students[0])}
          className="bg-indigo-600 text-white px-3 py-1 rounded-lg shadow hover:bg-indigo-700"
        >
          Show Student 1
        </button>
        {selected && <StudentRadar student={selected} />}
      </section>

      {/* Insights */}
      <section>
        <h2 className="text-xl font-bold mb-2">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            📌 Students with high attention generally score 10–15% higher.
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            📌 Retention is strongly linked with engagement time.
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            📌 Class 8th showed the best overall performance.
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            📌 A group of students need focused interventions in comprehension.
          </div>
        </div>
      </section>

      {/* Table */}
      <section>
        <h2 className="text-xl font-bold mb-2">Student Records</h2>
        <StudentTable students={students} />
      </section>
    </div>
  );
}
