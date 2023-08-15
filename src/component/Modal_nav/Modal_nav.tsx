type  Props =  {
    isActive: Boolean;
}


const Modal_nav = ({isActive} : Props) => {


    return (
        <div className="modal" style={{display: isActive ? "flex" : 'none'}}>
            <div className="modal_nav">
                <ul className="nav_list">
                    <li className="nav_item">Acceuil</li>
                    <li className="nav_item">Mon CV</li>
                    <li className="nav_item">Me contacter</li>
                </ul>
            </div>
            
            
        </div>
    );
};

export default Modal_nav;