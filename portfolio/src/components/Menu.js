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
              <Nav className="me-auto">
                <Nav.Link href="#home" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="#PersonalProjects">Personal Projects</Nav.Link>
                <Nav.Link href="#Certifications">Certifications</Nav.Link>
                <Nav.Link href="#Resume">Resume</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                <Nav.Link href="#Credits">Credits</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
