import React from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'reactstrap';
const Counter = () => (
  <section className="gym counter  bg-img3 bg1">
    <Container>
      <Row>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/gym/counter/happy-icon.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="text-white counts">
                  <CountUp end={1510} duration={10} />
                </h2>
              </div>
              <div className="count-desc">
                <h5 className="text-white">Satisfied Customers</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/gym/counter/project-icon.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="text-white counts">
                  <CountUp end={306} duration={10} />
                </h2>
              </div>
              <div className="count-desc">
                <h5 className="text-white">Projects Completed</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/gym/counter/work-icon.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="text-white counts">
                  <CountUp end={48502} duration={10} />
                </h2>
              </div>
              <div className="count-desc">
                <h5 className="text-white">Hours Worked</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col md="3" xs="6" className="counter-container">
          <div className="counters">
            <img
              alt=""
              className="img-fluid counter-img"
              src="/assets/images/gym/counter/award-icon.png"
            />
            <div className="counter-text">
              <div className="count-number">
                <h2 className="text-white counts">
                  <CountUp end={12} duration={10} />
                </h2>
              </div>
              <div className="count-desc">
                <h5 className="text-white">Awwards Winning</h5>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Counter;
