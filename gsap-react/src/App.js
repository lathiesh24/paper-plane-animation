import logo from './logo.svg';
import './App.css';
import {useRef, useLayoutEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPulgin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger); 
function App() {
  const imgRef = useRef(null);
  useLayoutEffect(() => {
    
    const el = imgRef.current;
    gsap.fromTo(el, 
      {
      rotation:0
    },
    {
      rotation:360, 
      duration : 4,
      scrollTrigger:{
        trigger:".App-logo",
        start:"top 80%",
        end:"top 50%",
        markers:true,
        scrub:true
      }
    })
  },[]);
  return (
    <div className="App">
      <div className='helper'></div>
        <img src={logo} className="App-logo" alt="logo" ref={imgRef}/>
      <div className='helper'></div>
    </div>
  );
}

export default App;
