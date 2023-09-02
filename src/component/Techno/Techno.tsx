import { useEffect, useState } from "react";
import TechnoCard from "./TechnoCard/TechnoCard";
import {FaReact, FaNodeJs, FaWordpress, FaSass} from 'react-icons/fa'
import {SiMysql, SiMongodb, SiFlutter, SiFirebase, SiPython, SiHtml5, SiCss3, SiTypescript} from 'react-icons/si'
/* import useOneScreen  from "../../pages/Homepage"; */
import { useRef } from "react";
const competenceData = [{componnent:  <FaReact />, title: "React",},
{componnent: <FaNodeJs />, title:"NodeJS"}, 
{componnent: <FaWordpress />, title:"Wordpress"},
{componnent: < SiMysql />, title:"SQL"}, 
{componnent: <SiMongodb />, title:"MongoDB"}, 
{componnent: <SiFlutter />, title:"Flutter"},
{componnent: <SiFirebase />, title:"Firebase"},
{componnent: <SiPython />, title:"Python"},
{componnent: <SiHtml5 />, title:"HTML"},
{componnent: <SiCss3 />, title:"CSS"},
{componnent: <SiTypescript />, title:"Typescript"},
{componnent:<FaSass/>, title:'SASS' }

]
function useOneScreen(ref: React.RefObject<any>) {
    const [isIntersecting, setIntersecting] = useState<Boolean>(false)

    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
    })

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }
    }, [])

    return isIntersecting


}

const Techno = () => {
    const [animation, setAnimation] = useState<string>("")
    const delay = 0.5
    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOneScreen(ref)
     useEffect(() => {

        if (isVisible) {
                if (animation === "") {
                    setAnimation("animated")
                } 
        } else {
            setAnimation("")
        }

    }, [isVisible])


 

    return (
        <div  className="competence" id="competence" ref={ref}>
            <h4 className="competence_title">MES COMPÉTENCES</h4>
            <p className="competence_text">
                  Le langage que j'utilise le plus est javascript.
                J'aime aussi développer avec Python, principalement pour travailler les structures de données et les algorithmes.
                J'ai également eu l'occasion d'utiliser différents outils noCode tels que Wordpress ou Flutter pour certains projets.

                </p>
            <div className="techno">
            {competenceData.map((competence, index) => {
                        return <TechnoCard key={`techno,${index}`} competence={competence} delay={delay + index/10} anim={animation} />  
                    })}
               {/*   <div className="techno_content" >
                    {competenceData.map((card, index) => {
                         setDelay(delay + 0.1) 
                        return <TechnoCard key={`card ${index}`} title={card.title} text={card.text} anim={animation} delay={delay + index/10} />
                    })}  
                   
                </div>*/}
            </div>
        </div>
    );
};

export default Techno;