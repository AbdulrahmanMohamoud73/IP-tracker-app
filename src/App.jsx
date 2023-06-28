import './App.css'
import backgroundimg from '../images/pattern-bg-desktop.png'
import arrow from '../images/icon-arrow.svg'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

function App() {

  const [inputVal, SetinputVal] = useState('');
  const [responsedata, Setresponsedata] = useState(null);

  const getlocation = async() => {
    await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${inputVal}`).then(response => response.json()).then(data => {Setresponsedata(data); console.log(data)}).catch(err => console.log(err))
  }

  return (
    <>
    <div className="absolute h-1/3 header-area">
      <img src={backgroundimg} className='w-screen h-full object-cover'/>
    </div>
    <form className='relative h-1/3 font-rubik text-xs flex flex-col gap-5 items-center justify-center'>
      <label className='text-white font-rubik font-medium text-3xl'>IP Address Tracker</label>
      <div className='flex justify-center w-full'>
        <input type="text" onChange={ e => SetinputVal(e.target.value)} placeholder="Search any IP address or domain" className="rounded-l-md outline-none text-base p-6 h-12 w-2/6"/>
        <button><img  onClick={ e => { e.preventDefault(); getlocation()}} src={arrow} className='bg-black h-12 p-4 rounded-r-md'/></button>
      </div>
    </form>
    <div className="absolute w-screen flex justify-center items-center">
      <div className='w-3/5 h-40 -top-10 shadow-lg lg:grid grid-cols-4 sm:grid-cols-1 sm:grid-rows-4 content-center font-rubik border-black border-2 rounded-3xl bg-white relative z-50'>
        <div className="h-fit border-r-slate-300 border-r-2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>IP ADDRESS</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>{responsedata?.ip}</h1>
        </div>
        <div className="h-fit border-r-slate-300 border-r-2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>ISP</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>{responsedata?.isp}</h1>
        </div>
        <div className="h-fit border-r-slate-300 border-r-2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>Location</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>{`${responsedata?.location?.region}, ${responsedata?.location?.country}`}</h1>
        </div>
        <div className="h-1/2">
        <h2 className='font-bold text-sm uppercase text-slate-500 tracking-wide mx-5'>TIMEZONE</h2>
        <h1 className='font-bold text-3xl uppercase text-black tracking-wide mx-4 my-3'>{`UTC ${responsedata?.location?.timezone}`}</h1>
        </div>
      </div>
    </div>
       <MapContainer className='h-2/3 w-full z-0' attributionControl={false} center={[51.505, -0.09]} zoom={9} scrollWheelZoom={false}>
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
