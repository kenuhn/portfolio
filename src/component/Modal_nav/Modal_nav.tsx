import Button from "../Burger_button/Burger_button";
import { useContext } from "react";
import { modalContext } from "../Header/Header";
import { Link } from "react-router-dom"; 

const Modal_nav = () => {
    const myModal = useContext(modalContext)
    const isOpenValue =  myModal.isOpen

    function handleClick ( ) :void {
      
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
                <Link to={"/#welcome"} onClick={handleClick}><li className="nav_item" > ACCUEIL </li></Link> {/* </a> */}
                <Link to={"/#curriculum"} onClick={handleClick}> <li className="nav_item">CURRICULUM</li></Link> {/* </a> */}
                <Link to={"/#contact"} onClick={handleClick}> <li className="nav_item">CONTACTER</li></Link>  {/* </a> */}
                </ul>
            </div>
        </div>
        < Button />
        </>
       
    );
};

export default Modal_nav;