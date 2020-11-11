import React, { useState } from 'react';
import Slider from 'react-slick';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonial = () => {
  const [modal, setModal] = useState();
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <section className="saas1 testimonial videos testimonial-bg">
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
                  <span className="theme-color">5</span>0k <span className="theme-color">E</span>
                  xperts <span className="theme-color">T</span>rust{' '}
                  <span className="theme-color">U</span>s
                </h2>
              </div>
              <hr />
              <div className="sub-title">
                <p className="p-padding">
                  Life before Company was very chaotic — we got a lot of phone calls, a lot of
                  mistyped orders. So with Company, the ability to see the order directly from the
                  customer makes it so streamlined.
                </p>
              </div>
            </div>
          </Col>
          <Col md="6" sm="12">
            <div className="center-content">
              <div className="video w-100">
                <a className="button center-content" onClick={toggle}>
                  <img
                    alt="video"
                    className="img-fluid"
                    src="/assets/images/saas1/testimonial-video-icon.png"
                  />
                </a>
                <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                  <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                  <ModalBody className="iframe-modal">
                    <iframe
                      className="mfp-iframe"
                      frameBorder="0"
                      allowFullScreen=""
                      src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="testimonial-slider">
              <Slider {...settings}>
                <div className="item">
                  <div className="testimonial">
                    <div className="testimonial-box">
                      <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                      <h6>
                        Life before Company was very chaotic — we got a lot of phone calls, a lot of
                        mistyped orders. So with Company, the ability to see the order directly from
                        the customer makes it so streamlined.{' '}
                      </h6>
                    </div>
                  </div>
                  <div className="testi-profile">
                    <div className="media">
                      <img alt="profile-testimonial" src="/assets/images/saas1/testi-profile.png" />
                      <div className="media-body">
                        <h5 className="mt-0">Elmer Harvy</h5>
                        <h6>Graphics Designer</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial">
                    <div className="testimonial-box">
                      <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                      <h6>
                        Life before Company was very chaotic — we got a lot of phone calls, a lot of
                        mistyped orders. So with Company, the ability to see the order directly from
                        the customer makes it so streamlined.{' '}
                      </h6>
                    </div>
                  </div>
                  <div className="testi-profile">
                    <div className="media">
                      <img
                        alt="Generic placeholder image"
                        src="/assets/images/saas1/testi-profile.png"
                      />
                      <div className="media-body">
                        <h5 className="mt-0">Elmer Harvy</h5>
                        <h6>Graphics Designer</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial">
                    <div className="testimonial-box">
                      <img alt="dot" src="/assets/images/saas1/testimonail-dot.png" />
                      <h6>
                        Life before Company was very chaotic — we got a lot of phone calls, a lot of
                        mistyped orders. So with Company, the ability to see the order directly from
                        the customer makes it so streamlined.{' '}
                      </h6>
                    </div>
                  </div>
                  <div className="testi-profile">
                    <div className="media">
                      <img alt="profile" src="/assets/images/saas1/testi-profile.png" />
                      <div className="media-body">
                        <h5 className="mt-0">Elmer Harvy</h5>
                        <h6>Graphics Designer</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
