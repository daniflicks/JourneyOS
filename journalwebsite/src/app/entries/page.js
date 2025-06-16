'use client';

import EntryEditor from './components/EntryEditor';
import RecentEntries from './components/RecentEntries';
import styles from './styles/entries.module.css';

export default function EntriesPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Journal Entries</h1>
          <p className={styles.headerSubtitle}>Document your journey and reflections</p>
        </div>
        <div className={styles.editorWrapper}>
          <EntryEditor />
        </div>
      </div>
      <div className={styles.sidebar}>
        <RecentEntries />
      </div>
    </div>
  );
} 