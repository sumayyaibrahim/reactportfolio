import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {  Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
function Contact() {
  const [formdata,setformdata]=useState({name:'',email:"",message:""})
  const serviceid="service_xq5rzga"
  const templateid="template_2qmgs8d"
  const publickey="FMg2Sc4zC9rRWZSh3"
  const handlesubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm(serviceid,templateid,e.target,publickey).then((result)=>{alert("success")}).catch((err)=>{console.log("error")})
     setformdata({name:'',email:"",message:""})
  }
  return (
    <form id="contact"onSubmit={handlesubmit}>
    <motion.div
     initial={{opacity:0,x:-50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
     className='w-full md:px-30 md:flex items-center justify-between relative z-10 '>
    <div className='flex  ml-10  items-center justify-center backdrop-blur-md md:w-100  w-75 mb-10 p-5 rounded bg-[url("/public/pexels-karola-g-4194853.jpg")]'>
      
     <div className='flex  flex-col items-center justify-center gap-4  text-violet-700'>
      <motion.h3
       initial={{opacity:0,y:50}}
          whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
       className=' font-bold text-xl md:text-3xl text-center  text-violet-700'>GET IN TOUCH</motion.h3>
      <motion.div 
       initial={{opacity:0,x:-50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}className='md:mt-4'>
        
        <input name="user_name"placeholder='name' id="name"type="text" className='p-3 w-72  border rounded-sm ' value={formdata.name} onChange={(e)=>{setformdata({...formdata,name:e.target.value})}}></input>
      </motion.div>
      
      <motion.div  initial={{opacity:0,x:50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}>
        
  
        <input name="user_email"  placeholder='your e-mail Id' id="email"type="email" className='p-3 w-70  border rounded-sm' value={formdata.email} onChange={(e)=>{setformdata({...formdata,email:e.target.value})}}></input>
      </motion.div>
      <motion.div
       initial={{opacity:0,x:-50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}>
        <textarea  name="message" row="3" placeholder='message' className='p-3 w-70  border rounded-sm' value={formdata.message} onChange={(e)=>{setformdata({...formdata,message:e.target.value})}}></textarea>
        
      </motion.div>
      < motion.div

       initial={{opacity:0,x:50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}><button type="submit"className=' cursor-pointer p-3 w-70  border rounded-sm bg-violet-700 text-white text-2xl'>send message</button></motion.div>
      

     </div>
    </div>
    
    <motion.div
     initial={{opacity:0,x:-50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
     className=' w-100 flex justify-center items-center md:absolute bottom-0 right-0 gap-3 pb-18'>
     
      <div className='  '>
        
        <img className='w-15 h-18 rounded-full mr-10' src="/girlimg.png"></img>
      </div>
     <div className="flex justify-center gap-6 text-white text-xl mt-6">
     
      <a href="mailto:isumayya3@gmail.com" className="hover:text-purple-400 transition">
        <Mail />
      </a>
      <a href="https://www.linkedin.com/in/sumayya-ibrahim-168a27344" target="_blank" className="hover:text-purple-400 transition">
        <Linkedin />
      </a>
      <a href="https://github.com/sumayyaibrahim" target="_blank" className="hover:text-purple-400 transition">
        <Github />
      </a>
    </div>
    

    </motion.div>

    </motion.div></form>
  )
}

export default Contact