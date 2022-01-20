/*
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from "gatsby"
import falogo_irmcebook from '../assets/images/logo/logo_irm.webp'
import { AuthService, useAuth } from "gatsby-theme-auth0";
const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={falogo_irmcebook} alt="cyber security management" title="cyber security management" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>

            <NavItem>
              <Link to="/cybersecurity-consulting-services">Services</Link>
            </NavItem>

            <NavItem>
              <Link to="/cybersecurity-consulting-services">Solutions</Link>
            </NavItem>


            <NavItem>
              <Link to="/cybersecurity-consulting-appointments">Appointments</Link>
            </NavItem>

            <NavItem>
              <Link to="/cybersecurity-consulting-why-us">Why Us</Link>
            </NavItem>

            <NavItem>
              <Link to="/cybersecurity-consulting-contact-us">Contact Us</Link>
            </NavItem>


            <NavItem>
              <Link to="/cybersecurity-consulting-partners">Partners</Link>
            </NavItem>

            <NavItem>
              <a onClick={AuthService.login} href="#">Client Login</a>
            </NavItem>



          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default MobileMenu;
*/