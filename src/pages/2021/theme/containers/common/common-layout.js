import React, { useEffect } from 'react';
import Header from './header';
import Breadcrumb from './breadcrumb';
import Footer from './footer';

const CommonLayout = ({ children, pathList, pathTitle }) => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#252525');
    document.body.style.setProperty('--dark', '#000');
  });

  return (
    <>
      <Header className="dark agency" />

      <Breadcrumb list={pathList} title={pathTitle} />

      <>{children}</>

      <Footer />
    </>
  );
};

export default CommonLayout;
