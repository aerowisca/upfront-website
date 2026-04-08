import type { DemoStep, DemoConfig } from '../AppDemo'
import s from './screen.module.css'

export function RunnerScreen({ step, config }: { step: DemoStep; config: DemoConfig }) {
  const c = config
  return (
    <div className={s.screen}>
      <div className={s.statusBar}><span>9:41</span><span>●●●</span></div>
      {step === 0 && <RunnerHome name={c.runnerName} />}
      {step === 1 && <RunnerHomeTask c={c} />}
      {step === 2 && <TaskDetail c={c} />}
      {step === 3 && <RunnerChat c={c} />}
      {step === 4 && <RunnerDone c={c} />}
    </div>
  )
}

function RunnerHome({ name }: { name: string }) {
  return (
    <>
      <div className={s.header}>
        <div><div className={s.greeting}>Hey, {name} 👋</div><div className={s.sub}>Help someone nearby</div></div>
        <div className={s.headerRight}><div className={s.avatar}>{name[0]}</div></div>
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

function RunnerHomeTask({ c }: { c: DemoConfig }) {
  return (
    <>
      <div className={s.header}>
        <div><div className={s.greeting}>Hey, {c.runnerName} 👋</div><div className={s.sub}>Help someone nearby</div></div>
        <div className={s.headerRight}><div className={s.avatar}>{c.runnerName[0]}</div></div>
      </div>
      <div className={s.body}>
        <div className={s.sectionLabel}>NEARBY TASKS</div>
        <div className={s.runnerCard}>
          <div className={s.runnerCardType}>📦 DELIVERY · 200m away</div>
          <div className={s.runnerCardTitle}>{c.taskTitle}</div>
          <div className={s.runnerCardLoc}>📍 {c.from} → {c.to}</div>
          <div className={s.runnerCardFooter}>
            <div className={s.runnerCardCredits}>Earn {c.deliveryFee}</div>
            <div className={s.runnerCardDist}>just now</div>
          </div>
        </div>
      </div>
    </>
  )
}

function TaskDetail({ c }: { c: DemoConfig }) {
  return (
    <>
      <div className={s.header}>
        <div className={s.backBtn}>←</div>
        <div><div className={s.heading}>Task Detail</div></div>
      </div>
      <div className={s.body}>
        <div className={s.detailCard}>
          <div className={s.detailType}>📦 DELIVERY</div>
          <div className={s.detailTitle}>{c.taskTitle}</div>
          <div className={s.detailRow}><span>📍 From</span><span>{c.from}</span></div>
          <div className={s.detailRow}><span>🏁 To</span><span>{c.to}</span></div>
          {c.itemCost !== '₹0' && <div className={s.detailRow}><span>💰 You pay</span><span>{c.itemCost}</span></div>}
          <div className={s.detailRow}><span>✨ You earn</span><span style={{ color: '#00D4AA', fontWeight: 700 }}>{c.total} on completion</span></div>
        </div>
        <div className={s.acceptBtn}>Accept & Complete ✓</div>
        <div className={s.skipBtn}>Skip →</div>
      </div>
    </>
  )
}

function RunnerChat({ c }: { c: DemoConfig }) {
  const messages = (c.chatMessages ?? [
    { from: 'system' as const, text: '✅ You accepted. Complete & submit proof.' },
    { from: 'system' as const, text: `📍 ${c.from} → ${c.to}` },
    { from: 'me' as const, text: 'On my way! 🏃' },
  ]).slice(-3)
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>{c.taskTitle}</div>
          <div className={s.statusBadge} style={{ background: '#A78BFA22', color: '#A78BFA' }}>🏃 In progress</div>
        </div>
      </div>
      <div className={s.body}>
        {messages.map((m, i) => (
          <div key={i} className={`${s.chatBubble} ${m.from === 'system' ? s.bubbleSystem : m.from === 'me' ? s.bubbleMe : s.bubbleThem}`}>
            {m.text}
          </div>
        ))}
        <div className={s.proofBtn}>Submit Proof 📸</div>
      </div>
    </>
  )
}

function RunnerDone({ c }: { c: DemoConfig }) {
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>{c.taskTitle}</div>
          <div className={s.statusBadge} style={{ background: '#00D4AA22', color: '#00D4AA' }}>✅ Completed</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>🎉 Confirmed! {c.total} sent to your account.</div>
        <div className={s.doneWrap}>
          <div className={s.doneEmoji}>🎉</div>
          <div className={s.doneTitle}>{c.total} Received!</div>
          <div className={s.doneSub}>Task complete</div>
        </div>
      </div>
    </>
  )
}
