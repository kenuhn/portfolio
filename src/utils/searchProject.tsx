import { useParams } from 'react-router-dom';
import projects from '../../data/data.json'

const searchProject = () => {
   const { id } = useParams()
   const convertId : number = id !== undefined ? parseInt(id) : 0
   const project = projects.find((project) => project.id === convertId )

    return project;
};

export default searchProject;