import React, { useEffect } from 'react'
import './App.css'
import { Home } from './home/Home'
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <>
    <Home />  
    </>
  )
}

export default App
