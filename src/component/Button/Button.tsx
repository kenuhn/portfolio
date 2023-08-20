import { Link } from "react-router-dom";

interface Props {
    text: string
    classname: string
    id: number
}

const Button = ({text, classname, id}: Props ) => {

    return (
        <Link to={`/projet/${id}`}>
            <button className={classname}>
                {text}  
            </button>
        </Link>
      
    );
};

export default Button;