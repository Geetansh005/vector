import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";




function Contact() {
  return (
    <>
      <div className='h-[100vh] overflow-y-auto bg-[#1B1B1B]'>
        <h1 className='text-5xl text-[#32CD32] text-center font-[orbitron] pb-5 pt-[3%]'>CONATACT US</h1>
        <p className='text-center pb-4 text-[#E0E0E0]'>"Get in touch with us for any inquiries, feedback, or collaboration opportunities – we’d love to hear from you!"</p>
        <div className='justify-center mt-2 h-2 w-15 bg-white'></div>
        {/* flex */}

        <div className='mt-[150px] flex gap-4 justify-self-center'>
          <div className='h-[300px] text-center w-[350px]'>
            <h1 className='mt-8 text-white text-8xl'>GET IN <br /> TOUCH</h1>
          </div>
          <div className='h-[300px] w-[350px] bg-[#34EB4F]'>
            <IoLocationOutline className='text-8xl translate-y-11 translate-x-7 pb-4 ' />
            <h2 className='pl-8 text-white mt-[50px] text-3xl'>Office Location</h2>
            <p className='pl-8 mt-6 text-[#333333] text-xl'>4060 Queens Road,Chanpole,<br />VDN Sector-5 </p>
          </div>
          <div className='h-[300px] w-[350px] bg-[#34EB4F]'>
            <FaClockRotateLeft className='text-8xl translate-y-11 translate-x-7 pb-4 ' />
            <h2 className='pl-8 text-white mt-[50px] text-3xl'>Working hours</h2>
            <p className='pl-8 mt-6 text-[#333333] text-xl'>Mon to Fri 10am-6pm,<br />Sat 10am-2pm</p>
          </div>
          <div className='h-[300px] w-[350px] bg-[#34EB4F]'>
            <RiCustomerService2Line className='text-8xl translate-y-11 translate-x-7 pb-4 ' />
            <h2 className='pl-8 text-white mt-[50px] text-3xl'>Communications</h2>
            <p className='pl-8 mt-6 text-[#333333] text-xl'>+91 9828100399 <br /> Vector@gmail.com</p>
          </div>
        </div>

        <div className='mt-[100px] relative ml-7 bg-[#052F3D] p-6 h-[450px] gap-5 flex w-[1400px] justify-self-center'>
          <div className='h-[400px] ml-16 bg-green-600 w-[600px] '>
            <input className='mt-[20px] text-white ml-[50px] p-[10px_90px_10px_90px] bg-[#1C1C1E]' type='text' placeholder='Enter your Name?' />
            <input className='mt-[20px] text-white ml-[50px] p-[10px_90px_10px_90px] bg-[#1C1C1E]' type='text' placeholder='Enter your Email?' />
            <textarea className="mt-[20px] text-white ml-[50px] p-[10px_90px_10px_90px] border-none bg-[#1C1C1E]" cols={35} rows={6} placeholder="Message"></textarea>
            <button className='ml-14 mt-4 bg-gradient-to-l bg-[#34EB4F] from-[#00D9D9] text-white p-[10px_50px_10px_50px] rounded-md'>Send Message</button>
          </div>

          <div className='h-[400px] w-[600px] '>
            <h1 className='mt-[50px] text-white text-xl ml-14 '>Have any query?</h1>
            <h1 className='text-6xl text-white text-center font-[orbitron] pt-[7%]'>CONATACT US</h1>
            <p className='text-center mt-9 text-white'>"Have questions, suggestions, or want to collaborate? We’re just a message away and always happy to assist. Whether it’s feedback, inquiries, or anything in between, don’t hesitate to reach out. Let’s connect and make something great together!"</p>
          </div>
        </div>

        <div className='ml-7 bg-gradient-to-l bg-green-700 from-black -z-10 pt-[220px] h-[750px] w-[100%] mt-[-200px]  justify-self-center'>
          <div className='h-[400px] w-[1400px]  border-[2px_0px_0px_0px]  border-solid border-white border-t-8 justify-self-center'>
            <h1 className='text-8xl text-white pt-[100px]'>Let's talk</h1>
          <div className='flex gap-5 text-3xl text-white font-semibold	md:justify-start mt-3 pl-1 pr-5'>
            <FaInstagram className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
            <FaFacebookSquare className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
            <FaSquareXTwitter className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
            <FaGithub className='hover:scale-150 hover:text-white-600 hover:drop-shadow-[0_0_7px_#4ade80]' />
          </div>
          <div className='justify-self-end text-white mt-[-90px] mr-7'>
          <p className='text-xl mb-5'>4060 Queens Road,Chanpole,<br />VDN Sector-5,Murlipura,Jaipur </p>
          <p className='text-xl'>Vector@gmail.com <br/> <br/>+91 9828100399</p>

          </div>
          </div>


        </div>



      </div>
    </>
  );
}

export default Contact;