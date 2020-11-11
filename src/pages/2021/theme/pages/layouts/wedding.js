import React, { useEffect } from 'react';
import Head from 'next/head';

// import Custom Components
import CenterLogoHeader from '../../containers/common/center-logo-header';
import HeaderSection from './sections/wedding/header';
import AboutSection from '../layouts/sections/wedding/about';
import BannerSection from '../layouts/sections/wedding/banner';
import GallerySection from '../layouts/sections/wedding/gallery';
import CountdownSection from './sections/wedding/countdown';
import BlogSection from '../layouts/sections/wedding/blog';
import DestinationSection from '../layouts/sections/wedding/destination';
import CounterSection from '../layouts/sections/wedding/counter';
import TestimonialSection from '../layouts/sections/wedding/testimonial';
import BrandSection from '../layouts/sections/wedding/brand';
import SubscribeSection from '../layouts/sections/wedding/subscribe';
import FooterSection from '../layouts/sections/wedding/footer';

const Wedding = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#c0882f');
    document.body.style.setProperty('--secondary', '#595959');
    document.body.style.setProperty('--light', '#BF862D');
    document.body.style.setProperty('--dark', '#ECC878');
  });

  return (
    <div>
      <Head>
        <title>Wedding Layout </title>
      </Head>

      <CenterLogoHeader themeClass="wedding" />

      <HeaderSection />

      <AboutSection />

      <BannerSection />

      <GallerySection />

      <CountdownSection />

      <BlogSection />

      <DestinationSection />

      <CounterSection />

      <TestimonialSection />

      <BrandSection />

      <SubscribeSection />

      <FooterSection />
    </div>
  );
};

export default Wedding;
