import React from 'react'
import { motion } from 'framer-motion'
function Anime() {
    
  return (
    <div>
        <div className='hidden md:flex w-full  items-center overflow-hidden whitespace-nowrap bg-slate-500 h-96 '>
       <motion.div initial={{x:'-100%'}} animate={{x:"0"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"7" }}  className='bg-blue-950 w-full  py-5 font-bold leading-normal text-blue-300 text-9xl pr-3 '>
                 i am rupesh kumar sing<span>h</span>
       </motion.div>
       <motion.div initial={{x:'-100%'}} animate={{x:"0"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"7" }}  className='bg-blue-950 w-full py-5 font-bold leading-normal text-blue-300 text-9xl pr-3 '>
          i am rupesh kumar sing<span>h</span>
       </motion.div>
      </div>
    </div>
  )
}

export default Anime