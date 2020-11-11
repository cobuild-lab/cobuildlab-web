import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import BreadcrumbSection from './breadcrumb-comon-sections/breadcrumb-section';
import Dark3Section from './footer/dark3';
import DownloadSection from './footer/common/download';
import Copyright from '../layouts/sections/app/copyright';

const FooterDark3 = () => {
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
        title="Footer Creative"
        style="Footer Creative"
      />

      <DownloadSection />

      <Dark3Section />

      <Copyright />
    </Fragment>
  );
};

export default FooterDark3;
