import React, { Fragment } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
const Contact1 = () => (
  <Fragment>
    <section className="p-b-0 agency inner-pagetitle">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title title2 title-inner">
              <div className="main-title">
                <h2 className="font-primary borders text-center main-text text-uppercase my-0">
                  <span>contact 1</span>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <footer
      className="event contact set-relative bg bg-img bg-about p-b-0 event-gradient"
      id="contact">
      <Container className="p-b-100">
        <Row>
          <Col md="10" className="offset-md-1">
            <div className="title title3">
              <div className="main-title">
                <h2 className=" text-white">our schedule</h2>
              </div>
              <div className="sub-title">
                <p className="text-white">
                  Register now and reserve your seat for this
                  <span>year's Unice,</span> the largest <span>web development</span> and online
                  marketing
                  <span>conference in UK,</span> covering everything you need to know in order to
                  develop a successful online business.
                </p>
              </div>
            </div>
          </Col>
          <Col xl="5" md="6" className="offset-xl-1 p-r-0 map">
            <div className="iframe-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"></iframe>
            </div>
          </Col>
          <Col xl="5" md="6" className="p-l-0  set-z-index form-footer">
            <div className="bg-white">
              <Form>
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="name">Name *</Label>
                      <Input className="form-control" id="name" type="text" />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="Phone">Phone *</Label>
                      <Input className="form-control" id="Phone" type="text" />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="Email">Email *</Label>
                      <Input className="form-control" id="Email" type="text" />
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup>
                      <Label htmlFor="Subject">Subject *</Label>
                      <Input className="form-control" id="Subject" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label htmlFor="Message">Message *</Label>
                  <Input className="form-control" id="Message" type="text" />
                </FormGroup>

                <a className="btn btn-default primary-btn event-btn m-0-auto">send</a>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <img alt="" className="set-abs top-0 plane2" src="../assets/images/event/footer/2.png" />
      <img alt="" className="set-abs bottom-0 plane" src="../assets/images/event/footer/1.png" />
    </footer>
  </Fragment>
);

export default Contact1;
