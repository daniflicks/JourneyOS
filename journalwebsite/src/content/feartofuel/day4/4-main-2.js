'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle, Stars } from 'lucide-react';
import { EXERCISE_PROMPTS } from '../../../../lib/exercisePrompts';

export default function Day4Main2({ answers, onChange, onContinue, aiResponse, aiLoading, aiError }) {
  const [showPrompts1, setShowPrompts1] = useState(false);
  const [showPrompts2, setShowPrompts2] = useState(false);
  const [showCocoHelp, setShowCocoHelp] = useState(false);
  const [showCocoHelp2, setShowCocoHelp2] = useState(false);
  const [coco1Loading, setCoco1Loading]   = useState(false);
  const [coco1Response, setCoco1Response] = useState('');
  const [coco1Error, setCoco1Error]       = useState('');
  const [coco2Loading, setCoco2Loading]   = useState(false);
  const [coco2Response, setCoco2Response] = useState('');
  const [coco2Error, setCoco2Error]       = useState('');
  
  const fear1 = answers.fear1 || 'No fear provided.';
  const fearProtects = answers.fearProtects || '';
  const careAbout = answers.careAbout || '';

  const handleFearProtectsChange = useCallback(
    (e) => onChange('fearProtects', e.target.value),
    [onChange],
  );

  const handleCareAboutChange = useCallback(
    (e) => onChange('careAbout', e.target.value),
    [onChange],
  );

  const handleNext = useCallback(
    () => onContinue(),
    [onContinue]
  );

  const handleCocoHelp = useCallback(async () => {
    if (showCocoHelp) {
      setShowCocoHelp(false);
      return;
    }
    setShowCocoHelp(true);

    if (coco1Response) return;

    setCoco1Loading(true);
    setCoco1Error('');
    const key1 = `coco-4-1-${encodeURIComponent(fear1)}`;
    const cached1 = localStorage.getItem(key1);
    if (cached1) { setCoco1Response(cached1); setCoco1Loading(false); return; }

    const promptTemplate = EXERCISE_PROMPTS[4][1];
    const message = promptTemplate.replace('{userText}', fear1);
    try {
      const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ message, history: [] }) });
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCoco1Response(data.aiText||'');
      localStorage.setItem(key1, data.aiText||'');
    } catch(err){ setCoco1Error(err.message||'Failed'); }
    finally { setCoco1Loading(false);} 
  }, [showCocoHelp, fear1, coco1Response]);

  const handleCocoHelp2 = useCallback(async () => {
    if (showCocoHelp2) { setShowCocoHelp2(false); return; }
    setShowCocoHelp2(true);

    if (coco2Response) return;

    setCoco2Loading(true);
    setCoco2Error('');
    const key2 = `coco-4-2-${encodeURIComponent(fear1)}`;
    const cached2 = localStorage.getItem(key2);
    if (cached2) { setCoco2Response(cached2); setCoco2Loading(false); return; }

    const promptTemplate = EXERCISE_PROMPTS[4][2];
    const message = promptTemplate.replace('{userText}', fear1);
    try {
      const res = await fetch('/api/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ message, history: [] }) });
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCoco2Response(data.aiText||'');
      localStorage.setItem(key2, data.aiText||'');
    } catch(err){ setCoco2Error(err.message||'Failed'); }
    finally { setCoco2Loading(false);} 
  }, [showCocoHelp2, fear1, coco2Response]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Decoding Your Fear</h1>
        <p className={styles.introduction}>
          Let's discover what this fear is protecting and what you truly care about.
        </p>
      </div>

      <div className={styles.calloutBox}>
        <h3 className={styles.formLabelBold}>Your fear:</h3>
        <p>{fear1}</p>
      </div>

      <div className={styles.formSection} style={{ marginBottom: '-10px' }}>
        <h2 className={styles.formLabel}>
          What this fear protects:
        </h2>
        <label htmlFor="fearProtects" className="sr-only">
          What this fear protects
        </label>
        <textarea
          id="fearProtects"
          className={styles.textInput}
          placeholder="What is this fear trying to protect or keep safe?"
          rows={2}
          value={fearProtects}
          onChange={handleFearProtectsChange}
        />

        <div className={styles.helperButtons} style={{ marginTop: '-10px', flexDirection: 'row', justifyContent: 'space-between' }}>
          <button
            className={styles.textButton}
            onClick={() => setShowPrompts1(!showPrompts1)}
          >
            <HelpCircle size={16} /> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={handleCocoHelp}>
            <Stars size={14} /> Get help from Coco
          </button>
        </div>

        {showPrompts1 && (
          <div className={`${styles.calloutBox} `}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>
              If this fear came true, what would you lose?<br/>
              What is this fear trying to keep safe?<br/>
              What does this fear not want to see damaged?<br/>
              Imagine the fear as a guard - what's it guarding?
            </p>
          </div>
        )}

        {/* Coco Help Response */}
        {showCocoHelp && (
          <div className={styles.fearCategories} style={{marginBottom: '30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}>
                <Stars className={styles.fearCardIcon} />
                <h2 className={styles.fearCardTitle}>Coco's Insight:</h2>
              </div>
              <div className={styles.fearExamples}>
                {coco1Loading ? (
                  <div className={styles.aiLoading} style={{background:'none', padding:'0'}}>
                    <div className={styles.loadingDots}>
                      <div className={styles.loadingDot}></div>
                      <div className={styles.loadingDot}></div>
                      <div className={styles.loadingDot}></div>
                    </div>
                    Coco is thinking...
                  </div>
                ) : coco1Error ? (
                  <p>Sorry, I couldn't process that right now. Try again?</p>
                ) : coco1Response ? (
                  <p>{coco1Response}</p>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.formSection} >
        <h2 className={styles.formLabel}>
        What does this say about YOU:
        </h2>
        <label htmlFor="careAbout" className="sr-only">
        What does this say about YOU
        </label>
        <textarea
          id="careAbout"
          className={styles.textInput}
          placeholder="What do you think this fear shows you care about?"
          rows={2}
          value={careAbout}
          onChange={handleCareAboutChange}
        />

        <div className={styles.helperButtons} style={{ marginTop: '-10px', flexDirection: 'row', justifyContent: 'space-between' }}>
          <button
            className={styles.textButton}
            onClick={() => setShowPrompts2(!showPrompts2)}
          >
            <HelpCircle size={16} /> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={handleCocoHelp2}>
            <Stars size={14} /> Get help from Coco
          </button>
        </div>

        {showPrompts2 && (
          <div className={`${styles.calloutBox} `}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>
              Why does losing this thing matter to you?<br/>
              What value or principle lives underneath this fear?<br/>
              If you didn't care about this, would you still have the fear?<br/>
              What does wanting to protect this say about who you are?
            </p>
          </div>
        )}

        {/* Coco Help Response 2 */}
        {showCocoHelp2 && (
          <div className={styles.fearCategories} style={{marginBottom: '30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}>
                <Stars className={styles.fearCardIcon} />
                <h2 className={styles.fearCardTitle}>Coco's Insight:</h2>
              </div>
              <div className={styles.fearExamples}>
                {coco2Loading ? (
                  <div className={styles.aiLoading} style={{background:'none', padding:'0'}}>
                    <div className={styles.loadingDots}>
                      <div className={styles.loadingDot}></div>
                      <div className={styles.loadingDot}></div>
                      <div className={styles.loadingDot}></div>
                    </div>
                    Coco is thinking...
                  </div>
                ) : coco2Error ? (
                  <p>Sorry, I couldn't process that right now. Try again?</p>
                ) : coco2Response ? (
                  <p>{coco2Response}</p>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!fearProtects.trim() || !careAbout.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 