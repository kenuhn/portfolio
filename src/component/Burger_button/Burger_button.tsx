import {useRef, useState} from "react";
import Modal_nav from "../Modal_nav/Modal_nav";
const Burger_button = () => {
   const burger = useRef<HTMLDivElement >(null)
   const [isActive, setisActive] = useState<Boolean>(false)

   function handleClick () : void {
    burger.current?.classList.toggle('active');
    if(isActive === false ) {
        setisActive(true)
    } else {
        setisActive(false)
    }
   
   }

    return (
       <>
        <div ref={burger} className="burger" onClick={handleClick}>
            <span></span>
        </div>
        <Modal_nav  isActive={isActive}/>
       </>
        
    );
};

export default Burger_button;