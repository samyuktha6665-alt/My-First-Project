import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { _Auth } from '../../../../../Backend/BackendBaas'
import toast from 'react-hot-toast'
import { BsEye, BsEyeSlash } from "react-icons/bs";


const Login = () => {
  let [showpassword, setShowPassword] = useState(false)
  let [data, setData] = useState({
    email: '',
    password: ''
  })


  //&Navigate 
  function handlingData(e) {
    let { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  let navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let user = await signInWithEmailAndPassword(_Auth, data.email, data.password)
      console.log(user)

      if (user.user.emailVerified === true) {
        toast.success("Login successful")

        navigate('/')   // go to home page
      }
      else {
        toast.error("Please verify your email first")
      }

    }
    catch (err) {
      toast.error(err.message)
    }
  }


  console.log(data)

  return (
    <div className='w-full h-195 bg-[#5B5B8A] flex items-center flex-col pt-2'>

      <h1 className='flex text-2xl text-cyan-300 font-bold pt-3 '>Login</h1>

      <main className='w-[400px] bg-[#1F1A2a] mt-7 text-white'>

        <div style={{ padding: '30px' }}>

          <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-4'>

            <div>
              <label htmlFor='' className='flex '>Email</label>
              <input className='border w-full mt-1 p-2 rounded-lg '
                type='text' placeholder='email' value={data.email} name='email' onChange={handlingData} /> <br />

            </div> <br />

            <div style={{ position: 'relative' }}>
              <label htmlFor='' className='flex '>Password</label>
              <input className='border w-full mt-1 p-2 rounded-lg '
                type='text' placeholder='password' value={data.password} name='password' onChange={handlingData} style={{ paddingRight: "10px" }} /> <br />

              <span onClick={() => setShowPassword(!showpassword)}
                style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer",color:"black" }} >
                {showpassword ? <BsEye /> : <BsEyeSlash />}
              </span>

            </div> <br />

            <p>
              Don't have an account?
              <Link to='Register'> Register</Link>
            </p>

            <div className="flex justify-center">
              <button className='flex bg-cyan-400 items-center rounded-lg ml-30 text-xl w-15 '>Login</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login