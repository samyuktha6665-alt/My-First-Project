import React, { useEffect, useState } from 'react'
import HomeContentCards from './HomeContentCards'
import {  useOutletContext } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Footer/Footer'
import Hero from './HeroComp/Hero'
import Contact from '../../../contact/Contact'

const Home = () => {
  let [data, setData] = useState([])
  let { search } = useOutletContext()
  let [products,setProducts]=useState([])
  // console.log("sitting home" + search)
  let [loading,setLoading]=useState(true)

  //&handling the fetching data
  async function fetchingData() {
    // let data = await fetch('https://fakestoreapi.com/products')
    // let Finaldata = await data.json()
    //  console.log(Finaldata)
    setTimeout(async()=>{
      let data = await axios.get('https://fakestoreapi.com/products')
    setData(data.data)
    setProducts(data.data)
    setLoading(false)
  },100)
  }
  // fetchingData()
  useEffect(() => {
    fetchingData()
  }, [])

  //& handling products

  function handleAll() {
    setData(products)
  }
  function handleMen() {
    let filter = products.filter((items) => {
      return items.category === "men's clothing"
    })
    setData(filter)
  }

  function handleWomen() {
    let filter = products.filter((items) => {
      return items.category === "women's clothing"
    })
    setData(filter)
  }

  function handleJewellery() {
    let filter = products.filter((items) => {
      return items.category === "jewelery"
    })
    setData(filter)
  }

  function handleElectronics() {
    let filter = products.filter((items) => {
      return items.category === "electronics"
    })
    setData(filter)
  }

  //& handling search data

  let handlesearch = data.filter((items) => {
    return items.category.toLowerCase().includes(search.toLowerCase())
  })
  // console.log(handlesearch)
  let displayData = handlesearch.length > 0 ? handlesearch : data


  return (
    <>
    
    {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <span className="loader"></span>
        </div>
      ) : ( 
    <>
    
    <Hero/>
     <div className="w-full bg-black p-10">
      

     <div className='w-full flex justify-center gap-4 px-10 bg-gray-400 py-3'>
      <button onClick={handleAll} className='px-4 py-1 text-black-500 border border-blue-500 rounded-lg text-sm font-semibold hover:bg-blue-200 '>All</button>
      <button onClick={handleMen} className='px-4 py-1 text-black-500 border border-blue-500 rounded-lg text-sm font-semibold hover:bg-yellow-100'>Men</button>
      <button onClick={handleWomen} className='px-4 py-1 text-black-500 border border-blue-500 rounded-lg text-sm font-semibold hover:bg-pink-200'>Women</button>
      <button onClick={handleJewellery} className='px-4 py-1 text-black-500 border border-blue-500 rounded-lg text-sm font-semibold hover:bg-slate-200'>Jewellery</button>
      <button onClick={handleElectronics} className='px-4 py-1 text-black-500 border border-blue-500 rounded-lg text-sm font-semibold hover:bg-red-200'>Electronics</button>
    </div> 
    
        <div className='w-full bg-[#1F1A2a] flex flex-wrap gap-y-20 gap-x-16 items-center justify-center pt-16'>
          {displayData?.map((items) => (
           <HomeContentCards key={items.id} imageUrl={items.image} title={items.title} 
          description={items.description} price={items.price} id={items.id} rating={items.rating.rate} items={items} /> 
          ))}
        </div>
      
    <Contact/>
    <Footer/>
    </div>
    </>
)}
</>
)}
export default Home