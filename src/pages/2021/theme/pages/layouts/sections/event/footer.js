import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
const Footer = () => (
  <React.Fragment>
    <footer className="event contact set-relative bg bg-img bg-about p-b-0" id="contact">
      <Container className="p-b-150">
        <Row>
          <Col md="6" className="offset-md-3">
            <div className="title title3 only-title">
              <div className="main-title">
                <h2 className=" text-white">Contact Us</h2>
              </div>
            </div>
          </Col>
          <Col xl="5" md="6" className="offset-xl-1 p-r-0 map">
            <div className="iframe-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"></iframe>
            </div>
          </Col>
          <Col xl="5" md="6" className="p-l-0 set-z-index form-footer">
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
                <a className="btn btn-default primary-btn m-0-auto">send</a>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <img alt="" className="set-abs top-0 plane2" src="/assets/images/event/footer/2.png" />
      <img alt="" className="set-abs bottom-0 plane" src="/assets/images/event/footer/1.png" />
    </footer>
    <div className="event copyright flex">
      <Container fluid={true}>
        <Row>
          <Col md="6">
            <div className="link-horizontal d-flex align-content-lg-center h-100">
              <ul>
                <li>
                  <a className="center-content" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="center-content" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="center-content" href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="center-content" href="#">
                    <i className="fa fa-google"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="6">
            <p className="copyright-text text-right text-white">
              © 2020 Unice. All Rights Reserved{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
);

export default Footer;
