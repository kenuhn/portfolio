
import ProjectsComponent from "../component/project/project.tsx";
const Projects = () => {
/*     const project = searchProject()
    console.log(project?.imgProject) */
    return (
        <>


        <ProjectsComponent />
         {/*    <div className="project_wrapper" >
                <div className="project_content">
                    <div className="project_header">
                    </div>
                    <img src={project?.imgProject}/* {`${project?.imgProject}`}  alt="" className="project_slider" />
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
                    </div>

                </div>

            </div> */}

        </>
    );
};

export default Projects;