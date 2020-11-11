import React from 'react';
import { ServiceData } from '../../../../database/layouts/enterprice/database';
import { Container, Row, Col } from 'reactstrap';
const Service = () => (
  <section className="saas2 services">
    <Container className="saas2-services">
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title">
            <div className="main-title">
              <h2>our Features</h2>
            </div>
            <div className="sub-title">
              <p className="sub-title-para">
                We believe we have created the most efficient SaaS landing page for your users.
                Landing page with features that will convince you to use it for your SaaS business.
              </p>
            </div>
          </div>
        </Col>
        {ServiceData.map((item, i) => {
          return (
            <Col lg="4" md="6" className="service-container" key={i}>
              <div className="service text-center">
                <div className="img-block">
                  <img alt="" className="service-img img-fluid" src={item.img} />
                </div>
                <div className="service-feature">
                  <h4 className="feature-text text-center">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);

export default Service;
