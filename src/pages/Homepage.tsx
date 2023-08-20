import Welcome from "../component/Welcome/Welcome";
import Timeline from "../component/Timeline/Timeline";
import Slider from "../component/SlideShow/Slider";
import Techno from "../component/Techno/Techno";
import Contact from "../component/Contact/Contact"; 
import { createContext, useRef } from "react";

const Homepage = () => {
    const myWrapper = useRef(null) 
/*     const contextWrapper = createContext(myWrapper) 
    console.log(myWrapper.current) */
    return (    
    <>
    <div ref={myWrapper} id="container_test">
        <Welcome />
         <Techno />
        <Timeline />
        <Slider />
        <Contact /> 
    </div>
       

 
    </>
    );
};

export default Homepage;