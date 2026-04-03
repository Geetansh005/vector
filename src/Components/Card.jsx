import React from 'react'
import { useDispatch } from 'react-redux'
import { addTocart } from '../Features/cartSlice';
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
function Card({ courses }) {
  const dispatch = useDispatch()
    
  return (
    <>
    <div className='h-[500px] w-[370px]   rounded-lg shadow-lg bg-[#1C1C1E;] text-align-center'>
      <img className='h-[200px] w-[370px]  justify-center rounded-t-lg  ' src={courses.image} alt={courses.Title} />
      <h1 className='text-white text-center text-4xl'>{courses.Title}</h1>
      <p className='text-slate-200 pl-3 mt-7'><strong>Instructor:{courses.Instructor}</strong></p>
      <p className='text-gray-300 pl-3 mt-5'>Disc:{courses.Dis}</p>
      <FaShoppingCart className='text-white ml-6 text-3xl inline-block active:scale-150' onClick={()=>dispatch(addTocart(courses))} />
      <Link to={`/Courses-details/${courses.id}`} className='ml-[50px] p-[5px_50px_5px_50px] hover:ring-2 bg-green-600 text-white hover:bg-black hover:text-green-600 active:scale-90 rounded-md text-xl mt-5 inline-block'>Explore</Link>

    </div>
    </>
  )
}

export default Card