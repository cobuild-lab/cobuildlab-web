import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import BasicPortfolio from '../../containers/portfolio/basic';

const Modern3 = () => (
  <Fragment>
    <Layout pathList={['portfolio', 'trending layout 6']} pathTitle="trending layout 6">
      <BasicPortfolio className="col-md-4 col-sm-6 isotopeSelector" fluid="container-fluid" />
    </Layout>
  </Fragment>
);

export default Modern3;
