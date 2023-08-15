import Button from "../Button/Button";
import groupomaniaProject from "../../img/project/groupomania.jpg"
import { FaTimes} from "react-icons/fa";
import Tag from "../Tag/Tag";
type Props = {
    onClickProps: () => void
    styleModal: Boolean
}
const Modal_project = ({onClickProps, styleModal}: Props)  => {
    
    return (
        <div onClick={onClickProps} className="project_wrapper" style={{display: styleModal ? 'flex' : 'none'}}>
            <div className="project_content">
                <div className="project_header">
                    <div className="project_header_cross"><FaTimes /></div>
                </div>
                <img src={groupomaniaProject} alt="" className="project_slider"/>
                <div className="project_body">
                    <h4 className="project_body_title">Réseau social</h4>
                    <div className="project_body_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates ducimus architecto nostrum similique quasi beatae illum possimus dolore esse ipsa. Cum sed consectetur neque cupiditate iusto omnis ipsam asperiores ea.</div>
                    <div className="project_body_techno"><Tag text="javascript"/> <Tag text="PrismaOrm"/> <Tag text="Nodejs"/></div>
                    <div className="project_body_years">2022</div>
                    <div className="project_body_key">
                        <p>Année</p>
                        <p>Techno</p>
                    </div>
                </div>
                <div className="project_footer">
                    <Button text="voir projet" classname="project_button"/>
                </div>

            </div>
        
        </div>


    );

    }
export default Modal_project;