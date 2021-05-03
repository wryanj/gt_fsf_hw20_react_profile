/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import aboutMeImage from "./aboutMeImage.jpg";
    import "./index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function AboutMeSection() {
        return (
            <div className="text-white border border-secondary p-3">
                <header className="row">
                    <div className="col-md-12">
                        <h1 className=" py-3 border-bottom border-2 fw-bold fs-2">About Me</h1> 
                    </div>
                </header>
                <div className= "row pt-3">
                    <div className="col-md-12 fs-5">
                        <img src={aboutMeImage} class="img-fluid float-start me-3" alt="Me and My Family"/>
                        <p>
                            My name is Ryan Johnson, and I work as a product manager for AGCO corporation. My company is a global manufacturer of agricultural equipment like tractors, combines, sprayers and other machines 
                            and implements. I work specifically with module technology products fit to our platforms globally. The products I support are in the area of task and field data management, and include 
                            on-board vehicle features and off-board web based functionalities designed to complement the customer's machine ownership. I am learning to program so that I can better work with our existing 
                            development teams as a product manager, especially those who support the off-board features noted above. In addition to that, I have always had an interest in programming, and the 
                            travel downtime during COVID gave me a good opportunity to spend some time learning more about it. 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 fs-5">
                        <p>
                            From a personal standpoint, I am married to my wife Natalie. We have a big dog whom we call Mr. Coleman. I enjoy outdoor activities such as hunting, fishing, and riding motorcycles. 
                            I love to cook, but only when its on a big green egg. I am a graduate from the University of Georgia, so another one of my hobbies is "waiting for next year" (football reference).               
                        </p>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12 fs-5 text-center">
                        <hr></hr>
                        <a className="a-theme" href = "mailto:ryanjohnson9685@gmail.com">ryanjohnson9685@gmail.com</a>
                        <br></br>
                        <span>404-313-2533</span>
                        <br></br>
                        <a className="a-theme" href="https://github.com/wryanj">GitHub</a> | <a className="a-theme" href="https://www.linkedin.com/in/ryan-johnson-acpmpo-pmp-84a19685/">Linkdin</a>
                    </div>
                </div>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default AboutMeSection;