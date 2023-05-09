import { useState } from 'react'
import './App.css'
import backgroundimg from '../images/pattern-bg-desktop.png'
import arrow from '../images/icon-arrow.svg'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function App() {

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
      <div className='w-3/4 h-44 shadow-lg flex items-center p-2 border-black border-2 rounded-3xl bg-white relative z-50 -bottom-3'>
        <div className="h-24 w-80 border-r-gray-400 border-r-2"></div>
        <div className="h-24 w-80 border-r-gray-400 border-r-2"></div>
        <div className="h-24 w-80 border-r-gray-400 border-r-2"></div>
        <div className="h-24 w-80"></div>
      </div>
    </div>
       <MapContainer className='h-2/3 w-full z-0 -top-24' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
         <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
