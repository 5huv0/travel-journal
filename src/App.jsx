import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import MainSec from './components/MainSec'
import TravelData from './components/TravelData'

function App() {

  const mainSec = TravelData.map(item => {
    return <MainSec 
            {...item}
          />
  })

  return (
    <>
      <Navbar />
      <HeroSec />
      {mainSec}
    </>
  )
}

export default App
