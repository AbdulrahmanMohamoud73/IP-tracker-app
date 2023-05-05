import { useState } from 'react'
import './App.css'
import backgroundimg from '../images/pattern-bg-desktop.png'

function App() {

  return (
    <>
    <div className="header-area">
      <img src={backgroundimg} className='w-full h-44 object-cover'/>
      <div className='bg-orange-600'></div>
    </div>
    </>
  )
  }

export default App
