import React, { useEffect } from 'react';
import Head from 'next/head';

// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from '../layouts/sections/music/banner';
import SideSection from '../layouts/sections/music/sideSection';
import AlbumSection from '../layouts/sections/music/album';
import ArtistSection from '../layouts/sections/music/artist';
import SponsorSection from '../layouts/sections/music/sponsor';
import GallerySection from '../layouts/sections/music/gallery';
import VideoSection from '../layouts/sections/music/video';
import BookingSection from '../layouts/sections/music/booking';
import BlogSection from '../layouts/sections/music/blog';
import SubscribeSection from '../layouts/sections/music/subscribe';
import TestimonialSection from '../layouts/sections/music/testimonial';
import FooterSection from '../layouts/sections/music/footer';
import CopyrightSection from '../layouts/sections/music/copyright';

const Music = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#223b7b');
    document.body.style.setProperty('--secondary', '#fff');
    document.body.style.setProperty('--light', '#2245a0');
    document.body.style.setProperty('--dark', '#213672');
  });

  return (
    <div>
      <Head>
        <title>Music Layout </title>
      </Head>

      <Header className="music loding-header" />

      <BannerSection />

      <SideSection />

      <AlbumSection />

      <ArtistSection />

      <SponsorSection />

      <GallerySection />

      <VideoSection />

      <BookingSection />

      <BlogSection />

      <SubscribeSection />

      <TestimonialSection />

      <FooterSection />

      <CopyrightSection />
    </div>
  );
};

export default Music;
