import React from 'react'
import Card from './Card'
import { useEffect,useState } from 'react'
import Loading from './Loading'
function Readme() {
    const[data,setdata]=useState([])
    const[loading,setLoading]=useState(true)

    async function fetchdata(){
     const response =await fetch('https://676bc2a9bc36a202bb85948f.mockapi.io/courses/Courses')
     if(response.ok){
        const courses=await response.json()
        setdata(courses)
        setLoading(false)
        console.log(response)
     }
    }
    useEffect(()=>{
        fetchdata()
    },[])
    if(loading){return<Loading/>}
  return (
   <div className='flex flex-wrap pt-20 rounded-lg gap-5 pb-[150px]  justify-center font-sans'>
    {data.map((elem)=>{
        return(
       
            <Card key={elem.id} courses={elem}/>

        )

    })
    }
   </div>
   
  )
}

export default Readme