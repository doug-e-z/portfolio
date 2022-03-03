import { Container, Row, Col } from "react-bootstrap/";
import "../static/css/content.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

const Content = () => {
  return (
    <div>
      <Container>
        <Row className="content-row">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/projects" element={<Projects/>}></Route>
              <Route path="/certifications" element={<Certifications/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/resume" element={<Resume/>}></Route>
            </Routes>
          </BrowserRouter>
        </Row>
      </Container>
    </div>
  );
};

export default Content;

/*
  <Col>
    <h4> About Me</h4>
    <p>Content goes here</p>
  </Col>
*/
