import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const About = () => (
  <section className="event about bg bg-img bg-about">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title3 only-title">
            <div className="main-title">
              <h2 className=" text-white">About event</h2>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" className="offset-lg-1">
          <div className="text-right">
            <div className="announcer-img">
              <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
              <img alt="" className="img-fluid" src="/assets/images/event/1.jpg" />
              <img
                alt=""
                className="img-fluid"
                data-tilt
                data-tilt-max="3"
                data-tilt-perspective="500"
                data-tilt-speed="400"
                src="/assets/images/event/l3.jpg"
              />
            </div>
          </div>
        </Col>
        <Col xl="5" lg="7" md="6" className="offset-xl-1">
          <div className="abouts center-text">
            <div className="format">
              <div className="format-small-text">
                <h6 className="text-white borders-before text-uppercase">
                  <span>event progress</span>
                </h6>
              </div>
              <div className="format-head-text">
                <h3 className="about-font-header text-white">Welcome To Business Meeting 2020</h3>
              </div>
              <div className="format-sub-text">
                <p className="about-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <p className="about-para">
                  When an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <a className="btn btn-default " href="#">
                read more
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
