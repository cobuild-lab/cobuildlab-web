import React from 'react';
import Layout from '../../containers/common/common-layout';
import Portfolio from '../../containers/portfolio/basic';

const DefaultPortfolio = () => (
  <Layout pathList={['portfolio', 'basic-4 grid']} pathTitle="portfolio with basic-4 grid">
    <Portfolio className="col-lg-3 col-md-4 col-sm-6 isotopeSelector" />
  </Layout>
);

export default DefaultPortfolio;
