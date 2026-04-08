import s from './Campus.module.css'
import { AppDemo } from './AppDemo'

const CAMPUS_CONFIG = {
  creatorName: 'Aryan',
  runnerName: 'Priya',
  taskTitle: 'Anyone near library? Need printouts brought to Aquamarine!',
  taskType: 'DELIVERY' as const,
  from: 'Library Print Shop',
  to: 'Aquamarine Hostel',
  itemCost: '₹0',
  deliveryFee: '5 MC',
  total: '5 MC',
  proofEmoji: '📄',
  currency: 'MC',
  chatMessages: [
    { from: 'them' as const, text: 'bro the printout is ₹10' },
    { from: 'me' as const, text: 'send UPI QR 👍' },
    { from: 'them' as const, text: '📷 [QR sent] — paid ✓' },
  ],
}

const usecases = [
  { icon: '📚', title: 'Library Shop Runs', desc: 'Need stationery, printouts or a book from the library shop? Post a task — a batchmate nearby will grab it for you.' },
  { icon: '💡', title: 'Campus Info Checks', desc: 'Is the library open? Is there power in the lab? Is the canteen serving today? Get real-time answers from someone already there.' },
  { icon: '🍱', title: 'Mess & Canteen Pickup', desc: 'Can\'t make it to the mess in time? Someone heading there can bring your meal back.' },
  { icon: '📦', title: 'Hostel Deliveries', desc: 'Got a package at the gate? Someone passing by can bring it to your room.' },
  { icon: '🔧', title: 'Borrow & Lend', desc: 'Need a charger, calculator or lab coat urgently? Post a task and someone nearby can help.' },
  { icon: '🚶', title: 'Anything on Campus', desc: 'The campus is small but time is precious. upFront makes every errand effortless.' },
]

export function Campus() {
  return (
    <div className={s.page}>
      <section className={s.hero}>
        <div className={s.badge}>🎓 IIT (ISM) Dhanbad — Closed Beta</div>
        <h1 className={s.title}>
          Mutual aid,<br /><span>reimagined</span><br />for campus life.
        </h1>
        <p className={s.sub}>
          upFront started at IIT (ISM) Dhanbad as a closed experiment — a community where students help each other
          using Moral Credits instead of money. No social inequality. Just pure mutual aid.
        </p>
        <a
          href="https://expo.dev/artifacts/eas/x42zaWMXCwSTCke92P9NVC.apk"
          className={s.download}
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 Download APK (Android)
        </a>
        <p className={s.note}>Only @iitism.ac.in Google accounts can sign in</p>
      </section>

      <section className={s.section}>
        <div className={s.label}>CAMPUS USE CASES</div>
        <h2 className={s.sectionTitle}>Built for IIT ISM life.</h2>
        <div className={s.grid}>
          {usecases.map(u => (
            <div key={u.title} className={s.card}>
              <div className={s.icon}>{u.icon}</div>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={s.credits}>
        <div className={s.creditsInner}>
          <div className={s.creditsIcon}>◈</div>
          <h2>Moral Credits, not money.</h2>
          <p>
            On campus, we use Moral Credits — a non-monetary exchange system. Help someone and earn credits.
            Need help? Spend credits. No real money changes hands — just pure mutual aid.
          </p>
          <div className={s.creditStats}>
            <div><span>50</span><p>Credits on signup</p></div>
            <div><span>5</span><p>Credits per INFO task</p></div>
            <div><span>10+</span><p>Credits per DELIVERY task</p></div>
          </div>
        </div>
      </section>

      <AppDemo config={CAMPUS_CONFIG} />
    </div>
  )
}
