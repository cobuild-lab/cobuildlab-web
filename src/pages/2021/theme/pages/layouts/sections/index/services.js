import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Services = () => (
  <section className="services" id="service">
    <Container>
      <Row>
        <Col lg="6" md="8" className="offset-lg-3 offset-md-2">
          <div className="title">
            <div className="main-title">
              <h2>Advance Services</h2>
            </div>
            <div className="sub-title">
              <p className="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been
              </p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="service service-overlay">
            <div className="img-block">
              <img
                alt=""
                className="service-img img-fluid"
                src="/assets/images/app_landing1/icons/1-1.png"
              />
            </div>
            <div className="service-feature">
              <h4 className="feature-text">Powerful System</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the ma- jority
                have suffered.
              </p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="service service-overlay">
            <div className="img-block">
              <img
                alt=""
                className="service-img img-fluid"
                src="/assets/images/app_landing1/icons/1-2.png"
              />
            </div>
            <div className="service-feature">
              <h4 className="feature-text">Personalization</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the ma- jority
                have suffered.
              </p>
            </div>
          </div>
        </Col>
        <Col md="4">
          <div className="service service-overlay">
            <div className="img-block">
              <img
                alt=""
                className="service-img img-fluid"
                src="/assets/images/app_landing1/icons/1-3.png"
              />
            </div>
            <div className="service-feature">
              <h4 className="feature-text">Ease Of Access</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the ma- jority
                have suffered.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Services;
