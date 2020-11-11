import React from 'react';
import Layout from '../../containers/common/common-layout';
import Portfolio from '../../containers/portfolio/basic';

const PortfolioTitle2Col = () => (
  <Layout
    pathList={['portfolio basic', 'basic-2 grid with title']}
    pathTitle="portfolio with basic-2 grid">
    <Portfolio className="col-sm-6 isotopeSelector" title="Lorem Ipsum" subTitle="Lorem Ipsum" />
  </Layout>
);

export default PortfolioTitle2Col;
