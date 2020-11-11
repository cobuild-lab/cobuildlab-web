import React, { useEffect } from 'react';
import Head from 'next/head';
// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from './sections/index/banner';
import ServicesSection from './sections/index/services';
import AboutSection from './sections/index/about';
import DownloadSection from './sections/index/download';
import ScreenShotsSection from './sections/index/screenshots';
import PriceSection from './sections/index/price';
import VideoSection from './sections/index/video';
import FooterSection from './sections/index/footer';

const App1 = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#357fef');
    document.body.style.setProperty('--secondary', '#4e4e4e');
    document.body.style.setProperty('--light', '#13B8EA');
    document.body.style.setProperty('--dark', '#4E56F3');
  });

  return (
    <div>
      <Head>
        <title>Unice</title>
      </Head>

      <Header className="app1" />

      <BannerSection />

      <ServicesSection />

      <AboutSection />

      <DownloadSection />

      <ScreenShotsSection />

      <PriceSection />

      <VideoSection />

      <FooterSection />
    </div>
  );
};

export default App1;
