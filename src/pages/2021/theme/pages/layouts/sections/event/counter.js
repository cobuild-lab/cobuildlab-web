import React from 'react';
import CountUp from 'react-countup';
import { CounterData } from '../../../../database/layouts/event/database';
import { Container, Row, Col } from 'reactstrap';
const Counter = () => (
  <section className="event counter set-relative bg bg-img3 bg-about">
    <Container>
      <Row>
        {CounterData.map((data, i) => {
          return (
            <Col md="3" xs="6" className="counter-container" key={i}>
              <div className="counters">
                <img alt="" className="img-fluid counter-img" src={data.img} />
                <div className="counter-text">
                  <h2 className="count-number text-white counts">
                    <CountUp end={data.count} duration={10} />
                  </h2>
                  <h6 className="count-desc text-white">{data.desc}</h6>
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
