import React from 'react';
import Typed from 'react-typed';
import { Container, Row, Col } from 'reactstrap';
const Banner = () => (
  <section className="resume header" id="header">
    <div className="header7-content">
      <div className="resume bg bg-pink">
        <Container>
          <Row>
            <Col lg="5" md="6">
              <img
                alt=""
                className="img-fluid set-abs bottom-0 right-0"
                src="/assets/images/resume/h7.png"
              />
            </Col>
            <Col lg="6" md="6" className="offset-lg-1">
              <div className="center-text">
                <div>
                  <div className="header-sub-text">
                    <h5 className="text-hash text-uppercase"># resume</h5>
                  </div>
                  <div className="header-text">
                    <h1>
                      <span className="bold-text">Hi, I’m</span>
                      <br /> Elana Parker
                    </h1>
                  </div>
                  <div className="header-sub-text">
                    <h4 className="font-secondary">
                      Html ,{' '}
                      <span className="typed-resume">
                        <Typed
                          strings={['Css, Bootstrap, Java Script']}
                          typeSpeed={80}
                          backSpeed={50}
                          showCursor={false}
                          loop></Typed>
                      </span>
                    </h4>
                  </div>
                  <div className="header-sub-text">
                    <p className="font-secondary font-large">
                      Lorem Ipsum is simply dummy text of the printing andtypesetting industry.
                      Lorem Ipsum has been the industry's standard dummy textever since the 1500s,
                      when an unknown.
                    </p>
                  </div>
                  <div className="link-horizontal">
                    <ul>
                      <li>
                        <a className="btn btn-default primary-btn back-white">know more</a>
                      </li>
                      <li>
                        <a className="btn btn-default primary-btn back-white">download cv</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </section>
);

export default Banner;
