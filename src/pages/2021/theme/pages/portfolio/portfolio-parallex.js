import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';

const PortfolioParallex = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#252525');
    document.body.style.setProperty('--dark', '#000');
  });
  return (
    <Fragment>
      <Header className="dark position-relative ecommerce" />
      <section className="parallex-section p-0">
        <div className="parallex-container img-1"></div>
        <div className="parallex-container img-2"></div>
        <div className="parallex-container img-3"></div>
        <div className="parallex-container img-4"></div>
        <div className="parallex-container img-5"></div>
      </section>
    </Fragment>
  );
};

export default PortfolioParallex;
