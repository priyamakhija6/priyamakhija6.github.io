import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import sendEmail from '../../server'; // Adjust the path accordingly


function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        // Handle form submission, e.g., send data to the server
            console.log('Submitted:', firstName, lastName, email, message);
            // await sendEmail(firstName, lastName, email, message);
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
     <Container fluid className="contact-section" id="contact">
         <Container className="contact-content">
            <Row className="justify-content-left">
                <Col md={6} className="contact-details">

                    <h2>Get in <b className="purple"> Touch </b></h2>
                    <p> <b className="purple"> Drop a Line </b>, Let's <b className="purple"> Collaborate </b> 📩📬</p>
                    <p>
                         <a href="mailto:priya.makhija24@gmail.com" rel="noopener noreferrer" target="_blank">
                             priya.makhija24@gmail.com</a> <span> | ☎️ +1 (862) 234 5132 </span>
                    </p>
                        <form onSubmit={handleSubmit}>
                            <Row className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input className="input-fields"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                />
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input className="input-fields"
                                       type="text"
                                       id="lastName"
                                       name="lastName"
                                       value={lastName}
                                       onChange={(e) => setLastName(e.target.value)}
                                       required
                                />
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="input-fields"
                                       type="email"
                                       id="email"
                                       name="email"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required
                                />
                            </Row>
                            <Row className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="input-fields"
                                          id="message"
                                          name="message"
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)}
                                          rows="4"
                                          required
                                ></textarea>
                            </Row>
                            <button type="submit" className="submit">Message Me!</button>
                        <br/>
                        </form>
                </Col>

                <Col md={6}>
                    <div className="contact-details">

                    </div>
                </Col>

            </Row>
         </Container>
        </Container>
    );
}

export default Contact;
