import React, { useEffect } from 'react';
import Head from 'next/head';
// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from './sections/agency/banner';
import AboutSection from './sections/agency/about';
import ServiceSection from './sections/agency/service';
import VideoSection from './sections/agency/video';
import WorkSection from './sections/agency/work';
import PricingSection from './sections/agency/pricing';
import ExpertSection from './sections/agency/expert';
import TestimonialSection from './sections/agency/testimonial';
import BlogSection from './sections/agency/blog';
import FooterSection from './sections/agency/footer';

const Agency = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#10266b');
    document.body.style.setProperty('--secondary', '#464545');
    document.body.style.setProperty('--light', '#1F357D');
    document.body.style.setProperty('--dark', '#04185B');
  });

  return (
    <div className="theme-color">
      <Head>
        <title>Agency </title>
        <meta name="Agency Layout" content="" />
      </Head>

      <Header className="agency" />

      <BannerSection />

      <AboutSection />

      <ServiceSection />

      <VideoSection />

      <WorkSection />

      <PricingSection />

      <ExpertSection />

      <TestimonialSection />

      <BlogSection />

      <FooterSection />
    </div>
  );
};

export default Agency;
