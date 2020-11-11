import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Footer = () => (
  <footer className="saas1 footer2">
    <Container>
      <Row>
        <Col md="3">
          <div className="logo-sec">
            <div className="footer-title mobile-title">
              <h3 className="text-white">About Us</h3>
            </div>
            <div className="footer-contant">
              <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/3.png" />
              <div className="footer-para">
                <h6 className="text-white para-address">Sassy</h6>
                <h6 className="text-white para-address">324 Madison Street New york </h6>
                <h6 className="text-white para-address">City,NY 10001.</h6>
              </div>
              <ul className="d-d-flex footer-social social">
                <li className="footer-social-list">
                  <a href="#">
                    <i aria-hidden="true" className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="footer-social-list">
                  <a href="#">
                    <i aria-hidden="true" className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="footer-social-list">
                  <a href="#">
                    <i aria-hidden="true" className="fa fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="footer-title mobile-title">
            <h3 className="text-white">services</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">services</h5>
            <div>
              <ul className="footer-lists">
                <li>
                  <a href="#">Portfolio Website</a>
                </li>
                <li>
                  <a href="#">Set up an account</a>
                </li>
                <li>
                  <a href="#">Invoice Creation</a>
                </li>
                <li>
                  <a href="#">Get Our Specials</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="footer-title mobile-title">
            <h3 className="text-white">brand</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">brand</h5>
            <div>
              <ul className="footer-lists">
                <li>
                  <a href="#">Chat24</a>
                </li>
                <li>
                  <a href="#">Zoom</a>
                </li>
                <li>
                  <a href="#">Alpha Payment</a>
                </li>
                <li>
                  <a href="#">Upwork</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col md="3">
          <div className="footer-title mobile-title">
            <h3 className="text-white">Support</h3>
          </div>
          <div className="footer-contant">
            <h5 className="footer-headings">Support</h5>
            <div>
              <ul className="footer-lists">
                <li>
                  <a href="#">For Freelancers</a>
                </li>
                <li>
                  <a href="#">For Companies</a>
                </li>
                <li>
                  <a href="#">For Business</a>
                </li>
                <li>
                  <a href="#">General Help</a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
