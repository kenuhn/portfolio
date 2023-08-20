import { useEffect, useState } from "react";
import TechnoCard from "./TechnoCard/TechnoCard";

const competenceData = [
    {
        title: "back-end",
        text: "Node.JS , Express.JS , Python , Firebase",
    },
    {
        title: "base de donnée",
        text: "MongoDB , Firebase , SQL , Prisma ORM",

    },
    {
        title: "low-code",
        text: "Flutter , Wordpress ",


    },
    {
        title: "no-code",
        text: "Goddbarber , Glide , Flutterflow",


    },
    {
        title: "Front-end",
        text: "HTML , CSS , VANILLA.JS, REACT.JS, D3.JS, BOOTSTRAP, TAILWIND, SCSS ",

    },

]

const Techno = () => {
    const [animation, setAnimation] = useState<string>("")
    const [delay, setDelay] = useState<number>(0.5)
/*     useEffect(() => {
        const handleScroll = () => {
            console.log("bb",)
            if (animation === "") {
                setAnimation("animated")
            } else {
                setAnimation("")
            }
        };
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [])


 */

    return (
        <div className="competence" id="competence">
            <h4 className="competence_title">Mes Compétences</h4>
            <div className="techno">
                <div className="techno_content" >
                    {competenceData.map((card, index) => {
                        /* setDelay(delay + 0.1) */
                        return <TechnoCard key={`card ${index}`} title={card.title} text={card.text} anim={animation} delay={delay + index/10} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Techno;