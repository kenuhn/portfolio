import { useContext, useEffect, useState } from "react";
import { modalContext } from "../Header/Header";

const Burger_button = () => {

    const [burgerClass, setBurgerClass] = useState<string>("burger")
    const myModal = useContext(modalContext)
    const isOpenValue = myModal.isOpen


    function handleClick(): void {
        if (isOpenValue === true) {
            myModal.setIsOpen(false)
        } else {
            myModal.setIsOpen(true)

        }
    }

    useEffect(() => {
        isOpenValue ? setBurgerClass("burger active") : setBurgerClass("burger")
    }, [isOpenValue])

    return (
        <>
            <div  className={burgerClass} onClick={handleClick}>
                <span></span>
            </div>
        </>

    );
};

export default Burger_button;