import React from 'react';
import Layout from '../../containers/common/common-layout';
import Portfolio from '../../containers/portfolio/basic';

const Basic3Grid = () => (
  <Layout pathList={['portfolio', 'basic-3 grid']} pathTitle="portfolio with basic-3 grid">
    <Portfolio className="col-lg-4 col-md-4 col-sm-6 isotopeSelector" />
  </Layout>
);

export default Basic3Grid;
