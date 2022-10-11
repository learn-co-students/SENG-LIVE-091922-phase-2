const ProjectListItem = ({name, about, phase, link, image}) => {
    // console.log(props);
    
    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
                <button className="claps">👏</button>
            </figure>
            <section className="details">
                <h4>{name}</h4>
                <p>{about}</p>
                <p>
                    <a href={link}>Link</a>
                </p>
            </section>
            <footer className="extra">
                <span className="badge blue">Phase {phase}</span>
            </footer>
        </li>
    );
}

export default ProjectListItem;