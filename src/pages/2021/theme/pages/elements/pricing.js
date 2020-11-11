import React from 'react';

import Layout from '../../containers/common/common-layout';
import Pricing1 from './price/elementPrice1';
import Pricing2 from './price/elementPrice2';
import Pricing3 from './price/elementPrice3';
import Pricing4 from './price/elementPrice4';
import Pricing5 from './price/elementPrice5';
import Pricing6 from './price/elementPrice6';

const Pricing = () => (
  <Layout pathList={['elements', 'pricing']} pathTitle="elements with pricing">
    <Pricing1 />

    <Pricing2 />

    <Pricing3 />

    <Pricing4 />

    <Pricing5 />

    <Pricing6 />
  </Layout>
);

export default Pricing;
