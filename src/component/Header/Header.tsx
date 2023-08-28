import Modal_nav from "../Modal_nav/Modal_nav";
import { createContext, useState } from "react";
import { Link } from "react-router-dom";
type modalConetxtType =  {
   isOpen: boolean,
   setIsOpen: (a:boolean) => void
}


export const modalContext = createContext<modalConetxtType>({
  isOpen: false,
  setIsOpen: () => {}
})

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  
  return (
    < modalContext.Provider value={{isOpen, setIsOpen}}>
      <header className="header">
        <div className="header_contenant">
       <Link to={"/"} style={{color: "#280a0b"}}> <h1 className="header_title">KR</h1></Link>
          < Modal_nav />
        </div>
       
      </header>
      </modalContext.Provider>
  );
};

export default Header;