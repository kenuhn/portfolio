import Button from "../Button/Button";
import { FaFolder, FaGithub } from "react-icons/fa6";
type Props = {
    titre: string;
    description: string;
    onClickProps: () => void;
}
const Card = ({ titre, description, onClickProps }: Props) => {


    return (
        <div className="card">
            <div className="card_header" >
                <FaFolder />
                <FaGithub />
            </div>
            <h4 className="card_title">{titre}</h4>
            <p className="card_text" >{description}</p>
            <div className="card_button" onClick={onClickProps}>
                <Button text="decouvrir" classname="button card_button" />
            </div>
            
        </div>
    );
};

export default Card;