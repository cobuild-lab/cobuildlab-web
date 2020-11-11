import React, { Fragment, useEffect } from 'react';
import Header from '../../containers/common/header';
import { SectionsContainer } from 'react-fullpage';
import { Container, Row, Col } from 'reactstrap';
var options = {
  sectionClassName: 'section',
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
  scrollBar: false,
  navigation: true,
  verticalAlign: false,
  sectionPaddingTop: '50px',
  sectionPaddingBottom: '50px',
  arrowNavigation: true,
  autoplay: true,
};

const VerticalSlide = () => {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#000');
    document.body.style.setProperty('--secondary', '#000');
    document.body.style.setProperty('--light', '#252525');
    document.body.style.setProperty('--dark', '#000');
  });
  return (
    <Fragment>
      <Header className="dark position-relative ecommerce" />
      <section className="portfolio multiple-carousel p-0">
        <Container fluid={true} className="p-0">
          <Row>
            <Col xs="12">
              <div className="vertical-slider">
                <SectionsContainer {...options}>
                  <section className="prtfolio-full-screen p-0">
                    <img
                      alt=""
                      className="img-fluid img-to-bg"
                      src="../assets/images/portfolio/multiple-carousel/2.jpg"
                    />
                  </section>
                  <section className="prtfolio-full-screen p-0">
                    <img
                      alt=""
                      className="img-fluid img-to-bg"
                      src="../assets/images/portfolio/multiple-carousel/3.jpg"
                    />
                  </section>
                  <section className="prtfolio-full-screen p-0">
                    <img
                      alt=""
                      className="img-fluid img-to-bg"
                      src="../assets/images/portfolio/multiple-carousel/4.jpg"
                    />
                  </section>
                  <section className="prtfolio-full-screen p-0">
                    <img
                      alt=""
                      className="img-fluid img-to-bg"
                      src="../assets/images/portfolio/multiple-carousel/5.jpg"
                    />
                  </section>
                </SectionsContainer>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default VerticalSlide;
