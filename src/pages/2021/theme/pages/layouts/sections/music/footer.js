import React from 'react';
import { FooterData } from '../../../../database/layouts/music/database';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
const Footer = () => (
  <footer className="music bg-footer bg-shadow-top-bottom pt-0">
    <Container>
      <Row>
        {FooterData.map((item, i) => {
          return (
            <Col sm="4" key={i}>
              <div className="contact-details text-center">
                <h4 className="contact-heading gradient-text">{item.add1}</h4>
                <h6 className="contact-sub-text">{item.add2},</h6>
                <h6 className="contact-sub-text">{item.add3}.</h6>
              </div>
            </Col>
          );
        })}
      </Row>
      <Form className="form-footer p-t-50">
        <Row>
          <Col lg="6" sm="6">
            <FormGroup>
              <Input placeholder="your name" type="text" />
            </FormGroup>
          </Col>
          <Col lg="6" sm="6">
            <FormGroup>
              <Input placeholder="your email" type="text" />
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <textarea className="form-control" placeholder="your message" rows="6"></textarea>
            </FormGroup>
          </Col>
          <div className="booking">
            <a className="btn btn-default btn-gradient m-0-auto">send</a>
          </div>
        </Row>
      </Form>
    </Container>
  </footer>
);

export default Footer;
