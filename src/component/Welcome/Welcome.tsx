import {useEffect, useState } from "react";
 import { FaArrowRight } from "react-icons/fa6"
const Welcome = () => {
    const [dynamicText, setDynamicText] = useState<string>("");
    const words: string[] = ["Étudiant", "Developpeur", "Fullstack"];
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
        
        <section className="welcome">

        <div className="presentation">
            <h2 className="presentation_title">Bonjour, je m'appelle  Kenuhn 
             je suis <span className="presentation_dynamic">{dynamicText}</span>
            </h2> 
            <p className="presentation_subtitle">Étudiant en M1 en Dévelopement Data et IA</p>
             <ul className="presentation_link">
              <li className="presentation_link_item"><a href="#competence"> <FaArrowRight style={{marginRight: '10px', fontSize: '15px'}}/> Mon Parcours</a></li>
              <li className="presentation_link_item"><a href="/projets"> <FaArrowRight style={{marginRight: '10px', fontSize: '15px'}}/> Mes projets</a></li>
              <li className="presentation_link_item"><a href="contact"> <FaArrowRight style={{marginRight: '10px', fontSize: '15px'}}/> Contactez-moi</a></li>
            </ul>
 
        </div>

        </section>
    );
};

export default Welcome;