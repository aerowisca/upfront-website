import s from './Trust.module.css'

const pillars = [
  {
    icon: '🔒',
    title: 'Escrow Payment',
    desc: 'Creator pays item cost + delivery fee into escrow before the task starts. Funds are locked — nobody touches them until completion.',
  },
  {
    icon: '💰',
    title: 'Runner\'s Skin in the Game',
    desc: 'Runner buys the item with their own money. They\'re financially committed — if they don\'t deliver, they lose what they spent.',
  },
  {
    icon: '📸',
    title: 'Proof of Completion',
    desc: 'Runner submits photo or video proof of delivery. Creator reviews before funds release. No proof, no pay.',
  },
  {
    icon: '💸',
    title: 'Instant Payout',
    desc: 'Creator confirms → app releases item cost + delivery fee to runner instantly. Runner gets reimbursed and earns their fee in one transfer.',
  },
  {
    icon: '⚖️',
    title: 'Dispute Resolution',
    desc: 'Either party can raise a dispute. Funds stay frozen. Our system reviews evidence and releases to the rightful party.',
  },
  {
    icon: '🚫',
    title: 'Penalty System',
    desc: 'Cancellations and drops cost money. Creators who cancel mid-task pay a penalty to the runner. Accountability on both sides.',
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
