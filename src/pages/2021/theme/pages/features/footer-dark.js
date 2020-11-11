import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import BreadcrumbSection from './breadcrumb-comon-sections/breadcrumb-section';
import DownloadSection from './footer/common/download';
import CopyrightSection from './footer/common/copyright';
import DarkSection from './footer/dark';

const FooterDark = () => {
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
        path="Footer Style"
        title="Footer Dark"
        style="Footer Dark"
      />
      <DownloadSection />

      <DarkSection />

      <CopyrightSection />
    </Fragment>
  );
};

export default FooterDark;
