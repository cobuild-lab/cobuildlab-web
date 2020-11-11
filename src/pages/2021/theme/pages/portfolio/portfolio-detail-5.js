import React from 'react';
import Layout from '../../containers/common/common-layout';
import DetailWrapper from '../../containers/portfolio/detail-wrapper';

const PortfolioDetail5 = () => (
  <Layout pathList={['portfolio details', 'video portfolio']} pathTitle="video portfolio">
    <DetailWrapper showcaseType="Video" />
  </Layout>
);

export default PortfolioDetail5;
