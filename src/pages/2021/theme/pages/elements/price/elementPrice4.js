import React from 'react';
import Title from '../common/title';
import PricingFour from './element/price4';
import { Container } from 'reactstrap';
const ElementPriceFour = () => (
  <section className="resume pricing bg-pink inner-pagetitle">
    <Container>
      <Title heading="Pricing 4" />
      <PricingFour />
    </Container>
  </section>
);

export default ElementPriceFour;
