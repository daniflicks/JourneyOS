import React, { useState } from 'react';
import styles from '../styles/calendar.module.css';

const DayReflection = () => {
  const [wins, setWins] = useState(['', '', '']);
  const [challenge, setChallenge] = useState('');
  const [learnings, setLearnings] = useState('');

  const handleWinChange = (index, value) => {
    const newWins = [...wins];
    newWins[index] = value;
    setWins(newWins);
  };

  return (
    <div className={styles.reflectionContainer}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.reflectionIcon}>↻</span>
        END-OF-DAY REFLECTION
      </h2>

      <div className={styles.reflectionSection}>
        <h3 className={styles.reflectionSubtitle}>Today's wins (list 3):</h3>
        <div className={styles.winsList}>
          {wins.map((win, index) => (
            <div key={index} className={styles.winEntry}>
              <span className={styles.winNumber}>{index + 1}.</span>
              <input
                type="text"
                value={win}
                onChange={(e) => handleWinChange(index, e.target.value)}
                placeholder={`Enter win #${index + 1}`}
                className={styles.reflectionInput}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.reflectionSection}>
        <h3 className={styles.reflectionSubtitle}>
          Describe the main challenge you faced today and how you handled it:
        </h3>
        <textarea
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          placeholder="What was your biggest challenge and how did you overcome it?"
          className={styles.reflectionTextarea}
        />
      </div>

      <div className={styles.reflectionSection}>
        <h3 className={styles.reflectionSubtitle}>What I learned:</h3>
        <textarea
          value={learnings}
          onChange={(e) => setLearnings(e.target.value)}
          placeholder="What did you learn?"
          className={styles.reflectionTextarea}
        />
      </div>
    </div>
  );
};

export default DayReflection; 