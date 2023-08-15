import { Link } from "react-router-dom";

interface Props {
    text: string
    classname: string
}

const Button = ({text, classname}: Props ) => {

    return (
        <Link to={`/projets`}>
            <button className={classname}>
                {text}  
            </button>
        </Link>
      
    );
};

export default Button;