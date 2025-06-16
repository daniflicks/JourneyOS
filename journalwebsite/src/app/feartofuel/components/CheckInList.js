'use client';

import React from 'react';
import styles from '../styles/fear_to_fuel.module.css';

/**
 * A reusable check-in list component for the Fear to Fuel program
 * @param {Object[]} items - The array of check-in items to display
 * @param {string} items[].id - Unique ID for each item
 * @param {string} items[].label - Display text for each item
 * @param {string[]} selectedItems - Array of selected item IDs
 * @param {function} onChange - Callback function when an item is checked/unchecked
 * @param {string} questionText - The prompt text displayed above the check-in list
 */
export default function CheckInList({ 
  items, 
  selectedItems, 
  onChange, 
  questionText = "Before we start, check any you're experiencing right now:"
}) {
  const handleItemCheck = (id) => {
    const newSelected = selectedItems.includes(id)
      ? selectedItems.filter(itemId => itemId !== id)
      : [...selectedItems, id];
    onChange(newSelected);
  };

  return (
    <div className={styles.checkInSection}>
      <h2 className={styles.checkInTitle}>Mini Pattern Check-In</h2>
      <p className={styles.checkInQuestion}>{questionText}</p>
      
      <div className={styles.checkInGrid}>
        {items.map(item => (
          <div 
            key={item.id} 
            className={styles.checkInItem}
            onClick={() => handleItemCheck(item.id)}
          >
            <div 
              className={`${styles.checkbox} ${selectedItems.includes(item.id) ? styles.checked : ''}`}
            />
            <span className={styles.patternText}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 