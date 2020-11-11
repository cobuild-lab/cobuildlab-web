import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const About = () => (
  <section className="gym format about-detail">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="center-text">
            <div className="text-center">
              <div className="format-head-text">
                <h3 className="about-font-header gradient-text">about us</h3>
              </div>
              <div className="format-sub-text mb-0">
                <p className="p-light about-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.When an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. Lorem Ipsum is simply dummy text.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
