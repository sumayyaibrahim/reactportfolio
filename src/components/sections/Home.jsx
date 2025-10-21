import React from 'react'
import { motion } from "framer-motion";

function Home() {
  return (
    <div  id="home"className='w-full min-h-screen flex justify-center items-center'>
         <div><div className='text-center'>
          
          <motion.div
          initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
           className=' mt-30 font-bold text-3xl md:text-5xl bg-gradient-to-r from-blue-300 to-violet-900 bg-clip-text text-transparent'>
              Hi I'am  Sumayya
          </motion.div>
          <motion.h3 
          initial={{opacity:0,x:-50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
          className='text-white md:w-150 mx-auto text-justify p-4'>I am a front-end developer,who loves to create attractive and userfriendly 
            websites.
         
          familiar with HTML, CSS, JavaScript, React, and Tailwind CSS. 
            Eager to apply creative problem-solving and modern web development practices to build engaging and user-focused websites.
             Passionate about continuous learning and UI improvement.
           </motion.h3>
         </div>
         <motion.div
         initial={{opacity:0,x:50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
         className='flex justify-center space-x-4'>
          <a className=' transform transition-transform duration-500 ease-in-out hover:translate-y-3 border-none bg-violet-500 text-white rounded-lg p-2 shadow-[0_4px_6px]' href="#projects"> projects</a>
          <a  className=" transform transition-transform duration-500 ease-in-out hover:-translate-y-3 border rounded-lg border-violet-600 text-violet-600 p-2 shadow-[0_4px_6px]"href="#contact"> contact Me</a>
         </motion.div>
         </div>
    </div>
  )
}

export default Home