import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Light = () => (
  <footer className="resume copyright copyright-bg">
    <Container>
      <Row>
        <Col xs="12">
          <div className="link link-horizontal">
            <ul className="justify-content-center">
              <li>
                <a className="copyright-text" href="#">
                  home
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#">
                  couple
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#">
                  invitation
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#">
                  album{' '}
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#">
                  friends say
                </a>
              </li>
              <li>
                <a className="copyright-text" href="#">
                  gift
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </Col>
        <Col xs="12">
          <div className="text-center">
            <div className="social-link link-horizontal">
              <ul className="justify-content-center">
                <li>
                  <a className="copyright-text" href="#">
                    <i aria-hidden="true" className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="copyright-text" href="#">
                    <i aria-hidden="true" className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="copyright-text" href="#">
                    <i aria-hidden="true" className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a className="copyright-text " href="#">
                    <i aria-hidden="true" className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <div className="m-l-auto center-para">
            <h6 className="copyright-text text-center">© 2020 Unice powered by Pixelstrap</h6>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Light;
