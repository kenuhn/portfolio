
type Props = {
    title: string;
    text: string;
    anim: string;
    delay: number;
} 


const TechnoCard = ( {title, text, anim, delay}: Props) => {


    return (
        <div className={`techno_card ${anim}`} style={{animationDelay: `${delay}s`}}>
            <h4 className="techno_card_title">{title}</h4>
            <p className="description">{text}</p>
        </div>
    );
};

export default TechnoCard;