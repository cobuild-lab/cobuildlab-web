import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
const Contact2 = () => (
  <section className=" bg-light-inner p-b-0 agency inner-pagetitle">
    <Container>
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center main-text text-uppercase my-0">
                <span>contact 2</span>
              </h2>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <section className="music bg-footer">
      <Container>
        <Row>
          <Col sm="4">
            <div className="contact-details text-center">
              <h4 className="contact-heading text-white ">Show address</h4>
              <h6 className="contact-sub-text text-white">Exllasa Mall,</h6>
              <h6 className="contact-sub-text text-white">City mall, marid.</h6>
            </div>
          </Col>
          <Col sm="4">
            <div className="contact-details text-center">
              <h4 className="contact-heading text-white ">Show address</h4>
              <h6 className="contact-sub-text text-white">Exllasa Mall,</h6>
              <h6 className="contact-sub-text text-white">City mall, marid.</h6>
            </div>
          </Col>
          <Col sm="4">
            <div className="contact-details text-center">
              <h4 className="contact-heading  text-white">Show address</h4>
              <h6 className="contact-sub-text text-white">Exllasa Mall,</h6>
              <h6 className="contact-sub-text text-white">City mall, marid.</h6>
            </div>
          </Col>
        </Row>
        <Form className="form-footer p-t-50">
          <Row>
            <Col sm="6">
              <FormGroup>
                <Input placeholder="your name" type="text" />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Input placeholder="your email" type="text" />
              </FormGroup>
            </Col>
            <Col xs="12">
              <FormGroup>
                <textarea className="form-control" placeholder="your message" rows="6"></textarea>
              </FormGroup>
            </Col>
            <div className="booking">
              <a className="btn btn-default primary-btn m-0-auto bg-black">send</a>
            </div>
          </Row>
        </Form>
      </Container>
    </section>
  </section>
);

export default Contact2;
