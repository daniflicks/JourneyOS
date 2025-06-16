'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import styles from '../../styles/entries.module.css';

export default function EntryEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving entry:', { title, content });
  };

  return (
    <div className={styles.editorContainer}>
      <input
        type="text"
        placeholder="Journal Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.titleInput}
      />
      <textarea
        placeholder="Write your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.contentArea}
      />
      <button onClick={handleSave} className={styles.saveButton}>
        <Save size={20} />
        Save Entry
      </button>
    </div>
  );
} 