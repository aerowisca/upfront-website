# upFront — Website

Marketing website for the upFront mutual aid platform. Built with React + Vite.

## Stack
- **Framework**: React + TypeScript (Vite)
- **Styling**: CSS Modules
- **Deployed on**: Vercel

## Structure
```
src/
  components/
    Nav.tsx           — Fixed navigation with Platform / IIT ISM tab switcher
    Hero.tsx          — Hero section with tagline and waitlist CTA
    Problem.tsx       — Problem statement (3 cards)
    HowItWorks.tsx    — 4-step explainer
    UseCases.tsx      — Interactive use case explorer (6 cases)
    AppDemo.tsx       — Interactive phone mockup demo (configurable)
    Market.tsx        — Market opportunity + competitor comparison
    Campus.tsx        — IIT ISM tab (use cases, Moral Credits, APK download)
    Footer.tsx
    demo/
      CreatorScreen.tsx  — Creator phone mockup screens
      RunnerScreen.tsx   — Runner phone mockup screens
      screen.module.css  — Shared app-like styles matching real app theme
```

## Two Tabs
- **Platform** — Real-world use cases, escrow payment model, investor-focused market data
- **IIT ISM** — Campus-specific use cases, Moral Credits system, APK download link

## Local Setup
```bash
npm install
npm run dev
```

## Build & Deploy
```bash
npm run build   # outputs to dist/
```
Deploy `dist/` to Vercel — auto-detects Vite, no config needed.

## Key Links
- Waitlist form: https://forms.gle/gLYn4YehwdNHz912A
- APK download: https://expo.dev/artifacts/eas/x42zaWMXCwSTCke92P9NVC.apk
- Backend: https://upfront-backend-production.up.railway.app
