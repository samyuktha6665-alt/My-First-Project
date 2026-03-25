import React from 'react'
import { FaGlobe } from "react-icons/fa";

const Footer = () => {

  return (
  
    <div className='bg-black'>
      <div>
      <img src='https://babablog.oss-accelerate.aliyuncs.com/2023/07/a-woman-wearing-a-bright-pink-winter-coat.jpeg?x-oss-process=style%2Ffull' 
      className='w-full h-[500px] p-4' alt='img'>
      </img>
</div>

      <div className='flex text-white justify-around items-start bg-black p-10 '>

        <div className='flex flex-col mb-3 text-xl'>
          <h1 className='flex font-bold'>Get to Know</h1>
          <ul>
            <li>About ECart</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>

        <div className='flex flex-col items-center mb-3 text-xl'>
          <h1 className='flex font-bold mr-6'> Connect with Us</h1>
          <ul>
            <li className='flex mr-22'>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className='flex flex-col items-center mb-3 text-xl'>
          <h1 className='flex font-bold mr-13'> Make Money with Us </h1>
          <ul>
            <li>sell on Ecart</li>
            <li>protect and build your band</li>
            <li>become an affilliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>

        <div className='flex flex-col items-center mb-3 text-xl'>
          <h1 className='flex font-bold mr-20'>Let Us Help You</h1>
          <ul >
            <li>Login</li>
            <li>Returns centre</li>
            <li>100% purchase protection</li>
            <li>Help</li>
          </ul>
        </div>

        <form action='' className='flex items-center border border-gray-400 px-3 py-2 rounded w-fit'>
          <FaGlobe className='text-white mr-2' />

          <select className='flex text-white p-2 rounded bg-black '>
            <option value="English">English</option>
            <option value="kannada">Kannada</option>
            <option value="Hindi">Hindi</option>
          </select>

        </form>

      </div>
    </div>
  )
}

export default Footer