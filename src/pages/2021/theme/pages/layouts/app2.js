import React, { useEffect } from 'react';
import Head from 'next/head';
// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from './sections/app/banner';
import AboutSection from './sections/app/about';
import ServicesSection from './sections/app/services';
import FormatSection from './sections/app/format';
import TeamSection from './sections/app/team';
import ScreenshotSection from './sections/app/screenshot';
import MemberSection from './sections/app/member';
import PricingSection from './sections/app/pricing';
import ClientSection from './sections/app/client';
import FooterSection from './sections/app/footer';
import CopyrightSection from './sections/app/copyright';

const App2 = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#fd6d64');
    document.body.style.setProperty('--secondary', '#434345');
    document.body.style.setProperty('--light', '#F66E54');
    document.body.style.setProperty('--dark', '#FF534B');
  });

  return (
    <div className="theme-color">
      <Head>
        <title>App Layout</title>
      </Head>

      <Header />

      <BannerSection />

      <AboutSection />

      <ServicesSection />

      <FormatSection />

      <TeamSection />

      <ScreenshotSection />

      <MemberSection />

      <PricingSection />

      <ClientSection />

      <FooterSection />

      <CopyrightSection />

      {/* Tap on Top */}
      <div className="tap-top">
        <div>
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
      {/* Tap on Ends */}
    </div>
  );
};

export default App2;
