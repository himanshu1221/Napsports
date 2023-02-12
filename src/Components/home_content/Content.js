import React from 'react'
import Rock from '../../images/shoe1.png'
import './content.css'
const Content = () => {
  return (
    <>

<div className="main_header container mx-auto p-10">
          <div className="flex flex-row flex-wrap">
            <div className="main_header_left w-full md:w-1/2 p-10">
              <p>Welcome To <span class="store_main"> Nap Store</span></p>
              <h1>  Your One stop Solution For All your <span>Sports Wear</span> & <span>Sports Accessories</span></h1>
            </div>
            <div class="main_header_right w-full md:w-1/2 p-10">
                <figure>
                    <img src={Rock} class="img-fluid"  alt=""/>
                </figure>
            </div>
          </div>
</div>
    </>
  )
}

export default Content