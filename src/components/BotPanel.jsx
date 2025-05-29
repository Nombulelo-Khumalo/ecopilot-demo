import React from "react";

const BotPanel = ({ resource, cost, co2 }) => {
  return (
    <div className="bg-blue-50 border border-blue-300 p-4 rounded-xl shadow mb-6">
      <p className="text-blue-800">
        Hey team! I found an idle instance <strong>{resource}</strong> costing <strong>${cost}/mo</strong> and
        emitting <strong>{co2}kg</strong> of CO₂. Should I take action?
      </p>
    </div>
  );
};

export default BotPanel
