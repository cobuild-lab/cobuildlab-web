import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Schedule = () => (
  <section className="yoga format bg img-1">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h2 className="text-white">Yoga Schedule</h2>
            <img alt="" className="img-fluid" src="/assets/images/yoga-img/logo/bottom-curve.png" />
          </div>
        </Col>
        <Col lg="5" md="6" className="set-order-2">
          <div className=" center-text">
            <div>
              <div className="format-head-text">
                <h3 className="about-font-header text-white">
                  #1 <span>monday</span>
                </h3>
              </div>
              <div className="format-sub-text">
                <p className="about-para text-white">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <p className="about-para text-white">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </div>
              <ul className="icon-collection">
                <li className="about-icon">
                  <a className="center-content" href="#">
                    <img alt="" className="img-fluid" src="/assets/images/yoga-img/icon/1.png" />
                  </a>
                </li>
                <li className="about-icon">
                  <a className="center-content" href="#">
                    <img alt="" className="img-fluid" src="/assets/images/yoga-img/icon/2.png" />
                  </a>
                </li>
                <li className="about-icon">
                  <a className="center-content" href="#">
                    <img alt="" className="img-fluid" src="/assets/images/yoga-img/icon/3.png" />
                  </a>
                </li>
              </ul>
              <a className="btn btn-default back-white m-t-45">learn more</a>
            </div>
          </div>
        </Col>
        <Col lg="7" md="6">
          <div className="girl-img-container">
            <img
              alt=""
              className="img-fluid girl-yoga"
              src="/assets/images/yoga-img/sechdule/img.png"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Schedule;
