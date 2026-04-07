import s from './Trust.module.css'

const pillars = [
  {
    icon: '🔒',
    title: 'Escrow Payment',
    desc: 'Creators pay upfront into escrow. Money is locked until the task is confirmed complete. No payment, no release.',
  },
  {
    icon: '💰',
    title: 'Runner\'s Skin in the Game',
    desc: 'Runners use their own money to fulfill tasks. This creates a binding contract — they\'re financially committed to completing the job.',
  },
  {
    icon: '📸',
    title: 'Proof of Completion',
    desc: 'Runners submit photo or video proof before payment releases. Creators review and confirm. No proof, no pay.',
  },
  {
    icon: '⚖️',
    title: 'Dispute Resolution',
    desc: 'Either party can raise a dispute. Our system freezes funds and reviews evidence. Fair outcomes, every time.',
  },
  {
    icon: '⭐',
    title: 'Trust Scoring',
    desc: 'Every user builds a trust score. Repeated violations lock accounts. Good actors get priority matching.',
  },
  {
    icon: '🚫',
    title: 'Penalty System',
    desc: 'Cancellations cost money. Dropping a task mid-way incurs a penalty. This keeps both sides accountable.',
  },
]

export function Trust() {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.label}>TRUST & SAFETY</div>
        <h2 className={s.title}>Fraud-proof by design.</h2>
        <p className={s.sub}>
          We don't rely on ratings or reviews. We use financial contracts and cryptographic proof.
          Everyone has skin in the game.
        </p>
        <div className={s.grid}>
          {pillars.map(p => (
            <div key={p.title} className={s.card}>
              <div className={s.icon}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
