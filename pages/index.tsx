import Header from '@/components/header'
import Slider from '@/components/slider'
import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import app1 from '../public/asset/image/app1.png'
import appstore from '../public/asset/image/appstore-1.jpg'
import playstore from '../public/asset/image/playstore-1.jpg'
import comp1 from '../public/asset/image/comp1.png'
import banner1 from '../public/asset/image/banner1.png'
import kota from '../public/asset/image/kota.jpg'
import noida from '../public/asset/image/noida.jpg'
import delhi from '../public/asset/image/delhi.jpg'
import ahmedabad from '../public/asset/image/ahmedabad.jpg'
import kolkata from '../public/asset/image/kolkata.jpg'
import patna from '../public/asset/image/lucknow.jpg'
import luckhnow from '../public/asset/image/luck.jpg'
import banner2 from '../public/asset/image/banner2.png'
import bottom1 from '../public/asset/image/bottom1.png'
import bottom2 from '../public/asset/image/bottom2.png'
import bottom3 from '../public/asset/image/bottom3.png'
import bottom4 from '../public/asset/image/bottom4.png'
import bottom5 from '../public/asset/image/bottom5.png'
import bottomRotate from '../public/asset/image/bottom-rotate.png'
import result from '../public/asset/image/result.png'
import fb from '../public/asset/image/fb.png'
import youtube from '../public/asset/image/youtube.png'
import insta from '../public/asset/image/insta.png'
import twitter from '../public/asset/image/twitter.png'
import telegram from '../public/asset/image/telegram.png'
import linkedin from '../public/asset/image/linkedin.png'
import call from '../public/asset/image/call.png'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import Reviews from '@/components/reviews'
import Footer from '@/components/footer'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Physicswallah Live</title>
        <meta name="description" content="Education app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
    <section>
      <Header/>
    </section>

    <section>
      <Slider/>
    </section>
<section className='flex justify-center items-center mx-auto'>
    <div className='grid grid-cols-2 w-4/5 justify-center pt-24 rounded-3xl drop-shadow-xl shadow-white1 bg-white absolute z-50 top-3/4'>
      
    <div className="flex flex-col gap-4 text-5xl text-black1 tracking-wider font-bold font-Roboto px-16 py-11 w-max">
      <div className='flex items-center gap-2'>
    <div className=''>THE MOST</div>
    <div className='text-blue1 '>
    <Typewriter
    options={{
      autoStart : true,
      loop: true,
      delay: 40,
      strings: [
        'RELIABLE',
        'VALUEABLE',
        'AFFORDABLE',
      ]
    }}
          
          /></div>
          </div>
    <div className="text-black1">LEARNING PLATFORM</div>
    <div className='text-black1 text-lg'>Learn from our best faculty.</div>
    <div className='flex w-fit rounded-md shadow-2xl border border-gray-300 px-4 py-3 shadow-white1 items-center gap-2 text-xl '>+91 - <input className='p-2 text-lg'
    placeholder='Enter Mobile Number'/><div className='bg-blue1 text-white rounded-full p-2'><MdOutlineArrowForwardIos/></div>
    </div>
    <div className='flex gap-4 items-center'>
      <div>
    <Image className=' rounded-md'
            src={playstore}
            alt="playstore"
            width={130}
            height={130}
            quality={100}
          />
    </div>
    <div>
    <Image className=' rounded-md'
            src={appstore}
            alt="appstore"
            width={130}
            height={130}
            quality={100}
          />
    </div>
    </div>
    </div>

    <div className='flex justify-end items-end py-2 px-11'>
    <Image className=''
            src={app1}
            alt="app1"
            width={440}
            height={444}
          />
    </div>
    </div>
    </section>
  <section className=' font-Roboto mt-[32rem] px-16'>
    <div className='flex text-3xl gap-2 font-bold tracking-wider'>
    <div className='text-black1'>Explore Exam</div><div className='text-blue1'>Categories</div>
    </div>
  </section>
  <section className='flex pl-16'>
    <div className='flex flex-col mt-4 pt-8 p-4 gap-2 font-Roboto rounded-2xl justify-center border border-gray-300 w-80 h-auto items-center bg-white shadow-3xl tracking-wider shadow-white'>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-blue1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>IIT JEE<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>NEET<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>UPSC<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>UPSC OFFLINE<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>GATE<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>MBA<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>School (k-12)<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>Govt Jobs Exams<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>Defence<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>Commerce<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>CA<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>IIT JAM & CSIR NET<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>STATE PSC<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>LAW<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>AE/JE<MdOutlineArrowForwardIos/></div>
    <div className='flex w-60 rounded-md justify-between drop-shadow-xl border text-black1 font-bold border-gray-300 px-4 py-3 shadow-white items-center gap-2 text-base  '>CUET<MdOutlineArrowForwardIos/></div>
    </div>
    <div className='flex  gap-4 h-fit mt-4 pt-8 p-4 font-Roboto'>
      <div className='flex justify-between rounded-md w-72 h-auto font-Roboto font-semibold bg-white shadow-3xl shadow-white border border-gray-300'>
        <div className='flex flex-col justify-between p-2'>
          <div>
<div className='text-lg font-bold'>Class 11th</div>
<div className='text-sm text-gray-400 font-light'>Batches</div>
</div>
<div className='text-blue1 '>Explore</div>
</div>
<div className='flex pt-8 items-end h-min '>

<div className=' rounded-tl-full bg-sky-100 px-4'>
<Image className=''
            src={comp1}
            alt="app1"
            width={85}
            height={85}
          />
</div>

</div>

      </div>
      
      <div className='flex justify-between rounded-md w-72 h-auto font-Roboto font-semibold bg-white shadow-3xl shadow-white border border-gray-300'>
        <div className='flex flex-col justify-between p-2'>
          <div>
<div className='font-bold text-lg'>Class 12th</div>
<div className='text-sm text-gray-400 font-light'>Batches</div>
</div>
<div className='text-blue1 '>Explore</div>
</div>
<div className='flex pt-8 items-end h-min '>

<div className=' rounded-tl-full bg-sky-100 px-4'>
<Image className=''
            src={comp1}
            alt="app1"
            width={85}
            height={85}
          />
</div>

</div>

      </div>

      <div className='flex justify-between rounded-md w-72 h-auto font-Roboto font-semibold bg-white shadow-3xl shadow-white border border-gray-300'>
        <div className='flex flex-col justify-between p-2'>
          <div>
<div className='font-bold text-lg'>Dropper</div>
<div className='text-sm text-gray-400 font-light'>Batches</div>
</div>
<div className='text-blue1 '>Explore</div>
</div>
<div className='flex pt-8 items-end h-min '>

<div className=' rounded-tl-full bg-sky-100 px-4'>
<Image className=''
            src={comp1}
            alt="app1"
            width={85}
            height={85}
          />
</div>

</div>

      </div>

    </div>
    
  </section>

  <section className='pt-4 mt-4 w-full'>
    <div className=' relative'>
    <Image className=''
            src={banner1}
            alt="banner1"
           
          />
   <div className='flex justify-center items-center mx-auto font-Roboto'>
    
   <div className='flex flex-col w-4/5 justify-center gap-5 pt-24 rounded-3xl drop-shadow-xl shadow-white1 bg-white absolute z-50 top-3/4'>
   <div className='flex justify-center font-bold text-2xl'>Find PW Centre in your city</div>
   <div className='flex justify-center items-center gap-4'><hr className="w-32 h-1 border bg-gray-700"/><div className='flex gap-1 text-gray-700 font-bold'>Available in <div className='text-blue1'> 50 </div>cities</div><hr className="w-32 h-1 border bg-gray-700"/></div>
    <div className='flex flex-row justify-evenly w-full gap-4'>
    <div className='flex items-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2'>
      <div className=''>
    <Image className=''
            src={kota}
            alt="kota"
            width={64}
            height={64}
           
          />
          </div>
          <div className='text-black1 font-bold'>
          Kota
          </div>
    </div>

    <div className='flex items-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2'>
      <div>
    <Image className=''
            src={patna}
            alt="patna"
            width={64}
            height={64}
           
          />
          </div>
          <div className='text-black1 font-bold'>
          Patna
          </div>
    </div>

    <div className='flex items-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2'>
      <div>
    <Image className=''
            src={noida}
            alt="noida"
            width={64}
            height={64}
           
          />
          </div>
          <div className='text-black1 font-bold'>
          Noida
          </div>
    </div>

    <div className='flex items-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2 '>
      <div>
    <Image className=''
            src={delhi}
            alt="delhi"
            width={64}
            height={64}
           
          />
          </div>
          <div className='text-black1 font-bold'>
          New Delhi
          </div>
    </div>
    </div>

    <div className='flex flex-row justify-evenly w-full gap-4'>
    <div className='flex items-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2'>
      <div>
    <Image className=''
            src={kolkata}
            alt="kolkata"
            width={64}
            height={64}
           
          />
          </div>
          <div className='text-black1 font-bold'>
          Kolkata
          </div>
    </div>

    <div className='flex items-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2 '>
      <div>
    <Image className=''
            src={ahmedabad}
            alt="ahmedabad"
            width={64}
            height={64}
           
          />
          </div>
          <div className='text-black1 font-bold'>
          Ahmedabad
          </div>
    </div>

    <div className='flex items-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2 '>
      <div>
    <Image className=''
            src={luckhnow}
            alt="luckhnow"
            width={64}
            height={64}
           
          />
          </div>
          <div className='text-black1 font-bold'>
          Lucknow
          </div>
    </div>

    <div className='flex items-center justify-center gap-4 border border-gray-300 rounded-lg w-60 px-4 py-2 text-base text-blue1 font-bold bg-blue-100'>
    View All
    </div>
    </div>

<div className='flex  justify-center items-center text-white  font-bold text-lg'>
  
<button className='flex justify-center gap-2 items-center px-16 py-4 bg-blue1 rounded-lg'>Know More<MdOutlineArrowForwardIos className='text-white'/></button>
</div>
    </div>
    </div>
    </div>
    
  </section>
  <section className=' mt-96 font-Roboto'>
    <div className='flex flex-col gap-11 bg-blue1 pt-4 text-white'>
<div className='flex flex-col gap-3 p-4 items-center justify-center'>
<div className='flex justify-center text-4xl font-bold'>India's Most Loved Educational Platform</div>
<div className='text-sm'>With Physics Wallah, Begin your journey to success.</div>
</div>
<div className='flex justify-evenly items-center gap-2 p-11'>
<div className='flex flex-col items-center'>
  <div className='text-4xl font-bold'>8 M+</div>
<div>
Happy Students
  </div>
  </div>

  <div className='flex flex-col items-center gap-2'>
  <div className='text-4xl font-bold'>13700 +</div>
<div>
Video Lectures
  </div>
  </div>

  <div className='flex flex-col items-center gap-2'>
  <div className='text-4xl font-bold'>2500 +</div>
<div>
Mock Test
  </div>
  </div>

  <div className='flex flex-col items-center gap-2'>
  <div className='text-4xl font-bold'>70000 +</div>
<div>
Questions
  </div>
  </div>
</div>
</div>
  </section>
  <section className='mt-32 p-4 mb-16'>
    <div className='flex flex-col justify-center items-center font-Roboto font-bold gap-4 tracking-wider'>
      <div className='flex gap-2 text-5xl'>
      <div className='text-black1'>Learn From</div><div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink1'>The Best</div>
      </div>
      <div className='text-lg text-gray-700'>
      Explore the concepts with India most experienced Teachers!
      </div>
    </div>
  </section>
  <section className='flex w-full'>
    <div className='flex mx-auto '>
    <Image className='rounded-3xl'
            src={banner2}
            alt="banner2"
           
           
          />
    </div>
  </section>
  <section className='mt-16 p-4 mb-16'>
    <div className='flex flex-col justify-center items-center font-Roboto font-bold tracking-wider gap-4'>
      <div className='flex gap-2 text-5xl'>
      <div className='text-black1'>Why</div><div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink1'>Physics Wallah?</div>
      </div>
      <div className='text-lg text-gray-700'>
      Your One Stop Destination For Success
      </div>
    </div>
  </section>
  <section className=' font-Roboto'>
    <div className='flex flex-col mx-auto w-4/5 pl-11 items-center '>
      <div className='flex items-center gap-11'>
              <div className='w-fit'>
      <Image className='rounded-3xl w-[44rem]'
            src={bottom1}
            alt="bottom1"
            width={290}
            height={220}
          />
      </div>
      <div className='flex flex-col gap-2 tracking-wider'>
        <div className='text-blue1 font-bold text-2xl'>Live / Scheduled Lectures</div>
        <div className='text-gray-600 text-lg'>Learning is an important step for achieving dreams in a students journey. We encourage the student to explore the concept in depth instead of memorizing. The live lectures help us in learning the needs of the students and motivates the students to be creative and be passionate learners.</div>
      </div>
    </div>
    <div >
    <Image className=''
            src={bottom2}
            alt="bottom2"
        
          />
         
    </div>
    <div className='flex items-center gap-11'>
           
      <div className='flex flex-col gap-2 tracking-wider'>
        <div className='text-blue1 font-bold text-2xl'>Live Doubt Solving Sessions</div>
        <div className='text-gray-600 text-lg'>At Physics Wallah we always encourage students to ask questions. We have created an atmosphere where students do not hesitate to ask their doubts. We firmly believe in More you ask, the more you learn.</div>
      </div>
      <div className='w-fit'>
      <Image className='rounded-3xl w-[44rem]'
            src={bottom5}
            alt="bottom5"
            width={290}
            height={220}
            quality={100}
          />
      </div>
    </div>
    <div >
    <Image className=''
            src={bottomRotate}
            alt="bottomRotate"
        
          />
         
    </div>
    <div className='flex items-center gap-11'>
              <div className='w-fit'>
      <Image className='rounded-3xl '
            src={bottom4}
            alt="bottom4"
            width={290}
            height={220}
          />
      </div>
      <div className='flex flex-col gap-2 tracking-wider'>
        <div className='text-blue1 font-bold text-2xl'>Structured And Targeted Study Material</div>
        <div className='text-gray-600 text-lg'>Explore the art of concept with our structured material with intelligent question tackling and problem solving skills.</div>
      </div>
    </div>
    <div >
    <Image className=''
            src={bottom2}
            alt="bottom2"
        
          />
         
    </div>

    <div className='flex items-center gap-11'>
           
           <div className='flex flex-col gap-2 tracking-wider'>
             <div className='text-blue1 font-bold text-2xl'>Tests On Regular Basis For Progress Tracking</div>
             <div className='text-gray-600 text-lg'>It is a set of test papers designed to make the student comfortable with all possible varieties of questions along with the various ways in which the same question can be put in order to make the student sweat in the exam hall.The problems involve multi-dimensional thinking at a time.</div>
           </div>
           <div className='w-fit'>
           <Image className='rounded-3xl w-[44rem]'
                 src={bottom3}
                 alt="bottom3"
                 width={290}
                 height={220}
                 quality={100}
               />
           </div>
         </div>

    </div>
   
  
  </section>
  <section>
    <div>
    <Image className=''
                 src={result}
                 alt="result"
               />
    </div>
  </section>
  <section>
  <Reviews/>
  </section>
  <section>
  <div className='flex flex-col gap-4 bg-white drop-shadow-2xl z-50 shadow-slate-100 border border-gray-300 fixed bottom-11 left-0 w-fit px-4 py-6 rounded-r-2xl h-fit  items-center'>
    <Image className=' rounded-md'
            src={fb}
            alt="fb" 
          />
          <Image className=' rounded-md'
            src={insta}
            alt="insta" 
          />
          <Image className=' rounded-md'
            src={youtube}
            alt="youtube" 
          />
          <Image className=' rounded-md'
            src={twitter}
            alt="twitter" 
          />
           <Image className=' rounded-md'
            src={telegram}
            alt="telegram" 
          />
           <Image className=' rounded-md'
            src={linkedin}
            alt="linkedin" 
          />
    </div>
  </section>
  <section>
    <div className='fixed bottom-11 right-11 z-50 cursor-pointer'>
    <Image className=' rounded-md'
            src={call}
            alt="call" 
          />
    </div>
  </section>
  
      </main>
      <footer>
        <section className='relative'>
      <section className='flex justify-center items-center mx-auto'>
    <div className='grid grid-cols-2 w-4/5 justify-center  rounded-3xl drop-shadow-xl shadow-white1 bg-white absolute z-50 top-0'>
      
    <div className="flex flex-col gap-4 text-5xl text-black1 tracking-wider font-bold font-Roboto px-16 py-11 w-max">
   
    <div className=''>Get Access To Our</div>
    <div className='flex items-center gap-2'>
    <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink1'>Free Batches</div>
    <div className="text-black1">Now</div></div>
    <div className='text-black1 text-lg'>Get instant access to high-quality material.</div>
    <div className='flex w-fit rounded-md shadow-2xl border border-gray-300 px-4 py-3 shadow-white1 items-center gap-2 text-xl '>+91 - <input className='p-2 text-lg'
    placeholder='Enter Mobile Number'/><div className='bg-blue1 text-white rounded-full p-2'><MdOutlineArrowForwardIos/></div>
    </div>
    <div className='flex gap-4 items-center'>
      <div>
    <Image className=' rounded-md'
            src={playstore}
            alt="playstore"
            width={130}
            height={130}
            quality={100}
          />
    </div>
    <div>
    <Image className=' rounded-md'
            src={appstore}
            alt="appstore"
            width={130}
            height={130}
            quality={100}
          />
    </div>
    </div>
    </div>

    <div className='flex justify-start items-start px-24 py-4'>
    <Image className=''
            src={app1}
            alt="app1"
            width={309}
            height={352}
          />
    </div>
    </div>
    </section>
    <div className='mt-72'>
        <Footer/>
        </div>
        </section>
      </footer>
    </>
  )
}
