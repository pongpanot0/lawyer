import dayjs from "dayjs";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const MiniCalendar = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const today = dayjs();
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(today.month());
  const [selectedYear, setSelectedYear] = useState(today.year());
  const [selectedDate, setSelectedDate] = useState(today.format("YYYY-MM-DD"));
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const startDate = dayjs(`${selectedYear}-${selectedMonthIndex + 1}-01`);
  const daysInMonth = startDate.daysInMonth();
  const days = Array.from({ length: daysInMonth }, (_, i) =>
    startDate.add(i, "day")
  );

  useEffect(() => {
    const isCurrentMonth =
      selectedMonthIndex === today.month() && selectedYear === today.year();

    if (isCurrentMonth) {
      setSelectedDate(today.format("YYYY-MM-DD"));

      // scroll ไปหาวันนี้ถ้าอยู่ในเดือนปัจจุบัน
      const index = today.date() - 1;
      const blockStart = Math.floor(index / 5) * 5;
      setVisibleStartIndex(blockStart);
    } else {
      // รีเซตเป็นวันแรกของเดือน
      setSelectedDate(startDate.format("YYYY-MM-DD"));
      setVisibleStartIndex(0);
    }
  }, [selectedMonthIndex, selectedYear]);

  const handleMonthChange = (offset) => {
    let newMonth = selectedMonthIndex + offset;
    let newYear = selectedYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setSelectedMonthIndex(newMonth);
    setSelectedYear(newYear);
  };

  const goToToday = () => {
    setSelectedMonthIndex(today.month());
    setSelectedYear(today.year());
    setSelectedDate(today.format("YYYY-MM-DD"));

    const index = today.date() - 1;
    const blockStart = Math.floor(index / 5) * 5;
    setVisibleStartIndex(blockStart);
  };

  const handleSlide = (offset) => {
    let newStart = visibleStartIndex + offset;
    newStart = Math.max(0, Math.min(newStart, days.length - 5));
    setVisibleStartIndex(newStart);
  };

  const visibleDays = days.slice(visibleStartIndex, visibleStartIndex + 3);

  return (
    <div>
      {/* Header */}
   
       

        <div className="flex items-center justify-around gap-5">
          <button onClick={() => handleMonthChange(-1)} className="text-gray-500 hover:text-gray-700">
            <ChevronLeft size={16} />
          </button>

          <div className="text-sm font-semibold text-navy">
            {monthNames[selectedMonthIndex]} {selectedYear}
          </div>

          <button onClick={() => handleMonthChange(1)} className="text-gray-500 hover:text-gray-700">
            <ChevronRight size={16} />
          </button>
        </div>
      

      {/* 5-day slider */}
      <div className="flex justify-between items-center mb-2 mt-3">
        <button
          onClick={() => handleSlide(-3)}
          disabled={visibleStartIndex === 0}
          className={`p-1 rounded ${visibleStartIndex === 0 ? "text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
        >
          <ArrowLeft size={16} />
        </button>

        <div className="flex justify-between w-full px-2 text-sm">
          {visibleDays.map((day) => (
            <div
              key={day.format("YYYY-MM-DD")}
              onClick={() => setSelectedDate(day.format("YYYY-MM-DD"))}
              className={`flex flex-col items-center cursor-pointer px-2 py-1 rounded-lg transition-all ${
                selectedDate === day.format("YYYY-MM-DD")
                  ? " text-navy font-semibold"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div>{day.date()}</div>
              <div className="text-xs">{day.format("dd").toUpperCase()}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleSlide(3)}
          disabled={visibleStartIndex + 5 >= days.length}
          className={`p-1 rounded ${
            visibleStartIndex + 5 >= days.length
              ? "text-gray-300"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default MiniCalendar;
