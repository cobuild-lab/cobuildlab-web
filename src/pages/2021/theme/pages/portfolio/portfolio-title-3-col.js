import React from 'react';
import Layout from '../../containers/common/common-layout';
import Portfolio from '../../containers/portfolio/basic';

const PortfolioTitle3Col = () => (
  <Layout
    pathList={['portfolio basic', 'basic-3 grid with title']}
    pathTitle="portfolio with basic-3 grid">
    <Portfolio
      className="col-md-4 col-sm-6 isotopeSelector"
      title="Lorem Ipsum"
      subTitle="Lorem Ipsum"
    />
  </Layout>
);

export default PortfolioTitle3Col;
