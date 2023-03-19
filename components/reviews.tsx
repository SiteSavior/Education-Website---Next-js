import React from 'react'
import Image from 'next/image'
import review from '../public/asset/image/review.png'
import review2 from '../public/asset/image/review2.png'

import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = () => {
  SwiperCore.use([Autoplay])

  return (
    <div className='m-6 p-4 shadow-3xl shadow-white border border-gray-300 rounded-2xl bg-white'>
        <div className='flex justify-start p-4'>
        <div className='flex flex-col items-center gap-4'>
         <div className=' font-Roboto font-bold text-2xl'>Testimonials</div>
         <div><hr className="w-32 h-1 border bg-blue1"/></div>
         </div>
         </div>
         <div className='flex gap-2 text-5xl font-Roboto font-semibold p-4'>
         <div className='text-black1'>Hear It From</div><div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink1'>The Masters</div>
         </div>
    <Swiper
      // spaceBetween={50}
      slidesPerView={2}
      spaceBetween={10}
      autoplay={{
        delay: 4000
      }}
    // onSlideChange={() => console.log('slide change')}
    //  onSwiper={(swiper) => console.log(swiper)}
    >
    <SwiperSlide >
    <div className='flex flex-col bg-slate-200 font-Roboto tracking-wider text-gray-700 '>
    <Image className='p-1'
                 src={review}
                 alt="review"
               />
<div className='px-6 py-4'>I have been a part of the PW Family since Alakh sir started uploading videos to YouTube. I love the way Alakh sir teaches, and I attribute everything i have accomplished to Alakh sir videos because with PW I have excelled in my interpersonal and academic skills.
</div><div className='font-bold text-blue1 pl-6 py-2'>Shivam Raghuvanshi</div>
<div className='flex items-end justify-end p-1'> <Image className='p-1'
                 src={review2}
                 alt="review2"
               />
               </div>
    </div>
    </SwiperSlide>

    <SwiperSlide >
    <div className='flex flex-col bg-slate-200 font-Roboto tracking-wider text-gray-700 '>
    <Image className='p-1'
                 src={review}
                 alt="review"
               />
<div className='px-6 py-4'>Due to the efforts made by the faculty of PW I was able to bag a good rank in JEE. They always provided me with the assistance that I required for my overall development and to improve my knowledge. I will always be grateful to them for providing me with a platform of practical learning and preparing me for academic life.
</div><div className='font-bold text-blue1 pl-6 py-2'>Pardeep Rajesh Mundik</div>
<div className='flex items-end justify-end p-1'> <Image className='p-1'
                 src={review2}
                 alt="review2"
               />
               </div>
    </div>
    </SwiperSlide>

    <SwiperSlide >
    <div className='flex flex-col bg-slate-200 font-Roboto tracking-wider text-gray-700 '>
    <Image className='p-1'
                 src={review}
                 alt="review"
               />
<div className='px-6 py-4'>Can not express the amount of respect to all the members in this platform who are working so hard for us. We are so blessed to have this lovely platform in our generation.
</div><div className='font-bold text-blue1 pl-6 py-2'>Soumya Ranjan Shah</div>
<div className='flex items-end justify-end p-1'> <Image className='p-1'
                 src={review2}
                 alt="review2"
               />
               </div>
    </div>
    </SwiperSlide>

    <SwiperSlide >
    <div className='flex flex-col bg-slate-200 font-Roboto tracking-wider text-gray-700 '>
    <Image className='p-1'
                 src={review}
                 alt="review"
               />
<div className='px-6 py-4'>PW is a place where you can find an amalgamation of learning. I feel great because I only studied through Physics Wallah, and because I am from a remote location of Uttarakhand, I had no other source for JEE preparation other than the PW course.
</div><div className='font-bold text-blue1 pl-6 py-2'>Rajeev Kandal</div>
<div className='flex items-end justify-end p-1'> <Image className='p-1'
                 src={review2}
                 alt="review2"
               />
               </div>
    </div>
    </SwiperSlide>
    </Swiper>

    </div>
  )
}

export default Reviews