import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import BreadcrumbSection from './breadcrumb-comon-sections/breadcrumb-section';
import PopupSection from './gallery/popup';
import DefaultFooter from './footer/default-footer';
import CopyrightSection from './footer/common/copyright';

const FormPopup = () => {
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
        title="Form popup"
        style="Form popup"
      />

      <PopupSection />

      <DefaultFooter />

      <CopyrightSection />
    </Fragment>
  );
};

export default FormPopup;
