import { useState, useEffect, useRef } from 'react'
import s from './AppDemo.module.css'
import { CreatorScreen } from './demo/CreatorScreen'
import { RunnerScreen } from './demo/RunnerScreen'

export type DemoStep = 0 | 1 | 2 | 3 | 4

export type DemoConfig = {
  creatorName: string
  runnerName: string
  taskTitle: string
  taskType: 'DELIVERY' | 'INFO'
  from: string
  to: string
  itemCost: string
  deliveryFee: string
  total: string
  proofEmoji: string
  currency: string // '₹' or 'MC'
  chatMessages?: Array<{ from: 'me' | 'them' | 'system'; text: string }>
}

const WORLD_CONFIG: DemoConfig = {
  creatorName: 'Priya',
  runnerName: 'Rahul',
  taskTitle: 'Need medicine from Apollo — anyone heading that way?',
  taskType: 'DELIVERY',
  from: 'Apollo Pharmacy, Sector 12',
  to: 'Tower B, Apt 304',
  itemCost: '₹180',
  deliveryFee: '₹30',
  total: '₹210',
  proofEmoji: '💊',
  currency: '₹',
}

const STEP_LABELS = [
  'Creator Home',
  'Create Task screen',
  'Runner accepts',
  'Runner submits proof',
  'Task complete ✅',
]

export function AppDemo({ config = WORLD_CONFIG }: { config?: DemoConfig }) {
  const [step, setStep] = useState<DemoStep>(0)
  const [auto, setAuto] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (auto) {
      timer.current = setInterval(() => {
        setStep(s => {
          if (s >= 4) { setAuto(false); return s }
          return (s + 1) as DemoStep
        })
      }, 2800)
    }
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [auto])

  return (
    <div className={s.wrap}>
      <div className={s.label}>LIVE DEMO</div>
      <h2 className={s.title}>See it in action.</h2>
      <p className={s.sub}>A real task, from post to completion.</p>

      <div className={s.stepBar}>
        {STEP_LABELS.map((l, i) => (
          <button key={i} className={i === step ? s.stepActive : s.step}
            onClick={() => { setAuto(false); setStep(i as DemoStep) }}>
            <span className={s.stepN}>{i + 1}</span>
            <span className={s.stepL}>{l}</span>
          </button>
        ))}
      </div>

      <div className={s.phones}>
        <div className={s.side}>
          <div className={s.role}>👤 Creator</div>
          <Phone><CreatorScreen step={step} config={config} /></Phone>
        </div>
        <div className={s.divider}><div /><span>⚡</span><div /></div>
        <div className={s.side}>
          <div className={s.role}>🏃 Runner</div>
          <Phone><RunnerScreen step={step} config={config} /></Phone>
        </div>
      </div>

      <div className={s.controls}>
        <button className={s.btn} disabled={step === 0}
          onClick={() => { setAuto(false); setStep(s => Math.max(0, s - 1) as DemoStep) }}>← Prev</button>
        <button className={s.play} onClick={() => setAuto(a => !a)}>
          {auto ? '⏸ Pause' : '▶ Auto Play'}
        </button>
        <button className={s.btn} disabled={step === 4}
          onClick={() => { setAuto(false); setStep(s => Math.min(4, s + 1) as DemoStep) }}>Next →</button>
      </div>
    </div>
  )
}

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.phone}>
      <div className={s.notch} />
      <div className={s.screen}>{children}</div>
      <div className={s.homeBar} />
    </div>
  )
}
