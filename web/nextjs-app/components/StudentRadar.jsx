"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function StudentRadar({ student }) {
  const data = [
    { metric: "Comprehension", value: student.comprehension },
    { metric: "Attention", value: student.attention },
    { metric: "Focus", value: student.focus },
    { metric: "Retention", value: student.retention },
    { metric: "Engagement", value: student.engagement_time },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <Tooltip />
        <Legend />
        <Radar
          name={`Student ${student.student_id}`}
          dataKey="value"
          stroke="#f59e0b"
          fill="#fcd34d"
          fillOpacity={0.6}
          animationDuration={800}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
