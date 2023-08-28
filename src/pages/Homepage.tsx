import Welcome from "../component/Welcome/Welcome";
import Timeline from "../component/Timeline/Timeline";
import Slider from "../component/SlideShow/Slider";
import Techno from "../component/Techno/Techno";
import Contact from "../component/Contact/Contact";
import React, { useEffect, useRef, useState } from "react";


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
    const isVisible = useOneScreen(ref)

    useEffect(() => {
        if (isVisible) {
            console.log("cela a marché")
        }
    }, [isVisible])

    return (
        <>
            <div ref={ref} id="container_test">
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