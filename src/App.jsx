import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import MainSec from './components/MainSec'

function App() {

  return (
    <>
      <Navbar />
      <HeroSec />
      <MainSec />
    </>
  )
}

export default App
