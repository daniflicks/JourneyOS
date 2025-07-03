'use client';

import React, { useState, useCallback } from 'react';
import styles from '../../../app/feartofuel/styles/fear_to_fuel.module.css';
import { ArrowRight, HelpCircle, Stars } from 'lucide-react';
import { EXERCISE_PROMPTS } from '../../../../lib/exercisePrompts';

export default function Day4Main4({ answers, onChange, onContinue }) {
  // UI toggles
  const [showPrompts1, setShowPrompts1] = useState(false);
  const [showPrompts2, setShowPrompts2] = useState(false);
  const [showCoco1, setShowCoco1] = useState(false);
  const [showCoco2, setShowCoco2] = useState(false);

  // Local AI states
  const [coco1Loading, setCoco1Loading] = useState(false);
  const [coco1Resp, setCoco1Resp]       = useState('');
  const [coco1Err, setCoco1Err]         = useState('');

  const [coco2Loading, setCoco2Loading] = useState(false);
  const [coco2Resp, setCoco2Resp]       = useState('');
  const [coco2Err, setCoco2Err]         = useState('');

  // Inputs for fear3
  const fear3         = answers.fear3 || 'No fear provided.';
  const fearProtects3 = answers.fearProtects3 || '';
  const careAbout3    = answers.careAbout3 || '';

  // Handlers for textareas
  const handleProtects = useCallback(e=>onChange('fearProtects3', e.target.value),[onChange]);
  const handleCare    = useCallback(e=>onChange('careAbout3',   e.target.value),[onChange]);

  const handleNext    = useCallback(()=>onContinue(),[onContinue]);

  // ---- Coco helper 1 ----
  const fetchCoco1 = useCallback(async ()=>{
    const key = `coco-4-4-1-${encodeURIComponent(fear3)}`;
    const cached = localStorage.getItem(key);
    if(cached){setCoco1Resp(cached);return;}
    setCoco1Loading(true);
    try{
      const msg = EXERCISE_PROMPTS[4][1].replace('{userText}', fear3);
      const res = await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg,history:[]})});
      if(!res.ok) throw new Error('Network error');
      const data = await res.json();
      setCoco1Resp(data.aiText||'');
      localStorage.setItem(key,data.aiText||'');
    }catch(err){setCoco1Err(err.message||'Failed');}
    finally{setCoco1Loading(false);}  
  },[fear3]);

  const handleCoco1 = useCallback(()=>{
    if(showCoco1){setShowCoco1(false);return;}
    setShowCoco1(true);
    if(!coco1Resp && !coco1Loading) fetchCoco1();
  },[showCoco1,coco1Resp,coco1Loading,fetchCoco1]);

  // ---- Coco helper 2 ----
  const fetchCoco2 = useCallback(async()=>{
    const key=`coco-4-4-2-${encodeURIComponent(fear3)}`;
    const cached=localStorage.getItem(key);
    if(cached){setCoco2Resp(cached);return;}
    setCoco2Loading(true);
    try{
      const msg=EXERCISE_PROMPTS[4][2].replace('{userText}',fear3);
      const res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:msg,history:[]})});
      if(!res.ok) throw new Error('Network error');
      const data=await res.json();
      setCoco2Resp(data.aiText||'');
      localStorage.setItem(key,data.aiText||'');
    }catch(err){setCoco2Err(err.message||'Failed');}
    finally{setCoco2Loading(false);}  
  },[fear3]);

  const handleCoco2=useCallback(()=>{
    if(showCoco2){setShowCoco2(false);return;}
    setShowCoco2(true);
    if(!coco2Resp && !coco2Loading) fetchCoco2();
  },[showCoco2,coco2Resp,coco2Loading,fetchCoco2]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h1 className={styles.title}>Decoding Your Third Fear</h1>
        <p className={styles.introduction}>Let's explore what this fear protects and what it reveals you value.</p>
      </div>

      <div className={styles.calloutBox}>
        <h3 className={styles.formLabelBold}>Your fear:</h3>
        <p>{fear3}</p>
      </div>

      {/* Question 1 */}
      <div className={styles.formSection} style={{marginBottom:'-10px'}}>
        <h2 className={styles.formLabel}>What this fear protects:</h2>
        <textarea className={styles.textInput} rows={2} value={fearProtects3} onChange={handleProtects} placeholder="What is this fear trying to protect or keep safe?" />
        <div className={styles.helperButtons} style={{marginTop:'-10px',flexDirection:'row',justifyContent:'space-between'}}>
          <button className={styles.textButton} onClick={()=>setShowPrompts1(!showPrompts1)}><HelpCircle size={16}/> Need a prompt?</button>
          <button className={styles.helperButton2} onClick={handleCoco1}><Stars size={14}/> Get help from Coco</button>
        </div>
        {showPrompts1 && (<div className={styles.calloutBox}><h3 className={styles.promptsTitle}>Think about:</h3><p>If this fear came true, what would you lose?<br/>What is it guarding?</p></div>)}
        {showCoco1 && (<div className={styles.fearCategories} style={{marginBottom:'30px'}}><div className={styles.fearCard}><div className={styles.fearCardHeader}><Stars className={styles.fearCardIcon}/><h2 className={styles.fearCardTitle}>Coco's Insight:</h2></div><div className={styles.fearExamples}>{coco1Loading?(<div className={styles.aiLoading} style={{background:'none',padding:'0'}}><div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>Coco is thinking...</div>):coco1Err?<p>{coco1Err}</p>:coco1Resp&&<p>{coco1Resp}</p>}</div></div></div>)}
      </div>

      {/* Question 2 */}
      <div className={styles.formSection}>
        <h2 className={styles.formLabel}>What does this say about YOU:</h2>
        <textarea className={styles.textInput} rows={2} value={careAbout3} onChange={handleCare} placeholder="What do you think this fear shows you care about?" />
        <div className={styles.helperButtons} style={{marginTop:'-10px',flexDirection:'row',justifyContent:'space-between'}}>
          <button className={styles.textButton} onClick={()=>setShowPrompts2(!showPrompts2)}><HelpCircle size={16}/> Need a prompt?</button>
          <button className={styles.helperButton2} onClick={handleCoco2}><Stars size={14}/> Get help from Coco</button>
        </div>
        {showPrompts2 && (<div className={styles.calloutBox}><h3 className={styles.promptsTitle}>Think about:</h3><p>Why does losing this matter?<br/>What value lives underneath?</p></div>)}
        {showCoco2 && (<div className={styles.fearCategories} style={{marginBottom:'30px'}}><div className={styles.fearCard}><div className={styles.fearCardHeader}><Stars className={styles.fearCardIcon}/><h2 className={styles.fearCardTitle}>Coco's Insight:</h2></div><div className={styles.fearExamples}>{coco2Loading?(<div className={styles.aiLoading} style={{background:'none',padding:'0'}}><div className={styles.loadingDots}><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div><div className={styles.loadingDot}></div></div>Coco is thinking...</div>):coco2Err?<p>{coco2Err}</p>:coco2Resp&&<p>{coco2Resp}</p>}</div></div></div>)}
      </div>

      <div className={styles.actionButtons}>
        <button className={`${styles.primaryButton} ${styles.withIcon}`} onClick={handleNext} disabled={!fearProtects3.trim()||!careAbout3.trim()}>
          Continue <ArrowRight size={20}/>
        </button>
      </div>
    </div>
  );
} 