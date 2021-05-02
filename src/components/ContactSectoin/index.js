/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "./contactsection.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function ContactSection() {
        return (
            <div className=" text-white row pt-3 fs-5 border border-secondary p-3">
                <header className="row">
                    <div className="col-md-12">
                        <h1 className=" py-3 border-bottom border-2 fw-bold fs-2">Contact</h1> 
                    </div>
                </header>
                <form className="mb-3">
                    <div className="mb-3">
                        <label for="nameInput" className="form-label">Name</label>
                        <input type="text" className="form-control" id="nameInput"/>
                    </div>
                    <div className="mb-3">
                        <label for="emailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"/>
                        <div className="text-center">
                            <div id="emailHelp" className="form-text py-2">I won't share your email with anyone else</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="messageText" className="form-label">Message</label>
                        <textarea className="form-control" id="messageText" rows="3"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-secondary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default ContactSection;