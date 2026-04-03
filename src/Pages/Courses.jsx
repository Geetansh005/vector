import React from 'react'
import Readme from '../Components/Readme'
import ParticlesComponent from '../Components/ParticlesComponent'
function Courses() {
  return (
    <div className='relative'>
      <ParticlesComponent/>

    <div className="h-[100vh]flex justify-center items-center">
        <Readme/>
    </div>
    </div>
  )
}

export default Courses