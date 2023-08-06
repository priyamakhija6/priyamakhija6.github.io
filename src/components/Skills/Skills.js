import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
    DiJavascript1, DiNodejs, DiPython,
} from "react-icons/di";

import {SiRedux,SiTypescript,SiJenkins,SiDocker,SiAmazonaws,SiReact} from "react-icons/si";

import {BsFiletypeSql} from "react-icons/bs";


function Skills() {
  return (
    <Container fluid className="skill-section" id="skills">
      <Container className="skills-content">
          <Row>
              <h2>
                  Unlock My <b className="purple"> Proficiency </b>
              </h2>
              <p>
                  Embarking on a Journey Fueled by <b className="purple"> Skills </b> and <b className="purple">  Experience</b> 🌟💼
              </p>
          </Row>
          <Row>

              <Col xs={4} md={2} className="tech-icons" data-tooltip="JavaScript">
                  <DiJavascript1 />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="TypeScript">
                  <SiTypescript />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="NodeJS">
                  <DiNodejs />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="Python">
                  <DiPython />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="React">
                  <SiReact />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="Redux">
                  <SiRedux />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="Jenkins">
                  <SiJenkins />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="Docker">
                  <SiDocker />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="SQL DBs">
                  <BsFiletypeSql />
              </Col>
              <Col xs={4} md={2} className="tech-icons" data-tooltip="AWS">
                  <SiAmazonaws />
              </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Skills;
