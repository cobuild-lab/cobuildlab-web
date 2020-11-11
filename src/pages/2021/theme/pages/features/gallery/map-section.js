import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const MapSection = () => {
  const [modal, setModal] = useState();
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <section className="login-popup agency">
      <Container>
        <Row>
          <Col md="6" className="offset-md-3">
            <div className="text-center">
              <h2 className="m-b-20">click here for the google map popup</h2>
              <Button className="popup-with-form btn btn-default primary-btn" onClick={toggle}>
                click here
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
        <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
        <ModalBody className="iframe-modal">
          <iframe
            className="mfp-iframe"
            frameBorder="0"
            allowFullScreen=""
            src="//www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"></iframe>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default MapSection;
