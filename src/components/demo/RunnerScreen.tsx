import type { DemoStep } from '../AppDemo'
import s from './screen.module.css'

export function RunnerScreen({ step }: { step: DemoStep }) {
  return (
    <div className={s.screen}>
      <div className={s.statusBar}><span>9:41</span><span>●●●</span></div>
      {step === 0 && <RunnerHome />}
      {step === 1 && <RunnerHomeTask />}
      {step === 2 && <TaskDetail />}
      {step === 3 && <RunnerChat />}
      {step === 4 && <RunnerDone />}
    </div>
  )
}

function RunnerHome() {
  return (
    <>
      <div className={s.header}>
        <div><div className={s.greeting}>Hey, Arjun 👋</div><div className={s.sub}>Help someone nearby</div></div>
        <div className={s.headerRight}>
          <div className={s.creditPill}>◈ 50</div>
          <div className={s.avatar}>A</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={s.waiting}>
          <div className={s.sonarRing}><div className={s.sonarInner}>📡</div></div>
          <div className={s.waitTitle}>Scanning nearby…</div>
          <div className={s.waitSub}>You'll be notified the moment{'\n'}someone nearby needs help</div>
        </div>
      </div>
    </>
  )
}

function RunnerHomeTask() {
  return (
    <>
      <div className={s.header}>
        <div><div className={s.greeting}>Hey, Arjun 👋</div><div className={s.sub}>Help someone nearby</div></div>
        <div className={s.headerRight}>
          <div className={s.creditPill}>◈ 50</div>
          <div className={s.avatar}>A</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={s.sectionLabel}>NEARBY TASKS</div>
        <div className={s.runnerCard}>
          <div className={s.runnerCardType}>📦 DELIVERY · 150m away</div>
          <div className={s.runnerCardTitle}>Get me Maggi from Sharma Dhaba</div>
          <div className={s.runnerCardLoc}>📍 Sharma Dhaba → Hostel 4</div>
          <div className={s.runnerCardFooter}>
            <div className={s.runnerCardCredits}>◈ 10 MC</div>
            <div className={s.runnerCardDist}>2 min ago</div>
          </div>
        </div>
      </div>
    </>
  )
}

function TaskDetail() {
  return (
    <>
      <div className={s.header}>
        <div className={s.backBtn}>←</div>
        <div className={s.heading}>Task Detail</div>
      </div>
      <div className={s.body}>
        <div className={s.detailCard}>
          <div className={s.detailType}>📦 DELIVERY</div>
          <div className={s.detailTitle}>Get me Maggi from Sharma Dhaba</div>
          <div className={s.detailRow}><span>📍 From</span><span>Sharma Dhaba</span></div>
          <div className={s.detailRow}><span>🏁 To</span><span>Hostel 4</span></div>
          <div className={s.detailRow}><span>⏰ Needed by</span><span>30 min</span></div>
          <div className={s.detailRow}><span>◈ Credits</span><span style={{ color: '#FF6B35', fontWeight: 700 }}>10 MC</span></div>
        </div>
        <div className={s.acceptBtn}>Accept Task ✓</div>
        <div className={s.skipBtn}>Skip →</div>
      </div>
    </>
  )
}

function RunnerChat() {
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>Get me Maggi from Sharma Dhaba</div>
          <div className={s.statusBadge} style={{ background: '#A78BFA22', color: '#A78BFA' }}>🏃 In progress</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>✅ You accepted this task</div>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>📍 Sharma Dhaba → Hostel 4 · ◈ 10 MC</div>
        <div className={`${s.chatBubble} ${s.bubbleMe}`}>On my way! 10 mins 🏃</div>
        <div className={s.proofBtn}>Submit Proof 📸</div>
      </div>
    </>
  )
}

function RunnerDone() {
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>Get me Maggi from Sharma Dhaba</div>
          <div className={s.statusBadge} style={{ background: '#00D4AA22', color: '#00D4AA' }}>✅ Completed</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>🎉 Creator confirmed! Credits received.</div>
        <div className={s.doneWrap}>
          <div className={s.doneEmoji}>🎉</div>
          <div className={s.doneTitle}>Credits Received!</div>
          <div className={`${s.creditDelta} ${s.creditPlus}`}>◈ +10 MC</div>
          <div className={s.balanceRow}><span>Balance</span><span className={s.balanceVal}>◈ 60 MC</span></div>
        </div>
      </div>
    </>
  )
}
