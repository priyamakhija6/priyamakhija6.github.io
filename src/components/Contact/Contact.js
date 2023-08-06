import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Contact() {

    return (
        <Container fluid className="contact-section" id="contact">
            <Container className="contact-content">
                <Row className="justify-content-left">
                    <Col md={6} className="contact-details">
                        <h2> Let's Get in <b className="purple"> Touch! </b></h2>
                        <p> <b className="purple"> Discuss A Project </b>, Or Just Want To <b className="purple"> Say Hi? </b></p>
                        <p className="contact-text"> Drop Me A Line 📩 
                            &nbsp;&nbsp;&nbsp;
                            <a href="mailto:priya.makhija24@gmail.com" rel="noopener noreferrer" target="_blank">
                                priya.makhija24@gmail.com</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Contact;
