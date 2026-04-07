import s from './Problem.module.css'

const problems = [
  { icon: '🏢', title: 'Centralized & Expensive', desc: 'Swiggy, Blinkit, Zepto — all rely on company-owned dark stores and hired delivery fleets. High overhead = high prices.' },
  { icon: '🚗', title: 'Empty Trips Everywhere', desc: 'Millions of people travel the same routes daily. That capacity is wasted. Someone going to the market could bring your groceries.' },
  { icon: '💸', title: 'Runners Earn Pennies', desc: 'Platform delivery workers earn ₹15–25 per order after expenses. The platform takes the rest. There\'s a better way.' },
]

export function Problem() {
  return (
    <section className={s.section}>
      <div className={s.label}>THE PROBLEM</div>
      <h2 className={s.title}>The gig economy is broken.<br />We're fixing it.</h2>
      <div className={s.grid}>
        {problems.map(p => (
          <div key={p.title} className={s.card}>
            <div className={s.icon}>{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
