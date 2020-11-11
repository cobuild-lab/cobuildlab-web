import React from 'react';
import Title from '../common/title';
import PricingFive from './element/price5';
import { Container } from 'reactstrap';
const ElementPriceFive = () => {
  return (
    <section className="gym pricing set-relative">
      <Container>
        <Title heading="Pricing 5" />
        <PricingFive />
      </Container>
    </section>
  );
};

export default ElementPriceFive;
