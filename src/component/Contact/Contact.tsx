const Contact = () => {
    return (
        <div className="contact" id="contact">
             <h4 className="contact_title"> Échangons  </h4>
            <div className="contact_content">

             <div className="contact_left"> 
                 <h4  className="contact_left_title"> Bonjour</h4>
                <p className="contact_text"> Étant en recherche d'une alternance de deux ans dans
                    le cadre de mon master en Dévelopement Data et IA débutant en octobre 2023. 
                    Je suis disponible pour un premier échange depuis ces coordonnées
                </p>

            </div>
           
            <ul className="coordonnee">
                <li className="coordonne_item"><p className="coordonne_item_key">EMAIL:</p> <a className="coordonne_item_link" href="mailto:kenuhn@gmail.com" >kenuhn@gmail.com</a></li>
                <li className="coordonne_item"><p className="coordonne_item_key">NUMÉRO:</p> <p className="coordonne_item_link" >0646441738</p>  </li>
                <li className="coordonne_item"><p className="coordonne_item_key">LOCALITÉ:</p> <p className="coordonne_item_link" >Élancourt</p> </li>
            </ul>
            </div>

            
        </div>
    );
};

export default Contact;