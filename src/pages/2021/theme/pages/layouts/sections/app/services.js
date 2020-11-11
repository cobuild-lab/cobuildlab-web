import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FeaturesData } from '../../../../database/layouts/app/database';

const Features = () => (
  <section className="app2 services p-t-0" id="services">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title2">
            <img alt="" className="img-fluid title-img" src="/assets/images/logo/2.png" />
            <h6 className="font-primary borders main-text text-uppercase">
              <span>feature</span>
            </h6>
            <div className="sub-title">
              <h2 className="title-text text-capitalize text-center">Powerful Features </h2>
            </div>
          </div>
        </Col>
        {FeaturesData.length > 0
          ? FeaturesData.map((item, index) => (
            <Col lg="4" md="6" className="service-container" key={`features-${index}`}>
              <div className="service">
                <div className="img-block">
                  <img alt="" className="service-img img-fluid" src={item.icon} />
                </div>
                <div className="service-feature">
                  <h4 className="feature-text">{item.title}</h4>
                  <p>{item.details}</p>
                </div>
              </div>
            </Col>
          ))
          : 'Features Data Not Found'}
      </Row>
    </Container>
  </section>
);

export default Features;
