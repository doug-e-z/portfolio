import { Container, Row } from "react-bootstrap/";
import "../static/css/navbar.css";

const Navbar = () => {
  return (
    <navbar>
      <Container>
        <Row className="navbar-row">
          <div>
            <ul class="nav navbar-right">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Personal Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Certifications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </navbar>
  );
};

export default Navbar;
