import { motion } from 'framer-motion';
import React from 'react'
import { useState } from 'react';


function Footer() {
  
 

  return (
    <div className='w-full bg-slate-300 min-h-screen flex justify-evenly ' id='contact'  >

     <div className='hidden  w-1/2 h-screen p-14 lg:flex flex-col justify-between'>
      <span className='text-7xl font-extrabold tracking-tighter '>
        EYE- <br/>OPENING</span>

        <span className='font-bold tracking-tighter text-lg'>Portfolio</span>
     </div>

     <div className='w-1/2  h-screen pt-14'>

     <div className='w-full lg:mb-36 mb-12'>

     <span className='md:text-7xl text-4xl font-extrabold tracking-tighter lg:hidden '>
        EYE- <br/>OPENING<br/></span>
      <span className='xl:text-7xl md:text-5xl text-4xl font-extrabold tracking-tighter '>
        PRESENTATIONS</span>
        </div>

     <div className='flex '>
      <div>

           <div className='text-sm'>
           S:<br/>
           <a><span className='underline'>instagram</span></a><br/>
           <a><span className='underline'>Linkedin</span></a><br/>
           <a><span className='underline'>Git-hub</span></a><br/>
           <a><span className='underline'>facebook</span></a>
           </div>

              <div className='text-sm mt-20'>
               E:<br/>
            <a><span className='underline'>rupeshk3132001@gmail.com</span></a>

           </div>
           <div className='text-sm mt-20'>
               N:<br/>
            <a><span className='underline'>8295009766</span></a>
            
           </div>
        </div>
        <div className='md:pl-56 pl-14 pt-28'>
        <div className='text-sm'>
           M:<br/>
           <a href='#home'><span className='underline'>Home</span></a><br/>
           <a href='#project'><span className='underline'>Project</span></a><br/>
           <a href='#about'><span className='underline'>About</span></a><br/>
           <a href='#contact'><span className='underline'>Contact</span></a>
           </div>

        </div>


      </div>
     </div>
     
    </div>
  )
}

export default Footer
//
