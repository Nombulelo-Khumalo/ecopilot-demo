import React from "react";

const AlertCard = ({ resource, region, cost, co2, recommendation, onAction }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4 border-l-4 border-red-400">
      <h2 className="text-xl font-semibold">{resource}</h2>
      <p className="text-gray-700">Region: {region}</p>
      <p className="text-gray-700">Estimated Monthly Cost: ${cost}</p>
      <p className="text-gray-700">CO₂ Emissions: {co2} kg</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onAction("approve", resource)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {recommendation === "stop" ? "Stop Now" : "Resize"}
        </button>
        <button
          onClick={() => onAction("ignore", resource)}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Ignore
        </button>
      </div>
    </div>
  );
};

export default AlertCard
