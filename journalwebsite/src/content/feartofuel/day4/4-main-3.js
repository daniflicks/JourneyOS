'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle, Stars } from 'lucide-react';
import { EXERCISE_PROMPTS } from '../../../../lib/exercisePrompts';

export default function Day4Main3({ answers, onChange, onContinue }) {
  const [showPrompts1, setShowPrompts1] = useState(false);
  const [showPrompts2, setShowPrompts2] = useState(false);
  const [showCocoHelp,  setShowCocoHelp]  = useState(false);
  const [showCocoHelp2, setShowCocoHelp2] = useState(false);

  // Local AI state & cache handlers
  const [coco1Loading, setCoco1Loading]   = useState(false);
  const [coco1Response, setCoco1Response] = useState('');
  const [coco1Error,   setCoco1Error]     = useState('');

  const [coco2Loading, setCoco2Loading]   = useState(false);
  const [coco2Response, setCoco2Response] = useState('');
  const [coco2Error,   setCoco2Error]     = useState('');

  // Inputs specific to fear #2
  const fear2         = answers.fear2 || 'No fear provided.';
  const fearProtects2 = answers.fearProtects2 || '';
  const careAbout2    = answers.careAbout2   || '';

  const handleFearProtectsChange = useCallback(
    (e) => onChange('fearProtects2', e.target.value),
    [onChange]
  );
  const handleCareAboutChange = useCallback(
    (e) => onChange('careAbout2', e.target.value),
    [onChange]
  );

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // ─── Coco Helpers ───────────────────────────────────────────────────────────
  const handleCocoHelp = useCallback(async () => {
    if (showCocoHelp) { setShowCocoHelp(false); return; }
    setShowCocoHelp(true);

    if (coco1Response) return; // already fetched

    setCoco1Loading(true); setCoco1Error('');
    const key = `coco-4-3-1-${encodeURIComponent(fear2)}`;
    const cached = localStorage.getItem(key);
    if (cached) { setCoco1Response(cached); setCoco1Loading(false); return; }

    const message = EXERCISE_PROMPTS[4][1].replace('{userText}', fear2);
    try {
      const res = await fetch('/api/chat', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message,history:[]})});
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCoco1Response(data.aiText||'');
      localStorage.setItem(key, data.aiText||'');
    } catch(err){ setCoco1Error(err.message||'Failed'); }
    finally { setCoco1Loading(false); }
  }, [showCocoHelp, coco1Response, fear2]);

  const handleCocoHelp2 = useCallback( async () => {
    if (showCocoHelp2) { setShowCocoHelp2(false); return; }
    setShowCocoHelp2(true);
    if (coco2Response) return;

    setCoco2Loading(true); setCoco2Error('');
    const key = `coco-4-3-2-${encodeURIComponent(fear2)}`;
    const cached = localStorage.getItem(key);
    if (cached) { setCoco2Response(cached); setCoco2Loading(false); return; }

    const message = EXERCISE_PROMPTS[4][2].replace('{userText}', fear2);
    try {
      const res = await fetch('/api/chat', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message,history:[]})});
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCoco2Response(data.aiText||'');
      localStorage.setItem(key, data.aiText||'');
    } catch(err){ setCoco2Error(err.message||'Failed'); }
    finally { setCoco2Loading(false); }
  }, [showCocoHelp2, coco2Response, fear2]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Decoding Your Second Fear</h1>
        <p className={styles.introduction}>Let's uncover what this fear protects and what it reveals you care about.</p>
      </div>

      <div className={styles.calloutBox}>
        <h3 className={styles.formLabelBold}>Your fear:</h3>
        <p>{fear2}</p>
      </div>

      {/* ───────────── Question 1 ───────────── */}
      <div className={styles.formSection} style={{marginBottom:'-10px'}}>
        <h2 className={styles.formLabel}>What this fear protects:</h2>
        <textarea
          className={styles.textInput}
          placeholder="What is this fear trying to protect or keep safe?"
          rows={2}
          value={fearProtects2}
          onChange={handleFearProtectsChange}
        />
        <div className={styles.helperButtons} style={{marginTop:'-10px',flexDirection:'row',justifyContent:'space-between'}}>
          <button className={styles.textButton} onClick={()=>setShowPrompts1(!showPrompts1)}>
            <HelpCircle size={16}/> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={handleCocoHelp}>
            <Stars size={14}/> Get help from Coco
          </button>
        </div>
        {showPrompts1 && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>If this fear came true, what would you lose?<br/>What is it guarding?<br/>What must not be damaged?</p>
          </div>
        )}
        {showCocoHelp && (
          <div className={styles.fearCategories} style={{marginBottom:'30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}><Stars className={styles.fearCardIcon}/><h2 className={styles.fearCardTitle}>Coco's Insight:</h2></div>
              <div className={styles.fearExamples}>
                {coco1Loading ? (
                  <div className={styles.aiLoading} style={{background:'none',padding:'0'}}>
                    <div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>
                    Coco is thinking...
                  </div>
                ) : coco1Error ? <p>{coco1Error}</p> : coco1Response && <p>{coco1Response}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ───────────── Question 2 ───────────── */}
      <div className={styles.formSection}>
        <h2 className={styles.formLabel}>What does this say about YOU:</h2>
        <textarea
          className={styles.textInput}
          placeholder="What do you think this fear shows you care about?"
          rows={2}
          value={careAbout2}
          onChange={handleCareAboutChange}
        />
        <div className={styles.helperButtons} style={{marginTop:'-10px',flexDirection:'row',justifyContent:'space-between'}}>
          <button className={styles.textButton} onClick={()=>setShowPrompts2(!showPrompts2)}>
            <HelpCircle size={16}/> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={handleCocoHelp2}>
            <Stars size={14}/> Get help from Coco
          </button>
        </div>
        {showPrompts2 && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>Why does losing this matter?<br/>What value or principle lives underneath?<br/>If you didn't care would the fear remain?</p>
          </div>
        )}
        {showCocoHelp2 && (
          <div className={styles.fearCategories} style={{marginBottom:'30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}><Stars className={styles.fearCardIcon}/><h2 className={styles.fearCardTitle}>Coco's Insight:</h2></div>
              <div className={styles.fearExamples}>
                {coco2Loading ? (
                  <div className={styles.aiLoading} style={{background:'none',padding:'0'}}>
                    <div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>
                    Coco is thinking...
                  </div>
                ) : coco2Error ? <p>{coco2Error}</p> : coco2Response && <p>{coco2Response}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button className={`${styles.primaryButton} ${styles.withIcon}`} onClick={handleNext} disabled={!fearProtects2.trim()||!careAbout2.trim()}>
          Continue <ArrowRight size={20}/>
        </button>
      </div>
    </div>
  );
} 