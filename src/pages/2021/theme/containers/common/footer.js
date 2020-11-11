import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Footer = () => (
  <>
    <footer className="resume copyright copyright-bg inner-pages-footer">
      <Container>
        <Row>
          <Col xs="12">
            <div className="link link-horizontal  text-center mb-3">
              <img alt="" className="img-fluid" src="/assets/images/logo/5.png" />
            </div>
          </Col>
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
        </Row>
      </Container>
    </footer>
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
                Copyright © 2020 Unice by <i aria-hidden="true" className="fa fa-heart"></i>{' '}
                pixelstrap
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default Footer;
