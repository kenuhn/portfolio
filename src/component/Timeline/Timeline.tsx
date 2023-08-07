const Timeline = () => {
    return (
        <div className='timeline'>
            <div className="timeline_separator">
                <div className="timeline_circle circle1"></div>
                <div className="timeline_circle circle2"></div>
                <div className="timeline_circle circle3"></div>
            </div>

            <div className="timeline_experience1 timeline_experience">
                <h3>Developpeur Web </h3>
            </div>

            <div className="timeline_experience2 timeline_experience" >
                <h3>Concepteur developpeur logiciel </h3>

            </div>

            <div className="timeline_experience3 timeline_experience" >
                <h3>Master Architecture logicielle option(big data) </h3>
            </div>
            <button className="timeline_button">Contact</button>
        </div>

     
    );
};

export default Timeline;