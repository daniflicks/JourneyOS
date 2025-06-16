'use client';

import { Bot } from 'lucide-react';
import styles from '../styles/chat.module.css';

export default function ChatHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTitle}>
        <Bot size={24} className="text-[#E07B67]" />
        <h1>Chat with Coco</h1>
      </div>
      <p className={styles.headerSubtitle}>
        Your AI companion for overcoming fears
      </p>
    </header>
  );
} 