import Button from "../Button/Button";
import Tag from "../Tag/Tag";
type Props = {
    titre: string;
    description: string;
    img: string;
    onClickProps: () => void;
    id: number;
    tags: string[];
    year: number;

}
const Card = ({ titre, img, onClickProps, id, description, tags, year }: Props) => {

    console.log(tags)
 {
       
    }
    return (
        <div className="card">
            {/*      <div className="card_header" >
                <FaFolder />
                <FaGithub />
            </div> */}
            <h4 className="card_title">{titre}</h4>
            <div className="card_img"><img src={`${img}`} alt="" /></div>
            <p className="card_text" >{description}</p>
            <div className="card_tag">
                {tags.map((tag) => {
                    return (
                         < Tag text={tag} />
                    )
                   
                    })}</div>
            <div className="card_date">{year}</div>
            <div className="card_button" onClick={onClickProps}>
                <Button text="Voir projets" classname="button card_button" id={id} />
            </div>

        </div>
    );
};

export default Card;