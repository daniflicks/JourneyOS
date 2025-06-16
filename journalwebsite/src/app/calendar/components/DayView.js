import React from 'react';
import styles from '../styles/calendar.module.css';
import MorningCheckIn from './MorningCheckIn';
import DayCalendar from './DayCalendar';
import DayReflection from './DayReflection';
import TomorrowPreview from './TomorrowPreview';

const DayView = ({ currentDate, timeIncrement }) => {
  const handleCompleteDay = () => {
    // TODO: Implement day completion logic
    console.log('Day completed');
  };

  return (
    <div className={styles.dayViewContainer}>
      <MorningCheckIn />
      <DayCalendar 
        currentDate={currentDate} 
        timeIncrement={timeIncrement}
      />
      <DayReflection />
      <TomorrowPreview />
      <button 
        className={styles.completeDayButton}
        onClick={handleCompleteDay}
      >
        Complete Today's Journey
      </button>
    </div>
  );
};

export default DayView; 