import React  from 'react';
import {NavDropdown, Nav} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function Navigation (props) {


    return (
      
        <Navbar collapseOnSelect expand="lg" fixed="top"  bg="dark" variant="dark">
          <Navbar.Brand>Tanuj Jain</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#aboutme" onClick={() => props.setCurrentPage("aboutme")} >AboutMe</Nav.Link>
              <Nav.Link href="#initiative" onClick={() => props.setCurrentPage("initiative")}>Initiative</Nav.Link>
              <NavDropdown title="Expertise" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#domainexpertise" onClick={() => props.setCurrentPage("domainexpertise")}>Domain Experience</NavDropdown.Item>
                <NavDropdown.Item href="#technicalskills" onClick={() => props.setCurrentPage("technicalskills")}>Technical Skills</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Process Development</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#innovation" onClick={() => props.setCurrentPage("innovation")}>Innovation</Nav.Link>
              <Nav.Link href="#porfolio" onClick={() => props.setCurrentPage("portfolio")}>Portfolio</Nav.Link>
              <Nav.Link href="#productsmanaged" onClick={() => props.setCurrentPage("productsmanaged")}>Products Managed</Nav.Link>
              <Nav.Link href="#gitprojects" onClick={() => props.setCurrentPage("gitprojects")}>Git Projects</Nav.Link>
              <Nav.Link href="#contactme" onClick={() => props.setCurrentPage("contactme")}>Contact Me</Nav.Link>
              <Nav.Link href="#resume" onClick={() => props.setCurrentPage("resume")} >Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
