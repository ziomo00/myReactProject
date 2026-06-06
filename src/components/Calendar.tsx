'import { useState } from "react";'

function Calendar(){
    const activeDay = 1;
    const weekDays = [
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб",
     "Вс"
    ];
    const days = [
    29,
    30,
    31,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ];
    return (
        
        <div className="p-6 bg-white rounded-3xl shadow text-black">
            <p className="text-muted text-sm font-bold">КАЛЕНДАРЬ</p>
            <h2>Июнь 2026</h2>
            <div className="grid grid-cols-7 mt6">
                {weekDays.map(day => (
                    <div
                        key={day}
                        className="
                        text-center
                        text-sm
                        text-gray-500
                        "
                    >
                      {day}  
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2 mt-4">
                {days.map(day => (
                <div
                    key={day}
                    className={`
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    transition

                    ${
                    day === activeDay
                    ? "bg-violet-600 text-white"
                    : "bg-gray-100"
                    }
                `}
                >
                {day}
                </div>
                ))}
            </div>
        </div>
    )
}

export default Calendar;