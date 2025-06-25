'use client';

import { ZoomIn, TrendingUp } from 'lucide-react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';

/**
 * Day 3 Main Exercise Step 1 - Understanding Mind's Magnification
 * Props injected via DayLayout: answers, onChange, onContinue
 */
export default function Day3Main1({ answers, onChange, onContinue }) {
  return (
    <div className={styles.mainContent}>
      <div className={styles.header} style={{ marginBottom: '30px' }}>
        <h1 className={styles.title} style={{ fontSize: '32px' }}>Understanding Your Mind's Magnification</h1>
      </div>
      
      {/* Main Content */}
      <div>
        <p className={styles.introduction} style={{ textAlign: 'center', marginBottom: '30px' }}>
          When we experience something painful, our protective brain does three things:
        </p>
        
        {/* Concept Circles */}
        <div className={styles.conceptList}>
          {/* Amplifies */}
          <div className={styles.conceptItem}>
            <div className={styles.conceptCircle}>
              <div className={styles.circleOuter}></div>
              <div className={styles.circleInner}>
                <ZoomIn size={44} color="white" />
              </div>
            </div>
            <div className={styles.conceptContent}>
              <div className={styles.conceptTitle}>Amplifies</div>
              <div className={styles.conceptDescription}>Makes it seem bigger than it was</div>
            </div>
          </div>

          {/* Generalizes */}
          <div className={styles.conceptItem}>
            <div className={styles.conceptCircle}>
              <div className={styles.circleOuter}></div>
              <div className={styles.circleInner}>
                ⋯
              </div>
            </div>
            <div className={styles.conceptContent}>
              <div className={styles.conceptTitle}>Generalizes</div>
              <div className={styles.conceptDescription}>Assumes it will happen everywhere</div>
            </div>
          </div>

          {/* Projects */}
          <div className={styles.conceptItem}>
            <div className={styles.conceptCircle}>
              <div className={styles.circleOuter}></div>
              <div className={styles.circleInner}>
                <TrendingUp size={44} color="white" />
              </div>
            </div>
            <div className={styles.conceptContent}>
              <div className={styles.conceptTitle}>Projects</div>
              <div className={styles.conceptDescription}>Creates an even worse future version</div>
            </div>
          </div>
        </div>
        
        {/* Reassurance Box */}
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <strong style={{ color: '#E07B67', fontWeight: '500' }}>This is normal.</strong> Your brain is trying to protect you.
        </div>
      </div>

      {/* Continue Button */}
      <div className={styles.actionButtons}>
        <button
          type="button"
          onClick={() => onContinue()}
          className={styles.primaryButton}
        >
          Continue →
        </button>
      </div>
    </div>
  );
} 