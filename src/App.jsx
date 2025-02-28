import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="rainbow-divider"></div>
      <About />
      <div className="rainbow-divider"></div>
      <Projects />
      <div className="rainbow-divider"></div>
      <Footer />
    </div>
  )
}

export default App