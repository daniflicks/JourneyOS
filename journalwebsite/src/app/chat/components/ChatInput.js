'use client';

import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import styles from '../styles/chat.module.css';

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  // Auto-resize function
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    
    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    
    // Calculate new height (capped at 4 lines)
    const lineHeight = 24; // Approximate line height in pixels
    const maxHeight = lineHeight * 4;
    const newHeight = Math.min(textarea.scrollHeight, maxHeight);
    
    textarea.style.height = `${newHeight}px`;
  };

  // Resize on content change
  useEffect(() => {
    autoResize();
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    // Submit on Enter (without Shift key)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <footer className={styles.inputContainer}>
      <form onSubmit={handleSubmit} className={styles.inputWrapper}>
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className={styles.input}
          rows="1"
        />
        <button type="submit" className={styles.sendButton} aria-label="Send message">
          <Send size={16} />
        </button>
      </form>
    </footer>
  );
} 