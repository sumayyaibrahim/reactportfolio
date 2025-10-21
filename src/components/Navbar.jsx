import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { Linkedin, Github, Mail, Phone,Menu,X } from "lucide-react";
import { motion } from "framer-motion";



function Navbar() {
  
    const [openmenu,setopenmenu]=useState(false)
   


  const icons = [
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/sumayya-ibrahim-168a27344" },
    { icon: <Github size={20} />, link: "https://github.com/sumayyaibrahim" },
    { icon: <Mail size={20} />, link: "mailto:isumayya3@gmail.com" },
  
  ];
    
  return (
    <div className=' fixed w-full flex justify-between p-6 bg-white/2 backdrop-blur-sm  z-50'>
      <div className=' '>
        <img className=' animate-[rotateicon_10s_ease-in-out_infinite] hidden  md:flex w-17 h-17 rounded-full' src="/girlimg.png"></img>
      </div>
        
       <div className='hidden w-full justify-center md:flex text-violet-400'>

        <ul className='   border-white/10 flex  justify-between w-100 '>
            <a href="#home"><li className='hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)] cursor-pointer  '>Home</li></a>
            <a href="#about">  <li className=' hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)]   cursor-pointer'>About</li></a>
            <a href="#contact">  <li className=' hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)]   cursor-pointer'>Contact</li></a>
           
             <a href="#projects"><li className='hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)] cursor-pointer '>projects</li></a>

        </ul>
        
       </div>
       
        {!openmenu&& <div className='flex md:hidden mr-10 text-violet-500'> < IoReorderThree   onClick={()=>{setopenmenu(true)}}/></div>}
       
      { openmenu&&(
         
         
              <div className=' md:hidden'>
                

                 
        <ul className='flex flex-col w-40 text-violet-500 justify-between  backdrop-blur-lg   border-white/10  '>
          <div className=' text-violet-500 cursor-pointer  '>
            <FaWindowClose onClick={()=>{setopenmenu(false)}}/></div>
            <li className='hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)] cursor-pointer '>Home</li>
             <a href="#about">  <li className=' hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)]   cursor-pointer'>About</li></a>
            <li className='hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)] cursor-pointer '>contact</li>
            <a href="#projects"><li className='hover:border p-2 rounded border-white/20 bg-[rgba(10,10,10,0.8)] cursor-pointer '>projects</li></a>

        </ul>
        <div className=' md:hidden flex justify-between '>
           </div>
        </div>)}
        

 
 <div className="flex items-center justify-center gap-4">
        {icons.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="relative p-2 rounded-full group transition-transform duration-300"
          >
          
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
            <span className="relative z-10 text-purple-300 group-hover:text-white transition-colors duration-300">
              {item.icon}
            </span>
          </motion.a>
        ))}
      </div>

     


       

    
    </div>
  )
}

export default Navbar