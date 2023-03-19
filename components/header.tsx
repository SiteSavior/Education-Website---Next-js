import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineWhatsApp } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';


const Header = () => {
  return (
    <div className='grid grid-cols-2 bg-white items-center justify-evenly p-4'>
      <div className='flex items-center gap-8 justify-center'>
        <div className=' flex gap-1 font-Montserrat'><Image
            src={'/asset/image/logo.png'}
            alt='logo'
            width={57}
            height={60}
            />
           </div>
    <div className='flex'>
        <ul className='flex text-blue1 items-center font-Roboto font-semibold text-base gap-4 '>
           
            <li className='flex items-center px-2 border border-black1 rounded-md'><button className='px-2 py-2  '>All Course</button><MdArrowDropDown/></li>
            <li>PW Centers</li>
            <li>PW Skills</li>
            <li>Ask Doubt</li>
        </ul>
    </div>
    </div>
   <div className='flex  gap-5 items-center font-Roboto justify-center'>
   <div className='flex flex-col mb-2'>
    <div className='flex justify-end '>
    <div className='bg-orange-400 px-1 py-0.5 text-white text-xs rounded-sm animate-pulse '>new</div>
    </div>
    <div className='flex items-center gap-1  text-blue1 font-semibold'><AiOutlineShoppingCart className='text-2xl animate-bounce'/><div className='text-sm'>PW Store</div></div>
    </div>
<button className='px-4 py-3 bg-blue1 text-white rounded-md font-semibold'>Login/Register</button>
</div>

</div>
  )
}

export default Header