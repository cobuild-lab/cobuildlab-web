import React from 'react';
import PricingSeven from '../../../elements/price/element/price7';
import { Container, Row, Col } from 'reactstrap';
const Pricing = () => (
  <section className="saas2 pricing m-0" id="plan">
    <Col md="10" xs="12" className="offset-md-1">
      <Container className="saas2-services">
        <Row>
          <Col md="10" className="offset-md-1">
            <div className="title">
              <div className="main-title">
                <h2>pricing plan</h2>
              </div>
              <div className="sub-title">
                <p className="sub-title-para">
                  We believe we have created the most efficient SaaS landing page for your users.
                  Landing page with features that will convince you to use it for your SaaS
                  business.
                </p>
              </div>
            </div>
          </Col>
          <PricingSeven />
        </Row>
      </Container>
    </Col>
  </section>
);

export default Pricing;
