import { Container, Row, Navbar, Nav } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import "../static/css/menu.css";

const Menu = () => {
  return (
    <div>
      <Container>
        <Row className="menu-row">
          <Navbar expand="lg" className="navbar navbar-expand-xl navbar-dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto menu-nav">
                <NavLink className="menu-link" to="/">
                  Home
                </NavLink>
                <NavLink className="menu-link" to="/projects">
                  Projects
                </NavLink>
                <NavLink className="menu-link" to="/certifications">
                  Certifications
                </NavLink>
                <NavLink className="menu-link" to="/resume">
                  Resume
                </NavLink>
                <NavLink className="menu-link" to="/contact">
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
