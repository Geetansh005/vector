import React from 'react'
import BouncingRobot from '../Components/BouncingRobot'
import ShinyText from '../Components/shinyText'
import { useNavigate } from 'react-router-dom'
import BlurText from '../Components/BlurText.jsx'
import SpotlightCard from '../Components/SpotlightCard.jsx'




function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const nav = useNavigate()
  const handleReact = () => {
    nav('Courses-details/1')
  }
  const handleJs = () => {
    nav('Courses-details/2')
  }
  const handleNode = () => {
    nav('Courses-details/3')
  }
  const handleGit = () => {
    nav('Courses-details/4')
  }
  const handleGetstarted = () => {
    nav('/courses')
  }

  return (
    <div className='aspect-auto overflow-y-scroll'>
      <div className='h-[800px] bg-neutral-900 w-[100%]'>

        <h1 className=' drop-shadow-[0_0_20px_rgba(0,255,0,1)] translate-y-[190px] ml-[229px]  text-9xl text-green-500 '>^</h1>
        <h1 className='text-9xl ml-[50px] mt-[100px] mb-7 text-white'>Vector.X</h1>
        <h1 className='text-7xl ml-[50px] text-white'>Explore<br />Something New</h1>
        <p className='text-2xl ml-[50px] mt-8 text-gray-400'>"Unlocking the power of code, one course at a time.<br />Emphasizes both learning and the transformative power of programming!"</p>

        <button onClick={handleGetstarted} className='text-2xl mt-7'>
          <ShinyText text="Get Started" disabled={false} speed={3} className='get' />
        </button>


        <div className='justify-self-end '>
          <BouncingRobot />
          <img src='shadow.png' className='w-[600px] -translate-x-8' />
        </div>
      </div>

      <div className=' bg-black h-[600px] bg-[url(/end.png)] bg-cover bg-center'>
        <img src='rep.svg' onClick={handleReact} className='h-[75px] ml-[260px] translate-y-[190px] drop-shadow-[0_0_20px_rgba(51,225,225)] '></img>
        <h2 className='ml-[265px] translate-y-[190px] text-white'>React</h2>
        <img src='rep2.png' onClick={handleJs} className='h-[110px] ml-[35.4%] -translate-y-[45px] drop-shadow-[0_0_20px_rgba(225,225,0)] '></img>
        <h2 className='text-white ml-[38%] -translate-y-[50px]'>JS</h2>
        <img src='rep3.png' onClick={handleNode} className='h-[95px] ml-[14%] justify-self-center -translate-y-[60px] drop-shadow-[0_0_20px_#4ade80] -rotate-[3deg] '></img>
        <h2 className='ml-[14%] justify-self-center -translate-y-[62px] text-white'>Node.JS</h2>
        <img src='rep4.png' onClick={handleGit} className='h-[90px] justify-self-end mr-[25%] -translate-y-[295px] drop-shadow-[0_0_20px_rgba(128,128,128)] -rotate-[12deg] '></img>
        <h2 className=' justify-self-end mr-[25.5%] -translate-y-[290px] text-white'>Git Hub</h2>
      </div>

      <div className='h-[750px] bg-black'>
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-[100px] justify-self-center  text-white  mb-8" />

        <p className='text-2xl justify-self-center ml-[50px] mt-8 text-gray-400'>Gain all the skills you need to kick-start your professional path through mentoring by industory professionals.</p>
        <p className='text-2xl justify-self-center ml-[50px] mt-2 text-gray-400'>professional path through mentoring by industory professionals</p>
        <div className='  flex flex-wrap mt-7'>
          <SpotlightCard className='ml-[40px]  h-[400px] w-[350px]'>
            <h3 className='text-3xl text-white'>Hands-on of learning</h3>
            <p className='mt-4 text-white'>Each course will take you through the entire process of completing and testing a project</p>
          </SpotlightCard>
          <SpotlightCard className='ml-[40px]  h-[400px] w-[350px]'>
             <h3 className='text-3xl text-white'>Hands-on of learning</h3>
            <p className='mt-4 text-white'>Each course will take you through the entire process of completing and testing a project</p>
          </SpotlightCard>
          <SpotlightCard className='ml-[40px]  h-[400px] w-[350px]'>
             <h3 className='text-3xl text-white'>Hands-on of learning</h3>
            <p className='mt-4 text-white'>Each course will take you through the entire process of completing and testing a project</p>
          </SpotlightCard>
          <SpotlightCard className='ml-[40px]  h-[400px] w-[350px]'>
             <h3 className='text-3xl text-white'>Hands-on of learning</h3>
            <p className='mt-4 text-white'>Each course will take you through the entire process of completing and testing a project</p>
          </SpotlightCard>




        </div>




      </div>



    </div>
  )
}

export default Home