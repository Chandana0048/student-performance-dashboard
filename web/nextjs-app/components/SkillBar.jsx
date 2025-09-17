"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function SkillBar({ data, highlightTop }) {
  // Average score per class
  const avgByClass = Object.values(
    data.reduce((acc, s) => {
      if (!acc[s.class]) acc[s.class] = { class: s.class, total: 0, count: 0 };
      acc[s.class].total += s.assessment_score;
      acc[s.class].count++;
      return acc;
    }, {})
  ).map((d) => ({
    class: d.class,
    avg: d.total / d.count,
  }));

  let displayData = avgByClass;
  if (highlightTop) {
    displayData = [...avgByClass].sort((a, b) => b.avg - a.avg).slice(0, 5);
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={displayData}>
        <XAxis dataKey="class" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="avg" fill="#6366f1" animationDuration={800} />
      </BarChart>
    </ResponsiveContainer>
  );
}
