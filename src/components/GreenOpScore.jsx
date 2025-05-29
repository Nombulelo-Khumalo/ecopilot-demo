import React from "react";

const GreenOpScore = ({ score }) => {
  return (
    <div className="bg-green-50 border border-green-200 p-4 rounded-xl shadow mb-6">
      <h2 className="text-lg font-semibold text-green-700 mb-2">GreenOps Score</h2>
      <div className="w-full bg-green-100 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${score}%` }}
        ></div>
      </div>
      <p className="text-green-700 mt-1 font-bold">{score} / 100</p>
    </div>
  );
};

export default GreenOpScore;
