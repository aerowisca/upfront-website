import { useState } from 'react'
import s from './UseCases.module.css'

const cases = [
  {
    icon: '🚗',
    title: 'Ride Sharing',
    tag: 'Transport',
    desc: 'Need a lift to the station? Post your destination. Someone already heading that way accepts — you split the trip, they earn for the detour.',
    example: '"Going to Dhanbad station at 6pm, need a ride from Sector 4"',
  },
  {
    icon: '🍔',
    title: 'Food Pickup',
    tag: 'Food',
    desc: 'Post a task at your favourite restaurant. A runner nearby picks up your order and delivers it. No dark store, no markup — just a neighbour helping out.',
    example: '"Pick up 2 momos from Sharma Dhaba, I\'ll pay + ₹40 tip"',
  },
  {
    icon: '🛒',
    title: 'Kirana Delivery',
    tag: 'Grocery',
    desc: 'Your local kirana store, delivered. Someone in your colony is already going — they grab your list and drop it off. Supports local businesses.',
    example: '"Get milk, bread, eggs from Raju Store, Block C"',
  },
  {
    icon: '📦',
    title: 'Errand Running',
    tag: 'Errands',
    desc: 'Courier pickup, document drop, pharmacy run — anything you need done nearby. Post it, someone accepts, it gets done.',
    example: '"Drop this envelope at HDFC Bank branch before 3pm"',
  },
  {
    icon: '🔍',
    title: 'Info Tasks',
    tag: 'Information',
    desc: 'Is the shop open? What\'s the queue like? Is there parking? Get real-time ground truth from someone already there.',
    example: '"Check if Apollo Pharmacy has Dolo 650 in stock"',
  },
  {
    icon: '🏠',
    title: 'Hyperlocal Help',
    tag: 'Anything',
    desc: 'The use cases are endless. If it can be done by a person nearby, upFront can make it happen. Community-powered, fraud-protected.',
    example: '"Water my plants while I\'m away this weekend"',
  },
]

export function UseCases() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section className={s.section}>
      <div className={s.label}>USE CASES</div>
      <h2 className={s.title}>If it can be done nearby,<br />upFront can do it.</h2>
      <div className={s.layout}>
        <div className={s.list}>
          {cases.map((item, i) => (
            <button key={i} className={i === active ? s.itemActive : s.item} onClick={() => setActive(i)}>
              <span className={s.itemIcon}>{item.icon}</span>
              <div>
                <div className={s.itemTitle}>{item.title}</div>
                <div className={s.itemTag}>{item.tag}</div>
              </div>
            </button>
          ))}
        </div>
        <div className={s.detail}>
          <div className={s.detailIcon}>{c.icon}</div>
          <div className={s.detailTag}>{c.tag}</div>
          <h3 className={s.detailTitle}>{c.title}</h3>
          <p className={s.detailDesc}>{c.desc}</p>
          <div className={s.example}>
            <div className={s.exampleLabel}>Example task</div>
            <div className={s.exampleText}>{c.example}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
