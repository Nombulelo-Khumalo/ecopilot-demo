import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-bold mb-4">Cost & Carbon Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cost" stroke="#3b82f6" name="Cost ($)" />
          <Line type="monotone" dataKey="co2" stroke="#22c55e" name="CO₂ (kg)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard
