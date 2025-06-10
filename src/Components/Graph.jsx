import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,ResponsiveContainer} from "recharts"
function Graph()
{
  const data=[
    {date:"2025-05-21", time:0},
    {date:"2025-05-22", time:5},
    {date:"2025-05-23", time:0},
    {date:"2025-05-24", time:6},
    {date:"2025-05-25", time:1},
    {date:"2025-05-26", time:3},
    {date:"2025-05-27", time:7},
    {date:"2025-05-28", time:2},
    {date:"2025-05-29", time:4},
    {date:"2025-05-30", time:8}
  ]

  return(<>
  <div className="w-[745px] h-[290px] bg-white p-2 rounded-xl">
    <ResponsiveContainer>
      <LineChart data={data}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid stroke="#ccc" vertical={false}/>
        <Line type="linear" dataKey="time" stroke="#1763E5"/>
        <Tooltip/>

      </LineChart>
    </ResponsiveContainer>
  </div>
  </>)


}
export default Graph