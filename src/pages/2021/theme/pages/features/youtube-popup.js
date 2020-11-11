import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import BreadcrumbSection from './breadcrumb-comon-sections/breadcrumb-section';
import YoutubeSection from './gallery/youtube-section';
import DefaultFooter from './footer/default-footer';
import CopyrightSection from './footer/common/copyright';

const YoutubePopup = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#252525');
    document.body.style.setProperty('--dark', '#000');
  });

  return (
    <Fragment>
      <Header className="dark" />

      <BreadcrumbSection
        className="col-12"
        textRight="text-center"
        justifyContent="justify-content-center"
        classDiv="col-12"
        path="Features"
        title="YouTube Popup"
        style="YouTube Popup"
      />

      <YoutubeSection />

      <DefaultFooter />

      <CopyrightSection />
    </Fragment>
  );
};

export default YoutubePopup;
