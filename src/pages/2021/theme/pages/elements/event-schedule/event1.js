import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
const Event1 = () => (
  <Fragment>
    <section className="pb-0 agency inner-pagetitle">
      <div className="title title2 title-inner">
        <div className="main-title">
          <h2 className="font-primary borders text-center main-text text-uppercase my-0">
            <span>event 1</span>
          </h2>
        </div>
      </div>
    </section>
    <section className="yoga event bg bg-gradient-color">
      <Container>
        <Row>
          <Col md="6">
            <div className="event-container d-flex">
              <div className="yoga-circle">
                <h3 className="gradient-text">01</h3>
                <h6 className="month">Aug</h6>
              </div>
              <div className="event-info center-content">
                <h4 className="text-white address">Menla Mountain Retreat</h4>
                <h6 className="text-white time">
                  August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm
                </h6>
                <h6 className="text-white city">
                  <i aria-hidden="true" className="fa fa-map-marker m-r-5"></i>Newyork
                </h6>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="event-container d-flex">
              <div className="yoga-circle">
                <h3 className="gradient-text">02</h3>
                <h6 className="month">Mar</h6>
              </div>
              <div className="event-info center-content">
                <h4 className="text-white address">Menla Mountain Center</h4>
                <h6 className="text-white time">
                  August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm
                </h6>
                <h6 className="text-white city">
                  <i aria-hidden="true" className="fa fa-map-marker m-r-5"></i>Newyork
                </h6>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="event-container d-flex">
              <div className="yoga-circle">
                <h3 className="gradient-text">03</h3>
                <h6 className="month">Jan</h6>
              </div>
              <div className="event-info center-content">
                <h4 className="text-white address">Menla Mountain Center</h4>
                <h6 className="text-white time">
                  August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm
                </h6>
                <h6 className="text-white city">
                  <i aria-hidden="true" className="fa fa-map-marker m-r-5"></i>Australia
                </h6>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="event-container d-flex">
              <div className="yoga-circle">
                <h3 className="gradient-text">04</h3>
                <h6 className="month">Jun</h6>
              </div>
              <div className="event-info center-content">
                <h4 className="text-white address">Menla Mountain Center</h4>
                <h6 className="text-white time">
                  August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm
                </h6>
                <h6 className="text-white city">
                  <i aria-hidden="true" className="fa fa-map-marker m-r-5"></i>US
                </h6>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="event-container d-flex">
              <div className="yoga-circle">
                <h3 className="gradient-text">05</h3>
                <h6 className="month">Jul</h6>
              </div>
              <div className="event-info center-content">
                <h4 className="text-white address">Menla Mountain Center</h4>
                <h6 className="text-white time">
                  August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm
                </h6>
                <h6 className="text-white city">
                  <i aria-hidden="true" className="fa fa-map-marker m-r-5"></i>UK
                </h6>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="event-container d-flex">
              <div className="yoga-circle">
                <h3 className="gradient-text">06</h3>
                <h6 className="month">Apr</h6>
              </div>
              <div className="event-info center-content">
                <h4 className="text-white address">Menla Mountain Retreat</h4>
                <h6 className="text-white time">
                  August 3, 2019 @ 8:00 am - September 30, 2019 @ 5:00 pm
                </h6>
                <h6 className="text-white city">
                  <i aria-hidden="true" className="fa fa-map-marker m-r-5"></i>India
                </h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Fragment>
);

export default Event1;
