import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
const Event2 = () => (
  <Fragment>
    <section className="event schedule set-relative" id="schedule">
      <Container>
        <Row>
          <Col xs="12">
            <div className="title title2 title-inner">
              <div className="main-title">
                <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
                  <span>schedule 1</span>
                </h2>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <div className="cal-time">
              <div className="time">
                <h4 className="text-capitalize monday-text">Monday, September 30, 2019</h4>
              </div>
            </div>
            <div className="event-container scrollbar">
              <div>
                <div className="cal-time events">
                  <Row>
                    <Col md="10">
                      <div className="schedule-event">
                        <h5 className="names">Vicky Smith</h5>
                        <img
                          alt=""
                          className="img-fluid schedule-img"
                          src="../assets/images/event/icon.png"
                        />
                        <p className="schedule-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of.
                        </p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="timing">
                        <h5 className="event-time">08:00</h5>
                        <div className="border-container">
                          <div className="border-dashed"></div>
                        </div>
                        <h5 className="event-time">10:00</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="cal-time events">
                  <Row>
                    <Col md="10">
                      <div className="schedule-event">
                        <h5 className="names">Vicky Smith</h5>
                        <img
                          alt=""
                          className="img-fluid schedule-img"
                          src="../assets/images/event/icon.png"
                        />
                        <p className="schedule-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of.
                        </p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="timing">
                        <h5 className="active event-time center-content">08:00</h5>
                        <div className="border-container">
                          <div className="border-dashed active"></div>
                        </div>
                        <h5 className="active event-time center-content">10:00</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className=" cal-time events">
                  <Row>
                    <Col md="10">
                      <div className="schedule-event">
                        <h5 className="names">Vicky Smith</h5>
                        <img
                          alt=""
                          className="img-fluid schedule-img"
                          src="../assets/images/event/icon.png"
                        />
                        <p className="schedule-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of.
                        </p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="timing">
                        <h5 className="event-time center-content">08:00</h5>
                        <div className="border-container">
                          <div className="border-dashed"></div>
                        </div>
                        <h5 className="event-time center-content">10:00</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className=" cal-time events">
                  <Row>
                    <Col md="10">
                      <div className="schedule-event">
                        <h5 className="names">Vicky Smith</h5>
                        <img
                          alt=""
                          className="img-fluid schedule-img"
                          src="../assets/images/event/icon.png"
                        />
                        <p className="schedule-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of.
                        </p>
                      </div>
                    </Col>
                    <Col md="2">
                      <div className="timing">
                        <h5 className="event-time center-content">08:00</h5>
                        <div className="border-container">
                          <div className="border-dashed"></div>
                        </div>
                        <h5 className="event-time center-content">10:00</h5>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Fragment>
);

export default Event2;
