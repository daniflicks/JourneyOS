'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import PAGE_MAP from '../../../config/pageMap';
import { TOTAL_DAYS } from '../../../constants/journeyConstants';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { CheckCircle2, Check, Clock, Calendar, Bell, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Day2Complete() {
  const { day } = useParams();
  const dayNum  = Number(day);
  const router  = useRouter();
  const [selectedTime, setSelectedTime] = useState(null);

  // Compute next day and its first page from PAGE_MAP
  const nextDay       = dayNum < TOTAL_DAYS ? dayNum + 1 : dayNum;
  const nextFirstPage = PAGE_MAP[nextDay]?.[0]?.id || `${nextDay}-checkin-1`;

  const timeOptions = [
    { time: '9:00 AM', label: 'Tomorrow' },
    { time: '2:00 PM', label: 'Tomorrow' },
    { time: '7:00 PM', label: 'Tomorrow' }
  ];

  return (
    <div className={styles.mainContent}>

      {/* Completion Header */}
      <div className={styles.completionHeader}>
        <div className={styles.confettiContainer}>
          <div className={styles.checkCircleBloom}>
            {/* Confetti pieces positioned around the circle */}
            <div className={`${styles.confettiPiece} ${styles.confetti1}`} style={{ '--x': '-80px', '--y': '-60px' }}></div>
            <div className={`${styles.confettiPiece} ${styles.confetti2}`} style={{ '--x': '70px', '--y': '-70px' }}></div>
            <div className={`${styles.confettiPiece} ${styles.confetti3}`} style={{ '--x': '-60px', '--y': '50px' }}></div>
            <div className={`${styles.confettiPiece} ${styles.confetti4}`} style={{ '--x': '65px', '--y': '55px' }}></div>
            <div className={`${styles.confettiPiece} ${styles.confetti1}`} style={{ '--x': '-90px', '--y': '0px' }}></div>
            <div className={`${styles.confettiPiece} ${styles.confetti2}`} style={{ '--x': '85px', '--y': '-10px' }}></div>
            <div className={`${styles.confettiPiece} ${styles.confetti3}`} style={{ '--x': '0px', '--y': '-85px' }}></div>
            <div className={`${styles.confettiPiece} ${styles.confetti4}`} style={{ '--x': '-30px', '--y': '75px' }}></div>
            
            <svg className={styles.checkmarkSvg} viewBox="0 0 60 60">
              <circle className={styles.checkmarkCircle} cx="30" cy="30" r="28"/>
              <path className={styles.checkmarkCheck} d="M 15 30 L 25 40 L 45 20"/>
            </svg>
          </div>
          
          <h1 className={styles.titleBloom}>Day {dayNum} Complete!</h1>
          <p className={styles.subtitleBloom}>
            You&rsquo;ve discovered the wisdom hidden within your experiences.
          </p>
        </div>
      </div>

      {/* Updated content area */}
      <div className={styles.contentAreaWrapper}>

        {/* Today's Achievements - Warm Design */}
        <div className={styles.achievementCardWarm}>
          <h3 className={styles.achievementTitleWarm}>Today's Achievements</h3>
          
          <div className={styles.achievementItem}>
            <div className={styles.achievementCheckWarm}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={styles.achievementText}>Explored your failure history and patterns</span>
          </div>
          
          <div className={styles.achievementItem}>
            <div className={styles.achievementCheckWarm}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={styles.achievementText}>Transformed three key experiences into wisdom</span>
          </div>
          
          <div className={styles.achievementItem}>
            <div className={styles.achievementCheckWarm}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={styles.achievementText}>Received comprehensive pattern analysis</span>
          </div>
          
          <div className={styles.achievementItem}>
            <div className={styles.achievementCheckWarm}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={styles.achievementText}>Integrated your wisdom foundation</span>
          </div>
          
          <div className={styles.achievementItem}>
            <div className={styles.achievementCheckWarm}>
              <Check size={12} strokeWidth={3} />
            </div>
            <span className={styles.achievementText}>Developed a new perspective on failure</span>
          </div>
        </div>

        {/* Quote Card - Enhanced Warm Design */}
        <div className={styles.quoteCardWarm}>
          <p className={styles.quoteLabelWarm}>Remember</p>
          <p className={styles.quoteTextWarm}>
          You just took back your power. Every story you reframed, every pattern you identified, every lesson you extracted - that's you reclaiming control from fear. The experiences that once held you back are now the foundation of your strength.
          </p>
        </div>

        {/* Tomorrow's Preview - Soft Shadow Design */}
        <div className={styles.previewCardWarm}>
          <p className={styles.previewLabelWarm}>Tomorrow's Preview</p>
          <h2 className={styles.previewTitleWarm}>Day {nextDay}: Fear Reframing</h2>
          <p className={styles.previewDescriptionWarm}>
          Tomorrow we'll compare these old stories about failure with reality, starting to separate fact from fear.
          </p>
        </div>

        {/* Schedule Section */}
        <div className={styles.scheduleSectionWarm}>
          <p className={styles.schedulePromptWarm}>When would you like to continue?</p>
          
          <div className={styles.timeOptionsWarm}>
            {timeOptions.map((option, index) => (
              <button 
                key={index}
                className={`${styles.timeOptionWarm} ${selectedTime === option.time ? styles.selectedTimeWarm : ''}`}
                onClick={() => setSelectedTime(option.time)}
              >
                <span className={styles.timeWarm}>{option.time}</span>
                <span className={styles.timeLabelWarm}>{option.label}</span>
              </button>
            ))}
          </div>
          
          {selectedTime && (
            <button className={styles.scheduleButtonWarm}>
              <Calendar size={16} /> Schedule for {selectedTime}
            </button>
          )}
          
          <div className={styles.scheduleOrWarm}>
            <span>or</span>
          </div>
          
          <button
            className={styles.primaryButtonWarm}
            onClick={() => router.push(`/feartofuel/${nextDay}/${nextFirstPage}`)}
          >
            Start Day {nextDay} Now →
          </button>
          
          <button className={styles.customTimeWarm}>
            Choose different time
          </button>
        </div>

        {/* Footer */}
        <div className={styles.footerWarm}>
          <button 
            className={styles.backLinkWarm}
            onClick={() => router.push('/dashboard')}
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>
          
          <p className={styles.supportTextWarm}>
            Remember: You can access your Emergency Support Box anytime between sessions.
          </p>
        </div>

      </div>
    </div>
  );
} 