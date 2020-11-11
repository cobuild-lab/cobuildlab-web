import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Experience = () => (
  <section className="yoga format" id="services">
    <div className="animated-bg">
      <i></i>
      <i></i>
      <i></i>
    </div>

    <Container>
      <Row>
        <Col md="12">
          <div className="title title2">
            <h2>Experience yoga</h2>
            <img alt="" className="img-fluid" src="/assets/images/yoga-img/logo/wave-blue.png" />
          </div>
        </Col>
        <Col md="7" className="experience-container">
          <img alt="" className="img-fluid exp-img" src="/assets/images/yoga-img/exprience.png" />
        </Col>
        <Col md="5" className="counters">
          <div className="center-text">
            <div className="w-100">
              <div className="meter m-0">
                <div className="progress progress1">
                  <div>
                    <h6 className="lorem">Breathing</h6>
                    <h6 className="percent">90%</h6>
                  </div>
                </div>
              </div>
              <div className="meter">
                <div className="progress progress2">
                  <div>
                    <h6 className="lorem">Metabolism</h6>
                    <h6 className="percent">80%</h6>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="meter">
                <div className="progress progress3">
                  <div>
                    <h6 className="lorem">Flexibility</h6>
                    <h6 className="percent">85%</h6>
                  </div>
                </div>
              </div>
              <div className="meter">
                <div className="progress progress4">
                  <div>
                    <h6 className="lorem">Toned Muscles</h6>
                    <h6 className="percent">70%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Experience;
