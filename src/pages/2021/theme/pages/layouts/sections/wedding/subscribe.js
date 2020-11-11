import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Subscribe = () => (
  <section className="wedding subscribe attend-bg bg set-relative">
    <Container>
      <Row>
        <Col lg="6" md="8" className="offset-md-2 offset-lg-3">
          <div className="title">
            <img
              alt=""
              className="img-fluid title-img"
              src="/assets/images/wedding-img/bottom.png"
            />
            <div className="main-title">
              <h2 className="gradient-text">are you attending</h2>
            </div>
            <div className="sub-title">
              <p>
                A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut mollit anim id est laborum. Sedut perspiciatis unde omnis.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="p-b-50 m-b-50">
        <Col lg="6" className="offset-lg-3">
          <div className="subscribe">
            <div className="center-content">
              <div className="form-group">
                <div className="d-flex">
                  <input
                    className="form-control"
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
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Subscribe;
