import React from 'react';
import CountUp from 'react-countup';
import { CounterData } from '../../../database/pages/aboutus/database';
import { Container, Row, Col } from 'reactstrap';
const Counter = () => (
  <section className="resume counter bg-pink">
    <Container>
      <Row>
        {CounterData.map((item, i) => {
          return (
            <Col xl="3" xs="6" className="counter-container" key={i}>
              <div className="counters">
                <img alt="" className="img-fluid counter-img" src={item.img} />
                <div className="counter-text">
                  <h3 className="count-text counts">
                    <CountUp end={item.count} />
                  </h3>
                  <h5 className="count-desc">{item.desc}</h5>
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
