import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';

import './slide.css';
import SwiperCore from 'swiper';


import { Pagination ,Autoplay} from 'swiper/modules';

SwiperCore.use([Autoplay, Pagination]);
export default function Slider({ onScrollToTarget }) {

  
  return (
   
    
        <div classname=''>
          <FontAwesomeIcon  onClick={onScrollToTarget} icon={faArrowDownLong}  className='hidden md:block animate-bounce  absolute bottom-[19%] left-[8%] text-[30px] bg-gray-600 px-[6px] py-4 rounded-[25px] border-2 border-black text-red-500 z-10'/>
          <div className="swiper-container h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[83.4vh]">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000, 
              disableOnInteraction: false,
            }}
            className="mySwiper h-full"
          >
            <SwiperSlide><img src='/images/slider/1.jpeg' className='h-full w-full object-cover' alt='Slide 1' /></SwiperSlide>
          <SwiperSlide><img src='/images/slider/2.JPG' className='' alt='Slide 2' /></SwiperSlide>
          <SwiperSlide><img src='/images/slider/3.JPG' className='h-full w-full object-cover' alt='Slide 3' /></SwiperSlide>
          <SwiperSlide><img src='/images/slider/4.jpeg' className='h-full w-full object-cover' alt='Slide 4' /></SwiperSlide>
          <SwiperSlide><img src='/images/slider/5.jpeg' className='h-full w-full object-cover' alt='Slide 5' /></SwiperSlide>
          <SwiperSlide><img src='/images/slider/6.jpeg' className='h-full w-full object-cover' alt='Slide 6' /></SwiperSlide>
          <SwiperSlide><img src='/images/slider/7.jpeg' className='h-full w-full object-cover' alt='Slide 7' /></SwiperSlide>
          </Swiper>
          </div>
        </div>
      );
    }
    

