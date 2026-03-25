import React, { useContext, useEffect } from 'react'
import { myCart } from '../../../Context/CartContext'
import { AuthUser } from '../../../Context/AuthuserContextApi'
import { useNavigate } from 'react-router-dom'

import { MdDelete } from "react-icons/md"
import { GoTag } from "react-icons/go"
import { FaArrowRightLong, FaMinus, FaPlus } from "react-icons/fa6"

import {toast} from 'react-hot-toast'


const Cart = () => {

  // Cart Data
  let { cart, decrementQty, incrementQyt, removeItem, total_price } = useContext(myCart)

  //  Auth Data
  const { userData } = useContext(AuthUser)

  const navigate = useNavigate()

  //  Protect Cart + Show Toast
  useEffect(() => {
    if (!userData) {
      toast.error("Please login first ")

      setTimeout(() => {
        navigate("/login")
      }, 1500)
    }
  }, [userData])

  // Prevent UI flicker
  if (!userData) return null

  return (
    <div className='h-[100vh] w-full flex bg-white'>

      {/* LEFT SIDE - CART ITEMS */}
      <div className='h-full w-[60%] overflow-y-scroll'>
        <h1 className='m-10 text-4xl font-semibold'>Your Cart</h1>

        {cart.length === 0 ? (
          <h1 className='text-xl font-semibold m-10'>Cart is empty </h1>
        ) : (
          <div className='border border-black m-10 rounded-md'>

            {cart.map((items) => (
              <div key={items.id}>
                <div className='h-[20%] w-full flex'>

                  {/* IMAGE */}
                  <div className='w-[25%] text-center'>
                    <div className='m-2 shadow-xl rounded-md relative h-50'>
                      <img
                        src={items.image}
                        className='h-40 absolute inset-0 m-auto'
                        alt="product"
                      />
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className='w-[60%] m-3 p-3 flex flex-col gap-2'>
                    <h1 className='text-xl font-semibold'>{items.title}</h1>
                    <h2>{items.category}</h2>

                    <h1>
                      <span className='text-yellow-400'>
                        {"★".repeat(Math.round(items?.rating?.rate))}
                      </span>
                      <span>
                        {"★".repeat(5 - Math.round(items?.rating?.rate))}
                      </span>
                    </h1>

                    <h2 className='text-red-500 text-2xl font-bold'>
                      $ {items.price}
                    </h2>
                  </div>

                  {/* ACTIONS */}
                  <div className='flex flex-col justify-between w-[20%] m-3 p-5 items-end'>
                    <MdDelete
                      className='text-2xl text-red-500 cursor-pointer'
                      onClick={() => removeItem(items.id)}
                    />

                    <div className='w-full flex px-2 justify-between shadow-2xl rounded-md'>
                      <button onClick={() => decrementQty(items.id)}>
                        <FaMinus />
                      </button>

                      <span>{items.quantity}</span>

                      <button onClick={() => incrementQyt(items.id)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>

                <hr className='mx-5 mt-5 text-red-400' />
                <br />
              </div>
            ))}

          </div>
        )}
      </div>

      {/* RIGHT SIDE - SUMMARY */}
      <div className='w-[40%]'>

        <div className='h-[50%] border-2 border-amber-700 m-10 mt-30 rounded-md'>
          <div className='m-5 mt-3'>

            <h1 className='text-xl font-semibold'>Order Summary</h1>

            <div className='mt-5 flex flex-col gap-2'>
              <h2 className='flex justify-between'>
                Subtotal <span>$ 00</span>
              </h2>

              <h2 className='flex justify-between'>
                Discount(-20%) <span>$ 00</span>
              </h2>

              <h2 className='flex justify-between'>
                Delivery Fee <span>$ 15</span>
              </h2>

              <hr />

              <h1 className='flex justify-between font-medium'>
                Total <span>$ {total_price()}</span>
              </h1>

              {/* PROMO */}
              <div className='mt-5 flex gap-2'>
                <div className='h-10 flex gap-1 w-[80%] border border-gray-200 rounded-md px-2'>
                  <GoTag className='mt-3 text-gray-500' />
                  <input
                    type='text'
                    placeholder='Add Promo code'
                    className='outline-none w-full'
                  />
                </div>

                <button className='bg-black text-white w-[20%] rounded-3xl'>
                  Apply
                </button>
              </div>

              {/* CHECKOUT */}
              <button className='px-10 py-3 w-full flex justify-center items-center bg-black text-white rounded-3xl gap-1'>
                Go to Checkout <FaArrowRightLong />
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart