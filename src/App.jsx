import { useState } from 'react'
import './App.css'
import backgroundimg from '../images/pattern-bg-desktop.png'
import arrow from '../images/icon-arrow.svg'

function App() {

  return (
    <>
    <div className="absolute header-area">
      <img src={backgroundimg} className='w-full h-80 object-cover'/>
    </div>
    <form className='relative h-44 font-rubik text-xs flex flex-col gap-5 items-center justify-center'>
      <label className='text-white font-rubik font-medium text-3xl'>IP Address Tracker</label>
      <div className='flex'>
        <input type="text" placeholder="Search any IP address or domain" className="rounded-l-md outline-none text-base p-6 h-10 w-96"/>
        <button><img src={arrow} className='bg-black h-12 p-4 rounded-r-md'/></button>
      </div>
    </form>
    </>
  )
  }

export default App
