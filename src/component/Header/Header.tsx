import Burger_button from "../Burger_button/Burger_button";

const Header: React.FC = () => {
  
  return (

      <header className="header">
        <div className="header_contenant">
        <h1 >KR</h1>
        <Burger_button />
        </div>
       
      </header>
  
  );
};

export default Header;