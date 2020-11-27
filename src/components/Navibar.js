import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    
    text-size: 40px;
    color: #00ff00;
   
    padding: 0.7em;
    &:hover {
      color: #00ffff;
    }
  }
 
`;

export default function NaviBar() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><Link to ='/'>SEGAMEGADRIVE*64BIT*[REACT.JS]</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link to="/"> Home</Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Users">  ✨ Magic</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Klas"> Top/A\ </Link>
                </Nav.Link>
              </Nav>
              <Button variant="danger" className="m-2" > <Link to ='/Berserk'>
                BZK</Link>
              </Button>
              <Button variant="primary" className="m-2">
              <Link to ='https://klas1998.github.io/TodoReact.deploy/'>TODO</Link>  
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}
