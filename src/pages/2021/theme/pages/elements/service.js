import React from 'react';
import Layout from '../../containers/common/common-layout';
import Service1 from '../layouts/sections/index/services';
import Service2 from '../layouts/sections/modern-sass/feature';
import Service3 from '../layouts/sections/app/services';
import Service4 from '../layouts/sections/agency/service';

const Service = () => (
  <Layout pathList={['elements', 'service']} pathTitle="elements with service">
    <Service1 />

    <div className="inner-service">
      <Service2 />
    </div>

    <Service3 />

    <Service4 />
  </Layout>
);

export default Service;
