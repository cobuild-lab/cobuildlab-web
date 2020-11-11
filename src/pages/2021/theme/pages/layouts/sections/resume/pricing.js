import React from 'react';
import PricingFour from '../../../elements/price/element/price4';
import { Container, Row, Col } from 'reactstrap';
const Pricing = () => (
  <section className="resume pricing bg-pink" id="pricing">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h6 className="font-primary borders main-text text-uppercase">
              <span>pricing</span>
            </h6>
            <div className="sub-title">
              <div>
                <h2>you can hire me</h2>
              </div>
            </div>
          </div>
        </Col>
        <PricingFour />
      </Row>
    </Container>
  </section>
);

export default Pricing;
