import { Container, Row, Navbar, Nav } from "react-bootstrap/";
import "../static/css/menu.css";

const Menu = () => {
  return (
    <div>
      <Container>
        <Row className="navbar-row">
          <Navbar expand="lg" className="navbar navbar-expand-xl navbar-dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto menu-nav">
                <Nav.Link className="menu-link active" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="menu-link" href="/projects">Projects</Nav.Link>
                <Nav.Link className="menu-link" href="/certifications">Certifications</Nav.Link>
                <Nav.Link className="menu-link" href="/resume">Resume</Nav.Link>
                <Nav.Link className="menu-link" href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
