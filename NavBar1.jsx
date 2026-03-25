import React from 'react'
import Logo from './logo'
import Menu from './Menu'

const NavBar1 = ({ search, setSearch }) => {
  

  return (
    <nav className='h-[40px] flex gap-[15px] items-center p-10px-20px justify-center bg-black w-fit
     border-b-[5px] border-blue-700 text-white px-8 py-8 w-full'>
      <Logo />
      <Menu search={search} setSearch={setSearch} />

    </nav>


  )
}

export default NavBar1