import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'
import Image from 'next/image'
import logo2 from '../public/asset/image/logo2.png'
import appstore from '../public/asset/image/appstore-1.jpg'
import playstore from '../public/asset/image/playstore-1.jpg'
import fb from '../public/asset/image/fb.png'
import youtube from '../public/asset/image/youtube.png'
import insta from '../public/asset/image/insta.png'
import twitter from '../public/asset/image/twitter.png'
import telegram from '../public/asset/image/telegram.png'
import linkedin from '../public/asset/image/linkedin.png'



import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-footerbg p-8 flex flex-col gap-4 font-Roboto pt-40 px-11'>
        <div>
           <ul className='text-white flex justify-between'>
            <li className='flex gap-1 items-center'>Notes<RiArrowDropDownLine className='text-2xl'/></li>
            <li className='flex gap-1 items-center'>NCERT Solutions<RiArrowDropDownLine className='text-2xl'/></li>
            <li className='flex gap-1 items-center'>Refrences Books<RiArrowDropDownLine className='text-2xl'/></li>
            <li className='flex gap-1 items-center'>Study Resources<RiArrowDropDownLine className='text-2xl'/></li>
            <li className='flex gap-1 items-center'>State Boards<RiArrowDropDownLine className='text-2xl'/></li>
            <li className='flex gap-1 items-center'>Our Channels<RiArrowDropDownLine className='text-2xl'/></li>
            <li className='flex gap-1 items-center'>Online Test<RiArrowDropDownLine className='text-2xl'/></li>
            </ul>

            </div>
            <div className='flex gap-2 items-center pt-6'>
                <div className='flex flex-col flex-1 gap-3 text-white'>
                    <div className='flex gap-3 items-center'>
                <div> <Image className='p-1'
                 src={logo2}
                 alt="logo2"
               /></div>
                <div>Physics Wallah</div>
                </div>
                <div>We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.</div>
               
                </div>
                <div className='flex flex-col flex-1 items-center gap-6'>
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
    <div className='flex gap-4 text-white items-center'>Follow us : 
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
            src={telegram}
            alt="telegram" 
          />
    </div>
    <div className='flex gap-2'><div className='text-pink1 font-bold'>For media enquiries : </div><Link href={'/'} className='text-white underline font-bold'>pr@pw.live</Link></div>
                </div>
            </div>
            <div className='flex flex-col gap-4 text-white tracking-wider'>
                <div className='text-pink1 font-bold'>Know about Physics Wallah</div>
<div>Physics Wallah is India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams. We also provide extensive NCERT solutions, sample papers, NEET, JEE Mains, BITSAT previous year papers, which makes us a one-stop solution for all resources.</div>
<div>Physics Wallah also caters to over 3.5 million registered students and over 78 lakh+ Youtube subscribers with 4.8 rating on its app.</div>
            </div>
            <div className='flex flex-col gap-4 text-white tracking-wider'>
                <div className='text-pink1 font-bold'>We Stand Out because</div>
<div>We successfully provide students with intensive courses by India's top faculties and personal mentors. PW strives to make the learning experience comprehensive and accessible for students of all sections of society. We believe in empowering every single student who could not dream of a good career in engineering and medical field earlier.</div>
            </div>
            <div className='flex flex-col gap-4 text-white tracking-wider'>
                <div className='text-pink1 font-bold'>Our Key Focus Areas</div>
<div>Physics Wallah's main focus is to make the learning experience as economical as possible for all students. With our affordable courses like Lakshya, Udaan and Arjuna and many others, we have been able to provide a platform for lakhs of aspirants. From providing Chemistry, Maths, Physics formula to giving e-books of eminent authors like RD Sharma, RS Aggarwal and Lakhmir Singh, PW focuses on every single student's need for preparation.</div>
            </div>
            <div className='flex flex-col gap-4 text-white tracking-wider'>
                <div className='text-pink1 font-bold'>What Makes Us Different</div>
<div>Physics Wallah strives to develop a comprehensive pedagogical structure for students, where they get a state-of-the-art learning experience with study material and resources. Apart from catering students preparing for JEE Mains and NEET, PW also provides study material for each state board like Uttar Pradesh, Bihar, and others.</div>
            </div>
            <div className='flex font-bold pt-4'>
                <div className='flex  flex-col gap-1 text-pink1 text-2xl'>
                    <div>
                    PW Pathshala
                    </div>
                    <div>
                    Centers
                    </div>
                </div>
<div className='flex tracking-wider gap-11  mx-auto items-center text-white'>
    <div>
    New Delhi
    </div>
    <div>Lucknow</div>
    <div>Pune</div>
    <div>Kanpur</div>
    <div>Varanasi</div>
    <div>Patna</div>
    <div className='flex items-center'>All Centers <MdOutlineArrowForwardIos/></div>


</div>
            </div>
            <div><hr className="w-full h-0 border bg-blue1"/></div>
            <div className='flex font-bold pt-4'>
                <div className='flex  flex-col gap-1 text-pink1 text-2xl'>
                    <div>
                    PW Pathshala
                    </div>
                    <div>
                    Centers
                    </div>
                </div>
<div className='flex tracking-wider gap-11  mx-auto items-center text-white'>
    <div>
    New Delhi
    </div>
    <div>Lucknow</div>
    <div>Pune</div>
    <div>Kanpur</div>
    <div>Varanasi</div>
    <div>Patna</div>
    <div className='flex items-center'>All Centers <MdOutlineArrowForwardIos/></div>


</div>
            </div>
            <div><hr className="w-full h-0 border bg-blue1"/></div>
            <div className='flex font-bold pt-4'>
                <div className='flex  flex-col gap-1 text-pink1 text-2xl'>
                    <div>
                    PW Pathshala
                    </div>
                    <div>
                    Centers
                    </div>
                </div>
<div className='flex tracking-wider gap-11  mx-auto items-center text-white'>
    <div>
    New Delhi
    </div>
    <div>Lucknow</div>
    <div>Pune</div>
    <div>Kanpur</div>
    <div>Varanasi</div>
    <div>Patna</div>
    <div className='flex items-center'>All Centers <MdOutlineArrowForwardIos/></div>


</div>
            </div>
            <div><hr className="w-full h-0 border bg-blue1"/></div>
            <div className='flex justify-between text-white font-bold text-sm'>
                <div className='flex gap-4 items-center'>
                    <div>Terms & Conditions</div>
                    <RxDividerVertical className='text-blue1 text-xl'/>
                    <div>Privacy Policy</div>
                    <RxDividerVertical className='text-blue1 text-xl'/>
                    <div>About Us</div>
                    <RxDividerVertical className='text-blue1 text-xl'/>
                    <div>Careers</div>
                    <RxDividerVertical className='text-blue1 text-xl'/>
                    <div>Contact Us</div>
                </div>
                <div>
                Copyright © 2023 Physics Wallah Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </div>
  )
}

export default Footer