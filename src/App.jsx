import { useState } from 'react'
import './App.css'
import backgroundimg from '../images/pattern-bg-desktop.png'
import arrow from '../images/icon-arrow.svg'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function App() {

  async function getlocation (){
    await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_hPmsedN3znurP8BLPfKgjRxpIZYJF&ipAddress=8.8.8.8').then(response => console.log(response)).catch(err => console.log(err))
  }

  return (
    <>
    <div className="absolute header-area">
      <img src={backgroundimg} className='w-screen h-64 object-cover'/>
    </div>
    <form className='relative h-44 font-rubik text-xs flex flex-col gap-5 items-center justify-center'>
      <label className='text-white font-rubik font-medium text-3xl'>IP Address Tracker</label>
      <div className='flex justify-center w-full'>
        <input type="text" placeholder="Search any IP address or domain" className="rounded-l-md outline-none text-base p-6 h-12 w-2/6"/>
        <button><img src={arrow} className='bg-black h-12 p-4 rounded-r-md'/></button>
      </div>
    </form>
    <div className="flex justify-center align-center">
      <div className='w-3/4 h-44 shadow-lg grid grid-cols-4 font-rubik border-black border-2 rounded-3xl bg-white relative z-50 -bottom-3'>
        <div className="h-1/2 border-r-slate-300 border-r-2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>IP ADDRESS</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>192.212.174</h1>
        </div>
        <div className="h-1/2 border-r-slate-300 border-r-2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>IP ADDRESS</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>192.212.174</h1>
        </div>
        <div className="h-1/2 border-r-slate-300 border-r-2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>IP ADDRESS</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>192.212.174</h1>
        </div>
        <div className="h-1/2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>IP ADDRESS</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>192.212.174</h1>
        </div>
      </div>
    </div>
       <MapContainer className='h-2/3 w-full z-0 -top-24' center={[51.505, -0.09]} zoom={9} scrollWheelZoom={false}>
         <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={[51.505, -0.09]}>
       <Popup>
         A pretty CSS3 popup. <br /> Easily customizable.
       </Popup>
         </Marker>
       </MapContainer>
    </>
  )
  }

export default App
