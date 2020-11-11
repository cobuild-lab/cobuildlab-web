import React, { useEffect } from 'react';
import Head from 'next/head';

// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from '../layouts/sections/resume/banner';
import AboutSection from '../layouts/sections/resume/about';
import ServiceSection from '../layouts/sections/resume/services';
import Section from '../layouts/sections/resume/section';
import CounterSection from '../layouts/sections/resume/counter';
import ScheduleSection from '../layouts/sections/resume/schedule';
import PricingSection from '../layouts/sections/resume/pricing';
import SubscribeSection from '../layouts/sections/resume/subscribe';
import FooterSection from '../layouts/sections/resume/footer';

const Resume = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#1f232c');
    document.body.style.setProperty('--secondary', '#676767');
    document.body.style.setProperty('--light', '#000');
    document.body.style.setProperty('--dark', '#000');
  });

  return (
    <div>
      <Head>
        <title>Resume Layout </title>
      </Head>

      <Header className="dark" />

      <BannerSection />

      <AboutSection />

      <ServiceSection />

      <Section />

      <CounterSection />

      <ScheduleSection />

      <PricingSection />

      <SubscribeSection />

      <FooterSection />
    </div>
  );
};

export default Resume;
