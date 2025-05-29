import React, { useState, useEffect } from "react";
import AlertCard from "./components/AlertCard";
import Dashboard from "./components/Dashboard";
import BotPanel from "./components/BotPanel";
import GreenOpScore from "./components/GreenOpScore";
import data from "./data/awsMockData.json";

const App = () => {
  const [alerts, setAlerts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [score, setScore] = useState(60);

  useEffect(() => {
    setAlerts(data);
    setChartData([
      { name: "Jan", cost: 300, co2: 12 },
      { name: "Feb", cost: 420, co2: 18 },
      { name: "Mar", cost: 380, co2: 16 },
      { name: "Apr", cost: 510, co2: 22 },
      { name: "May", cost: 552, co2: 24 },
    ]);
  }, []);

  const handleAction = (action, resource) => {
    if (action === "approve") {
      alert(`Action approved: ${resource} stopped.`);
      setScore(prev => Math.min(100, prev + 10));
    } else {
      alert(`Action ignored for: ${resource}`);
    }
    setAlerts(prev => prev.filter(alert => alert.resource !== resource));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-700">EcoPilot.AI Anomaly Dashboard</h1>
      <Dashboard data={chartData} />
      <GreenOpScore score={score} />
      {alerts.length > 0 && (
        <BotPanel
          resource={alerts[0].resource}
          cost={alerts[0].cost}
          co2={alerts[0].co2}
        />
      )}
      {alerts.map(alert => (
        <AlertCard key={alert.id} {...alert} onAction={handleAction} />
      ))}
    </div>
  );
};

export default App
