import React, { Fragment, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
const Popup = () => {
  const [modal, setModal] = useState();
  const [activeTab, setActiveTab] = useState('1');

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Fragment>
      {/* // <!-- Login-popup section start --> */}
      <section className="login-popup">
        <Container>
          <Row>
            <Col md="6" className="offset-md-3">
              <div className="text-center">
                <h2 className="m-b-20">click here for the form popup</h2>
                <Button className="popup-with-form btn btn-default primary-btn" onClick={toggle}>
                  click here
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* // <!-- Login-popup section end --> */}

      {/* // <!-- Login-modal section start --> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modal-no-header close-right"></ModalHeader>
        <ModalBody>
          <div className="modal-body login-modal">
            <Nav tabs className="nav nav-pills mb-5">
              <NavItem>
                <NavLink
                  className={activeTab == '1' ? 'active' : ''}
                  onClick={() => setActiveTab('1')}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab == '2' ? 'active' : ''}
                  onClick={() => setActiveTab('2')}>
                  Sign Up
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="tab-content" activeTab={activeTab}>
              <TabPane tabId="1" aria-labelledby="pills-home-tab" className="" role="tabpanel">
                {/* <!-- login-form --> */}
                <Form>
                  <div className="form-row">
                    <FormGroup className="col-md-12">
                      <Label for="inputEmail">Email</Label>
                      <Input
                        className="form-control"
                        id="inputEmail"
                        placeholder="Email"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                      <Label for="inputPassword05">Password</Label>
                      <Input
                        className="form-control"
                        id="inputPassword05"
                        placeholder="Password"
                        type="password"
                      />
                    </FormGroup>
                  </div>
                  <button className="btn primary-btn btn-default text-uppercase">Login</button>
                </Form>
                {/* <!-- end login form --> */}
              </TabPane>
              <TabPane tabId="2" aria-labelledby="pills-profile-tab" className="" role="tabpanel">
                {/* <!-- sign up form --> */}
                <Form>
                  <div className="form-row">
                    <FormGroup className="col-md-12">
                      <Label for="inputEmail05">Email</Label>
                      <Input
                        className="form-control"
                        id="inputEmail05"
                        placeholder="Email"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Label for="inputPassword04">Password</Label>
                      <Input
                        className="form-control"
                        id="inputPassword04"
                        placeholder="Password"
                        type="password"
                      />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                      <Label for="inputPassword4">Confirm Password</Label>
                      <Input
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                        type="password"
                      />
                    </FormGroup>
                  </div>
                  <FormGroup>
                    <Label for="inputAddress">Address</Label>
                    <Input
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                      type="text"
                    />
                  </FormGroup>

                  <button className="btn btn-default primary-btn text-uppercase">Sign Up</button>
                </Form>
                {/* <!-- end sign up form --> */}
              </TabPane>
            </TabContent>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default Popup;
