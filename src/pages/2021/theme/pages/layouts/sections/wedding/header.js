import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const HeaderSection = () => (
  <section className="wedding header" id="header">
    <div className="decore">
      <img
        alt=""
        className="img-fluid"
        src="/assets/images/wedding-img/backgrounds/top-pattern.png"
      />
      <img
        alt=""
        className="img-fluid"
        src="/assets/images/wedding-img/backgrounds/bottom-pattern.png"
      />
    </div>
    <div className="wedding-content">
      <div className="wedding bg slider-bg">
        <div className="bottom-0 set-abs girl">
          <img
            alt=""
            className="img-fluid"
            id="girl"
            src="/assets/images/wedding-img/slider/girl.png"
          />
        </div>
        <Container>
          <Row>
            <Col lg="5" className="offset-lg-7">
              <div className="center-text m-t-50">
                <div className="simple-text">
                  <div className="set-relative rightFadeInOut header-text">
                    <img alt="" className="logo-h1" src="/assets/images/wedding-img/logo-h1.png" />
                  </div>
                  <p className="header-sub-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text.{' '}
                  </p>
                  <div className="rightfadediv">
                    <div>
                      <img
                        alt=""
                        className="img-fluid bottom-img"
                        src="/assets/images/wedding-img/bottom.png"
                      />
                    </div>
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

export default HeaderSection;
