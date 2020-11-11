import React from 'react';
import Layout from '../../containers/common/common-layout';
import Portfolio from '../../containers/portfolio/basic';

const PortfolioTitle4Col = () => (
  <Layout
    pathList={['portfolio basic', 'basic-4 grid with title']}
    pathTitle="portfolio with basic-4 grid">
    <Portfolio
      className="col-lg-3 col-md-4 col-sm-6 isotopeSelector"
      title="Lorem Ipsum"
      subTitle="Lorem Ipsum"
    />
  </Layout>
);

export default PortfolioTitle4Col;
