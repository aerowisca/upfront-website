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
        <div><div className={s.heading}>New Task</div><div className={s.headingSub}>What do you need?</div></div>
      </div>
      <div className={s.body}>
        <div className={s.fieldLabel}>TASK</div>
        <div className={s.inputFilled}>Get me Maggi from Sharma Dhaba</div>
        <div className={s.fieldLabel}>TYPE</div>
        <div className={s.toggle}>
          <div className={s.toggleBtn}>ℹ️ Info</div>
          <div className={`${s.toggleBtn} ${s.toggleActive}`}>📦 Delivery</div>
        </div>
        <div className={s.row}>
          <div className={s.halfField}>
            <div className={s.fieldLabel}>FROM</div>
            <div className={s.locationPill}>Sharma Dhaba</div>
          </div>
          <div className={s.halfField}>
            <div className={s.fieldLabel}>TO</div>
            <div className={s.locationPill}>Sector 4, B-12</div>
          </div>
        </div>
        <div className={s.escrowRow}>
          <div className={s.escrowItem}><span>Item cost</span><span>₹60</span></div>
          <div className={s.escrowItem}><span>Delivery fee</span><span>₹20</span></div>
          <div className={s.escrowTotal}><span>Escrow total</span><span>₹80</span></div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.submitBtn}>Post & Pay ₹80 →</div>
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
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>✅ ₹80 held in escrow. Looking for a runner…</div>
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
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>🤝 Runner accepted & bought the item!</div>
        <div className={`${s.chatBubble} ${s.bubbleThem}`}>Delivered! Here's your Maggi 🍜</div>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>📎 Runner submitted proof</div>
        <div className={s.proofImg}>🍜</div>
        <div className={s.confirmBtn}>Confirm & Release ₹80 ✓</div>
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
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>✅ Confirmed! ₹80 released to runner.</div>
        <div className={s.doneWrap}>
          <div className={s.doneEmoji}>✅</div>
          <div className={s.doneTitle}>Task Complete!</div>
          <div className={s.doneSub}>₹80 released from escrow</div>
        </div>
      </div>
    </>
  )
}
