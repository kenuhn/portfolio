import searchProject from "../../utils/searchProject";
import Tag from "../Tag/Tag";


const Projects = () => {
    const project = searchProject()
    console.log(project?.listImg)

    return (
        <>
            <section className="project_wrapper" id="project_wrapper">
                <div className="project_content">
                  <div className="project_slider" ><img src={project?.imgProject}alt="" /></div>  
                    <div className="project_body">
                        <h4 className="project_body_title">{project?.name}</h4>
                        <div className="project_body_description">{project?.description}</div>
                        <div className="project_body_techno">
                            {project?.techno.map((techno) => {
                                return <Tag text={techno} key={techno}/>
                            })}
                       </div>
                        <div className="project_body_years">{project?.year}</div>
                        <div className="project_body_key">
                            <p>Année</p>
                            <p>Techno</p>
                        </div>
                    </div>
                    <div className="project_footer">
                        <h4 className="project_footer_title"> La maquette du projet</h4>
                        {project?.listImg?.map((img, index) => {
                         return <div className="project_img"><img src={img} alt=""  key={"photo" + index} /></div> 
                        })}
                    </div>

                </div>

            </section>

        </>
    );
};

export default Projects;