import s from './Nav.module.css'

interface Props {
  tab: 'world' | 'campus'
  setTab: (t: 'world' | 'campus') => void
}

export function Nav({ tab, setTab }: Props) {
  return (
    <nav className={s.nav}>
      <div className={s.logo}>up<span>Front</span></div>
      <div className={s.tabs}>
        <button className={tab === 'world' ? s.active : s.tab} onClick={() => setTab('world')}>
          🌍 Platform
        </button>
        <button className={tab === 'campus' ? s.active : s.tab} onClick={() => setTab('campus')}>
          🎓 IIT ISM
        </button>
      </div>
      <a href="https://forms.gle/gLYn4YehwdNHz912A" target="_blank" rel="noopener noreferrer" className={s.cta}>Get Early Access</a>
    </nav>
  )
}
