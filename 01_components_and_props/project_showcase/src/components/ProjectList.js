import ProjectListItem from "./ProjectListItem";

// import projects from '../projects';

const ProjectList = ({projects}) => {
    // console.log(projects);
    
    const ProjectListItems = projects.map((project) => (
        // console.log(project);
        
        <ProjectListItem 
            key={project.id}
            // name={project.name}
            // about={project.about}
            // ...
            {...project}
        />
    ));

    return (
        <>
            <h1>ProjectList Component</h1>
            <ul className="cards">{ProjectListItems}</ul>
        </>
    );
}

export default ProjectList;