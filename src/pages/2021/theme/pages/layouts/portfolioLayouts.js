import React, { useEffect } from 'react';
import Head from 'next/head';

// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from './sections/portfolio-layout/banner';
import Section from './sections/portfolio-layout/section';
import FooterSection from './sections/portfolio-layout/footer';
import Copyright from './sections/portfolio-layout/copyright';

const PortfolioLayout = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#000000');
    document.body.style.setProperty('--secondary', '#434345');
    document.body.style.setProperty('--light', '#6851DF');
    document.body.style.setProperty('--dark', '#000000');
  });

  return (
    <div className="agency">
      <Head>
        <title>Portfolio Layout </title>
      </Head>

      <Header className="dark" />

      <BannerSection />

      <Section />

      <FooterSection />

      <Copyright />
    </div>
  );
};

export default PortfolioLayout;
