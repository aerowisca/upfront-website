import { useState } from 'react'
import './App.css'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { HowItWorks } from './components/HowItWorks'
import { UseCases } from './components/UseCases'
import { Trust } from './components/Trust'
import { Market } from './components/Market'
import { Campus } from './components/Campus'
import { Footer } from './components/Footer'

export default function App() {
  const [tab, setTab] = useState<'world' | 'campus'>('world')

  return (
    <>
      <Nav tab={tab} setTab={setTab} />
      {tab === 'world' ? (
        <>
          <Hero />
          <Problem />
          <HowItWorks />
          <UseCases />
          <Trust />
          <Market />
        </>
      ) : (
        <Campus />
      )}
      <Footer />
    </>
  )
}
