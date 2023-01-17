import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Store1 from '../../images/store1.jpg'
import Store2 from '../../images/store2.jpg'
import Store4 from '../../images/store4.jpeg'
import Store5 from '../../images/store5.jpg'
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

export default function Home() {
  return (
    <>
    <Navbar/>
      <Footer/>
    </>
  );
}


