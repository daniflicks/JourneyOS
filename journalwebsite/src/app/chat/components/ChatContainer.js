'use client';

import { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import styles from '../styles/chat.module.css';

export default function ChatContainer() {
  const [messages, setMessages] = useState([
    {
      content: "Hi! I'm Coco, your AI companion on this journey. I'm here to support you in overcoming your fears and achieving your goals. How can I help you today?",
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    // 1) append the user's message locally
    setMessages(prev => [...prev, { content: message, isUser: true }]);

    // 2) show loader
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history: messages }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error('API Error:', errorData.error);
        throw new Error(errorData.error || `HTTP ${res.status}`);
      }

      const { aiText } = await res.json();
      // 3) append the AI's response
      setMessages(prev => [...prev, { content: aiText, isUser: false }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          content: 'Oops, something went wrong. Please try again later.',
          isUser: false,
        },
      ]);
    } finally {
      // 4) hide loader
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <ChatHeader />
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} />
    </main>
  );
}