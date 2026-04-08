import type { DemoStep } from '../AppDemo'
import s from './screen.module.css'

export function CreatorScreen({ step }: { step: DemoStep }) {
  return (
    <div className={s.screen}>
      <div className={s.statusBar}><span>9:41</span><span>●●●</span></div>
      {step === 0 && <CreatorHome />}
      {step === 1 && <CreateTask />}
      {step === 2 && <TaskChatWaiting />}
      {step === 3 && <TaskChatProof />}
      {step === 4 && <TaskChatDone />}
    </div>
  )
}

function CreatorHome() {
  return (
    <>
      <div className={s.header}>
        <div><div className={s.greeting}>Hey, Mahfooz 👋</div><div className={s.sub}>What do you need done?</div></div>
        <div className={s.headerRight}>
          <div className={s.creditPill}>◈ 50</div>
          <div className={s.avatar}>M</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={s.annBanner}>
          <span>📢</span>
          <div><div className={s.annTitle}>Welcome to upFront!</div><div className={s.annBody}>Mutual aid, reimagined.</div></div>
          <span className={s.annArrow}>›</span>
        </div>
        <div className={s.postBtn}>+ Post a Task</div>
        <div className={s.empty}>
          <div className={s.emptyIcon}>📋</div>
          <div className={s.emptyText}>No tasks yet{'\n'}Post your first task above</div>
        </div>
      </div>
    </>
  )
}

function CreateTask() {
  return (
    <>
      <div className={s.header}>
        <div className={s.backBtn}>←</div>
        <div className={s.heading}>New Task</div>
        <div className={s.headingSub}>Tell us what you need done</div>
      </div>
      <div className={s.body}>
        <div className={s.fieldLabel}>WHAT DO YOU NEED? *</div>
        <div className={s.inputFilled}>Get me Maggi from Sharma Dhaba</div>

        <div className={s.fieldLabel}>TASK TYPE</div>
        <div className={s.toggle}>
          <div className={s.toggleBtn}>ℹ️ Info</div>
          <div className={`${s.toggleBtn} ${s.toggleActive}`}>📦 Delivery</div>
        </div>

        <div className={s.row}>
          <div className={s.halfField}>
            <div className={s.fieldLabel}>FROM *</div>
            <div className={s.locationPill}>Sharma Dhaba</div>
          </div>
          <div className={s.halfField}>
            <div className={s.fieldLabel}>TO *</div>
            <div className={s.locationPill}>Hostel 4</div>
          </div>
        </div>

        <div className={s.fieldLabel}>NEEDED BY</div>
        <div className={s.toggle}>
          <div className={s.toggleBtn}>⚡ ASAP</div>
          <div className={`${s.toggleBtn} ${s.toggleActive}`}>30 min</div>
          <div className={s.toggleBtn}>1 hr</div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.submitBtn}>Post Task →</div>
      </div>
    </>
  )
}

function TaskChatWaiting() {
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>Get me Maggi from Sharma Dhaba</div>
          <div className={s.statusBadge} style={{ background: '#FFB34722', color: '#FFB347' }}>⏳ Finding runner</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>Task posted! Looking for a runner nearby…</div>
        <div className={s.waiting}>
          <div className={s.sonarRing}><div className={s.sonarInner}>🔍</div></div>
          <div className={s.waitSub}>Scanning for runners nearby…</div>
        </div>
      </div>
    </>
  )
}

function TaskChatProof() {
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>Get me Maggi from Sharma Dhaba</div>
          <div className={s.statusBadge} style={{ background: '#F472B622', color: '#F472B6' }}>📎 Review proof</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>🤝 Runner accepted your task!</div>
        <div className={`${s.chatBubble} ${s.bubbleThem}`}>On my way! 10 mins 🏃</div>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>📎 Runner submitted proof</div>
        <div className={s.proofImg}>🍜</div>
        <div className={s.confirmBtn}>Confirm & Pay ✓</div>
        <div className={s.rejectBtn}>Reject Proof</div>
      </div>
    </>
  )
}

function TaskChatDone() {
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
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>✅ Task confirmed! Credits transferred.</div>
        <div className={s.doneWrap}>
          <div className={s.doneEmoji}>✅</div>
          <div className={s.doneTitle}>Task Complete!</div>
          <div className={`${s.creditDelta} ${s.creditMinus}`}>◈ −10 MC</div>
          <div className={s.balanceRow}><span>Balance</span><span className={s.balanceVal}>◈ 40 MC</span></div>
        </div>
      </div>
    </>
  )
}
