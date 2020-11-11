import React from 'react';
import Title from '../common/title';
import PricingTwo from './element/price2';
import { Container } from 'reactstrap';
const ElementPriceTwo = () => (
  <section className="app2 pricing bg-light-inner">
    <Container>
      <Title heading="Pricing 2" />
      <PricingTwo />
    </Container>
  </section>
);

export default ElementPriceTwo;
