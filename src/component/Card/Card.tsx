import Button from "../Button/Button";
import Tag from "../Tag/Tag";
type Props = {
    titre: string;
    description: string;
    img: string;
    id: number;
    tags: string[];
    year: number;

}
const Card = ({ titre, img,  id, description, tags, year }: Props) => {

    return (
        <div className="card">
            <h4 className="card_title">{titre}</h4>
            <div className="card_img"><img src={`${img}`} alt="" /></div>
            <p className="card_text" >{description}</p>
            <div className="card_tag">
                {tags.map((tag, index) => {
                    return (
                        < Tag key={`${tag}${index}`} text={tag} />
                    )
                })}</div>
            <div className="card_date">{year}</div>
            <div className="card_button" >
                <Button text="Voir projet" classname="button card_button" id={id} />
            </div>

        </div>
    );
};

export default Card;