import { useEffect, useState } from "react";
 
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
              <li className="presentation_link_item"><a href="">Mon Parcours</a></li>
              <li className="presentation_link_item"><a href="">Mes projets</a></li>
              <li className="presentation_link_item"><a href="">Contactez-moi</a></li>
            </ul>
 
        </div>
{/* 
            <div className="portrait">
               
                    <ul className="techno">
                        <li className="techno_item"><img className="techno_img" src={nodeJs} alt="" /></li>
                        <li className="techno_item"><img className="techno_img" src={typescript} alt="" /></li>
                        <li className="techno_item"><img className="techno_img" src={python} alt="" /></li>
                        <li className="techno_item"><img className="techno_img" src={sql} alt="" /></li>
                        <li className="techno_item"><img className="techno_img" src={mongoDB} alt="" /></li>
                    </ul> 
           
            </div> */}

        </section>
    );
};

export default Welcome;