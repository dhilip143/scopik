import { useState } from "react"
import Calendar from "react-calendar"
import "../index.css"
import "react-calendar/dist/Calendar.css"
function Calender()
{
  const [date,setDate]=useState(new Date())
  return(<>
  <div className="w-[250px]">
    <Calendar onChange={setDate} value={date}/>

  </div>
  
  </>)

}
export default Calender