import React from 'react';
import Layout from '../../containers/common/common-layout';
import Portfolio from '../../containers/portfolio/basic';

const Basic2Grid = () => (
  <Layout pathList={['portfolio', 'basic-2 grid']} pathTitle="portfolio with basic-2 grid">
    <Portfolio className="col-lg-6 col-md-4 col-sm-6 isotopeSelector" />
  </Layout>
);

export default Basic2Grid;
