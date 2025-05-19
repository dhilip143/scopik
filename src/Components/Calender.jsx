import React, { useState } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(null);

  // Example of dates when classes were attended (use your own logic or API data)
  const attendedDates = [
    "2025-01-02",
    "2025-01-04",
    "2025-01-08",
    "2025-01-11",
    "2025-01-28",
  ];

  const startDay = currentDate.startOf("month").startOf("week");
  const endDay = currentDate.endOf("month").endOf("week");

  const dateFormat = "D";
  const rows = [];
  let days = [];
  let day = startDay.clone();

  while (day.isBefore(endDay, "day")) {
    for (let i = 0; i < 7; i++) {
      const currentDay = day;
      const formattedDate = day.format("YYYY-MM-DD");
      const isToday = selectedDate && day.isSame(selectedDate, "day");
      const isAttended = attendedDates.includes(formattedDate);

      days.push(
        <div
          key={day.toString()}
          className={`w-10 h-10 flex items-center justify-center text-sm rounded-full cursor-pointer 
            ${isToday ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"} 
            ${isAttended && !isToday ? "relative after:content-[''] after:w-1.5 after:h-1.5 after:bg-blue-600 after:rounded-full after:absolute after:bottom-1.5" : ""}
          `}
          onClick={() => setSelectedDate(currentDay)}
        >
          {day.format(dateFormat)}
        </div>
      );

      day = day.add(1, "day");
    }
    rows.push(
      <div key={day.toString()} className="grid grid-cols-7 gap-1 mb-1">
        {days}
      </div>
    );
    days = [];
  }

  const goToPrevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const goToNextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md text-gray-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={goToPrevMonth} className="text-lg">&lt;</button>
        <h2 className="text-lg font-semibold">{currentDate.format("MMMM YYYY")}</h2>
        <button onClick={goToNextMonth} className="text-lg">&gt;</button>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-500 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days Grid */}
      {rows}

      {/* Legend */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        <span>Classes attended</span>
      </div>
    </div>
  );
};

export default Calendar;
