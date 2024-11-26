import React from 'react'
import {motion} from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { useState } from 'react';
function Landing() {
  
      

  return (
    <div className=  'flex justify-center items-center h-screen bg-slate-300 pt-20 relative' id="home" >
    
      <div className=' h-3/4  sm:w-2/3 w-11/12 rounded-ss-3xl   bg-slate-500 p-3'>
        <div className='flex '>
         <div>

           <div className='xl:text-8xl lg:text-7xl text-5xl font-bold tracking-tighter  xl:leading-[5rem] uppercase mb-16'>
                full-stack <br/>developer<br/> 
            </div>
           <span className=' text-white font-semibold ml-10'>
               " hi ! I am rupesh kumar ,a Passionate Full-Stack developer skilled in crafting delightful user experiences and
            </span>
           
          </div>
          <div >
            <img src='profil.jpg' className=' rounded-full border-slate-300 md:border-[10px] border-0' />
          </div>
       </div>
        <div className='flex justify-center  mt-14'>
            <p className='font-bold  mx-3 lg:mx-8'>tech. stack</p> ||
            <img src='Mongodb.png' className='h-6 mx-3 lg:mx-8 logo'/>||
            <img src='Exs.png' className='h-8 mx-3  lg:mx-8 logo'/>||
            <FaReact className='text-4xl text-[#7DDFFF]  mx-3 lg:mx-8 logo'/>||
            <img src='node.svg' className='h-8 mx-3  lg:mx-8 logo'/>

        </div>
        <div>

        </div>
        
      </div>
      
    
    </div>
  )
}

export default Landing

//