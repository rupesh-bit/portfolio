import { motion } from 'framer-motion'
import React from 'react'

function Project() {
  
  return (
  <div id='project'>
    <div className='w-full flex flex-col items-center lg:hidden   '>
      <div className='border-black border-4 w-96 h-96  rounded-lg mt-9 sm:w-2/3'>
         kdfkfikc
      </div>
      <div className='border-black border-4 w-96 h-96  rounded-lg mt-9 sm:w-2/3'>
         kdfkfikc
      </div>
       

    </div>

    <div className='hidden w-full bg-black  h-screen lg:flex '>
        
        <div className='w-1/2 h-full bg-blue-200 mr-2 overflow-hidden flex flex-col justify-end'>
          <div className='hidden lg:flex w-screen  items-center  whitespace-nowrap   '>
              <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl2.png"/>
              </motion.div>
              <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl2.png"/>
              </motion.div>
           </div>
          <div className='hidden lg:flex w-screen  items-center  whitespace-nowrap   '>
            <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl.png"/>
            </motion.div>
            <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl.png"/>
            </motion.div>
          </div>
    
        </div>

        <div className='w-1/2 h-full bg-blue-200 ml-2  '>

            <div className='w-full  h-2/3 relative'>
              <img src='v.png' className='w-32 absolute left-[-10px] top-[400px] '/>
               <div className='mr-4 h-full absolute left-[115px] right-0 top-36 rounded-3xl border-black border-4 bg-slate-50 '>
                  
               </div>
            </div>


        </div>
        
    </div>
    <div className='hidden  w-full  bg-black h-screen lg:flex'>
        
        <div className='w-1/2 h-full bg-blue-200 mr-2 '>
          <div className='w-full  h-2/3 relative'>
              <img src='v.png' className='w-32 absolute right-[-10px] top-[400px] '/>
               <div className='ml-4 h-full absolute right-[115px] left-0 top-36 rounded-3xl border-black border-4 '>
                  
               </div>
            </div>
    
        </div>
        <div className='w-1/2 h-full bg-blue-200 ml-2  overflow-hidden'>
        <div className='hidden lg:flex w-screen  items-center  whitespace-nowrap   '>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl3.png"/>
       </motion.div>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl3.png"/>
       </motion.div>
      </div>
      <div className='hidden lg:flex w-screen  items-center  whitespace-nowrap   '>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl4.png"/>
       </motion.div>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl4.png"/>
       </motion.div>
      </div>

            


        </div>
        

    </div>





  </div>
  )
}

export default Project