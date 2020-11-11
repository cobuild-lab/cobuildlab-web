import React from 'react';
import Layout from '../../containers/common/common-layout';
import DetailWrapper from '../../containers/portfolio/detail-wrapper';

const PortfolioDetail6 = () => (
  <Layout pathList={['portfolio details', 'two image portfolio']} pathTitle="Two image portfolio">
    <DetailWrapper showcaseType="Image" />
  </Layout>
);

export default PortfolioDetail6;
