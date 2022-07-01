import { hideScrollWhenOpenResponisveMenu } from "../../utils/utils.js";
import { React, Fragment, useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  visibleScrollWhenCloseToggleButton,
  shrinkNav,
} from "../../utils/utils.js";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  useEffect(() => {
    shrinkNav();
    visibleScrollWhenCloseToggleButton();
  }, []);
  return (
    <Fragment>
      <Navbar
        id="shrink-nav"
        className="shrink-nav fixed-top"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="m-3 brand-name " href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="m-1"
          onClick={() => {
            hideScrollWhenOpenResponisveMenu();
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="m1">
            <Nav className="me-auto ">
              <Nav.Link className="link" href="#home">
                CV
              </Nav.Link>
              <Nav.Link className="link" href="#skills">
                Skills
              </Nav.Link>
              <Nav.Link className="link" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="contact-button" href="#contact">
                Contact
              </Nav.Link>{" "}
            </Nav>{" "}
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
