import React, { useEffect, Fragment } from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
// import Custom Components
import Header from '../../containers/common/header';

const HeaderTransparent = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#fb3b64');
    document.body.style.setProperty('--secondary', '#071828');
    document.body.style.setProperty('--light', '#071828');
    document.body.style.setProperty('--dark', '#fb3b64');
  });

  return (
    <Fragment>
      <Head>
        <title>Modern Sass Layout </title>
      </Head>

      <Header className="saas1" />

      <section className="saas1 header" id="home">
        <div className="saas1-header bg header8-content">
          <Container>
            <Row>
              <Col md="12">
                <div className="center-text justify-content-center text-center">
                  <div>
                    <div className="header-text">
                      <div className="d-flex">
                        <h1>
                          <span className="theme-color">S</span>imple{' '}
                          <span className="small-text">and </span>
                          <span className="theme-color">S</span>mart
                        </h1>
                        <div className="center-content slider-logo">
                          <img
                            alt=""
                            className="img-fluid"
                            src="../assets/images/saas1/slider-logo.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="header-sub-text">
                      <h3 className="text-white">
                        Landing Page Templates For<span> SaaS</span> Companies
                      </h3>
                    </div>
                    <div className="header-sub-text">
                      <h6>
                        For as low as<span className="theme-color"> $0.95 </span>per user account
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <img
          alt=""
          className="img-fluid set-abs background"
          src="../assets/images/saas1/background2.png"
        />
        <img alt="" className="img-fluid set-abs dot" src="../assets/images/saas1/dot.png" />
      </section>
    </Fragment>
  );
};

export default HeaderTransparent;
