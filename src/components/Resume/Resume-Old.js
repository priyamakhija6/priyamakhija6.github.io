import React from "react";
import { Chrono } from "react-chrono";
import { Container, Row, Col } from "react-bootstrap";
import  Card from "react-bootstrap/Card";
import ResumePdf from "../../Assets/resume-2023.pdf"

const data = [
  {
    title: "2021 - Present",
    contentTitle: "Senior Software Engineer III (IBM)",
    contentText:
        "Core, Claims Team",
    contentDetailedText: ``
  },
  {
    title: "2016 - 2021",
    contentTitle: "Senior Software Engineer (IBM)",
    contentText:
        "Analytics and Insights, Claims Team",
    contentDetailedText: ``
  },
  {
    title: "2014 - 2016",
    contentTitle: "Business Analyst (IBM)",
    contentText:
        "Claims Intelligence Team",
    contentDetailedText: ``
  }
];
function Resume() {

  return (
      <Container className="resume-section" id="resume">
        {/*<Container className="about-description">*/}
          <Row>

            <Col md={8}>
              <p className="about-body"> Glimpse Of My  <b className="purple"> Career Chronology </b> 🌟🛤️ </p>
                <p>
                    <a href={ResumePdf} target="_blank" rel="noreferrer" download>
                        <button className="download-button"> Download </button>
                    </a> <b className="purple"> Resume </b>
                    <br/>
                    <br/>
                    My journey in software industry has been an <b className="purple">exhilarating ride</b>,
                    and I try to continuously explore new technologies to stay ahead in the dynamic world of tech.
                    <br/>I'm driven by the thrill of <b className="purple"> problem-solving </b> and
                    <b className="purple"> enjoy collaborating </b>
                    with teams to bring visions to life.🎯 🚀 📚 <br/>
                </p>
              <Chrono className="about-description"
                  items={data}
                  mode="VERTICAL"
                  theme={{ primary: "#603F8B",
                      secondary: "#EFDCF9",
                      cardBgColor: "transparent",
                      titleColor: '#603F8B',
                      titleColorActive: '#7E1E80',}}
                  fontSizes={{
                      title: '0.8rem',
                  }}
                  scrollable={{ scrollbar: false }}
                  cardHeight={150}
                  slideShow={false}
                  hideControls={true}
              >
                {data.map((item) => (
                    <Card className="resume-card-view">
                      <Card.Body>
                        <Card.Title>{item.contentTitle}</Card.Title>
                        <Card.Text>
                          <p>{item.contentText}</p>
                          <p>{item.contentDetailedText}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                ))}
              </Chrono>
            </Col>
          </Row>

        {/*</Container>*/}
      </Container>
  );
}

export default Resume;