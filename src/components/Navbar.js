import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  // AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { ImEnvelop } from "react-icons/im";
// import logo from "../Assets/brand-logo.png"

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={scrolled ? "sticky" : "navbar"}
    >
      <Container>
        {/*<Navbar.Brand href="/" className="d-flex">*/}
        {/*  <img src={logo} className="img-fluid logo" alt="brand" />*/}
        {/*</Navbar.Brand>*/}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            console.log(updateExpanded);
            updateExpanded(expand ? false : "expanded");
            console.log(updateExpanded);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link  href="#home" onClick={() => updateExpanded(false)} smooth="true" duration={500}>
                <AiOutlineHome style={{ marginBottom: "2px"}} /> HOME
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#about" onClick={() => updateExpanded(false)} smooth="true" duration={500}>
                <AiOutlineUser style={{ marginBottom: "1px" }} /> ABOUT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#skills" onClick={() => updateExpanded(false)} smooth="true" duration={500}>
                <CgFileDocument style={{ marginBottom: "1px" }}/> SKILLSET
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#resume" onClick={() => updateExpanded(false)} smooth="true" duration={500}>
                <FaLaptopCode style={{ marginBottom: "1px" }}/> RESUME
              </Nav.Link>
            </Nav.Item>
            
            {/*<Nav.Item>*/}
            {/*  <Nav.Link href="#project" onClick={() => updateExpanded(false)} smooth="true" duration={500}>*/}
            {/*    <AiOutlineFundProjectionScreen style={{ marginBottom: "1px" }}/> PROJECTS*/}
            {/*  </Nav.Link>*/}
            {/*</Nav.Item>*/}

            <Nav.Item>
              <Nav.Link href="#contact" onClick={() => updateExpanded(false)} smooth="true" duration={500}>
                <ImEnvelop style={{ marginBottom: "1px" }} /> CONTACT
              </Nav.Link>
            </Nav.Item>


            {/*<Nav.Item className="fork-btn">*/}
            {/*  <Button*/}
            {/*    href="https://github.com/makhijapriya6/Portfolio"*/}
            {/*    target="_blank"*/}
            {/*    className="fork-btn-inner"*/}
            {/*  >*/}
            {/*    <CgGitFork style={{ fontSize: "1.2em" }} />{" "}*/}
            {/*    <AiFillStar style={{ fontSize: "1.1em" }} />*/}
            {/*  </Button>*/}
            {/*</Nav.Item>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
