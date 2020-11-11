import React from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
const Subscribe = () => (
  <section className="event subscribe subscribe-3 set-relative">
    <div className="circle"></div>
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title3">
            <div className="main-title">
              <h2>
                <span>subs</span>cribe
              </h2>
            </div>
            <div className="sub-title">
              <p>
                Register now and reserve your seat for this <span>year's Unice,</span> the largest{' '}
                <span>web development</span> and online marketing <span>conference in UK,</span>
                covering everything you need to know in order to develop a successful online
                business.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="6" md="8" className="offset-lg-3 offset-md-2">
          <div className="subscribe">
            <div className="center-content">
              <FormGroup>
                <div className="flex">
                  <Input
                    className="form-control text-capitalize"
                    name="email"
                    placeholder="Please Enter Your Email Address"
                    type="email"
                  />
                  <div className="button-primary">
                    <button
                      className=" btn btn-default primary-btn text-white text-capitalize"
                      type="submit">
                      contact me
                    </button>
                  </div>
                </div>
              </FormGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Subscribe;
