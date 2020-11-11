import React, { useEffect } from 'react';
import Head from 'next/head';

// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from './sections/event/banner';
import BookingSection from './sections/event/booking';
import AboutSection from './sections/event/about';
import SpeakerSection from './sections/event/speaker';
import SponserSection from './sections/event/sponsor';
import ScheduleSection from './sections/event/schedule';
import TestimonialSection from './sections/event/testimonial';
import GallerySection from './sections/event/gallery';
import CounterSection from './sections/event/counter';
import SubscribeSection from './sections/event/subscribe';
import PricingSection from './sections/event/pricing';
import BlogSection from './sections/event/blog';
import FooterSection from './sections/event/footer';

const Event = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#e3154f');
    document.body.style.setProperty('--secondary', '#321575');
    document.body.style.setProperty('--light', '#321575');
    document.body.style.setProperty('--dark', '#e3154f');
  });

  return (
    <div>
      <Head>
        <title>Events Layout </title>
      </Head>

      <Header className="event nav-lg" />

      <BannerSection />

      <BookingSection />

      <AboutSection />

      <SpeakerSection />

      <SponserSection />

      <ScheduleSection />

      <TestimonialSection />

      <GallerySection />

      <CounterSection />

      <SubscribeSection />

      <PricingSection />

      <BlogSection />

      <FooterSection />
    </div>
  );
};

export default Event;
