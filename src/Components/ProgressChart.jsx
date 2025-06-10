import React from "react";

const ProgressChart = () => {
  return (
    <div className="w-[325px] h-[325px] flex flex-col items-center justify-center ml-[20px] bg-white rounded-2xl shadow-md relative">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#fef7e0" // Light background circle
          strokeWidth="20"
          fill="none"
        />

        {/* Arc segments with updated colors */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#FFD200" // Yellow
          strokeWidth="5"
          fill="none"
          strokeDasharray="12.56 87.44"
          strokeDashoffset="0"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#FFD200" // Orange
          strokeWidth="5"
          fill="none"
          strokeDasharray="12.56 87.44"
          strokeDashoffset="-13"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#F68D2B" // Pink
          strokeWidth="5"
          fill="none"
          strokeDasharray="12.56 87.44"
          strokeDashoffset="-26"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#F68D2B" // Blue
          strokeWidth="5"
          fill="none"
          strokeDasharray="12.56 87.44"
          strokeDashoffset="-39"
          strokeLinecap="round"
        />
      </svg>

      {/* Center Percentage Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-xl font-bold text-gray-800">50%</div>
      </div>
    </div>
  );
};

export default ProgressChart;
