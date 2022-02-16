import {Container, Row, Col} from "react-bootstrap/";
import "../static/css/footer.css";

const Footer = () => {
    return (
      <div>
        <Container>
          <Row className="footer-row">
            <Col>
             <p>Footer goes here</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Footer;