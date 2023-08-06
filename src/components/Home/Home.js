import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/Photo_1.jpg";
// import About from "./About";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import Type from "./Type";

function Home() {
  return (
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 className="heading">
                Hello, there!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                This is
                <strong className="main-name"> Priya Lulla. </strong>
              </h1>

              <div className="type-writer">
                <Type />
              </div>
              <div>
                <ul className="about-social-links">
                  <li className="social-icons">
                    <a
                        href="https://github.com/priyamakhija6"
                        target="_blank"
                        rel="noreferrer"
                        className="home-social-icons icon-colour"
                    >
                      <AiFillGithub/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/priyalulla/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn/>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Home;
