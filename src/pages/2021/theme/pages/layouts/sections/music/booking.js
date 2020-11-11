import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
const Booking = () => (
  <section className="music booking bg-black pb-0">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title4">
            <div className="main-title">
              <h2>event booking</h2>
            </div>
            <div className="sub-title">
              <p>we are wait for you</p>
            </div>
          </div>
        </Col>
        <Col md="10" className="offset-md-1">
          <div className="title title3">
            <div className="sub-title">
              <p className="text-white">
                Register now and reserve your seat for this <span>year's Unice,</span>
                the largest
                <span>web development</span> and online marketing <span>conference in UK,</span>
                covering everything you need to know in order to develop a successful online
                business.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Col xs="12">
        <Form className="form-inline m-b-50 row">
          <Col>
            <FormGroup>
              <input placeholder="FIRST NAME" type="text" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <input placeholder="LAST NAME" type="text" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <input placeholder="EMAIL" type="text" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <input placeholder="MOBILE" type="text" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <input placeholder="COMPANY NAME" type="text" />
            </FormGroup>
          </Col>
        </Form>

        <div className="text-center">
          <a className="btn btn-default btn-gradient m-0-auto">register</a>
        </div>
      </Col>
    </Container>
  </section>
);

export default Booking;
