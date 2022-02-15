import { Button, Container, Row } from "react-bootstrap/";
import "../static/css/navbar.css";

const Navbar = () => {
  return (
    <navbar>
      <Container>
        <Row className="navbar-row">
          <div>
            <nav className="navbar navbar-expand-xl navbar-dark">
              <Button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#toggleMobileMenu"
                aria-controls="toggleMobileMenu"
                aria-expanded="false"
                aria-lable="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </Button>
              <div className="collapse navbar-collapse" id="toggleMobileMenu">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Personal Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Certifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Credits
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </Row>
      </Container>
    </navbar>
  );
};

export default Navbar;
