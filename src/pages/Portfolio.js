/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    import Container from "../components/Container";
    import Row from "../components/Row";
    import Col from "../components/Column";
    import PortfolioSection from "../components/PortfolioSection";



/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

    function Portfolio () {

        return (
            <Container>
                <Row>
                    <Col>
                        <PortfolioSection/>
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

    export default Portfolio;