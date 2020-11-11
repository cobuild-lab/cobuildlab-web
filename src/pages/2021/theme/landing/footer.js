import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Footer = () => (
  <footer className="footer-main">
    <Container>
      <Row>
        <Col xs="6">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="assets/images/landing/logo.png" alt="footer-logo" className="img-fluid" />
            </div>
          </div>
        </Col>
        <Col xs="6" className="align-self-center">
          <div className="footer-right">
            <p>&copy; 2020 All right reserved</p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
