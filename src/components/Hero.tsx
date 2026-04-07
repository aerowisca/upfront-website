import s from './Hero.module.css'

export function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.badge}>🚀 Reimagining the gig economy</div>
      <h1 className={s.title}>
        Be helpful. Get helped.<br />
        <span>Anytime, anywhere.</span>
      </h1>
      <p className={s.sub}>
        upFront connects people who need things done with people already going that way.
        No corporate middlemen. No dark stores. Just humans helping humans — and getting paid for it.
      </p>
      <div className={s.actions}>
        <a href="mailto:aerowisca@gmail.com" className={s.primary}>Join the Waitlist</a>
        <a href="#how" className={s.secondary}>See how it works ↓</a>
      </div>
      <div className={s.stats}>
        <div className={s.stat}><span>$42B</span><p>India quick commerce by 2030</p></div>
        <div className={s.divider} />
        <div className={s.stat}><span>23.5M</span><p>gig workers by 2030</p></div>
        <div className={s.divider} />
        <div className={s.stat}><span>0</span><p>true P2P task platforms in India</p></div>
      </div>
    </section>
  )
}
