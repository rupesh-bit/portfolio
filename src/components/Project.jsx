import { motion } from 'framer-motion'
import React from 'react'

function Project() {
  
  return (
  <div id='project'>
    <div className='w-full flex flex-col items-center lg:hidden   '>
      <div className=' w-full px-3 bg-blue-200 flex items-center  flex-col  rounded-lg mt-9 sm:w-2/3'>
          <a href='https://instagram-black-nine.vercel.app/' target='blank'>
            <img className='rounded-md  object-cover max-h-[80vh]'  src='insta3.png'/></a>

          <div className='  flex items-center  flex-col'>  
              <span className='font-bold my-4 '>Instagram clone</span>
                   <li className=''>
                    <span className='font-bold'>User Authentication:</span>
                   - Implemented secure login, register, and logout features to manage user accounts effectively.
                </li>
                <li className='mt-2'>
                    <span className='font-bold'>Photo Management:</span>
                    - Enabled users to upload and delete photos, allowing them to curate their personal galleries.

                </li>
                <li className='mt-2'>
                    <span className='font-bold'>Data Handling with Appwrite:</span>
                    - Integrated Appwrite backend service for reliable data management, including user authentication and photo storage.
                </li>
                <li className='mt-2'>
                    <span className='font-bold'>State Management with Redux:</span>
                    - Utilized Redux to ensure efficient state management and seamless data flow across the application.
                </li>
                <li className='my-2'>
                    <span className='font-bold'>Technologies Used:</span>
                    - Built the frontend with React and styled using tailwind, creating a <span className='font-bold text-blue-950'>responsive</span> and visually appealing user interface.
                </li>
                </div>
         
      </div>
      <div className='border-black border-4 w-11/12 h-96  rounded-lg mt-9 sm:w-2/3'>
         kdfkfikc
      </div>
       

    </div>

    <div className='hidden w-full bg-black  h-[100vh] lg:flex '>
        
        <div className='w-1/2 h-full bg-blue-200 mr-2 overflow-hidden flex flex-col justify-end relative'>
          <div className='hidden lg:flex w-screen h-1/2  items-center  whitespace-nowrap   '>
              <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl2.png"/>
              </motion.div>
              <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl2.png"/>
              </motion.div>
           </div>
          <div className='hidden lg:flex w-screen h-1/2  items-center  whitespace-nowrap   '>
            <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl.png"/>
            </motion.div>
            <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl.png"/>
            </motion.div>
          </div>
          <div className='absolute text bg-[#f2f2f353] rounded-3xl top-48 pl-4 flex items-center flex-col'>  
              <span className='font-bold my-4 '>Instagram clone</span>
                   <li className='my-3'>
                    <span className='font-bold'>User Authentication:</span>
                   - Implemented secure login, register, and logout features to manage user accounts effectively.
                </li>
                <li className='my-3'>
                    <span className='font-bold'>Photo Management:</span>
                    - Enabled users to upload and delete photos, allowing them to curate their personal galleries.

                </li>
                <li className='my-3'>
                    <span className='font-bold'>Data Handling with Appwrite:</span>
                    - Integrated Appwrite backend service for reliable data management, including user authentication and photo storage.
                </li>
                <li className='my-3'>
                    <span className='font-bold'>State Management with Redux:</span>
                    - Utilized Redux to ensure efficient state management and seamless data flow across the application.
                </li>
                <li className='my-3'>
                    <span className='font-bold'>Technologies Used:</span>
                    - Built the frontend with React and styled using CSS/SCSS, creating a responsive and visually appealing user interface.
                </li>
                </div>
    
        </div>

        <div className='w-1/2 h-full bg-blue-200 ml-2  '>

            <div className='w-full  h-4/5 relative'>
              <img src='v.png' className='w-32 absolute left-[-10px] top-[300px] '/>

               <div className='mr-4 h-full absolute left-[70px] 
                right-0 top-40 rounded-3xl  '>
                   <a href='https://instagram-black-nine.vercel.app/' target='blank'><img className='rounded-3xl' src='insta2.png'/></a>

                   <div className='mt-5 flex items-center flex-col'>
                   
                   </div>
                  
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
        <div className='hidden lg:flex w-screen h-1/2  items-center  whitespace-nowrap   '>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl3.png"/>
       </motion.div>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"30" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl3.png"/>
       </motion.div>
      </div>
      <div className='hidden lg:flex w-screen h-1/2 items-center  whitespace-nowrap   '>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl2.png"/>
       </motion.div>
       <motion.div initial={{x:'0'}} animate={{x:"-100%"}} transition={{ease:"linear" ,repeat:Infinity ,duration:"25" }}  className=' w-full py-5 font-bold leading-normal text-blue-300 text-9xl'>
                 <img src="cl2.png"/>
       </motion.div>
      </div>

            


        </div>
        

    </div>





  </div>
  )
}

export default Project