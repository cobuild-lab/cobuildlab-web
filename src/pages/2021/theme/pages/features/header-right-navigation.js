import React, { useEffect } from 'react';
import Head from 'next/head';
// import Custom Components
import Header from '../../containers/common/header';
import BannerSection from '../layouts/sections/index/banner';

const HeaderRightNavigation = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#357fef');
    document.body.style.setProperty('--secondary', '#4e4e4e');
    document.body.style.setProperty('--light', '#13B8EA');
    document.body.style.setProperty('--dark', '#4E56F3');
  });
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Header className="app1" />

      <BannerSection />
    </div>
  );
};

export default HeaderRightNavigation;
