import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import BreadcrumbSection from './breadcrumb-comon-sections/breadcrumb-section';
import FooterSection from './footer/default-footer';
import DownloadSection from './footer/common/download';
import CopyrightSection from './footer/common/copyright';

const FooterDefault = () => {
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
        setOver="set-over"
        title="Footer Default"
        style="Footer Default"
      />
      <DownloadSection />

      <FooterSection />

      <CopyrightSection />
    </Fragment>
  );
};
export default FooterDefault;
