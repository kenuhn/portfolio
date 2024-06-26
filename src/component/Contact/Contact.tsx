import { useEffect, useRef, useState } from "react";
import { useOneScreen } from "../../pages/Homepage";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOneScreen(ref);
  const [divWidth, setDivWidth] = useState(0);
  /*    const headerTheme = createContext(divWidth) */
  useEffect(() => {
    const handleResize = () => {
      const divElement = document.getElementById("contact");
      if (divElement && isVisible) {
        const newWidth = divElement.clientWidth;
        setDivWidth(divWidth);
        console.log(newWidth, isVisible);
        console.log(divWidth);
      }
    };

    // Initialisation de la largeur
    handleResize();

    // Nettoyage de l'écouteur d'événement
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);

  return (
    <section className="contact" id="contact" ref={ref}>
      <h4 className="contact_title"> Contacter </h4>
      <div className="contact_content">
        <div className="contact_left">
          <h4 className="contact_left_title"> Bonjour,</h4>
          <p className="contact_text">
            {" "}
            Étant en recherche d'une alternance d'un an dans le cadre de mon
            master en Développement Data et IA débutant en octobre 2024. Je suis
            disponible pour un premier échange depuis ces coordonnées.
          </p>
        </div>

        <ul className="coordonnee">
          <li className="coordonnee_item">
            <p className="coordonnee_item_key">EMAIL:</p>{" "}
            <a className="coordonnee_item_link" href="mailto:kenuhn@gmail.com">
              kenuhn@gmail.com
            </a>
          </li>
          <li className="coordonnee_item">
            <p className="coordonnee_item_key">NUMÉRO:</p>{" "}
            <p className="coordonnee_item_link">0646441738</p>{" "}
          </li>
          <li className="coordonnee_item">
            <p className="coordonnee_item_key">LOCALITÉ:</p>{" "}
            <p className="coordonnee_item_link">Élancourt</p>{" "}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
