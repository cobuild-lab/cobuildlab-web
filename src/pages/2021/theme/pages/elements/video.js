import React from 'react';
import Layout from '../../containers/common/common-layout';
import Video1 from '../layouts/sections/index/video';
import Video2 from '../layouts/sections/modern-sass/testimonial';
import Video3 from '../layouts/sections/music/video';
import Video4 from '../layouts/sections/agency/video';

const Video = () => (
  <Layout pathList={['elements', 'video']} pathTitle="elements with video">
    <Video1 />

    <Video2 />

    <Video3 />

    <Video4 />
  </Layout>
);

export default Video;
