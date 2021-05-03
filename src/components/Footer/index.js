/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import React from "react";
    import "./index.css";
   

/* -------------------------------------------------------------------------- */
/*                              Define Component                              */
/* -------------------------------------------------------------------------- */

    function Footer() {
        return (
            <footer class="footer mt-3 p-3 myNavBg fixed-bottom border-3 border-top border-secondary"> 
                <div class="container d-flex justify-content-center">
                    <span class="text-white">&copy; Copyright</span>
                </div>
          </footer>
        );
    }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

    export default Footer;