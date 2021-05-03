/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function ProjectCard (props) {
    return (
        <div className="card" style="width: 18rem;">
            <img src={props.img} className="card-img-top" alt={props.alt}/>
            <div className="card-body">
                <p className="card-text">{props.title}</p>
            </div>
        </div>
       
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default ProjectCard;