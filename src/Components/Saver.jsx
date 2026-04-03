import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTocart } from '../Features/cartSlice';
import Loading from './Loading';

function Saver() {
    const dispatch = useDispatch()
    let params = useParams()
    const[load,setLoad]=useState(true)


    const [data, setdata] = useState([]);

    async function fetchdata() {
        const respone = await fetch(`https://676bc2a9bc36a202bb85948f.mockapi.io/courses/Courses/${params.id}`)
        if(respone.ok){
            setLoad(false)
        
        const pack = await respone.json()
        setdata(pack)
        }
    }
    console.log(data)

    useEffect(() => {
        fetchdata()
    }, [])
    if(load){return <Loading/>}
    return (
        <>
            <div className=' justify-center bg-emerald-100'>

                <div className='h-[400px] w-[100%] bg-slate-800'>
                    <img src='green.jpg'></img>
                </div>
                
                <div >
                    <div className='h-[120px] w-[800px] bg-white rounded-md ml-44 mt-[-60px] border-2 flex'>
                        <div className='h-[117px] w-[150px] justify-items-center rounded-[5px_0px_0px_5px] text-white bg-green-800'>
                            <AiFillSafetyCertificate className='text-5xl mt-3' />
                            <p><strong>Premium</strong></p>
                        </div>
                        <h1 className='ml-4 mt-2'>Access this top-rated course,plus,<br /> 12,000+ more top-rated courses, with a Udemy plan.<br /> See Plans & Pricing</h1>
                        <div className='h-[117px] w-[150px] ml-4 pl-3 justify-items-center '>
                            <h1 className='text-4xl mt-2'>4.5</h1>
                            <div className='flex pb-5 text-yellow-500'>
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                            </div>
                            <p className='underline'>447 ratings</p>
                        </div>
                        <div className='h-[117px] w-[200px] justify-items-center '>
                            <FaUsers className='text-4xl mt-2' />
                            <h1><strong>50,000+</strong></h1>
                            <p className='mt-4'>learners</p>
                        </div>
                    </div>
                </div>
                {/* /// */}
                <div className="line-h-[1.6] ml-5 mt-5 font-serif">
                    <h1 className="mb-[10px] text-3xl">{data.Title}</h1>
                    <p><strong>Instructor:</strong>{data.Instructor}</p>
                    <p><strong>Duration:</strong> 4 weeks</p>

                    <h2 className="mt-[20px] text-xl">Course Overview:</h2>
                    <p>{data.Overview}</p>

                    <h2 className='mt-[20px] text-xl'>What You Will Learn:</h2>
                    <ul className="pl-[20px] list-disc">
                        {
                            data.Learn && data?.Learn.map((l) => {
                                return (<li>{l.description}</li>)
                            })
                        }
                    </ul>

                    <h2 className='mt-[20px] text-2xl'>Course Rating:</h2>
                    <p>
                        {data.rating}
                    </p>

                    <h1 className='mt-[20px] text-2xl'>Who is this course for?</h1>
                    <p>
                        {data.WITCF}
                    </p>

                    <h2 className='mt-[20px] text-2xl'>Why Choose This Course?</h2>
                    <ul className='pl-[20px] pb-8 list-disc'>
                        {data.WCTC && data.WCTC.map((w) => {
                            return (<li>{w.text}</li>)
                        })}
                    </ul>
                </div>
                <button
                    className='ml-[100px] active:scale-75 p-[5px_50px_5px_50px] mb-5 hover:ring-2 bg-green-600 text-white hover:bg-black hover:text-green-600 rounded-md text-xl mt-5 inline-block' onClick={() => dispatch(addTocart(data))}>Add to Cart</button>

            </div>
        </>
    )
}

export default Saver