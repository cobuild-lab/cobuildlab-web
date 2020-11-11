import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Container, Row, Col } from 'reactstrap';
const Business = () => (
  <section className="saas2 bg-gradient quick-sol">
    <Container className="set-center-div">
      <Row>
        <Col lg="6">
          <div className="offers-container">
            <h3 className="text-white offer-heading-text">
              We Offer Quick & Powerful Business Solution
            </h3>
            <div className="bottom-border"></div>
            <div className="offers-content">
              <div className="d-flex">
                <i aria-hidden="true" className="fa fa-check-circle"></i>
                <div>
                  <h4 className="offer-main-text text-white">Beautiful Interface Layout</h4>
                  <p className="offer-sub-text text-white">
                    Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="offers-content">
              <div className="d-flex">
                <i aria-hidden="true" className="fa fa-check-circle"></i>
                <div>
                  <h4 className="offer-main-text text-white">Beautiful Interface Layout</h4>
                  <p className="offer-sub-text text-white">
                    Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="offers-content">
              <div className="d-flex">
                <i aria-hidden="true" className="fa fa-check-circle"></i>
                <div>
                  <h4 className="offer-main-text text-white">Beautiful Interface Layout</h4>
                  <p className="offer-sub-text text-white">
                    Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="center-text side-img">
          <Tilt perspective="20000" transitionSpeed="3000">
            <img alt="" className="img-fluid" src="/assets/images/saas2/we-offer/img.png" />
          </Tilt>
        </div>
      </Row>
    </Container>
  </section>
);

export default Business;
