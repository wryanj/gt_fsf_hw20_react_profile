/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "./navbar.css";
    // import { Link } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function Navbar() {
        return (
            <nav className="navbar myNavBg navbar-expand-lg navbar-dark p-3 mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Ryan Johnson</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
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