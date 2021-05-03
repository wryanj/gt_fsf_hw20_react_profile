/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    // Image Imports
    import city411 from "./images/city411.jpg";
    import teamProfileGenerator from"./images/teamProfileGenerator.PNG";
    import FamilyManager from "./images/FamilyManager.PNG";
    import weatherly2 from "./images/weatherly2.PNG";
    import techBlog from "./images/techBlog.PNG";
    import ecommBackend from "./images/ecommBackend.PNG"; 

    // Components
    import ProjectCard from "../ProjectCard";   

    // CSS
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
                   <ProjectCard
                        src={city411}
                        alt="City 411"
                        href="https://github.com/dassoumik/city411"
                        title="City 411"
                    />
                     <ProjectCard
                        src={teamProfileGenerator}
                        alt="Team Profile Generator"
                        href="https://github.com/wryanj/gt_fsf_hw10_team_profile_generator"
                        title="Team Profile Generator"
                    />
                   <ProjectCard
                        src={FamilyManager}
                        alt="Family Manager"
                        href="https://github.com/tuanle99/Project-2"
                        title="Family Manager"
                    />  
                </div>

                <div className= "row pt-3 px-5">
                    <ProjectCard
                        src={weatherly2}
                        alt="Weatherly"
                        href="https://github.com/wryanj/gt_fsf_hw6_weather_dashboard"
                        title="Weatherly"
                    />
                     <ProjectCard
                        src={techBlog}
                        alt="TechBlog"
                        href="https://github.com/wryanj/gt_fsf_hw14_MVC_TechBlog"
                        title="Team Profile Generator"
                    />
                   <ProjectCard
                        src={ecommBackend}
                        alt="EComm Backend"
                        href="https://github.com/tuanle99/Project-2"
                        title="EComm Backend"
                    />  
                  
                </div>

               

               
            </div>

        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default PortfolioSection;