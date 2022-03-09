import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap/";
import { Document, Page, pdfjs } from "react-pdf";
import suricata from "../static/pdf/Suricata.pdf";
import degree from "../static/pdf/Degree.pdf";
import "../static/css/certification.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Certifications = () => {
  let width = window.innerWidth;

  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPage }) {
    setNumPages(numPage);
    setPageNumber(1);
  }
  const isMobile = width <= 500;

  return (
    <div>
      <Container>
        <Row className="home-row border-dark border-top rounded-top">
          <Col>
            <div>
              <Document
                className="document"
                file={degree}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
              >
                {isMobile ? (
                  <Page pageNumber={pageNumber} scale={0.5} />
                ) : (
                  <Page pageNumber={pageNumber} scale={1} />
                )}
              </Document>
            </div>
          </Col>
        </Row>
        <Row className="home-row border-dark border-top rounded-top">
          <Col>
            <div>
              <Document
                className="document"
                file={suricata}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
              >
                {isMobile ? (
                  <Page pageNumber={pageNumber} scale={0.5} />
                ) : (
                  <Page pageNumber={pageNumber} scale={1} />
                )}
              </Document>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certifications;
