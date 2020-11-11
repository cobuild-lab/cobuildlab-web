import React from 'react';
import PricingFive from '../../../elements/price/element/price5';
import { Container, Row, Col } from 'reactstrap';
const Pricing = () => (
  <section className="gym pricing set-relative" id="plan">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title">
            <div className="text-center">
              <div>
                <h6 className=" borders-before">
                  <span>OUR PROGRESS</span>
                </h6>
              </div>
              <div className="main-title">
                <h2>price plan</h2>
              </div>
            </div>
          </div>
        </Col>
        <PricingFive />
      </Row>
    </Container>
  </section>
);

export default Pricing;
