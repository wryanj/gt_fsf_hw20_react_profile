/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "./index.css";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

function ProjectCard (props) {
    return (
        <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
            <div className="card card-size text-center fw-bold border border-secondary">
                <div className=".card-img-div-size">
                    <img src={props.src} className="card-img-top img-card-height " alt={props.alt}/>
                </div>
                <div className="card-body d-flex align-items-center justify-content-center">
                     <a className="card-text a-theme" href={props.href}>{props.title}</a>
                </div>
            </div>
        </div>
       
    );
}

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default ProjectCard;