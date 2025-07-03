'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle, Stars } from 'lucide-react';
import { EXERCISE_PROMPTS } from '../../../../lib/exercisePrompts';

export default function Day5Main8({ answers, onChange, onContinue }) {
  const belief        = answers.selectedBelief || '';
  const newTruth      = answers.beliefFlipTruth || '';
  const tinyTest      = answers.beliefFlipTest  || '';

  // prompt / coco states
  const [showPromptsTruth, setShowPromptsTruth] = useState(false);
  const [showPromptsTest,  setShowPromptsTest]  = useState(false);
  const [showCocoTruth,    setShowCocoTruth]    = useState(false);
  const [showCocoTest,     setShowCocoTest]     = useState(false);

  const [cocoTruthLoading, setCocoTruthLoading] = useState(false);
  const [cocoTruthResp,    setCocoTruthResp]    = useState('');
  const [cocoTruthErr,     setCocoTruthErr]     = useState('');

  const [cocoTestLoading,  setCocoTestLoading]  = useState(false);
  const [cocoTestResp,     setCocoTestResp]     = useState('');
  const [cocoTestErr,      setCocoTestErr]      = useState('');

  // Handlers
  const handleTruthChange = useCallback(
    (e) => onChange('beliefFlipTruth', e.target.value),
    [onChange]
  );

  const handleTestChange = useCallback(
    (e) => onChange('beliefFlipTest', e.target.value),
    [onChange]
  );

  const handleNext = useCallback(() => onContinue(), [onContinue]);

  // Coco help handlers
  const fetchCocoTruth = useCallback(async () => {
    if (showCocoTruth) { setShowCocoTruth(false); return; }
    setShowCocoTruth(true);
    if (cocoTruthResp) return;

    setCocoTruthLoading(true); setCocoTruthErr('');
    const key = `coco-5-8-truth-${encodeURIComponent(belief)}`;
    const cached = localStorage.getItem(key);
    if (cached) { setCocoTruthResp(cached); setCocoTruthLoading(false); return; }

    const template = EXERCISE_PROMPTS[5][3];
    const message = template.replace('{belief}', belief);
    try {
      const res = await fetch('/api/chat', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message,history:[]})});
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCocoTruthResp(data.aiText||'');
      localStorage.setItem(key, data.aiText||'');
    } catch(err){ setCocoTruthErr(err.message||'Failed'); }
    finally { setCocoTruthLoading(false); }
  }, [belief, showCocoTruth, cocoTruthResp]);

  const fetchCocoTest = useCallback(async () => {
    if (showCocoTest) { setShowCocoTest(false); return; }
    setShowCocoTest(true);
    if (cocoTestResp) return;

    setCocoTestLoading(true); setCocoTestErr('');
    const key = `coco-5-8-test-${encodeURIComponent(belief)}`;
    const cached = localStorage.getItem(key);
    if (cached) { setCocoTestResp(cached); setCocoTestLoading(false); return; }

    const template = EXERCISE_PROMPTS[5][4];
    const message = template.replace('{belief}', belief);
    try {
      const res = await fetch('/api/chat', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message,history:[]})});
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCocoTestResp(data.aiText||'');
      localStorage.setItem(key, data.aiText||'');
    } catch(err){ setCocoTestErr(err.message||'Failed'); }
    finally { setCocoTestLoading(false); }
  }, [belief, showCocoTest, cocoTestResp]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Belief Flip</h1>
        <p className={styles.introduction}>That "what if" feeling? Let's make it real.</p>
      </div>

      {belief && (
        <div className={styles.calloutBox}>
          <h3 className={styles.formLabelBold}>Old belief:</h3>
          <p>&quot;{belief}&quot;</p>
        </div>
      )}

      {/* New Truth Input */}
      <div className={styles.formSection} style={{ marginBottom: '-10px' }}>
        <h2 className={styles.formLabel}>Complete your new truth:<br/>"I'm allowed to _____ because _____"</h2>
        <label htmlFor="newTruth" className="sr-only">New Truth</label>
        <textarea
          id="newTruth"
          className={styles.textInput}
          placeholder="Ex: I'm allowed to share my work because progress matters more than perfection"
          rows={2}
          value={newTruth}
          onChange={handleTruthChange}
        />

        <div className={styles.helperButtons} style={{marginTop:'-10px',flexDirection:'row',justifyContent:'space-between'}}>
          <button className={styles.textButton} onClick={()=>setShowPromptsTruth(!showPromptsTruth)}>
            <HelpCircle size={16}/> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={fetchCocoTruth}>
            <Stars size={14}/> Get help from Coco
          </button>
        </div>

        {showPromptsTruth && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Think about:</h3>
            <p>
              • What permission do you wish someone would give you?<br/>
              • Why might you already deserve that permission?<br/>
              • How could your strengths support this new truth?
            </p>
          </div>
        )}

        {showCocoTruth && (
          <div className={styles.fearCategories} style={{marginBottom:'30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}>
                <Stars className={styles.fearCardIcon}/>
                <h2 className={styles.fearCardTitle}>Coco's Suggestions:</h2>
              </div>
              <div className={styles.fearExamples}>
                {cocoTruthLoading ? (
                  <div className={styles.aiLoading} style={{background:'none',padding:'0'}}>
                    <div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>
                    Coco is thinking...
                  </div>
                ) : cocoTruthErr ? <p>{cocoTruthErr}</p> : cocoTruthResp && <p>{cocoTruthResp}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tiny Test Input */}
      <div className={styles.formSection}>
        <h2 className={styles.formLabel}>Prove it to yourself this week. One tiny test (under 30 min):</h2>
        <label htmlFor="tinyTest" className="sr-only">Tiny Test Action</label>
        <textarea
          id="tinyTest"
          className={styles.textInput}
          placeholder="Ex: Publish a short post sharing my idea with friends"
          rows={2}
          value={tinyTest}
          onChange={handleTestChange}
        />

        <div className={styles.helperButtons} style={{marginTop:'-10px',flexDirection:'row',justifyContent:'space-between'}}>
          <button className={styles.textButton} onClick={()=>setShowPromptsTest(!showPromptsTest)}>
            <HelpCircle size={16}/> Need a prompt?
          </button>
          <button className={styles.helperButton2} onClick={fetchCocoTest}>
            <Stars size={14}/> Get help from Coco
          </button>
        </div>

        {showPromptsTest && (
          <div className={styles.calloutBox}>
            <h3 className={styles.promptsTitle}>Ideas:</h3>
            <p>
              • Share your new truth with a supportive friend.<br/>
              • Attempt a small action your old belief would avoid.<br/>
              • Schedule 20 minutes to start a postponed task.
            </p>
          </div>
        )}

        {showCocoTest && (
          <div className={styles.fearCategories} style={{marginBottom:'30px'}}>
            <div className={styles.fearCard}>
              <div className={styles.fearCardHeader}>
                <Stars className={styles.fearCardIcon}/>
                <h2 className={styles.fearCardTitle}>Coco's Suggestions:</h2>
              </div>
              <div className={styles.fearExamples}>
                {cocoTestLoading ? (
                  <div className={styles.aiLoading} style={{background:'none',padding:'0'}}>
                    <div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>
                    Coco is thinking...
                  </div>
                ) : cocoTestErr ? <p>{cocoTestErr}</p> : cocoTestResp && <p>{cocoTestResp}</p>}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionButtons}>
        <button
          className={`${styles.primaryButton} ${styles.withIcon}`}
          onClick={handleNext}
          disabled={!newTruth.trim() || !tinyTest.trim()}
        >
          Continue <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
} 