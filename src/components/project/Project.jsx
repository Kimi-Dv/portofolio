import db from '/src/db/db.json'

function Project() {

    return (
        <div className="project-container " id="project">
            
            <div className="project">
                {
                    db.map((projects) => {
                        return (
                            <div className="project-box d-flex" key={projects.id}>
                                <h3 className='project-box__title'> {projects.title} </h3>
                                <img className="project-box__img" src={projects.img} alt="image-project" loading="lazy" />
                                <a href={projects.link} target='_blank'>
                                    <button className="project-box__link__btn">View...</button>
                                </a>
                            </div>
                        )
                    })
                }
            </div>

            <div className="more-content d-flex m-width">
                <a href="https://github.com/Kimi-Dv" target="_blank">
                    <button className="more-content__btn">More project...</button>
                </a>
            </div>
        </div>
    );
}

export default Project;
