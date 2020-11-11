import React from 'react';
import Layout from '../../containers/common/common-layout';
import ExperienceSection from '../layouts/sections/yoga/experience';
import AboutSection from '../layouts/sections/resume/about';

const Progressbar = () => {
  return (
    <div>
      <Layout pathList={['elements', 'progress bar']} pathTitle="elements with progress bar">
        <ExperienceSection />

        <AboutSection />
      </Layout>
    </div>
  );
};

export default Progressbar;
