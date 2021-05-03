/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";

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
                        as well as more detailed videos, project descriptoions and links to deployed applications,
                        <a href="https://github.com/wryanj">please checkout my github profile here!</a>
                    </p>
                </header>

                <div className= "row pt-3 d-flex justify-content-center px-5">
                    <div className="col-md-6 mb-2">
                        <h5 className="text-center">Team Profile Generator With Unit Tests_HW11</h5>
                        <a href="https://github.com/wryanj/gt_fsf_hw10_team_profile_generator"><img className="img-fluid" src="../assets/ProjectImages/teamProfileGenerator.PNG" alt="Team Profile Generator" /></a>
                    </div>
                    <div className="col-md-6 mb-2">
                        <h5 className="text-center">FamilyManager_PRJ2</h5>
                        <a href="https://github.com/tuanle99/Project-2"><img className="img-fluid" src="../assets/ProjectImages/FamilyManager.PNG" alt="FamilyManager"/></a>
                    </div>
                </div>

                <div className= "row pt-3 d-flex justify-content-center px-5">
                    <div className="col-md-6 mb-2">
                        <h5 className="text-center">Model-View-Controller Tech Blog_HW14</h5>
                        <a href="https://github.com/wryanj/gt_fsf_hw14_MVC_TechBlog"><img className="img-fluid" src="../assets/ProjectImages/techBlog.PNG" alt="TechBlog" /></a>
                    </div>
                    <div className="col-md-6 mb-2">
                        <h5 className="text-center">eComm Backend_HW13</h5>
                        <a href="https://github.com/wryanj/gt_fsf_hw13_eComm_Backend"><img className="img-fluid" src="../assets/ProjectImages/ecommBackend.PNG" alt="eComm Backend"/></a>
                    </div>
                </div>

                <div className= "row pt-3 d-flex justify-content-center px-5">
                    <div className="col-md-6 mb-2">
                        <h5 className="text-center">Employee Data Tracker_HW12</h5>
                        <a href="https://github.com/wryanj/gt_fsf_hw12_employee_data_tracker"><img className="img-fluid" src="../assets/ProjectImages/employeeDataTracker.PNG" alt="Employee Data Tracker"/></a>
                    </div>
                    <div className="col-md-6 mb-2">
                        <h5 className="text-center">City 411_PRJ1</h5>
                        <a href="https://github.com/dassoumik/city411"><img className="img-fluid" src="../assets/ProjectImages/City411.PNG" alt="City411" /></a>
                    </div>
                </div>

            </div>

        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default PortfolioSection;