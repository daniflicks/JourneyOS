import styles from '../styles/entries.module.css';

// Mock data - will be replaced with real data later
const mockEntries = [
  {
    id: 1,
    title: 'Reflections on AI Development',
    content: 'Today I explored the fascinating world of neural networks...',
    timestamp: 'about 1 year ago'
  },
  {
    id: 2,
    title: 'Project Breakthrough',
    content: 'Finally solved that persistent bug in the authentication system...',
    timestamp: 'about 1 year ago'
  },
  {
    id: 3,
    title: 'Team Collaboration Insights',
    content: 'Our new pair programming sessions are yielding great results...',
    timestamp: 'about 1 year ago'
  }
];

export default function RecentEntries() {
  return (
    <div>
      <h2 className={styles.recentEntriesHeader}>Recent Entries</h2>
      <div className={styles.entriesList}>
        {mockEntries.map((entry) => (
          <div key={entry.id} className={styles.entryCard}>
            <h3 className={styles.entryTitle}>{entry.title}</h3>
            <p className={styles.entryPreview}>{entry.content}</p>
            <span className={styles.entryTimestamp}>{entry.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 