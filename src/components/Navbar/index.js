/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import { Link, useLocation } from "react-router-dom";
    import "./index.css";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function Navbar() {

        const location=useLocation();

        return (
            <nav className="navbar myNavBg navbar-expand-lg navbar-dark p-3 mb-3 border-3 border-bottom border-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Ryan Johnson</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className={location.pathname==="/" || location.pathname===" " ? "nav-link active" : "nav-link"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/portfolio" className={location.pathname==="/portfolio" ? "nav-link active" : "nav-link"}>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className={location.pathname==="/contact" ? "nav-link active" : "nav-link"}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default Navbar;