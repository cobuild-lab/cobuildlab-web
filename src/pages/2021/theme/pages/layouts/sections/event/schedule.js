import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Schedule = () => (
  <section className="event schedule set-relative" id="schedule">
    <div className="circle"></div>
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title3">
            <div className="main-title">
              <h2>
                <span>our</span> schedule
              </h2>
            </div>
            <div className="sub-title">
              <p>
                Register now and reserve your seat for this <span>year's Unice,</span> the largest{' '}
                <span>web development</span> and online marketing <span>conference in UK,</span>
                covering everything you need to know in order to develop a successful online
                business.
              </p>
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
              <div className=" cal-time events">
                <Row>
                  <Col md="10">
                    <div className="schedule-event">
                      <h5 className="names">Vicky Smith</h5>
                      <img
                        alt=""
                        className="img-fluid schedule-img"
                        src="/assets/images/event/icon.png"
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
              <div className=" cal-time events">
                <Row>
                  <Col md="10">
                    <div className="schedule-event">
                      <h5 className="names">Sam Rowling</h5>
                      <img
                        alt=""
                        className="img-fluid schedule-img"
                        src="/assets/images/event/icon.png"
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
                      <h5 className="active event-time center-content">10:00</h5>
                      <div className="border-container">
                        <div className="border-dashed active"></div>
                      </div>
                      <h5 className="active event-time center-content">01:00</h5>
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
                        src="/assets/images/event/icon.png"
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
                      <h5 className="event-time center-content">02:00</h5>
                      <div className="border-container">
                        <div className="border-dashed"></div>
                      </div>
                      <h5 className="event-time center-content">06:00</h5>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className=" cal-time events">
                <Row>
                  <Col md="10">
                    <div className="schedule-event">
                      <h5 className="names">Sam Rowling</h5>
                      <img
                        alt=""
                        className="img-fluid schedule-img"
                        src="/assets/images/event/icon.png"
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
                      <h5 className="event-time center-content">07:00</h5>
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
);

export default Schedule;
