import React from 'react';
import Layout from '../../containers/common/common-layout';
import Testimonial1 from '../layouts/sections/modern-sass/testimonial';
import Testimonial2 from '../layouts/sections/event/testimonial';
import Testimonial3 from '../layouts/sections/app/team';
import Testimonial4 from '../layouts/sections/gym/testimonial';
import Testimonial5 from '../layouts/sections/agency/testimonial';

const Testimonial = () => (
  <Layout pathList={['elements', 'testimonial']} pathTitle="elements with testimonial">
    <Testimonial1 />

    <Testimonial2 />

    <section className="pb-0">
      <Testimonial3 />
    </section>

    <Testimonial4 />

    <Testimonial5 />
  </Layout>
);

export default Testimonial;
