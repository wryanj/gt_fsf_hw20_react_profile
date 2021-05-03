/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React, {useState} from "react";
    import city411 from "./images/city411.jpg";
    import teamProfileGenerator from"./images/teamProfileGenerator.PNG";
    import FamilyManager from "./images/FamilyManager.PNG";
    import weatherly2 from "./images/weatherly2.PNG";
    import techBlog from "./images/techBlog.PNG";
    import ecommBackend from "./images/ecommBackend.PNG";    
    import "./index.css";


/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function PortfolioSection() {

        return (

            <div className="col-md-12 text-white border border-secondary p-3">

                <header className="row">
                    <div className="col-md-12">
                        <h1  className=" py-3 border-bottom border-2 fw-bold fs-2">Portfolio</h1> 
                    </div>
                    <p className="px-5 pt-3 fs-5">
                        Below are a few of my projects and assignments completed through my six month program at Georgia Tech. For a full list of my work, 
                        as well as more detailed videos, project descriptoions and links to deployed applications, <a className="a-theme" href="https://github.com/wryanj">please checkout my github profile here!</a>
                    </p>
                </header>

                

                <div className= "row pt-3 px-5">
                    <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
                        <div className="card card-size text-center fw-bold border border-secondary">
                            <img src={city411} className="card-img-top" alt="city411"/>
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <a className="card-text a-theme" href="https://github.com/dassoumik/city411">City 411</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
                        <div className="card card-size text-center fw-bold border border-secondary">
                            <img src={teamProfileGenerator} className="card-img-top" alt="city411"/>
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <a className="card-text a-theme" href="https://github.com/wryanj/gt_fsf_hw10_team_profile_generator">Team Profile Generator</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
                        <div className="card card-size text-center fw-bold border border-secondary">
                            <img src={FamilyManager} className="card-img-top" alt="city411"/>
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <a className="card-text a-theme" href="https://github.com/tuanle99/Project-2">Family Manager</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className= "row pt-3 px-5">
                    <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
                        <div className="card card-size text-center fw-bold border border-secondary">
                            <img src={weatherly2} className="card-img-top" alt="city411"/>
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <a className="card-text a-theme" href="https://github.com/dassoumik/city411">Weatherly</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
                        <div className="card card-size text-center fw-bold border border-secondary">
                            <img src={techBlog} className="card-img-top" alt="city411"/>
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <a className="card-text a-theme" href="https://github.com/wryanj/gt_fsf_hw10_team_profile_generator">Tech Blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2 mx-auto d-flex justify-content-center">
                        <div className="card card-size text-center fw-bold border border-secondary">
                            <img src={ecommBackend} className="card-img-top" alt="city411"/>
                            <div className="card-body d-flex align-items-center justify-content-center">
                                <a className="card-text a-theme" href="https://github.com/tuanle99/Project-2">EComm Backend</a>
                            </div>
                        </div>
                    </div>
                </div>

               

               
            </div>

        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default PortfolioSection;