import React from 'react';
// import Custom Components
import Layout from '../../containers/common/common-layout';
import SpeakerSection from './team/team-section/speaker';
import ArtistSection from '../layouts/sections/music/artist';
import AppSection from './team/team-section/app';
import AgencySection from './team/team-section/agency';

const TeamSection = () => {
  return (
    <div>
      <Layout pathList={['pages', 'team', 'team']} pathTitle="pages with team">
        <SpeakerSection />

        <ArtistSection />

        <AppSection />

        <AgencySection />
      </Layout>
    </div>
  );
};

export default TeamSection;
