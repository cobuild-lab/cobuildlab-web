import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import BasicPortfolio from '../../containers/portfolio/basic';

const Modern4 = () => (
  <Fragment>
    <Layout pathList={['portfolio', 'trending layout 5']} pathTitle="trending layout 5">
      <BasicPortfolio
        className="col-lg-3 col-md-4 col-sm-6 isotopeSelector"
        fluid="container-fluid"
      />
    </Layout>
  </Fragment>
);

export default Modern4;
