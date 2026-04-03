import React from 'react'
import InfiniteScroll from '../Components/InfiniteScroll'
import SpotlightCard from '../Components/SpotlightCard'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { TbPhotoSpark } from "react-icons/tb";
import { TbEyeCode } from "react-icons/tb";
import { IoLogoAppleAr } from "react-icons/io5";



const items = [
  { content: "Geetansh Singh" },
  { content: <p>Gopal Dhakar</p> },
  { content: "Lakshay Vardhan Rathore" },

]

function About() {
  return (
    <div className="h-screen flex bg-[#202020] overflow-y-scroll text-3xl">
      <div className="h-[500px]   w-full  mt-[50px]">
        <div className="flex text-center">
          <h1 className="text-8xl pl-4 font-[Iceland] text-white">We are</h1>
          <p className="text-7xl  font-[orbitron] drop-shadow-[0_0_20px_rgba(0,255,0,1)] m-[17px_0px_0px_17px] text-green-600">
            creative
          </p>
        </div>
        <h1 className="text-7xl pl-4 font-[orbitron] mt-3 text-white">Designers</h1>
        <p className='text-green-600 pl-4 mt-5'>_____________________</p>
        {/* yaha likhna h yaad rekhna */}

        <div className=" h-[350px] text-green-600 pr-[-50px] flex justify-end">
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
        <div className='h-[650px]  flex w-full'>
          <div className='h-[500px]  w-[50%] '>
            <p className='pl-4 text-2xl text-white font-[Iceland]'>Our Team</p>
            <h1 className='p-4 text-6xl pl-4 font-[orbitron] mt-3 text-white'>WHAT WE <p className='inline text-green-600'>DO</p> ?</h1>

            <p className='text-green-600 pl-4'>_____________________</p>
          <h5 className='mt-5 text-white pl-4 font-mono text-2xl'>At Vector, we make learning programming simple and engaging. Our platform offers beginner-friendly courses in React, Node.js, and modern web development, designed to help students build real projects and gain practical skills. We focus on interactive learning that inspires creativity and prepares learners for the tech world ahead.</h5>
          <h5 className='mt-5 pl-4 text-white font-mono text-2xl'>Vector empowers students with hands-on programming courses, interactive projects, and real-world knowledge to help them grow as developers.</h5>

          </div>
          <div className='h-[650px] flex flex-wrap w-[50%]'>
            <SpotlightCard className='mt-3 ml-[100px] h-[280px] w-[280px]'>
              <AiOutlineThunderbolt className='justify-self-center  mt-[-25px] text-green-500 text-[80px]' />
              <h1 className='text-center text-white'>Website Design</h1>
              <p className='text-white mt-5 font-mono text-[13px]'>We can design for you a website and we can upload them.</p>
            </SpotlightCard>
            <SpotlightCard className='mt-[65px] ml-[100px]  h-[280px] w-[280px]'>
              <GrAppsRounded className='justify-self-center  mt-[-25px] text-green-500 text-[80px]' />
              <h1 className='text-center text-[25px] text-white'>Mobile & Desktop <br />Apps</h1>
              <p className='text-[15px] text-white'>We can create for you mobile and desktop apps</p>
            </SpotlightCard>
            <SpotlightCard className='mt-3 ml-[20px] h-[280px] w-[400px]'>
              <HiMiniComputerDesktop className='justify-self-center  mt-[-25px] text-green-500 text-[80px]' />
              <h1 className='text-center text-white text-[25px]'>UI & XI <br />Design</h1>
              <p className='text-white text-[13px]'>We can make dynamic ui for you</p>
            </SpotlightCard>
            <SpotlightCard className='mt-3 ml-[50px] h-[280px] w-[280px]'>
              <TbPhotoSpark className='justify-self-center  mt-[-25px] text-green-500 text-[80px]' />
              <h1 className='text-center text-white text-[25px]'>Editing Photo</h1>
              <p className='text-white text-[15px]'>We can design for you a website and we can upload them</p>
            </SpotlightCard>
          </div>
        </div>
        <div className='h-[800px]'>
          <p className='pl-4 text-2xl text-white font-[Iceland]'>ABOUT US</p>
          <h1 className='p-4 text-6xl pl-4 font-[orbitron] mt-3 text-white'>WHO ARE <p className='inline text-green-600'>WE</p> ?</h1>
          <h5 className='mt-5 text-white pl-4 font-mono text-2xl'>We are a team of passionate learners and developers working to make coding education easier and more accessible. Vector was created as a student-driven project to inspire others to explore technology with confidence.</h5>
          <h5 className='mt-5 pl-4 text-white font-mono text-2xl'>We are first-year BCA students turning our passion for coding into a platform for learning.”n</h5>
         
           <div className='justify-center bg-green-600 mt-5 h-1 w-15'></div>

            <div className='flex'>
              <div className='h-[300px] w-[50%] mt-6 '>
                <TbEyeCode className='justify-self-center hover:drop-shadow-[0_0_7px_#4ade80] text-white text-[150px]' />
                <h2 className='justify-self-end text-white pr-[130px] font-[orbitron] mt-[-100px]'>Clean code</h2>
                <h1 className='mt-[100px] ml-3 text-white'>We right clean code that is easy to understand and maintain</h1>
              </div>
              <div className='h-[300px] w-[50%] mt-6'>
                <IoLogoAppleAr className='justify-self-center hover:drop-shadow-[0_0_7px_#4ade80] text-white text-[150px]' />
                <h2 className='justify-self-end text-white pr-[50px] font-[orbitron] mt-[-100px]'>Mordern Design</h2>
                <h1 className='mt-[100px] ml-3 text-white'>We use new tech and Ai implementation for better user experience</h1>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About
