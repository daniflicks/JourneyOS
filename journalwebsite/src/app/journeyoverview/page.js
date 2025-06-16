'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDayOverview } from '../../hooks/journeyHooks';
import ProgressMetrics from './components/ProgressMetrics';
import ProgramModule from './components/ProgramModule';
import JourneyFooter from './components/JourneyFooter';
import { programModules } from './constants/journeyData';
import PAGE_MAP from '../../config/pageMap';
import styles from './styles/journeyoverview.module.css';

export default function JourneyOverviewPage() {
  const router = useRouter();
  // Get the actual current day from tracking logic
  const { currentDay } = useDayOverview();
  
  // State for expanded modules
  const [expandedModules, setExpandedModules] = useState({ 
    'identify-fear': true,  // First module expanded by default
    'reframing': false,
    'new-future-vision': false,
    'growth': false,
    'prepping': false,
    'stepping-into-action': false
  });

  // Function to toggle module expansion
  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  // Function to handle day click navigation
  const handleDayClick = (day) => {
    // Get the first page for this day (similar to JourneyFooter logic)
    const pages = PAGE_MAP[day] || [];
    const firstPageId = pages[0]?.id || '';
    
    if (firstPageId) {
      router.push(`/feartofuel/${day}/${firstPageId}`);
    }
  };

  return (
    <main className={styles.mainContainer}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Journey Overview</h1>
        <p className={styles.pageSubtitle}>Your 30-day path to transform fear into action</p>
      </div>

      {/* Progress Metrics */}
      <ProgressMetrics />

      {/* Program Content */}
      <div className={styles.programContainer}>
        <h2 className={styles.programTitle}>Program Contents</h2>
        
        {programModules.map(module => (
          <ProgramModule
            key={module.id}
            id={module.id}
            title={module.title}
            description={module.description}
            icon={module.icon}
            dayRange={module.dayRange}
            tasks={module.tasks}
            isExpanded={expandedModules[module.id]}
            onToggleExpand={() => toggleModule(module.id)}
            onDayClick={handleDayClick}
          />
        ))}
      </div>

      {/* Footer */}
      <JourneyFooter />
    </main>
  );
} 