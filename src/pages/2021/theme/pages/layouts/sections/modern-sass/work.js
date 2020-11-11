import React, { useState } from 'react';
import { NavData, ContentData } from '../../../../database/layouts/modern/database';
import { Container, Row, Col } from 'reactstrap';
const Work = () => {
  const [nav, setNav] = useState('Initializing');
  const toggle = (item) => {
    setNav(item);
  };
  return (
    <section className="saas1 howitwork" id="how-work">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <div className="title">
              <img
                alt="title-logo"
                className="img-fluid"
                src="/assets/images/saas1/title-logo.png"
              />
              <div className="main-title">
                <h2>
                  <span className="theme-color">H</span>ow <span className="theme-color">I</span>t{' '}
                  <span className="theme-color">W</span>ork
                </h2>
              </div>
              <hr />
              <div className="sub-title">
                <p className="p-padding">
                  Guide to setup and configuration. You can present below a guide and a description
                  of how your system configuration works and add some animated screens.
                </p>
              </div>
            </div>
          </Col>
          <Col md="12" className="work-tab">
            <ul className="nav nav-pills justify-content-center " id="pills-tab" role="tablist">
              {NavData.map((item, i) => {
                return (
                  <li
                    className={`nav-item  text-center ${item.title === nav ? 'active' : ''} `}
                    key={i}>
                    <a
                      aria-selected="true"
                      className={`nav-link ${'work' == item.title ? 'active show' : ''}`}
                      data-toggle="pill"
                      onClick={() => toggle(item.title)}
                      role="tab">
                      <img alt="tab-image-1" src={item.img} />
                      <h6>{item.title}</h6>
                      <span></span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="work-tab-bg work-content p-t-50">
        <div className="tab-content text-center" id="pills-tabContent">
          {ContentData.map((item, i) => {
            return (
              <div
                className={`tab-pane fade ${item.title === nav ? 'show active' : ''}`}
                role="tabpanel"
                key={i}>
                <img alt="tab-image-1" className="img-fluid" src={item.img} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
