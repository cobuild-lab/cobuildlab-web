import React from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
const Commingsoon2 = () => (
  <section className="coming-soon coming-soon-2 p-0">
    <Container>
      <Row className="text-center">
        <Col md="12" className="p-0">
          <div className="center-container">
            <div className="set-bg">
              <div>
                <img alt="" className="coming-logo" src="../assets/images/logo/6.png" />
              </div>
              <h2 className="text-white our-web-text">Website Is Almost Ready</h2>
              <h6 className="launch-text"> Time Left Untill Launching </h6>
              <div className="set-count">
                <div className="counters-content">
                  <div className="count">
                    <div className="counter-container">
                      <h2 className="text-white">
                        <span className="days-text" id="days">
                          213
                        </span>
                        <span className="days gradient-text">days</span>
                      </h2>
                    </div>
                    <div className="set-border-left"></div>
                    <div className="set-border-bottom"></div>
                  </div>
                </div>
                <div className="counters-content">
                  <div className="count">
                    <div className="counter-container">
                      <h2 className=" text-white">
                        <span className="days-text gradient-text" id="hours">
                          8
                        </span>
                        <span className="days gradient-text">hours</span>
                      </h2>
                    </div>
                    <div className="set-border-left"></div>
                    <div className="set-border-bottom"></div>
                  </div>
                </div>
                <div className="counters-content">
                  <div className="count">
                    <div className="counter-container">
                      <h2 className="text-white">
                        <span className="days-text gradient-text" id="minutes">
                          31
                        </span>
                        <span className="days gradient-text"> minutes</span>
                      </h2>
                    </div>
                    <div className="set-border-left"></div>
                    <div className="set-border-bottom"></div>
                  </div>
                </div>
                <div className="counters-content">
                  <div className="count no-border">
                    <div className="counter-container">
                      <h2 className=" text-white">
                        <span className="days-text gradient-text" id="seconds">
                          44
                        </span>
                        <span className="days gradient-text">seconds</span>
                      </h2>
                    </div>
                    <div className="set-border-left"></div>
                    <div className="set-border-bottom"></div>
                  </div>
                </div>
              </div>
              <h6 className="launch-text2">notify me when it's ready</h6>
              <div>
                <div className="center-content">
                  <FormGroup>
                    <div className="d-flex">
                      <Input
                        className="form-control radius-0"
                        name="email"
                        placeholder="Email Address"
                        type="email"
                      />
                      <div className="button-primary">
                        <button
                          className=" btn btn-default primary-btn radius-0 no-border"
                          type="submit">
                          subscribe
                        </button>
                      </div>
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="social m-t-20">
                <ul>
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
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Commingsoon2;
