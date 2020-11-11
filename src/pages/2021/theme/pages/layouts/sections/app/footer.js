import React from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
const Footer = () => (
  <footer className="app2 bg footer2 p-0">
    <div className="subscribe subscribe-2">
      <Container>
        <Row>
          <Col lg="8" md="10" className="offset-lg-2 offset-md-1">
            <div className="subscribe">
              <div className="center-content">
                <FormGroup className="m-0">
                  <div className="flex">
                    <i aria-hidden="true" className="fa fa-envelope icon"></i>
                    <Input
                      className="form-control text-capitalize"
                      name="email"
                      placeholder="example@gmail.com"
                      type="email"
                    />
                    <div className="button-primary">
                      <button
                        className=" btn btn-default btn-gradient text-white text-capitalize"
                        type="submit">
                        subscribe now
                      </button>
                    </div>
                  </div>
                </FormGroup>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <section>
      <Container>
        <Row>
          <Col lg="3" md="6" sm="12">
            <div className="logo-sec">
              <div className="footer-title mobile-title p-t-0">
                <h3 className="text-white">About Us</h3>
              </div>
              <div className="footer-contant">
                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/1.png" />
                <div className="footer-para">
                  <p className="text-white">
                    Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim lorem sed do{' '}
                  </p>
                </div>
                <ul className="d-flex footer-social social">
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
          <Col lg="3" md="6" sm="12">
            <div className="footer-title mobile-title">
              <h3 className="text-white">Post Tags</h3>
            </div>
            <div className="footer-contant">
              <h5 className="footer-headings">Post Tags</h5>
              <div className="link-btns">
                <ul>
                  <li className="buttons">
                    <a href="#">app</a>
                  </li>
                  <li className="buttons">
                    <a href="#">business</a>
                  </li>
                  <li className="buttons">
                    <a href="#">corporation</a>
                  </li>
                  <li className="buttons">
                    <a href="#">creative</a>
                  </li>
                  <li className="buttons">
                    <a href="#">design</a>
                  </li>
                  <li className="buttons">
                    <a href="#">fashion</a>
                  </li>
                  <li className="buttons">
                    <a href="#">food</a>
                  </li>
                  <li className="buttons">
                    <a href="#">mobile</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="2" md="6" sm="12">
            <div className="footer-title mobile-title">
              <h3 className="text-white">blog categories</h3>
            </div>
            <div className="footer-contant">
              <h5 className="footer-headings">Blog Categories</h5>
              <div>
                <ul className="footer-lists">
                  <li>
                    <a href="#">App Review</a>
                  </li>
                  <li>
                    <a href="#">Audio Post</a>
                  </li>
                  <li>
                    <a href="#">Default Post</a>
                  </li>
                  <li>
                    <a href="#">Uncategorized</a>
                  </li>
                  <li>
                    <a href="#">Video Post</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" sm="12">
            <div className="footer-title mobile-title">
              <h3 className="text-white">Contact Info</h3>
            </div>
            <div className="footer-contant">
              <h5 className="footer-headings">Contact Info</h5>
              <div>
                <ul className="footer-lists contacts">
                  <li>
                    <i aria-hidden="true" className="fa fa-map-marker"></i>
                    Lorem ipsum dolor sit consectetur adipisicing elit, sed do eiusmod
                  </li>
                  <li>
                    <i aria-hidden="true" className="fa fa-phone m-r-15"></i>(+066) 518 - 457 - 5181
                  </li>
                  <li>
                    <i aria-hidden="true" className="fa fa-envelope m-r-15"></i>contact@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </footer>
);

export default Footer;
