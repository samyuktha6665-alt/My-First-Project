import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar1 from './NavBar1'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  let [search, setSearch] = useState("")
  return (
    <main className='w-[99vw] h-[100vh]'>
      <NavBar1 search={search} setSearch={setSearch} />
      <Outlet context={{ search }} />
      <Toaster />
    </main>
  )
}

export default Layout