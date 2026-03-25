import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { AuthUser } from '../../../../Context/AuthuserContextApi';
import { _Auth } from '../../../../Backend/BackendBaas';

const Menu = ({ search, setSearch }) => {
    // console.log(search)
    let { userData, logout } = useContext(AuthUser)
    console.log(userData)

    function validuser() {
        //return <Link to='/Register'>LogOut</Link>
        return (
            <div className='flex items-center gap-10 '>
                <section className='flex cursor-pointer gap-2 items-center'>
                    <img className=' w-8 rounded-full '
                        src={userData?.photoURL || "https://th.bing.com/th/id/OIP.TtQ2FWvwnpv3wFG-Ylin-AHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3"} />
                    <p>{userData?.displayName || "Samyuktha"}</p>
                </section>
                <NavLink to='/cart'>Cart </NavLink>
                <button to='/register' onClick={logout} > Logout</button>
            </div>
        )
    }
    function invaliduser() {
        return (
            <>
                <NavLink className={({ isActive }) => isActive ? 'text-cyan-400 border-b-2 border-blue-500' : ''} to='/Login'>Login</NavLink>
                {/* <NavLink to='/Login'>
                    {(Object)=>{
                        console.log(Object)
                        return(
                            <p>Login</p>
                        )
                    }}
                </NavLink> */}
                <NavLink className={({ isActive }) => isActive ? 'text-cyan-400 border-b-2 border-blue-500' : ''} to='/Register'>Register</NavLink>
            </>
        )

    }

    return (
        <>
            <div className='flex justify-end items-center gap-20 p-8 w-full ml-[900px]'>
                <form action="" className='relative'>
                    <CiSearch className='absolute top-2 left-2 ' />
                    <input type='text' placeholder='search' className='flex justify-end bg-black-400 pl-8 py-1
                rounded-[20px] outline-none border border-white' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                </form>

                <div className='flex  gap-30 justify-items-center justify-end size-full items-center'>
                    <NavLink className={({ isActive }) => isActive ? 'text-cyan-400 border-b-2 border-blue-500' : ''} to='/'>Home</NavLink>
                </div>
                {/* condition */}
                <div className='flex items-center gap-6'>
                    {
                        userData?.emailVerified === true ? validuser() : invaliduser()
                    }
                </div>
            </div>
        </>
    )
}

export default Menu