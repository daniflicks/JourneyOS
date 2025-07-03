'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import PAGE_MAP from '../../../config/pageMap';
import { TOTAL_DAYS } from '../../../constants/journeyConstants';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { Check, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Day4Complete() {
  const { day } = useParams();
  const dayNum  = Number(day);
  const router  = useRouter();
  const [selectedTime, setSelectedTime] = useState(null);

  // Next day computation
  const nextDay       = dayNum < TOTAL_DAYS ? dayNum + 1 : dayNum;
  const nextFirstPage = PAGE_MAP[nextDay]?.[0]?.id || `${nextDay}-checkin-1`;

  const timeOptions = [
    { time: '9:00 AM', label: 'Tomorrow' },
    { time: '2:00 PM', label: 'Tomorrow' },
    { time: '7:00 PM', label: 'Tomorrow' },
  ];

  return (
    <div className={styles.mainContent}>
      {/* Header */}
      <div className={styles.completionHeader}>
        <div className={styles.confettiContainer}>
          <div className={styles.checkCircleBloom}> {/* confetti and check svg reused */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`${styles.confettiPiece} ${styles[`confetti${(i%4)+1}`]}`} style={{ '--x': `${(i%2===0?-1:1)*(60+20*(i%3))}px`, '--y': `${(i<4?-1:1)*(50+15*(i%2))}px` }}></div>
            ))}
            <svg className={styles.checkmarkSvg} viewBox="0 0 60 60">
              <circle className={styles.checkmarkCircle} cx="30" cy="30" r="28" />
              <path className={styles.checkmarkCheck} d="M 15 30 L 25 40 L 45 20" />
            </svg>
          </div>
          <h1 className={styles.titleBloom}>Day {dayNum} Complete!</h1>
          <p className={styles.subtitleBloom}>You&rsquo;ve transformed fear into forward momentum.</p>
        </div>
      </div>

      <div className={styles.contentAreaWrapper}>
        {/* Achievements */}
        <div className={styles.achievementCardWarm}>
          <h3 className={styles.achievementTitleWarm}>Today's Achievements</h3>
          {[
            'Decoded three core fears',
            'Discovered what each fear protects and reveals you care about',
            'Flipped fears into growth directions and concrete actions',
            'Uncovered the hidden pattern linking all fears',
            'Reframed fears into sources of strength',
          ].map((text, idx) => (
            <div key={idx} className={styles.achievementItem}>
              <div className={styles.achievementCheckWarm}><Check size={12} strokeWidth={3} /></div>
              <span className={styles.achievementText}>{text}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={styles.quoteCardWarm}>
          <p className={styles.quoteLabelWarm}>Remember</p>
          <p className={styles.quoteTextWarm}>
            Every fear you met today highlighted what you love. Keep letting fear point you toward what matters—and then move toward it.
          </p>
        </div>

        {/* Preview */}
        <div className={styles.previewCardWarm}>
          <p className={styles.previewLabelWarm}>Tomorrow's Preview</p>
          <h2 className={styles.previewTitleWarm}>Day {nextDay}: Continuing the Journey</h2>
          <p className={styles.previewDescriptionWarm}>
            Tomorrow you'll build on today&rsquo;s insights and keep turning fear into fuel.
          </p>
        </div>

        {/* Schedule */}
        <div className={styles.scheduleSectionWarm}>
          <p className={styles.schedulePromptWarm}>When would you like to continue?</p>
          <div className={styles.timeOptionsWarm}>
            {timeOptions.map((opt,i)=>(
              <button key={i} className={`${styles.timeOptionWarm} ${selectedTime===opt.time?styles.selectedTimeWarm:''}`} onClick={()=>setSelectedTime(opt.time)}>
                <span className={styles.timeWarm}>{opt.time}</span><span className={styles.timeLabelWarm}>{opt.label}</span>
              </button>
            ))}
          </div>
          {selectedTime && (
            <button className={styles.scheduleButtonWarm}><Calendar size={16}/> Schedule for {selectedTime}</button>
          )}
          <div className={styles.scheduleOrWarm}><span>or</span></div>
          <button className={styles.primaryButtonWarm} onClick={()=>router.push(`/feartofuel/${nextDay}/${nextFirstPage}`)}>
            Start Day {nextDay} Now →
          </button>
          <button className={styles.customTimeWarm}>Choose different time</button>
        </div>

        {/* Footer */}
        <div className={styles.footerWarm}>
          <button className={styles.backLinkWarm} onClick={()=>router.push('/dashboard')}><ArrowLeft size={16}/> Back to Dashboard</button>
          <p className={styles.supportTextWarm}>Remember: You can access your Emergency Support Box anytime between sessions.</p>
        </div>
      </div>
    </div>
  );
} 