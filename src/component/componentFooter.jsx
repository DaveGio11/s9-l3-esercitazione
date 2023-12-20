import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2023 Libreria di Libri</p>
            <p>Contact: info@example.com</p>
            <blockquote>
              <p>
                «I libri si leggono, ma se fanno schifo li puoi usare per accendere il camino»
                <br />
                <span> (Qualcuno ha scritto ciò)</span>
              </p>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
