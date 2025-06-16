'use client';

import { ChevronDown, ChevronUp, Target, RefreshCcw, Lightbulb, Brain, Wrench, Rocket } from 'lucide-react';
import DailyTask from './DailyTask';
import styles from '../styles/journeyoverview.module.css';

const iconComponents = {
  Target,
  RefreshCcw,
  Lightbulb,
  Brain,
  Wrench,
  Rocket
};

const iconStyles = {
  'identify-fear': styles.iconIdentifyFear,
  'reframing': styles.iconReframing,
  'new-future-vision': styles.iconNewVision,
  'growth': styles.iconGrowth,
  'prepping': styles.iconPrepping,
  'stepping-into-action': styles.iconSteppingAction
};

export default function ProgramModule({ 
  id, 
  title, 
  description, 
  icon, 
  dayRange, 
  tasks, 
  isExpanded = false,
  onToggleExpand,
  onDayClick
}) {
  const IconComponent = iconComponents[icon];

  return (
    <div className={styles.moduleContainer}>
      <button 
        onClick={onToggleExpand}
        className={styles.moduleButton}
      >
        <div className={styles.moduleHeader}>
          <div className={styles.moduleIcon}>
            <IconComponent className={`${styles.icon} ${iconStyles[id]}`} />
          </div>
          <div className={styles.moduleContent}>
            <h3 className={styles.moduleTitle}>{title}</h3>
            <p className={styles.moduleDescription}>{description}</p>
          </div>
        </div>
        
        <div className={styles.moduleMetaContainer}>
          <span className={styles.moduleDayRange}>{dayRange}</span>
          {isExpanded ? (
            <ChevronUp className={styles.moduleChevron} />
          ) : (
            <ChevronDown className={styles.moduleChevron} />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className={styles.moduleTasksList}>
          {tasks.map(task => (
            <DailyTask
              key={task.day}
              day={task.day}
              title={task.title}
              description={task.description}
              status={task.status}
              onDayClick={onDayClick}
            />
          ))}
        </div>
      )}
    </div>
  );
} 