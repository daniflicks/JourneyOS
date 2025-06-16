import React, { useState } from 'react';
import styles from '../styles/calendar.module.css';
import CalendarHeader from './CalendarHeader';
import WeekView from './WeekView';
import DayView from './DayView';
import WeekAtGlance from './WeekAtGlance';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('month');
  const [selectedIncrement, setSelectedIncrement] = useState(60);

  const handlePrevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (view === 'month') {
        newDate.setMonth(prev.getMonth() - 1);
      } else if (view === 'week') {
        newDate.setDate(prev.getDate() - 7);
      } else {
        newDate.setDate(prev.getDate() - 1);
      }
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (view === 'month') {
        newDate.setMonth(prev.getMonth() + 1);
      } else if (view === 'week') {
        newDate.setDate(prev.getDate() + 7);
      } else {
        newDate.setDate(prev.getDate() + 1);
      }
      return newDate;
    });
  };

  const generateMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Add days from previous month
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = new Date(year, month, -i);
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: isSameDay(day, new Date()),
      });
    }

    // Add days of current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      days.push({
        date,
        isCurrentMonth: true,
        isToday: isSameDay(date, new Date()),
      });
    }

    // Add days from next month
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: isSameDay(date, new Date()),
      });
    }

    return days;
  };

  const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const renderMonthView = () => {
    const days = generateMonthDays();
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
      <div className={styles.calendarGrid}>
        {weekDays.map(day => (
          <div key={day} className={styles.weekDay}>{day}</div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`${styles.dayCell} ${
              !day.isCurrentMonth ? styles.dayCellOtherMonth : ''
            }`}
          >
            <span className={day.isToday ? styles.dayNumberToday : styles.dayNumber}>
              {day.date.getDate()}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const renderView = () => {
    switch (view) {
      case 'month':
        return renderMonthView();
      case 'week':
        return (
          <WeekView
            currentDate={currentDate}
            timeIncrement={selectedIncrement}
          />
        );
      case 'day':
        return (
          <DayView 
            currentDate={currentDate}
            timeIncrement={selectedIncrement}
          />
        );
      default:
        return renderMonthView();
    }
  };

  return (
    <div className={styles.calendarContainer}>
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        view={view}
        onViewChange={setView}
        selectedIncrement={selectedIncrement}
        onIncrementChange={setSelectedIncrement}
      />
      {renderView()}
      {(view === 'month' || view === 'week') && <WeekAtGlance />}
    </div>
  );
};

export default Calendar; 