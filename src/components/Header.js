import { Container, Row, Col, Image } from "react-bootstrap/";
import profile from "../static/images/kali.jpg";
import "../static/css/header.css";

const Header = () => {
  return (
    <div>
      <Container>
        <Row className="header-row rounded">
          <Col>
            <Image src={profile} className="profile" alt="Profile Image"></Image>
            <div className="info">
              <h2 className="name">Douglas Zuniga</h2>
              <p className="position">Software Developer</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
