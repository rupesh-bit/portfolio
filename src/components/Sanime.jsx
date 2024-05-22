import { motion } from 'framer-motion'
import React from 'react'

function Sanime() {
    
  return (
    <div>
        <div className='hidden md:flex w-full  overflow-hidden whitespace-nowrap  '>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"10" }}  className='bg-white w-full py-3 font-bold leading-normal text-9xl'>
                 i am rupesh kumar singh
       </motion.div>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"10" }}  className='bg-white w-full py-3 leading-normal font-bold text-9xl'>
          i am rupesh kumar singh
       </motion.div>
      </div>
    </div>
  )
}

export default Sanime