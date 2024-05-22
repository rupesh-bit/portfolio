import React from 'react'

function Navbar() {
  return (
    <div className="  bg-blue-200 flex w-full fixed px-6 justify-between z-50 shadow-md">
          <a href='#home'><div className='font-bold tracking-tighter'>
            portfolio
          </div></a> 
          <div className="flex gap-10">
               <a href='#home'><div >
                 Home
               </div></a>
                 <a href='#project'><div>
                 Project
               </div></a>
               <a href='#about'><div>
                 About
               </div></a>
               <a href='#contact'><div >
                 contact
               </div></a>
               <a><div className=" ml-28 lg:ml-60">
                 about
               </div></a>
          </div>
        </div>    
  )
}

export default Navbar
