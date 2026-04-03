import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer className='min-h-[200px] px-10 py-10  bg-gradient-to-l bg-green-700 from-black'>
    <div className='flex justify-between md:flex text-white '>
      <div className='flex md:flex md:gap-5 gap-10 justify-center mb-5'>
        <Link className='hover:scale-150' to={"/"}>Home</Link>
        <Link className='hover:scale-150' to={"aboutus"}>About</Link>
        <Link className='hover:scale-150' to={"Courses"}>Courses</Link>
        <Link className='hover:scale-150' to={"/Contactus"}>Contact Us</Link>
      </div>

      <div className='flex gap-5 text-3xl font-semibold	md:justify-end pr-5'>
      <FaInstagram  className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
      <FaFacebookSquare className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
      <FaSquareXTwitter className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
      <FaGithub className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
      </div>
    </div>
    <hr/>
    <br/>
    <p className='text-lg  text-white'>&copy; Vector.PVT.LTD</p>
   </footer>
  )
}

export default Footer