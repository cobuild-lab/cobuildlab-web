import React from 'react';
import Layout from '../../containers/common/common-layout';
import DefaultSection from './buttons/deault';
import BorderSection from './buttons/border';
import SquareSection from './buttons/square';
import SquareBorderSection from './buttons/square-border';

const Button = () => (
  <Layout pathList={['elements', 'buttons']} pathTitle="elements with buttons">
    <DefaultSection />

    <BorderSection />

    <SquareSection />

    <SquareBorderSection />
  </Layout>
);

export default Button;
