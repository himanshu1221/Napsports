import React from 'react'
import './contact_layout.css'
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet'

const Contact_layout = () => {
  return (
    <>
  <div className="card">
    <h1>Talk with our sales team</h1>
      <div className="map-wrap">
        <MapContainer center={[26.2008,78.17435]} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[26.2008,78.17435]}>
          <Popup>Location Of Deen Dayal Mall (Gwalior) </Popup>
          </Marker>
        </MapContainer>
      </div>
  </div>
    </>
  )
}

export default Contact_layout