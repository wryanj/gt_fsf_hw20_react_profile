/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import AboutMeSection from "../components/AboutMeSection";
   
   

/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function About(){
        
         return (
            <Container>
                 <Row>
                    <Col>
                       <AboutMeSection/>
                    </Col>
                </Row>
            </Container>
        );
    }

/* -------------------------------------------------------------------------- */
/*                            Export Page Component                           */
/* -------------------------------------------------------------------------- */

    /*
        Exported for import within app.js
    */

    export default About;