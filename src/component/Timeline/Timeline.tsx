const Timeline = () => {

    return (

       
            <section className="section_timeline" id="curriculum">

           
                <div className="section_timeline_contenant">
                 <h3 className="section_timeline_title">MON CURRICULUM</h3> 

                    <ul id='timeline'>
                        <li className="work ">
                            <input className='radio' id='work5' name='works' type='radio'  defaultChecked={true}/>
                            <div className='relative'>
                                <label htmlFor='work5' className="work_title">Master Dévolepement Data et IA </label>
                                <span className='date'>2023/2025</span>
                                <span className='circle'></span>
                            </div>
                            <div className='content'>
                                <p className="content_text">
                                    Master avec IPSSI : Durant les deux prochaines années je vais étudier les outils, les langages
                                    et les concepts d'architecture nécessaire à la mise en place d'infrastrucre big data. 
                                </p>
                            </div>
                        </li>

                        <li className='work'>
                            <input className='radio' id='work4' name='works' type='radio' />
                            <div className='relative'>
                                <label htmlFor='work4' className="work_title" >Développeur concepteur logiciel </label>
                                <span className='date'>2022/2023</span>
                                <span className='circle'></span>
                            </div>
                            <div className='content'>
                                <p className="content_text">
                                    Bac +3 avec openclassroom: Dans cette formation j'ai pu approffondir mes connaissances sur reactJS, 
                                    typescript, mais aussi sur la visualisation de donnée et la mise en place de tests unitaires. 
                                    De plus, j'ai étudié les fondamentaux en terme d'algorithmie et de structures de données.
                                </p>
                            </div>
                        </li>

                        <li className='work'>
                            <input className='radio' id='work3' name='works' type='radio' />
                            <div className='relative'>
                                <label htmlFor='work3' className="work_title" >Développeur Web  </label>
                                <span className='date'>2021/2022</span>
                                <span className='circle'></span>
                            </div>
                            <div className='content'>
                                <p className="content_text">
                                    Bac +2 avec openclassroom: Dans cette formation j'ai appris les fondamentaux du dévelopement web, 
                                    en travaillant avec des langages tels que javascript, node JS avec expressJS, 
                                    J'ai étudier différents types de bases de données comme MongoDB ou mysSQL.
                                </p>
                            </div>
                        </li>





                    </ul>
                </div>
            </section>
        



    );
};

export default Timeline;