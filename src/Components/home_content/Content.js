import React from 'react'
import Rock from '../../images/shoe1.png'
import './content.css'
const Content = () => {
  return (
    <>

<div class="main_header ">
            <div class="main_header_right">
                <figure>
                    <img src={Rock} class="img-fluid"  alt=""/>
                </figure>
            </div>
            <div class="main_header_left">
              <p>Welcome To <span> Nap Store </span> !</p>
              <h1>  Your One stop Solution For All your <span>Sports Wear</span> And All The <span>Sports Accessories</span></h1>
            </div>
</div>
    </>
  )
}

export default Content