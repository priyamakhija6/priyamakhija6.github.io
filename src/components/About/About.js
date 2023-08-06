import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import profilepic from "../../Assets/profile-1.JPG"

function About() {

  return (
       <Container fluid className="about-section" id="about">
         <Container className="about-description">
           <Row>
             <Col md={8} className="about-description">
               <h2 style={{ fontSize: "2em" }}>
                 Nice to <b className="purple"> e-meet </b> you. <br/>
                 Would you like to <b className="purple"> know more </b> about me?
               </h2>
               
               <p className="about-body">
                 I am a passionate <b className="purple"> Full Stack Developer </b>
                 with a deep love for crafting innovative web solutions.
                 <br/>
                 With a diverse skill set encompassing <b className="purple">front-end and back-end technologies</b>,
                 I create seamless user experiences and robust applications.
                 <br/>
                 <br/>
                 Let's  <b className="purple"> connect and build  </b> something extraordinary together! 🚀️
                 <br/>
                 <br/>
                 <i>
                   Outside the realm of coding and work,  I'm a <b className="purple"> culinary explorer </b> ,
                   experimenting and conjuring up gourmet delights 🍳, and a <b className="purple"> fitness fanatic </b> on the move,
                   breaking a sweat 💪 on the yoga mat or at the gym.

                   My perfect recipe for a balanced life!🌱🏋️‍♂️🌟
                 </i>
               </p>
          </Col>
             
          <Col md="4" className="about-social">
            <Row>
              <img src={profilepic} className="about-picture" alt="Priya Lulla"/>
            </Row>
          </Col>
           </Row>
      </Container>
  </Container>

  );
}
export default About;
