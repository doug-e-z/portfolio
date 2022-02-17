import { Container, Row, Navbar, Nav } from "react-bootstrap/";
import "../static/css/footer.css";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row className="footer-row">
          <Navbar className="navbar navbar-expand-xl navbar-dark">
            <Nav className="me-auto footer-nav">
              <Nav.Link
                className="fa fa-linkedin-square footer-link"
                href="https://linkedin.com/in/doug-z-851285111"
              ></Nav.Link>
              <Nav.Link
                className="fa fa-github footer-link"
                href="https://github.com/doug-e-z"
              ></Nav.Link>
            </Nav>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
