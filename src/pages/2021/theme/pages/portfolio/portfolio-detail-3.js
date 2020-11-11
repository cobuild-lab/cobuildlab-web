import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import DetailWrapper from '../../containers/portfolio/detail-wrapper';

const PortfolioDetail3 = () => (
  <Layout pathList={['portfolio details', 'with bg breadcrumb']} pathTitle="WITH BG BREDCRUMB">
    <DetailWrapper showcaseType="Banner" />
  </Layout>
);

export default PortfolioDetail3;
