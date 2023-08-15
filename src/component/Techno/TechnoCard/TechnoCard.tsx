
type Props = {
    title: string;
    text: string;
} 


const TechnoCard = ( {title, text}: Props) => {
    return (
        <div className="techno_card">
            <h4 className="techno_card_title">{title}</h4>
            <p className="description">{text}</p>
        </div>
    );
};

export default TechnoCard;