import React, { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const ModalSection = () => {
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
                <h2 className="m-b-20">click here for the Modal popup</h2>
                <Button className="popup-with-form btn btn-default primary-btn" onClick={toggle}>
                  click here
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modal-no-header close-right"></ModalHeader>
        <ModalBody className="agency login-modal p-0">
          <div className="modal-body text-center">
            <h3 className="m-b-20">modal description</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s.
            </p>
            <a
              aria-label="Close"
              className="btn btn-default primary-btn m-t-20"
              data-dismiss="modal">
              close
            </a>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default ModalSection;
