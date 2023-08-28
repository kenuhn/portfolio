
type Props = {
    competence: any;
    anim: string;
    delay: number;
} 


const TechnoCard = ( {competence, anim, delay}: Props) => {


    return (
        <div className={`techno_card ${anim}`} style={{animationDelay: `${delay}s`}}>
            {competence.componnent}
            <h4 className="techno_card_title">{competence.title}</h4>
        </div>
    );
};

export default TechnoCard;