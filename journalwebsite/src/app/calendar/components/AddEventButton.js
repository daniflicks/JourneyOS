'use client';

import { Plus } from 'lucide-react';
import styles from '../styles/calendar.module.css';

export default function AddEventButton() {
  return (
    <button className={styles.addEventButton}>
      <Plus className="w-4 h-4" />
      Add Event
    </button>
  );
} 