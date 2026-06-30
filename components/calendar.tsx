"use client";

import { FaRegHeart } from "react-icons/fa";

export function Calendar({ year = 2025, month = 9, highlightDay = 8 }) {
  const monthNames = [
    "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս",
    "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
  ];
  const weekDays = ["Կիր","Երկ", "Երք", "Չրք", "Հնգ", "Ուրք", "Շբթ"];

  const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Կիրակի, 1=Երկ
  const daysInMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  return (
    <div className="mt-15 bg-[#ffffff] p-6 text-center">
      <h2 className="text-2xl FontMassis text-vrayi mb-1">{monthNames[month - 1]}</h2>
      <p className="text-xl FontMassis text-vrayi mb-4">{year}</p>

      <div className=" grid grid-cols-7 mb-2 text-xs font-medium text-vrayi">
        {weekDays.map((day) => (
          <div className="FontMassis" key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm">
        {calendarDays.map((day, idx) =>
          day ? (
            <div
              key={idx}
              className={` FontMassis py-2 rounded-full ${
                day === highlightDay
                  ? " text-vrayi text-xl flex items-center justify-center"
                  : "text-vrayi"
              }`}
            >
              {day === highlightDay ? <FaRegHeart /> : day}
            </div>
          ) : (
            <div key={idx}></div>
          )
        )}
      </div>
    </div>
  );
}
