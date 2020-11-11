import React from 'react';
import Layout from '../../containers/common/common-layout';
import DetailWrapper from '../../containers/portfolio/detail-wrapper';

const PortfolioDetail2 = () => (
  <Layout pathList={['portfolio details', 'full width']} pathTitle="full width">
    <DetailWrapper showcaseType="Slider" />
  </Layout>
);

export default PortfolioDetail2;
