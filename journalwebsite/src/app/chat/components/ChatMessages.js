'use client';

import { Bot, User } from 'lucide-react';
import styles from '../styles/chat.module.css';

function Message({ content, isUser }) {
  return (
    <article className={`${styles.message} ${isUser ? styles.user : styles.ai}`}>
      <div className={styles.avatar}>
        {isUser ? <User size={20} /> : <Bot size={20} />}
      </div>
      <div className={styles.messageContent}>
        {content}
      </div>
    </article>
  );
}

export default function ChatMessages({ messages, isLoading }) {
  return (
    <section className={styles.messagesContainer}>
      {messages.map((msg, i) => (
        <Message key={i} content={msg.content} isUser={msg.isUser} />
      ))}

      {isLoading && (
        <Message
          isUser={false}
          content={
            <div className={styles.loader}>
              <span className={styles.loaderDot} />
              <span className={styles.loaderDot} />
              <span className={styles.loaderDot} />
            </div>
          }
        />
      )}
    </section>
  );
}