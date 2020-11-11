import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import BasicPortfolio from '../../containers/portfolio/basic';

const FullWidth4Grid = () => (
  <Fragment>
    <Layout pathList={['portfolio masonry', 'full width 4 grid']} pathTitle="full width 4 grid">
      <div className="masonry-filter">
        <BasicPortfolio
          className="col-lg-3 col-md-4 col-sm-6 p-0 isotopeSelector full-width-grid"
          fluid="container-fluid"
        />
      </div>
    </Layout>
  </Fragment>
);

export default FullWidth4Grid;
