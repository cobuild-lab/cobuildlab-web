import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Copyright = () => (
  <div className="agency copyright inner-page">
    <Container>
      <Row>
        <Col sm="6">
          <div className="link-horizontal">
            <ul>
              <li>
                <a className="copyright-text" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm="6">
          <div>
            <h6 className="copyright-text text-white text-right">
              Copyright © 2020 Unice by <i aria-hidden="true" className="fa fa-heart mr-1"></i>
              pixelstrap
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Copyright;
