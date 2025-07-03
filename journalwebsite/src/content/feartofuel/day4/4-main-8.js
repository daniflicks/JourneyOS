'use client';

import React, { useCallback, useState } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle, Stars } from 'lucide-react';
import { EXERCISE_PROMPTS } from '../../../../lib/exercisePrompts';

export default function Day4Main8({ answers, onChange, onContinue }) {
  // Extract Fear 3 data
  const fear3  = answers.fear3      || 'No fear provided.';
  const care3  = answers.careAbout3 || '';

  // Local state keys
  const outcome3   = answers.flipOutcome3 || '';
  const smallStep3 = answers.flipStep3    || '';

  // Prompt toggles
  const [showPrompts1, setShowPrompts1] = useState(false);
  const [showPrompts2, setShowPrompts2] = useState(false);

  // Coco helper states
  const [showCoco1, setShowCoco1]   = useState(false);
  const [coco1Loading, setCoco1Loading] = useState(false);
  const [coco1Resp, setCoco1Resp]   = useState('');
  const [coco1Err,  setCoco1Err]    = useState('');

  const [showCoco2, setShowCoco2]   = useState(false);
  const [coco2Loading, setCoco2Loading] = useState(false);
  const [coco2Resp, setCoco2Resp]   = useState('');
  const [coco2Err,  setCoco2Err]    = useState('');

  // Handlers for text
  const handleOutcomeChange = useCallback((e)=> onChange('flipOutcome3', e.target.value), [onChange]);
  const handleStepChange    = useCallback((e)=> onChange('flipStep3', e.target.value),    [onChange]);

  const handleNext = useCallback(()=> onContinue(), [onContinue]);

  // Coco Q1
  const handleCoco1 = useCallback(async ()=>{
    if (showCoco1) { setShowCoco1(false); return; }
    setShowCoco1(true);
    if (coco1Resp) return;

    setCoco1Loading(true); setCoco1Err('');
    const key = `coco-4-8-1-${encodeURIComponent(fear3)}`;
    const cached = localStorage.getItem(key);
    if (cached) { setCoco1Resp(cached); setCoco1Loading(false); return; }

    const msg = EXERCISE_PROMPTS[4][4].replace('{userText}', fear3).replace('{careText}', care3);
    try {
      const res = await fetch('/api/chat', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ message: msg, history: [] })});
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCoco1Resp(data.aiText||'');
      localStorage.setItem(key, data.aiText||'');
    } catch(err) { setCoco1Err(err.message||'Failed'); }
    finally { setCoco1Loading(false); }
  }, [showCoco1, coco1Resp, fear3, care3]);

  // Coco Q2
  const handleCoco2 = useCallback(async ()=>{
    if (showCoco2) { setShowCoco2(false); return; }
    setShowCoco2(true);
    if (coco2Resp) return;

    setCoco2Loading(true); setCoco2Err('');
    const key = `coco-4-8-2-${encodeURIComponent(fear3)}`;
    const cached = localStorage.getItem(key);
    if (cached) { setCoco2Resp(cached); setCoco2Loading(false); return; }

    const direction = outcome3 || coco1Resp || '[direction not provided]';
    const msg = EXERCISE_PROMPTS[4][5].replace('{userText}', fear3).replace('{directionText}', direction);
    try {
      const res = await fetch('/api/chat', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ message: msg, history: [] })});
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCoco2Resp(data.aiText||'');
      localStorage.setItem(key, data.aiText||'');
    } catch(err) { setCoco2Err(err.message||'Failed'); }
    finally { setCoco2Loading(false); }
  }, [showCoco2, coco2Resp, fear3, outcome3, coco1Resp]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Flip Formula</h1>
        <p className={styles.introduction}>
          Time to transform protection into progress. Let's turn what you're guarding against into what you're moving toward — with one small action for each fear.
        </p>
      </div>

      <div className={styles.calloutBox}>
        <h3 className={styles.formLabelBold}>My Fear:</h3>
        <p>{fear3}</p>
        {care3 && (
          <>
            <h3 className={styles.formLabelBold} style={{ marginTop: '10px' }}>What you care about:</h3>
            <p>{care3}</p>
          </>
        )}
      </div>

      {/* Question 1 */}
      <div className={styles.formSection} style={{ marginBottom: '-10px' }}>
        <h2 className={styles.formLabel}>What skill, quality, or outcome would make this fear irrelevant?</h2>
        <textarea
          className={styles.textInput}
          placeholder="Ex: Focus on quality and continuous learning"
          rows={2}
          value={outcome3}
          onChange={handleOutcomeChange}
        />

        <div className={styles.helperButtons} style={{ marginTop: '-10px', flexDirection: 'row', justifyContent: 'space-between' }}>
          <button className={styles.textButton} onClick={()=> setShowPrompts1(!showPrompts1)}>
            <HelpCircle size={16}/> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={handleCoco1}><Stars size={14}/> Get help from Coco</button>
        </div>

        {showPrompts1 && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>
              If you were already amazing at this, what would you have that you don't have now?<br/>
              What do people who succeed at this focus on that you're currently avoiding?<br/>
              If this fear disappeared tomorrow, what would you spend your energy building?
            </p>
          </div>
        )}

        {showCoco1 && (
          <div className={styles.fearCategories} style={{marginBottom:'30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}><Stars className={styles.fearCardIcon}/><h2 className={styles.fearCardTitle}>Coco's Direction:</h2></div>
              <div className={styles.fearExamples}>
                {coco1Loading ? <div className={styles.aiLoading} style={{background:'none',padding:'0'}}><div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>Coco is thinking...</div> : coco1Err ? <p>{coco1Err}</p> : coco1Resp && <p>{coco1Resp}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Question 2 */}
      <div className={styles.formSection}>
        <h2 className={styles.formLabel}>What's one small step you can take this week?</h2>
        <textarea
          className={styles.textInput}
          placeholder="Ex: Dedicate 30 minutes daily to skill-building"
          rows={2}
          value={smallStep3}
          onChange={handleStepChange}
        />

        <div className={styles.helperButtons} style={{ marginTop: '-10px', flexDirection: 'row', justifyContent: 'space-between' }}>
          <button className={styles.textButton} onClick={()=> setShowPrompts2(!showPrompts2)}>
            <HelpCircle size={16}/> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={handleCoco2}><Stars size={14}/> Get help from Coco</button>
        </div>

        {showPrompts2 && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>
              What could you do for just 15 minutes that would prove you're serious about this?<br/>
              What's the absolute smallest version of this that still counts as progress?<br/>
              If you only had 30 minutes this week to move forward, how would you use them?
            </p>
          </div>
        )}

        {showCoco2 && (
          <div className={styles.fearCategories} style={{marginBottom:'30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}><Stars className={styles.fearCardIcon}/><h2 className={styles.fearCardTitle}>Coco's Actions:</h2></div>
              <div className={styles.fearExamples}>
                {coco2Loading ? <div className={styles.aiLoading} style={{background:'none',padding:'0'}}><div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>Coco is thinking...</div> : coco2Err ? <p>{coco2Err}</p> : coco2Resp && <p>{coco2Resp}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button className={`${styles.primaryButton} ${styles.withIcon}`} onClick={handleNext} disabled={!outcome3.trim() || !smallStep3.trim()}>
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 