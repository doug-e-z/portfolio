import { Col, Container, Row } from "react-bootstrap/";
import "../static/css/contact.css";

const Contact = () => {
  function onSubmit(event) {
    alert("Submit button was pushed");
    event.preventDefault();
  }

  return (
    <div>
      <Container className="container-view">
        <Row className="form-title border-dark border rounded border-5">
          <form className="form-view" onSubmit={onSubmit}>
            <fieldset>
              <legend>Contact Me</legend>
              <Col>
                <div>
                  <label className="form-label label-view">
                    Email Address:
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
              </Col>
              <Col>
                <div>
                  <label className="form-label label-view">Subject:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="subject"
                  />
                </div>
              </Col>
              <Col>
                <div>
                  <label className="form-label label-view">Message:</label>
                  <textarea className="form-control" rows="4"></textarea>
                </div>
              </Col>
              <input className="label-view" type="submit" value="Submit" />
            </fieldset>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
