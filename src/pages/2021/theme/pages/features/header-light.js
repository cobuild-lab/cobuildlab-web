import React, { useEffect } from 'react';
import Head from 'next/head';
// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from '../layouts/sections/resume/banner';

const HeaderLight = () => {
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

      <Header className="dark agency" />

      <BannerSection />
    </div>
  );
};

export default HeaderLight;
