import TechnoCard from "./TechnoCard/TechnoCard";

const Techno = () => {
    return (
        <div className="competence">
        <h4 className="competence_title">Mes Compétences</h4>
        <div className="techno">
        <div className="techno_content">
                    < TechnoCard title="Front-end" text="            Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/> 
                    < TechnoCard title="Back-end" text="            Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/> 
                    < TechnoCard title="Base de donnée" text="            Lorem ipsum, dolor sit amet consectetur adipisicing elit."/> 
                    < TechnoCard title="low-code" text="            Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/> 
                    < TechnoCard title="No-code" text="            Lorem ipsum, dolor sit amet consectetur adipisicing elit. "/> 
                </div>

        </div>
        </div>


    );
};

export default Techno;