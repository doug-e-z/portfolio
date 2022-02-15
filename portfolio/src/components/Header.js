import { Container, Row, Col, Image } from "react-bootstrap/";
import profile from "../static/images/3AQo1xFw.jpeg";
import "../static/css/header.css";

const Header = () => {
  return (
    <header>
      <Container>
        <Row className="row">
          <Col>
            <Image src={profile} className="profile" alt="me"></Image>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
