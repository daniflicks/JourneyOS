'use client';

import { Edit } from 'lucide-react';
import styles from '../styles/calendar.module.css';

export default function WeekAtGlance() {
  return (
    <div className={styles.weekAtGlanceContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Week at a Glance</h2>
        <button className={styles.editButton}>
          <Edit className="w-4 h-4" />
          Edit
        </button>
      </div>

      {/* Current Event */}
      <div className={styles.currentEvent}>
        <div className={styles.eventHeader}>
          <div className={styles.eventDot} />
          <span>Thu, Feb 6: Project Launch</span>
        </div>
        <div className={styles.taskList}>
          <div className={styles.taskItem}>
            <input type="checkbox" className={styles.taskCheckbox} />
            <span>Publish first version</span>
          </div>
          <div className={styles.taskItem}>
            <input type="checkbox" className={styles.taskCheckbox} />
            <span>Announce on social media</span>
          </div>
        </div>
        <button className={styles.startButton}>
          Start
        </button>
      </div>

      {/* Upcoming Events */}
      <div className={styles.upcomingSection}>
        <h3 className={styles.upcomingLabel}>UPCOMING</h3>
        <div className={styles.upcomingEventsGrid}>
          {/* First upcoming event */}
          <div className={styles.upcomingEventCard}>
            <div className={styles.upcomingEventHeader}>
              <div className={styles.upcomingEventDot} />
              <span className={styles.upcomingEventDate}>Sat, Feb 8</span>
            </div>
            <div className={styles.upcomingEventDetails}>
              <h4 className={styles.upcomingEventTitle}>User Interviews</h4>
              <p className={styles.upcomingEventTasks}>1 task scheduled</p>
            </div>
          </div>

          {/* Second upcoming event */}
          <div className={styles.upcomingEventCard}>
            <div className={styles.upcomingEventHeader}>
              <div className={styles.upcomingEventDot} />
              <span className={styles.upcomingEventDate}>Thu, Feb 13</span>
            </div>
            <div className={styles.upcomingEventDetails}>
              <h4 className={styles.upcomingEventTitle}>Gather Feedback</h4>
              <p className={styles.upcomingEventTasks}>1 task scheduled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 