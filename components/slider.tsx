import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';
import slide1 from '../public/asset/image/slide1.jpg'
import slide2 from '../public/asset/image/slide2.jpg'
import slide3 from '../public/asset/image/slide3.jpg'
import slide5 from '../public/asset/image/slide5.png'
import slide6 from '../public/asset/image/slide6.png'



import SwiperCore, { Autoplay } from 'swiper';

const Slider = () => {
  SwiperCore.use([Autoplay])
  return (

    <div className=''>  <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2000
      }}
    // onSlideChange={() => console.log('slide change')}
    //  onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="w-screen ">
          <Image className='w-screen'
            src={slide1}
            alt="slide1"

          />
        </div>

      </SwiperSlide>
      <SwiperSlide >
        <div className="w-screen">
          <Image className='w-screen'
            src={slide2}
            alt="slide2"

          />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="w-screen">
          <Image className='w-screen'
            src={slide3}
            alt="slide3"
          />
        </div></SwiperSlide>
  
        <SwiperSlide>
        <div className="w-screen">
          <Image className='w-screen'
            src={slide5}
            alt="slide5"
          />
        </div></SwiperSlide>
        <SwiperSlide>
        <div className="w-screen">
          <Image className='w-screen'
            src={slide6}
            alt="slide6"
          />
        </div></SwiperSlide>

    </Swiper></div>
  )
}

export default Slider