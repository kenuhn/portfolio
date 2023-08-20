const Timeline = () => {

    return (

       
            <section className="section_timeline" id="curriculum">

           
                <div className="section_timeline_contenant">
                 <h3 className="section_timeline_title">Mon parcours</h3> 

                    <ul id='timeline'>
                        <li className="work ">
                            <input className='radio' id='work5' name='works' type='radio'  defaultChecked={true}/>
                            <div className='relative'>
                                <label htmlFor='work5'>Master Dévolepement Data et IA </label>
                                <span className='date'>2023/2025</span>
                                <span className='circle'></span>
                            </div>
                            <div className='content'>
                                <p className="content_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                </p>
                            </div>
                        </li>

                        <li className='work'>
                            <input className='radio' id='work4' name='works' type='radio' />
                            <div className='relative'>
                                <label htmlFor='work4' >Développeur concepteur logiciel </label>
                                <span className='date'>2022/2023</span>
                                <span className='circle'></span>
                            </div>
                            <div className='content'>
                                <p className="content_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </li>

                        <li className='work'>
                            <input className='radio' id='work3' name='works' type='radio' />
                            <div className='relative'>
                                <label htmlFor='work3' >Développeur Web </label>
                                <span className='date'>2021/2022</span>
                                <span className='circle'></span>
                            </div>
                            <div className='content'>
                                <p className="content_text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </li>





                    </ul>
                </div>
            </section>
        



    );
};

export default Timeline;