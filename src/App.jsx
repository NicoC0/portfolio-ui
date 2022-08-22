import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
        <div className='flex flex-row'>
          <Navbar />
        </div>
    </div>
  )
}

export default App
