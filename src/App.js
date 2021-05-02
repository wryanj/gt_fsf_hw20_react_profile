/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

  import React from "react";
  import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import Navbar from "./components/Navbar";
  import Wrapper from "./components/Wrapper";
  import About from "./pages/About";
  import Contact from "./pages/Contact";
  import Portfolio from "./pages/Portfolio";


/* -------------------------------------------------------------------------- */
/*                              Render Component                              */
/* -------------------------------------------------------------------------- */


  function App() {

    return (
      <Router>
        <div data-component="DivInRouter" className="bg-dark">
          <Navbar data-component="Navbar"/>
          <Wrapper data-component="Wrapper">
            <Switch>
              <Route exact path="/" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/portfolio" component={Portfolio}/>
            </Switch>  
          </Wrapper>
        </div>
      </Router>
    );

  }

/* -------------------------------------------------------------------------- */
/*                              Export Component                              */
/* -------------------------------------------------------------------------- */

/*
  This exports the app component for rendering within index.js in src
*/

  export default App;
