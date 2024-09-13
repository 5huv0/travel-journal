import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import MainSec from './components/MainSec'
import TravelData from './components/TravelData'
import Footer from './components/Footer'

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
      <section className='card-container'>
        {mainSec}
      </section>
      <Footer />
    </>
  )
}

export default App
