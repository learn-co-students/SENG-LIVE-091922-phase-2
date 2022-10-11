const ProjectForm = () => {
    return (
        <form className="form">
            <h3>Add New Project</h3>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
            <label for="about">about</label>
            <input type="text" id="about" name="about" />
        </form>
    )
}

export default ProjectForm;