import './App.css'
import backgroundimg from '../images/pattern-bg-desktop.png'
import arrow from '../images/icon-arrow.svg'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import axios from 'axios'


function App() {

  const [inputVal, setInputVal] = useState('');
  const [responsedata, setResponseData] = useState(null);

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  
  const getlocation = async() => {

      const response = await axios.get(`https://technotes-api.onrender.com/?ipAddress=${inputVal}`)
      .catch(error => console.log(error))

    setResponseData(response.data)
  }

  return (
    <>
    <div className="absolute h-1/3 header-area">
      <img src={backgroundimg} className='w-screen h-full object-cover'/>
    </div>
    <header className='relative h-1/3 font-rubik text-xs top-7  flex flex-col gap-5 items-center justify-start'>
      <label className='text-white font-rubik font-medium text-3xl'>IP Address Tracker</label>
      <form className='flex justify-center w-full'>
        <input type="text" onChange={ e => setInputVal(e.target.value)} placeholder="Search any IP address or domain" className="rounded-l-md outline-none text-base p-6 h-12 w-2/6 sm:w-4/6"/>
        <button><img  onClick={ e => { e.preventDefault(); getlocation()}} src={arrow} className='bg-black h-12 p-4 rounded-r-md'/></button>
      </form>
    </header>
    <article className="absolute w-screen flex sm:top-1/4">
      <div className='w-4/6 h-fit py-4 px-3 mx-auto sm:top-4 -top-12 shadow-lg sm:grid lg:grid-cols-4 sm:gap-2 gap-1 sm:grid-cols-2 flex flex-col content-center items-center font-rubik border-black border-2 rounded-3xl bg-white relative z-50'>
        <div className="h-4/5 lg:border-r-2 lg:border-r-slate-300">
        <h2 className='font-bold text-sm sm:text-xs text-center uppercase text-slate-500 tracking-wide mx-5'>IP ADDRESS</h2>
        <h1 className='font-bold text-sm text-center sm:text-base xl:text-2xl uppercase sm:flex sm:justify-center text-black tracking-normal sm:tracking-wide lg:mx-4 lg:my-3'>{responsedata?.ip ? responsedata?.ip: `-`}</h1>
        </div>
        <div className="h-4/5 lg:border-r-2 lg:border-slate-300">
        <h2 className='font-bold text-sm sm:text-xs text-center uppercase text-slate-500 tracking-wide mx-5'>ISP</h2>
        <h1 className='font-bold text-sm text-center sm:text-sm uppercase sm:flex sm:justify-center text-black tracking-normal sm:tracking-wide lg:mx-4 lg:my-3'>{responsedata?.isp ? responsedata?.isp: `-` }</h1>
        </div>
        <div className="h-4/5 lg:border-r-2 lg:border-r-slate-300">
        <h2 className='font-bold text-sm sm:text-xs text-center uppercase text-slate-500 tracking-wide mx-5'>LOCATION</h2>
        <h1 className='font-bold text-lg text-center sm:text-base uppercase sm:flex sm:justify-center text-black tracking-normal sm:tracking-wide lg:mx-4 lg:my-3'>{responsedata?.location ? `${responsedata?.location?.region}, ${responsedata?.location?.country}` : `-`}</h1>
        </div>
        <div className="h-4/5lg:border-r-slate-300">
        <h2 className='font-bold text-sm sm:text-xs text-center uppercase text-slate-500 tracking-wide mx-5'>TIMEZONE</h2>
        <h1 className='font-bold text-xl text-center sm:text-xl uppercase sm:flex sm:justify-center text-black tracking-normal sm:tracking-wide lg:mx-4 lg:my-3'>{ responsedata?.location ? `UTC ${responsedata?.location?.timezone}`: `-`}</h1>
        </div>
      </div>
    </article>
    <MapContainer className="h-2/3 w-full z-0" attributionControl={false} center={responsedata?.location ? [responsedata?.location?.lat, responsedata?.location?.lng] : [51.505, -0.09]} zoom={9} scrollWheelZoom={true}>
        
        {responsedata?.location && <ChangeView zoom={9} center={[responsedata?.location?.lat, responsedata?.location?.lng]} />}
        
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {responsedata?.location?.lat && responsedata?.location?.lng ? (<Marker position={[responsedata.location.lat, responsedata.location.lng]}></Marker> ) : ( <Marker position={[51.505, -0.09]}></Marker>
        
        )}
        
      </MapContainer>
    </>
  )
  }

export default App
