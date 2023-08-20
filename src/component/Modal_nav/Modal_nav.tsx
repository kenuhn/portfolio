import { Link } from "react-router-dom";
import Button from "../Burger_button/Burger_button";
import { useContext } from "react";
import { modalContext } from "../Header/Header";

const Modal_nav = () => {
    const myModal = useContext(modalContext)
    const isOpenValue =  myModal.isOpen


    function handleClick () :void {
        if (isOpenValue === true ) {
            myModal.setIsOpen(false)
        } else {
            myModal.setIsOpen(true)
        }
    }

    return (
        <>
         <div className="modal" style={{display: isOpenValue ? "flex" : 'none'}}>
            <div className="modal_nav">
                <ul className="nav_list">
                <Link to="" onClick={handleClick}> <li className="nav_item" > Acceuil </li></Link>
                <Link to="" onClick={handleClick}>  <li className="nav_item">Mon CV</li></Link>
                <Link to="" onClick={handleClick}>  <li className="nav_item">Me contacter</li></Link>
                </ul>
            </div>
            
            
        </div>
        < Button />
        </>
       
    );
};

export default Modal_nav;