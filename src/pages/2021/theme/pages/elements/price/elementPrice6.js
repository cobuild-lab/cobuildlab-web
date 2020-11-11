import React from 'react';
import Title from '../common/title';
import PricingSix from './element/price6';
import { Container, Col } from 'reactstrap';
const ElementPriceSix = () => (
  <section className="saas1 pricing pricing-6">
    <Container>
      <Title heading="Pricing 6" />
      <PricingSix />
    </Container>
  </section>
);

export default ElementPriceSix;
