import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Subscribe = () => (
  <section className="music subscribe bg-black pb-0">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title4">
            <div className="main-title">
              <h2>subscribe</h2>
            </div>
            <div className="sub-title">
              <p>we are wait for you</p>
            </div>
          </div>
        </Col>
        <Col xl="6" md="8" className="offset-xl-3 offset-md-2">
          <div className="subscribe-title">
            <h6 className="subscribe-main">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been
            </h6>
          </div>
          <div className="subscribe">
            <div className="center-content">
              <div className="form-group">
                <div className="flex">
                  <input
                    className="form-control text-capitalize"
                    name="email"
                    placeholder="Please Enter Your Email Address"
                    type="email"
                  />
                  <div className="button-primary">
                    <button className=" btn btn-default btn-gradient text-white" type="submit">
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
