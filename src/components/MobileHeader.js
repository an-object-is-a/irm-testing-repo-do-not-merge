import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'gatsby';

import falogo_irmcebook from '../images/svg/irm_logo_1.webp'

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mobile_header">
      <Navbar dark expand="md">
        <NavbarBrand href="/"><img width="150px" height="63.27px" src={falogo_irmcebook} alt="cyber security service" title="cyber security service" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              {/* <DropdownMenu right> */}
              <DropdownMenu end>
                <DropdownItem>
                  <Link to="/virtual-ciso-services-vciso">Virtual CISO Services (vCISO)</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/cybersecurity-training-awareness">
                    Cybersecurity Training &  Awareness (CTA)
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/blockchain-security">
                    Blockchain Security (BS)
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/iot-security">
                    IoT Security (IoT)
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/data-security-privacy-dsp">
                    Data Security &amp; Privacy (DSP)
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/cloud-security-controls-csc">
                    Cloud Security Controls (CSC)
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/devsecops-dso">
                    DevSecOps (DSO)
                  </Link>
                </DropdownItem>

                <DropdownItem>
                  <Link to="/threat-modeling-tm">
                    Threat Modeling (TM)
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/penetration-testing-pt">
                    Penetration Testing (PT)
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/security-architecture-sa">
                    Security Architecture (SA)
                  </Link>
                </DropdownItem>

                <DropdownItem>
                  <Link to="/governance-risk-compliance-grc">
                    Governance Risk &amp; Compliance (GRC)
                  </Link>
                </DropdownItem>

                <DropdownItem>
                  <Link to="/process-risk-controls-prc">
                    Process Risk &amp; Controls (PRC)
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="/cybersecurity-consulting-why-us">Why Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/marketplace">Marketplace</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cybersecurity-consulting-partners">Partners</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/cybersecurity-consulting-why-us">Appointments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cybersecurity-consulting-why-us"> Contact Us</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MobileHeader;