import { Container, Row, Col, Image } from "react-bootstrap/";
import profile from "../static/images/kali.jpg";
import "../static/css/header.css";

const Header = () => {
  return (
    <header>
      <Container>
        <Row className="header-row rounded-top">
          <Col>
            <Image src={profile} className="profile" alt="me"></Image>
            <div className="info">
              <h2 className="name">Douglas Zuniga</h2>
              <p className="position">Software Developer</p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
