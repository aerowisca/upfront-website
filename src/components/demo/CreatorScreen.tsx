import type { DemoStep, DemoConfig } from '../AppDemo'
import s from './screen.module.css'

export function CreatorScreen({ step, config }: { step: DemoStep; config: DemoConfig }) {
  const c = config
  return (
    <div className={s.screen}>
      <div className={s.statusBar}><span>9:41</span><span>●●●</span></div>
      {step === 0 && <CreatorHome name={c.creatorName} />}
      {step === 1 && <CreateTask c={c} />}
      {step === 2 && <TaskChatWaiting c={c} />}
      {step === 3 && <TaskChatProof c={c} />}
      {step === 4 && <TaskChatDone c={c} />}
    </div>
  )
}

function CreatorHome({ name }: { name: string }) {
  return (
    <>
      <div className={s.header}>
        <div><div className={s.greeting}>Hey, {name} 👋</div><div className={s.sub}>What do you need done?</div></div>
        <div className={s.headerRight}>
          <div className={s.avatar}>{name[0]}</div>
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

function CreateTask({ c }: { c: DemoConfig }) {
  return (
    <>
      <div className={s.header}>
        <div className={s.backBtn}>←</div>
        <div><div className={s.heading}>New Task</div><div className={s.headingSub}>What do you need?</div></div>
      </div>
      <div className={s.body}>
        <div className={s.fieldLabel}>TASK</div>
        <div className={s.inputFilled}>{c.taskTitle}</div>
        <div className={s.fieldLabel}>TYPE</div>
        <div className={s.toggle}>
          <div className={c.taskType === 'INFO' ? `${s.toggleBtn} ${s.toggleActive}` : s.toggleBtn}>ℹ️ Info</div>
          <div className={c.taskType === 'DELIVERY' ? `${s.toggleBtn} ${s.toggleActive}` : s.toggleBtn}>📦 Delivery</div>
        </div>
        <div className={s.row}>
          <div className={s.halfField}>
            <div className={s.fieldLabel}>FROM</div>
            <div className={s.locationPill}>{c.from}</div>
          </div>
          <div className={s.halfField}>
            <div className={s.fieldLabel}>TO</div>
            <div className={s.locationPill}>{c.to}</div>
          </div>
        </div>
        <div className={s.escrowRow}>
          {c.itemCost !== '₹0' && <div className={s.escrowItem}><span>Item cost</span><span>{c.itemCost}</span></div>}
          <div className={s.escrowItem}><span>Delivery fee</span><span>{c.deliveryFee}</span></div>
          <div className={s.escrowTotal}><span>Total</span><span>{c.total}</span></div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.submitBtn}>Post & Pay {c.total} →</div>
      </div>
    </>
  )
}

function TaskChatWaiting({ c }: { c: DemoConfig }) {
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>{c.taskTitle}</div>
          <div className={s.statusBadge} style={{ background: '#FFB34722', color: '#FFB347' }}>⏳ Finding runner</div>
        </div>
      </div>
      <div className={s.body}>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>{c.total} held in escrow. Looking for a runner…</div>
        <div className={s.waiting}>
          <div className={s.sonarRing}><div className={s.sonarInner}>🔍</div></div>
          <div className={s.waitSub}>Scanning for runners nearby…</div>
        </div>
      </div>
    </>
  )
}

function TaskChatProof({ c }: { c: DemoConfig }) {
  const messages = (c.chatMessages ?? [
    { from: 'system' as const, text: '🤝 Runner accepted & is on the way!' },
    { from: 'them' as const, text: "Done! Here's your proof 📸" },
  ]).slice(-2) // show only last 2 to avoid overflow
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div>
          <div className={s.chatTitle}>{c.taskTitle}</div>
          <div className={s.statusBadge} style={{ background: '#F472B622', color: '#F472B6' }}>📎 Review proof</div>
        </div>
      </div>
      <div className={s.body}>
        {messages.map((m, i) => (
          <div key={i} className={`${s.chatBubble} ${m.from === 'system' ? s.bubbleSystem : m.from === 'me' ? s.bubbleMe : s.bubbleThem}`}>
            {m.text}
          </div>
        ))}
        <div className={s.proofImg}>{c.proofEmoji}</div>
        <div className={s.confirmBtn}>Confirm & Release {c.total} ✓</div>
        <div className={s.rejectBtn}>Reject Proof</div>
      </div>
    </>
  )
}

function TaskChatDone({ c }: { c: DemoConfig }) {
  return (
    <>
      <div className={s.chatHeader}>
        <div className={s.backBtn}>←</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={s.chatTitle}>{c.taskTitle}</div>
        </div>
        <div className={s.creditPill}>◈ {c.deliveryFee}</div>
      </div>
      <div className={s.completionCard}>
        <div className={s.completionIcon}>✅</div>
        <div className={s.completionTitle}>Task Completed</div>
        <div className={s.completionSub}>{c.deliveryFee} Moral Credits paid to runner</div>
      </div>
      <div className={s.body}>
        <div className={`${s.chatBubble} ${s.bubbleSystem}`}>✅ Confirmed! Payment released to runner.</div>
        <div className={`${s.chatBubble} ${s.bubbleThem}`}>Thanks! 🙌</div>
      </div>
    </>
  )
}
