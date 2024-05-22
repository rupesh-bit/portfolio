import React from 'react'

function About() {
  return (
  
    <div className='min-h-screen w-full flex flex-col justify-center items-center bg-blue-200 ' id='about'>
        <div className=' mb-10 w-11/12 lg:w-2/3'>
            <h1 className='text-center text-3xl my-3'>
                About me
            </h1>
            Hi there! I'm Rupesh kumar, a passionate React frontend developer with a love for 
            building intuitive user interfaces and delightful web experiences.
              I specialize in crafting elegant solutions that seamlessly blend form and function.
        </div>
        <div className='md:hidden'>
          <img src='po.jpg' className='h-64 w-96 object-cover object-top rounded-lg'/>
        </div>
             
     <div className='flex  w-11/12 lg:w-3/4   '>
        <div className='hidden md:block border-white border-spacing-10 border-4 rounded-lg '>
          <img src='po.jpg' className='h-96 w-96 object-cover '/>
        </div>
        <div className='md:ml-10'>
            <ol>
                <li className='my-3'>
                    <span className='font-bold'>React.js:</span>
                    Proficient in React.js and its ecosystem, I leverage the power of components, 
                    hooks, and context to create dynamic and interactive user interfaces.
                </li>
                <li className='my-3'>
                    <span className='font-bold'>JavaScript:</span>
                    Skilled in modern JavaScript (ES6+), I write clean, efficient 
                    code that adheres to best practices and promotes maintainability and scalability.
                </li>
                <li className='my-3'>
                    <span className='font-bold'>Responsive Design:</span>
                    I design and develop responsive websites that look great and function flawlessly across all devices and screen sizes.

                </li>
                <li className='my-3'>
                    <span className='font-bold'>UI/UX Principles:</span>
                    I have a keen eye for design and usability, incorporating UI/UX best practices to enhance user engagement and satisfaction.

                </li>
                <li className='my-3'>
                    <span className='font-bold'>Version Control:</span>
                    Proficient in Git and GitHub, I collaborate effectively with team members and track 
                    changes to ensure seamless project management.

                </li>

                <li>uhu</li>
            </ol>
         
    
        </div>

     </div>
    
    </div>
  )
}

export default About

/*Hi there! I'm [Your Name], a passionate React frontend developer with a love for building intuitive user interfaces and delightful web experiences. With [X] years of experience in web development, I specialize in crafting elegant solutions that seamlessly blend form and function.

My Expertise

 

JavaScript: Skilled in modern JavaScript (ES6+), I write clean, efficient code that adheres to best practices and promotes maintainability and scalability.

HTML & CSS: Experienced in HTML5 and CSS3, I ensure pixel-perfect implementation of designs and strive for optimal performance and accessibility.

Responsive Design: I design and develop responsive websites that look great and function flawlessly across all devices and screen sizes.

UI/UX Principles: I have a keen eye for design and usability, incorporating UI/UX best practices to enhance user engagement and satisfaction.

Version Control: Proficient in Git and GitHub, I collaborate effectively with team members and track changes to ensure seamless project management.*/