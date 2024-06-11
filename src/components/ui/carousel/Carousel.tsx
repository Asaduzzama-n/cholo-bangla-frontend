"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./style.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1604993497641-675b263bad43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1714418903796-addc2facacd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbCUyMGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1596374004290-2d0788efc9b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbCUyMGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://plus.unsplash.com/premium_photo-1666865792731-0a2656f2b12c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHRyYXZlbCUyMGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://plus.unsplash.com/premium_photo-1697729933176-7b999b743f8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRyYXZlbCUyMGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1604993497451-eed6eb271a9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmdsYWRlc2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
