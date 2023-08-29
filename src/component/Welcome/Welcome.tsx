import {useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6"

const Welcome = () => {
    const [dynamicText, setDynamicText] = useState<string>("");

    const words: string[] = ["Étudiant", "Développeur", "Fullstack"];
    let wordIndex: number = 0;
    let charIndex: number = 0;
    let isDeleting: boolean = false;

  
    const typeEffect = () => {
      const currentWord: string = words[wordIndex];
      const currentChar: string = currentWord.substring(0, charIndex);
  
      setDynamicText(currentChar);
  
      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      }
  
      setTimeout(typeEffect, isDeleting ? 200 : 300);
    };
  
    useEffect(() => {
      typeEffect();
    }, []);
    
    return (
        
        <section className="welcome" id="welcome">

        <div className="presentation">
            <div className="presentation_title"> 
            <span className="line_break">Bonjour,   </span>
           <span>je m'appelle  Kenuhn 
             je suis </span> 
            <span className="presentation_dynamic">
              
              {dynamicText === "" ? <p className="dynamic_ghost">bgbgybyg</p>  : dynamicText}
              
              </span>
            </div> 
            <p className="presentation_subtitle">Étudiant en M1 en Dévelopement Data et IA</p>
             <ul className="presentation_link">
            <li className="presentation_link_item"><a href="#curriculum"> <FaArrowRight style={{marginRight: '10px', fontSize: '15px'}}/> Mon Parcours</a></li>
           
              <li className="presentation_link_item"><a href="#projects"> <FaArrowRight style={{marginRight: '10px', fontSize: '15px'}}/> Mes projets</a></li>
              <li className="presentation_link_item"><a href="#contact"> <FaArrowRight style={{marginRight: '10px', fontSize: '15px'}}/> Contactez-moi</a></li>
            </ul>
 
        </div>

        </section>
    );
};

export default Welcome;