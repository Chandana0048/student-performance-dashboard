"use client";
import { useState, useMemo } from "react";
import Papa from "papaparse";

export default function StudentTable({ students }) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = useMemo(() => {
    return students
      .filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        let x = a[sortKey];
        let y = b[sortKey];
        if (typeof x === "string") x = x.toLowerCase();
        if (typeof y === "string") y = y.toLowerCase();
        if (x < y) return sortDir === "asc" ? -1 : 1;
        if (x > y) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
  }, [students, search, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);

  const exportCSV = () => {
    const csv = Papa.unparse(rows);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2 mb-2">
        <input
          className="border rounded px-2 py-1"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={exportCSV}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Download CSV
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th
              onClick={() => toggleSort("name")}
              className="cursor-pointer px-2 py-1"
            >
              Name
            </th>
            <th
              onClick={() => toggleSort("assessment_score")}
              className="cursor-pointer px-2 py-1"
            >
              Score
            </th>
            <th className="px-2 py-1">Class</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((s, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="px-2 py-1">{s.name}</td>
              <td className="px-2 py-1">{s.assessment_score}</td>
              <td className="px-2 py-1">{s.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-between mt-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
