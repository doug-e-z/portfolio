import Header from "./components/Header";
import Menu from "./components/Menu";
//import Content from "./components/Content";
import Footer from "./components/Footer";
import "./static/css/content.css";

import { Container, Row, Col } from "react-bootstrap/";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Menu />
        <Row className="content-row">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/certifications" element={<Certifications />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
          </Routes>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
