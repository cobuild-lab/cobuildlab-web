import React, { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const YoutubeSection = () => {
  const [modal, setModal] = useState();
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <Fragment>
      <section className="login-popup agency">
        <Container>
          <Row>
            <Col md="6" className="offset-md-3">
              <div className="text-center">
                <h2 className="m-b-20">click here for the youtube popup</h2>
                <Button className="popup-with-form btn btn-default primary-btn" onClick={toggle}>
                  click here
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
    </Fragment>
  );
};

export default YoutubeSection;
