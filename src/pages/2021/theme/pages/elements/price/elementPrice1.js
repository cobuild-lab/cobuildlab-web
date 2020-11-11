import React, { Fragment } from 'react';
import PriceOne from './element/price1';
import Title from '../common/title';
import { Container } from 'reactstrap';
const ElementPriceOne = () => (
  <Fragment>
    <section className="app1 pricing mb-0">
      <Container>
        <Title heading="Pricing 1" />
        <PriceOne />
      </Container>
    </section>
  </Fragment>
);

export default ElementPriceOne;
