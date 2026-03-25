import React from 'react'
import { Link } from 'react-router-dom'

export const HomeContentCards = ({ imageUrl, title, description, price,rating,items,id }) => {
  return (
    <div className='w-[300px] h-[350px] bg-[#5B5B8A] flex flex-col items-center justify-center rounded-md'>
      <img className='w-[45%] h-[50%]' src={imageUrl} alt='product' />
      <h1 className=' font-semibold text-[20px] mx-4 text-center tracking-tight mt-1'> {title?.slice(0, 20)}</h1>
      <p className=' font-semibold text-[20px] mx-4 text-center tracking-tight mt-1'> {description?.slice(0, 40)}</p>
      <div>
        <span className=' font-semibold text-[20px] mx-4 text-center tracking-tight mt-1'> ${price}</span >
        <span className="text-yellow-500 font-semibold text-[20px]">
          ⭐{rating}
        </span>
        {/* <p>rating:{rating}</p> */}
       <Link to={`/ProductDetails/${items.id}`}>
          <button className='px-2 py-[0.5px] border-2 rounded-md tex-white mt-3 cursor-pointer ml-4'>view info</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeContentCards