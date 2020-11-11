import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const Video = () => {
  const [modal, setModal] = useState();
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <section className="app1 videos bg-theme">
      <Container>
        <Row>
          <Col md="5" sm="12">
            <div className="center-content">
              <div className="video w-100">
                <a className="button center-content" onClick={toggle}>
                  <img
                    alt="video"
                    className="img-fluid"
                    src="/assets/images/app_landing1/playl-1.png"
                  />
                </a>
              </div>
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
          </Col>
          <Col lg="6" md="7" sm="12" className="offset-lg-1 counters video-description">
            <h3 className="m-b-30 text-white">Discover The New App</h3>
            <div className="m-b-35">
              <p className="p-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut
              </p>
              <p className="p-light">
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur.
              </p>
              <p className="p-light">
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="link-horizontal">
              <ul>
                <li>
                  <a className="icon-btn">
                    <i aria-hidden="true" className="fa fa-android center-content shadow"></i>
                    <h6 className="text-center text-white">android</h6>
                  </a>
                </li>
                <li className="borders-right p-0"></li>
                <li>
                  <a className="icon-btn">
                    <i aria-hidden="true" className="fa fa-apple center-content shadow"></i>
                    <h6 className="text-center text-white">ios</h6>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Video;
