import s from './HowItWorks.module.css'

const steps = [
  { n: '01', role: 'Creator', icon: '📍', title: 'Post & pay into escrow', desc: 'Describe what you need. Pay the item cost + delivery fee upfront into escrow. Funds are locked — nobody gets them until the task is done.' },
  { n: '02', role: 'Platform', icon: '⚡', title: 'Smart matching', desc: 'upFront finds runners already near your location or heading your way. Real-time GPS matching, zero wasted trips.' },
  { n: '03', role: 'Runner', icon: '🏃', title: 'Buy with own money', desc: 'Runner accepts and buys the item using their own money. This creates a binding financial contract — they\'re committed to completing the task.' },
  { n: '04', role: 'Both', icon: '✅', title: 'Confirm & get paid', desc: 'Runner submits proof. Creator confirms. App releases item cost + delivery fee to runner instantly. Disputes? Our system protects both sides.' },
]

export function HowItWorks() {
  return (
    <section className={s.section} id="how">
      <div className={s.label}>HOW IT WORKS</div>
      <h2 className={s.title}>Four steps. Zero friction.</h2>
      <div className={s.steps}>
        {steps.map((step, i) => (
          <div key={i} className={s.step}>
            <div className={s.num}>{step.n}</div>
            <div className={s.content}>
              <div className={s.roleTag}>{step.role}</div>
              <div className={s.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            {i < steps.length - 1 && <div className={s.connector} />}
          </div>
        ))}
      </div>
    </section>
  )
}
