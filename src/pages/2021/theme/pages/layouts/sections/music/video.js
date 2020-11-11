import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const Video = () => {
  const [modal, setModal] = useState();
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <section className="music bg-video format bg-shadow-top-bottom p-0">
      <Container>
        <Row>
          <Col md="6">
            <img alt="" className="img-fluid" src="/assets/images/music/singer.png" />
          </Col>
          <Col md="6">
            <div className="center-text">
              <div>
                <div className="format-small-text">
                  <h6 className="gradient-text hash-video">#video</h6>
                </div>
                <div className="format-head-text">
                  <h3 className="about-font-header">Anet Licker</h3>
                </div>
                <div className="format-sub-text">
                  <div className="sub-heading">
                    <h6 className="sub-small-text">Performs in Slide Spring Tour</h6>
                  </div>
                  <p className="text-white sub-para">
                    The page builder elements that we’ve created for you, make the website building
                    process easy and fun.
                  </p>
                </div>
                <div className="m-b-40">
                  <div className="link-horizontal">
                    <ul>
                      <li>
                        <a className="button icon-btn d-flex" href="#javascript">
                          <i
                            aria-hidden="true"
                            className="fa fa-play video-icon center-content m-0"
                            onClick={toggle}></i>
                          <div className="watch-now center-content">
                            <h6 className="watch" onClick={toggle}>
                              Watch Now
                            </h6>
                          </div>
                        </a>
                        <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                          <ModalHeader
                            toggle={toggle}
                            className="modal-no-header close-up"></ModalHeader>
                          <ModalBody className="iframe-modal">
                            <iframe
                              className="mfp-iframe"
                              frameBorder="0"
                              allowFullScreen=""
                              src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
                          </ModalBody>
                        </Modal>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex">
                  <a href="#">
                    <h6 className="watch">
                      see all video<i aria-hidden="true" className="fa fa-arrow-right m-l-15"></i>
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Video;
