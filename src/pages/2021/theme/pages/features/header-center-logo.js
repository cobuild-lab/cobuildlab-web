import React, { useEffect } from 'react';
import Head from 'next/head';

// import Custom Components
import Header from '../../containers/common/center-logo-header';
import BannerSection from '../layouts/sections/yoga/banner';

const HeaderCenterLogo = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#774ddd');
    document.body.style.setProperty('--secondary', '#434345');
    document.body.style.setProperty('--light', '#6851DF');
    document.body.style.setProperty('--dark', '#BA38D2');
  });

  return (
    <div>
      <Head>
        <title>Yoga Layout </title>
      </Head>

      <Header themeClass="yoga" />

      <BannerSection />
    </div>
  );
};

export default HeaderCenterLogo;
