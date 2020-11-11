import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const About = () => (
  <section className="wedding format">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title">
            <img
              alt=""
              className="img-fluid title-img"
              src="/assets/images/wedding-img/bottom.png"
            />
            <div className="main-title">
              <h2 className="gradient-text">Meet Happy Couple</h2>
            </div>
            <div className="sub-title">
              <p>
                A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut mollit anim id est laborum. Sedut perspiciatis unde omnis.
              </p>
            </div>
          </div>
        </Col>
        <Col xl="4" md="6" className="offset-xl-2">
          <img
            alt=""
            className="img-fluid about-img"
            src="/assets/images/wedding-img/about-us.png"
          />
        </Col>
        <Col xl="4" lg="6" md="6">
          <div className="center-text">
            <div>
              <div className="format-small-text">
                <h6># Love Bird</h6>
              </div>
              <div className="format-head-text">
                <h3 className="about-font-header gradient-text">about</h3>
              </div>
              <div className="format-sub-text">
                <p className="about-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <p className="about-para">
                  When an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry.
                </p>
              </div>
              <a className=" btn btn-default btn-gradient text-white" href="#">
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
