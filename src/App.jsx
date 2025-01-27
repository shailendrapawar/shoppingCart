import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

import Card from './components/card/Card'
import { FaHeart } from "react-icons/fa";

function App() {

  const[products,setProducts]=useState([])
  const data=useSelector((state)=>state.products)
  const dispatch=useDispatch()
  // console.log(products)

  useEffect(()=>{
    setProducts(data)
  },[])

  return (
    <>
      <div className='text-white home-body flex flex-wrap  gap-5 justify-center p-5 ' >
        {products.map((v,i)=>{
          return <Card data={v} key={i} />
        })}
      </div>
    </>
  )
}

export default App
