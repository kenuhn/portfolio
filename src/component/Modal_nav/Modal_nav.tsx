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
                <h4 className="modal_title">Kenuhn Rimbert / étudiant développeur</h4>
                <ul className="nav_list">
                <a href="/#welcome" onClick={handleClick}> <li className="nav_item" > ACCUEIL </li></a>
                <a href="/#curriculum" onClick={handleClick}>  <li className="nav_item">CURRICULUM</li></a>
                <a href="/#contact" onClick={handleClick}>  <li className="nav_item">CONTACTER</li></a>
                </ul>
            </div>
            
            
        </div>
        < Button />
        </>
       
    );
};

export default Modal_nav;