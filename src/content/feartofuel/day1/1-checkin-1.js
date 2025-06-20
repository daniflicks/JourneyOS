'use client';

import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

/**
 * Day 1 Initial Check‑In Step - New First Page
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day1Page1({ answers, onChange, onContinue }) {
  return (
    <div className={styles.powerUpContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome to Day 1</h1>
        <blockquote className={styles.quote}>
          "The journey of a thousand miles begins with one step."
        </blockquote>
      </div>

      <div className={styles.introduction}>
        <p>
          Welcome to your Fear to Fuel journey. Today, we'll gently explore what's holding you back from pursuing your dreams. 
          This is a safe space to acknowledge your fears without judgment.
        </p>
        <p>
          Before we begin the main exercise, let's take a moment to center ourselves and prepare for this important work.
        </p>
      </div>

      <div className={styles.calloutBox}>
        <h3>What to Expect Today:</h3>
        <ul>
          <li>A gentle check-in with your current state</li>
          <li>A guided breathing exercise to center yourself</li>
          <li>Mapping out your project vision</li>
          <li>Exploring what motivates you</li>
          <li>Safely naming your fears</li>
        </ul>
      </div>

      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue('1-checkin-2')}
          className={styles.primaryButton}
        >
          I'm Ready to Begin
        </button>
      </div>
    </div>
  );
} 