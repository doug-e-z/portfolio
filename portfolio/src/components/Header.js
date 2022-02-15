import { Container, Row, Col, Image } from "react-bootstrap/";
import profile from "../static/images/3AQo1xFw.jpeg";
import "../static/css/header.css";

const Header = () => {
  return (
    <header>
      <Container fluid>
        <Row className="row">
          <Col>
            <Image src={profile} className="profile" alt="me"></Image>
          </Col>
          <Col>
            <p className="p">HSHSHSH</p>
          </Col>
          <Col>
            <p className="p">HSHSHSH</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
