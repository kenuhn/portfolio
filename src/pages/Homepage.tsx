import Welcome from "../component/Welcome/Welcome";
import Timeline from "../component/Timeline/Timeline";
import Slider from "../component/SlideShow/Slider";
import Techno from "../component/Techno/Techno";
import Contact from "../component/Contact/Contact";
import React, { useEffect, useRef, useState } from "react";
import {  useLocation } from "react-router-dom";
 export function useOneScreen(ref: React.RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState<Boolean>(false)

    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
    })

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }
    }, [])

    return isIntersecting


} 

const Homepage = () => {
   const ref = useRef<HTMLDivElement>(null)
    const location = useLocation()
    useEffect(() => {
        if(location.hash) {
            const hash = location.hash.slice(1)
           const hashEl= document.getElementById(hash)
           hashEl?.scrollIntoView()

        }
    }, [location]) 

    return (
        <>
       
            <div ref={ref}  id="container_test">
            
                <Welcome />
                <Techno />
                <Timeline />
                <Slider />
                <Contact />
            </div>



        </>
    )

};

export default Homepage;