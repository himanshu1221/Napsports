import React from 'react';
import './contact_layout.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Clothes from '../../images/clothes.webp';
const Contact_layout = () => {
  return (
    <>
    <div className='clothes_container mb-52'>
      <h1 className='Center_text mx-auto text-7xl text-slate-900 my-32 lg:ml-8'>How Can We Help ?</h1>
    {/* <img src={Clothes} className="Clothes mb-10" alt="" /> */}
    </div>
      {/* <h1 className='mt-10 mb-20 headings'><u>Talk with our sales team</u></h1> */}
      <div className="lg:py-26 ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-8/12 mx-auto bg-slate-900 text-gray-200 rounded-xl shadow-lg overflow-hidden" >
            <div className='w-full lg:w-1/2 lg:mt-16 bg-slate-900 flex flex-col items-center'>
              <h1 className='lg:mb-14  query'>Location</h1>
              <div className=''>
                <MapContainer center={[26.2008, 78.17435]} zoom={12}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[26.2008, 78.17435]}>
                    <Popup>Location Of Deen Dayal Mall (Gwalior) </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className='w-full lg:w-1/2 py-16 px-12 form '>
              <h1 className='mb-4 query'> Query Form</h1>
              <form action="#">
                <div className='grid grid-cols-2 gap-5'>
                  <input className='border border-gray-400 py-1 px-2 mt-10 text-gray-200k' type="text" id="fname" name="firstname" placeholder="Your First Name.."></input>
                  <input className='border border-gray-400 py-2 px-2 mt-10 text-gray-200' type="text" id="lname" name='lastname' placeholder='your Last Name' />
                </div>
                <div className="mt-10">
                  <input className='border border-gray-400 py-2 px-2 w-full text-gray-200' type="email" id="email" name='email' placeholder='your@xyz' />
                </div>
                <div className="mt-10">
                  <input className='border border-gray-400 py-2 px-2 w-full text-gray-200' type="number" placeholder='Contact Number' />
                </div>
                <div className="mt-10">
                 <textarea name="" id="" cols="53" rows="5" placeholder='Your Query'></textarea>
                </div>
                <div className="mt-10">
                  <button className='w-full bg-purple-500 py-5 text-center text-white'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </>
  )
}

export default Contact_layout
{/* <div className="card">
<div className='form'>
<form action="">
  <label htmlFor="fname">First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your First Name.."></input>
  <label htmlFor="lname">Last Name</label>
  <input type="text" id="lname" name='lastname' placeholder='your Last Name' />
  <label htmlFor="email">Your Email</label>
  <input type="email" id='email' name='email' placeholder='Your@xyz' />
  <label htmlFor="subject">Subject</label>
  <textarea name="subject" id="subject" placeholder='Your Query' cols="20" rows="5"></textarea>
</form>
</div>
</div> */}