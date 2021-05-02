/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Column";
import ContactSection from "../components/ContactSectoin";



/* -------------------------------------------------------------------------- */
/*                            Define Page Component                           */
/* -------------------------------------------------------------------------- */

function Contact (){
     // Rendering components down to the table, and passing table this.state.results as props
     return (
        <Container>
             <Row>
                <Col>
                  <ContactSection/>
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

export default Contact;