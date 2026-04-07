import s from './Footer.module.css'

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.logo}>up<span>Front</span></div>
        <p className={s.tagline}>mutual aid, reimagined.</p>
        <p className={s.copy}>© 2025 upFront. Built with ❤️ at IIT (ISM) Dhanbad.</p>
        <p className={s.email}>aerowisca[@]gmail[.]com</p>
      </div>
    </footer>
  )
}
