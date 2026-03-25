import React, { useContext, useState } from 'react'
import { _Auth } from "../../../../../Backend/BackendBaas";
import { createUserWithEmailAndPassword, sendEmailVerification,updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import AuthUser from '../../../../../Context/AuthuserContextApi';


const Register = () => {
  let [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })
  let [showpassword, setShowPassword] = useState(false)
  let [showconfirm_password, setShowconfirm_Password] = useState(false)

  let navigate = useNavigate()

  let dataas = useContext(AuthUser)
  console.log(dataas)

  //&handling input function
  function handlingData(e) {
    let { value, name } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  //& handling the submit reload
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      if (data.password === data.confirm_password) {
        //console.log(data)
        let { email, password } = data

        //& creating the user is firebase
        let fireData = await createUserWithEmailAndPassword(_Auth, email, password)
        console.log(fireData)

        //Send verification email
        await sendEmailVerification(fireData.user)

        toast.success("Email verification sent")
// update profile
       await updateProfile(data.user,{
          displayName:data.name,
          photoURL:"https://www.bing.com/th/id/OIP.F7AAZ51YNslUUrejRKkDeQHaE1?w=325&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2%22"
        })
        // Redirect to login page
        navigate("/Login")

      } else {
        setData({
          ...data,
          password: "",
          confirmPassword: ""
        })
        //console.log("Password mismatch");
        toast.error("password mismatch")
      }
    } catch (err) {
      // console.log(err);
      toast.error(err.message.slice(22, err.message.length - 2) + ".");
    }
  }

  return (
    <div className='w-full h-199 bg-[#5B5B8A]  flex items-center flex-col pt-2'>

      <h1 className='flex text-2xl text-cyan-300 font-bold pt-3 '>Register</h1>

      <main className='w-[400px] bg-[#1F1A2a]  mt-7 text-white'>

        <div style={{ padding: '30px' }}>

          <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-4'>

            <div>
              <label htmlFor=''>Username</label>
              <input className='border w-full mt-1 p-2 rounded-lg'
                type='text' placeholder='username' value={data.username} name='username' onChange={handlingData} /> <br />
            </div>

            <div>
              <label htmlFor=''>email</label>
              <input className='w-full mt-1 p-2 border rounded-lg'
                type='text' placeholder='user mail' value={data.email} name='email' onChange={handlingData} /> <br />
            </div>

            <div style={{ position: 'relative' }}>
              <label htmlFor=''>password</label>
              <input className='w-full mt-1 p-2 border rounded-lg'
                type={showpassword ? 'text' : 'password'} placeholder='password' value={data.password} name='password' onChange={handlingData}
                style={{ paddingRight: "35px" }} /> <br />

              <span onClick={() => setShowPassword(!showpassword)}
                style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer", color: "black" }} >
                {showpassword ? <BsEye /> : <BsEyeSlash />}
              </span>

            </div>

            <div style={{ position: 'relative' }}>
              <label htmlFor=''>confirm_password</label>
              <input className='w-full mt-1 p-2 border rounded-lg '
                type='confirm_password' placeholder='confirm_password' value={data.confirm_password} name='confirm_password' onChange={handlingData}
                style={{ paddingRight: "35px" }} /> <br />

              <span onClick={() => setShowconfirm_Password(!showconfirm_password)}
                style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer", color: "black" }} >
                {showconfirm_password ? <BsEye /> : <BsEyeSlash />}
              </span>

            </div>

            <button className='flex bg-cyan-500 justify-center'>Submit</button>

          </form>
        </div>
      </main>
    </div>
  )
}

export default Register