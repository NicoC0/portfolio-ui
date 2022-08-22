import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className='flex flex-row'>
          <Navbar />
        </div>

        <div className={`${styles.flexCenter} py-40 flex-row`}>
          <Hero />
        </div>
    </div>
  )
}

export default App
