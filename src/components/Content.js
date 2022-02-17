import {Container, Row, Col} from "react-bootstrap/";
import "../static/css/content.css";

const Content = () => {
  return (
    <div>
      <Container>
        <Row className="content-row">
          <Col>
            <h4> About Me</h4>
            <p>Content goes here</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;