import React from 'react';

import Layout from '../../containers/common/common-layout';
import Subscribe1 from '../layouts/sections/index/subscribe';
import Subscribe2 from '../layouts/sections/modern-sass/subscribe';

const Subscribe = () => (
  <Layout pathList={['elements', 'subscribe']} pathTitle="elements with subscribe">
    <Subscribe1 />

    <Subscribe2 />
  </Layout>
);
export default Subscribe;
