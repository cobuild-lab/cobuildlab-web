import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import BreadcrumbSection from './breadcrumb-comon-sections/breadcrumb-section';
import TeamSection from './breadcrumb-comon-sections/team-section';
import CounterSection from './breadcrumb-comon-sections/counter-section';
import FooterSection from '../../containers/common/footer';
import Faq from '../layouts/sections/modern-sass/faq';

const BreadcrumbDark = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#252525');
    document.body.style.setProperty('--dark', '#000');
  });

  return (
    <Fragment>
      <Header />

      <BreadcrumbSection
        className="col-12"
        bgDark="bg-dark set-bg-dark"
        textRight="text-center"
        justifyContent="justify-content-center"
        classDiv="col-12"
        path="Breadcrumb Style"
        title="Breadcrumb Dark"
        style="Breadcrumb Dark"
      />

      <TeamSection />

      <CounterSection />

      <Faq />

      <FooterSection />
    </Fragment>
  );
};

export default BreadcrumbDark;
