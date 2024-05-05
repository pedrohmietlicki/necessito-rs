import { useEffect, useState } from 'react'
import './App.css'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import Modal from './components/modal/modal';

function App() {
  const [count, setCount] = useState(0)
  const [position, setPosition] = useState<{latitude:number, longitude: number}>()
  const [selectedRefugio, setSelectedRefugio] = useState<any>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        setPosition(position.coords)
    })
  },[])
  return (
    <>
    {position && (
<MapContainer center={[position?.latitude,position?.longitude]} zoom={13} scrollWheelZoom={true}style={{height:"100vh", width:"100vw"}}>
<TileLayer
  attribution='Necessito RS</a>'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>


<Marker position={[position?.latitude,position?.longitude]} eventHandlers={{click: () => setSelectedRefugio(1)}}>

</Marker>
</MapContainer>
    )}
    {selectedRefugio && (<Modal close={() => setSelectedRefugio(undefined)} />)}
    
    </>
  )
}

export default App
