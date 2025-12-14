"use client";

import { useState } from "react";
import QueueCalendar from "./QueueCalendar";
import TaskCalender from "./TaskCalender";

const QueueCalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="grid grid-cols-12 gap-4">
      <QueueCalendar
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <TaskCalender
        selectedDate={selectedDate}
        onChangeDate={setSelectedDate}
      />
    </div>
  );
};

export default QueueCalendarSection;
