import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import BasicPortfolio from '../../containers/portfolio/basic';

const FullWidth2Grid = () => (
  <Fragment>
    <Layout pathList={['portfolio masonry', 'full width 2 grid']} pathTitle="full width 2 grid">
      <div className="masonry-filter">
        <BasicPortfolio
          className="col-sm-6 p-0 isotopeSelector masonary-portfolio"
          fluid="container-fluid"
        />
      </div>
    </Layout>
  </Fragment>
);

export default FullWidth2Grid;
