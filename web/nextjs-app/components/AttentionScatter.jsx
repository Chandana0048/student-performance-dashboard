"use client";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AttentionScatter({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis type="number" dataKey="attention" name="Attention" />
        <YAxis type="number" dataKey="assessment_score" name="Score" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Students"
          data={data}
          fill="#22c55e"
          animationDuration={800}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
