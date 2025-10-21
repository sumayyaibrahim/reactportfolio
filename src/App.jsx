import { useEffect, useState } from 'react'

import './App.css'
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';



function App() {
  const[loader,setloader]=useState(true);
  useEffect(()=>{setTimeout(()=>{setloader(false)},3000)},[])
  if( loader)
   return(<>
   <Loading/></>)
   

  return (
    <>
      <div className='text-xl text-blue-700 '>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
