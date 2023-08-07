import Button from "../Button/Button";
import iconeGithub from "../../img/icone/github.png";
const Welcome = () => {
    return (
        <section className="welcome">

            <div className="welcome_left">
               <h2>KENUHN RIMBERT</h2>
               <p>Étudiant développeur en master 1 data et ia</p>
               <Button text={"télécharger mon cv"} classname={"welcome_left-button"} />
               <div className="welcome_left-icone">
                    <img src={iconeGithub} alt="" />
               </div>
            </div>

            <div className="welcome_right">
                <div className="welcome_right_photo">
                  <img src="" alt="" />
                  <p> HTML CSS JAVASCRIPT PYTHON NODEJS</p>
                </div>
            </div>

        </section>
    );
};

export default Welcome;