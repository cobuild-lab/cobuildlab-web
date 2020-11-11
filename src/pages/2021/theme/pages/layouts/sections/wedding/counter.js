import React from 'react';
import CountUp from 'react-countup';
import { CounterData } from '../../../../database/layouts/wedding/database';
import { Container, Row, Col } from 'reactstrap';
const Counter = () => (
  <section className="wedding counter">
    <Container>
      <Row>
        {CounterData.map((item, i) => {
          return (
            <Col md="3" xs="6" className="counter-container" key={i}>
              <div className="counters">
                <img alt="" className="img-fluid counter-img" src={item.img} />
                <div className="counter-text">
                  <div className="count-number">
                    <h2 className="counts text-center">
                      <CountUp end={item.count} />
                    </h2>
                  </div>
                  <h6 className="count-desc text-center">{item.title}</h6>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);

export default Counter;
