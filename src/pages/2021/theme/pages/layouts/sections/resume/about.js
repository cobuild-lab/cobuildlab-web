import React from 'react';
import { AboutData } from '../../../../database/layouts/resume/database';
import { Container, Row, Col } from 'reactstrap';
const About = () => (
  <section className="resume about" id="about">
    <Container>
      <div className="title title2">
        <Row>
          <Col md="8" className="offset-md-2">
            <h6 className="font-primary borders main-text text-uppercase">
              <span>about</span>
            </h6>
            <div className="sub-title">
              <div>
                <h2 className="title-text">About me</h2>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row>
        {AboutData.map((item, i) => {
          return (
            <Col md="3" xs="6" key={i}>
              <div className="text-center radial">
                <div className="radial-bar radial-bar-primary" data-label={item.timer}></div>
                <h4 className="color-light">{item.name}</h4>
                <div className="border-container">
                  <div className="borders-bottom"></div>
                </div>
                <div>
                  <h4>{item.exp}</h4>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="text-center m-t-50">
        <a className="btn btn-default primary-btn">know more now</a>
      </div>
    </Container>
  </section>
);

export default About;
