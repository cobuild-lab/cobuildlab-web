import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import BasicPortfolio from '../../containers/portfolio/basic';

const Modern2 = () => (
  <Fragment>
    <Layout pathList={['portfolio', 'trending layout 7']} pathTitle="trending layout 7">
      <BasicPortfolio className="col-sm-6 isotopeSelector" fluid="container-fluid" />
    </Layout>
  </Fragment>
);

export default Modern2;
