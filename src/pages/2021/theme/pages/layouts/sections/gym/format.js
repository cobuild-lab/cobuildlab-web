import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Format = () => (
  <section className="gym format">
    <Container>
      <Row>
        <Col md="6">
          <div className="text-center center-content">
            <div className="about-img">
              <div className="borders-around">
                <div>
                  <div className="bg-black"></div>
                </div>
                <img alt="" className="img-fluid format-img" src="/assets/images/gym/about.png" />
              </div>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="center-text">
            <div>
              <div className="format-small-text">
                <h6 className="font-primary borders-before">
                  <span>our progress</span>
                </h6>
              </div>
              <div className="format-head-text">
                <h3 className="about-font-header gradient-text">Choose Workout</h3>
              </div>
              <div className="format-sub-text">
                <div className="sub-heading">
                  <h4>1. ABS Workout</h4>
                </div>
                <p className="p-light about-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="sub-heading">
                  <h4>2. Posture Correction</h4>
                </div>
                <p className="p-light about-para">
                  When an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry.
                </p>
              </div>
              <a className="btn btn-default primary-btn" href="#">
                BOOK WORKOUT
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Format;
