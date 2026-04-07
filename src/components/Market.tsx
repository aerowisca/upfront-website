import { useState } from 'react'
import s from './Market.module.css'

const stats = [
  { value: '$42B', label: 'India quick commerce market by 2030', source: 'Goldman Sachs' },
  { value: '23.5M', label: 'Gig workers in India by 2030', source: 'Deloitte × FICCI' },
  { value: '70-80%', label: 'Quick commerce CAGR in India', source: 'Outlook Business' },
  { value: '60%+', label: 'Non-metro e-commerce led by Gen Z', source: 'Outlook Business' },
]

const competitors = [
  {
    segment: '🛒 Quick Commerce',
    apps: 'Blinkit, Zepto, Swiggy Instamart',
    model: 'Company-owned dark stores + hired riders',
    weakness: 'Massive capex, limited to food/grocery, riders earn ₹15–25/order',
    upfront: 'No warehouses. Any item, any task. Runners earn full fee.',
  },
  {
    segment: '🚗 Ride Hailing',
    apps: 'Rapido, Ola, Uber',
    model: 'Platform dispatches professional drivers',
    weakness: 'Surge pricing, driver churn, 20–30% platform cut',
    upfront: 'Neighbour already going your way. No surge. Shared trip economics.',
  },
  {
    segment: '🔧 Task Marketplace',
    apps: 'TaskRabbit, Urban Company',
    model: 'Vetted professionals for skilled tasks',
    weakness: '15–30% platform fee, only skilled/scheduled tasks, no hyperlocal',
    upfront: 'Anyone can be a runner. Instant, hyperlocal, any task.',
  },
  {
    segment: '🍔 Food Delivery',
    apps: 'Swiggy, Zomato',
    model: 'Restaurant aggregator + delivery fleet',
    weakness: 'High restaurant commissions (25–30%), delivery fees, no P2P',
    upfront: 'Post at any restaurant. A neighbour picks it up. No markup.',
  },
  {
    segment: '💼 Freelance',
    apps: 'Fiverr, Upwork',
    model: 'Remote digital tasks, global marketplace',
    weakness: 'Not hyperlocal, not real-time, 20% platform cut',
    upfront: 'Physical, local, instant. Fills the gap Fiverr can\'t.',
  },
]

export function Market() {
  const [active, setActive] = useState(0)
  const c = competitors[active]

  return (
    <section className={s.section}>
      <div className={s.label}>MARKET OPPORTUNITY</div>
      <h2 className={s.title}>A $42B market with no<br />true P2P player.</h2>

      <div className={s.statsGrid}>
        {stats.map(st => (
          <div key={st.value} className={s.statCard}>
            <div className={s.statValue}>{st.value}</div>
            <div className={s.statLabel}>{st.label}</div>
            <div className={s.statSource}>{st.source}</div>
          </div>
        ))}
      </div>

      <h3 className={s.tableTitle}>upFront vs. every segment</h3>
      <p className={s.tableSub}>We don't compete in one category — we replace the need for five different apps.</p>

      <div className={s.layout}>
        <div className={s.segmentList}>
          {competitors.map((comp, i) => (
            <button
              key={i}
              className={i === active ? s.segActive : s.seg}
              onClick={() => setActive(i)}
            >
              <span>{comp.segment}</span>
              <span className={s.segApps}>{comp.apps}</span>
            </button>
          ))}
        </div>

        <div className={s.detail}>
          <div className={s.detailHeader}>
            <div className={s.detailSegment}>{c.segment}</div>
            <div className={s.detailApps}>{c.apps}</div>
          </div>
          <div className={s.rows}>
            <div className={s.detailRow}>
              <div className={s.rowLabel}>Their model</div>
              <div className={s.rowValue}>{c.model}</div>
            </div>
            <div className={s.detailRow}>
              <div className={s.rowLabel}>Their weakness</div>
              <div className={`${s.rowValue} ${s.weak}`}>{c.weakness}</div>
            </div>
            <div className={s.detailRow}>
              <div className={s.rowLabel}>upFront advantage</div>
              <div className={`${s.rowValue} ${s.strong}`}>{c.upfront}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
