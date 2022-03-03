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
                <Nav.Link className="menu-link" href="/Projects">Projects</Nav.Link>
                <Nav.Link className="menu-link" href="/Certifications">Certifications</Nav.Link>
                <Nav.Link className="menu-link" href="/Resume">Resume</Nav.Link>
                <Nav.Link className="menu-link" href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
