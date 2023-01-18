import React from 'react'
import Rock from '../../images/shoe1.png'
import './content.css'
const Content = () => {
  return (
    <>

<div class="container-fluid main_header ">
  <div class="row">
      <div class="col-md-10 col-12 mx-auto">
          <div class="row">
            <div class="col-md-6 col-12 main_header_right">
                <figure>
                    <img src={Rock} class="img-fluid"  alt=""/>
                </figure>
            </div>
            <div class="col-md-6 col-12 main_header_left">
              <p>Welcome To Nap Store !</p>
              <h1>  Your One stop Solution For All your <span>Sports Wear</span> And All The <span>Sports Accessories</span></h1>
            </div>
          </div>
      </div>
  </div>
</div>
    </>
  )
}

export default Content