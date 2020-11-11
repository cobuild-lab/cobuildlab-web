import React from 'react';
import PriceOne from '../../../elements/price/element/price1';
import { Container, Row, Col } from 'reactstrap';

const Price = () => (
  <section className="app1 pricing mb-0" id="plan">
    <Container>
      <Row>
        <Col lg="6" md="8" className="offset-lg-3 offset-md-2">
          <div className="title title1">
            <div className="main-title">
              <h2 className="font-primary">price Plan</h2>
            </div>
            <div className="sub-title">
              <p className="para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <PriceOne />
    </Container>
  </section>
);

export default Price;
