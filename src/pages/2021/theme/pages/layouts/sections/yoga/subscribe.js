import React from 'react';
import { Container, Row, Col, FormGroup, Input } from 'reactstrap';
const Subscribe = () => (
  <section className="yoga subscribe bg img-1" id="contact">
    <Container>
      <Row>
        <Col lg="8" className="offset-lg-2">
          <div className="title title2">
            <h3 className="text-white subscribe-head">
              Sign up For A Test Leson And Start Yoga Today !
            </h3>
            <p className="text-white subscribe-sub-head ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been
            </p>
          </div>
        </Col>
        <Col lg="6" md="8" className="offset-lg-3 offset-md-2">
          <div className="subscribe">
            <div className="center-content">
              <FormGroup>
                <div className="d-flex">
                  <Input
                    className="form-control text-capitalize"
                    name="email"
                    placeholder="Please Enter Your Email Address"
                    type="email"
                  />
                  <div className="button-primary">
                    <button
                      className=" btn btn-default btn-gradient text-white text-capitalize"
                      type="submit">
                      send me
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
