import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Footer = () => (
  <footer className="wedding copyright copyright-bg">
    <Container>
      <Row>
        <Col xl="3" sm="12">
          <div className="text-center">
            <div className="link-horizontal">
              <ul>
                <li>
                  <a className="copyright-text" href="#">
                    <i aria-hidden="true" className="fa fa-facebook gradient-text"></i>
                  </a>
                </li>
                <li>
                  <a className="copyright-text" href="#">
                    <i aria-hidden="true" className="fa fa-twitter gradient-text"></i>
                  </a>
                </li>
                <li>
                  <a className="copyright-text" href="#">
                    <i aria-hidden="true" className="fa fa-google gradient-text"></i>
                  </a>
                </li>
                <li>
                  <a className="copyright-text " href="#">
                    <i aria-hidden="true" className="fa fa-instagram gradient-text"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xl="6" sm="12">
          <div className="link-horizontal">
            <ul className="link justify-content-center footer-contants">
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
        </Col>
        <Col xl="3" sm="12" className="p-0">
          <div className="m-l-auto center-para">
            <h6 className="copyright-text text-right">© 2020 Unice powered by Pixelstrap</h6>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
