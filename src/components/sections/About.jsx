import React from 'react'
import { motion } from "framer-motion";

function About() {
  const  skills=['HTML','CSS','Javascript','React','tailwindcss','bootstrap']
  return (
    <div id="about" className='flex justify-center items-center'>
      <div >
        < motion.div
         initial={{opacity:0,y:-50}}
          whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
         className=' text-4xl font-bold text-center bg-gradient-to-r from-blue-300 to-violet-900 bg-clip-text text-transparent mb-3'>
        About me
        
        </motion.div>
          <h4 className='text-white text-center'> I love creating clean UI designs and optimizing user experience through smooth animations. </h4>
          <div className=' md:hidden flex items-center justify-center'>
           <div class=" w-30 h-40 w-60h-100 rounded-full p-1  ">
    <motion.img
     initial={{opacity:0,x:-50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    src="/public/sumi.jpg"
    alt="Profile"
    class="w-full h-full rounded-full object-cover shadow-lg"
  />

</div>
</div>

        <div className=' md:grid grid-cols-2 gap-4 p-5'>
          
           <div className=' border rounded-sm border-none text-white p-4 text-center'> 
            <h3 className=' text-white font-bold text-center p-4'>skills</h3>
            <div className=' grid grid-cols-2 gap-3'>
              {skills.map((skill)=>(<motion.div
               initial={{opacity:0,x:-50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
               className='  text-center rounded-sm  p-2 bg-purple-800 text-white'>{skill}

              </motion.div>))}

            </div>
            <div className=' pt-6 text-center'>
             <div className=''>
              <motion.h3 
               initial={{opacity:0,y:-50}}
          whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}className='text-white font-bold'>Education</motion.h3>
              <div className='flex gap-5 pt-6'>
                <h4>MCA</h4>
                <h4 className=''>Amrita Vishwa Vidhyapeetham, Kollam(2020-2022)</h4>
              </div>
              <div className='flex gap-5 pt-6'>
                <h4>BCA</h4>
                <h4 className=''>MarGregoriosCollege ,punnapra,alappuzha(2017-2020)</h4>
              </div>
             </div>
             <div><h3  className='text-white font-bold mt-4'>Experience</h3>
              <div className='pt-6'> <h4>MEARN Stack developer(intern)April-2025-present</h4></div>
             </div>
             
            </div>
           </div>
               <div className=' md:hidden  w-70 flex justify-center items-center border rounded-2xl py-3   text-white bg-gradient-to-r from-violet-400 to-blue-500 border-none  mt-14'><button>Download CV</button></div>
           <div className='pt-15 w-full hidden md:flex justify-center '>
            <div class="  bg-gradient-to-r from-purple-400 to violet-500  w-60 h-67 rounded-full p-1  ">
    <img 
    src="/public/sumi.jpg"
    alt="Profile"
    class="w-full h-full rounded-full object-cover shadow-lg animate-[float_4s_ease-in-out_infinite]"
  />
  <a href="/public/sumayya_cv.pdf" download="sumayya_cv.pdf"><motion.div
   initial={{opacity:0,x:50}}
          whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }} className='flex justify-center items-center border rounded-2xl  py-3 md:w-50    text-white bg-gradient-to-r from-violet-400 to-blue-500 border-none hover:scale-110  mt-14'><button>Download CV</button></motion.div></a>
  
</div>

           </div>
        </div>

      </div>
    </div>
  )
}

export default About
