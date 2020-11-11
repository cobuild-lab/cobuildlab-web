import React from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
const Light2 = () => (
  <footer className="app1 subscribe light" id="contact">
    <Container>
      <Row>
        <Col lg="6" className="offset-lg-3">
          <div className="title title1">
            <div className="main-title">
              <h2>Subscribe to our newsletter</h2>
            </div>
            <div className="sub-title">
              <p className="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="8" className="offset-lg-2">
          <div className="subscribe">
            <div className="center-content">
              <FormGroup>
                <div className="d-flex">
                  <Input
                    className="form-control "
                    name="email"
                    placeholder="Please Enter Your Email Address"
                    type="email"
                  />
                  <div className="button-primary">
                    <button
                      className=" btn btn-default btn-gradient text-white text-uppercase"
                      type="submit">
                      subscribe
                    </button>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <div className="socials-lists m-t-50">
            <ul className="socials-horizontal justify-content-center">
              <li>
                <a href="#">
                  <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i aria-hidden="true" className="fa fa-google center-content"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Light2;
