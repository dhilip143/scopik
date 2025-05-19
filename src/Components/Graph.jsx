import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { name: "Week 1", value: 30 },
    { name: "Week 2", value: 45 },
    { name: "Week 3", value: 32 },
    { name: "Week 4", value: 48 },
    { name: "Week 5", value: 36 },
    { name: "Week 6", value: 55 },
  ];
  
  const Graph = () => {
    return (
      <div className="bg-white p-4 rounded-2xl shadow w-full">
        <h2 className="text-center text-gray-700 font-medium mb-4">Graph</h2>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#ff6b6b" stopOpacity={0.5} />
                  <stop offset="90%" stopColor="#4f46e5" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: "#999" }} />
              <YAxis tick={{ fill: "#999" }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#ff6b6b"
                fill="url(#colorValue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
  
        {/* Dots like slider indicator */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>
      </div>
    );
  };
  
  export default Graph;
  