import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'reactstrap';
const Format = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <section className="app2 format quality p-t-0">
      <div className="animated-bg">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <Container>
        <Row>
          <Col sm="6" className="counters set-order-2">
            <div className="abouts center-text">
              <div>
                <div className="format-head-text">
                  <h3 className="about-font-header font-secondary">High Quality Functions</h3>
                </div>
                <div className="format-sub-text">
                  <p className="about-para">
                    You can now use all Social Network from this Lunatic app also. Writers and stars
                    of Veep have responded incredulous to the news an Australian politician required
                    stitches after knocking himself unconscious while laughing.
                  </p>
                </div>
                <ul className="icon-collection">
                  <li className="about-icon">
                    <a className="center-content" href="#">
                      <h4 className="quality">2 M</h4>
                      <h6 className="users ">user</h6>
                    </a>
                  </li>
                  <li className="about-icon">
                    <a className="center-content" href="#">
                      <h4 className="quality">2.5 M</h4>
                      <h6 className="users">download</h6>
                    </a>
                  </li>
                </ul>
                <a className="btn btn-default btn-gradient m-t-45">learn more</a>
              </div>
            </div>
          </Col>
          <Col sm="6" className="counters set-height overflow-hide">
            <img
              alt=""
              className="img-fluid mobile2"
              data-aos="fade-left"
              src="/assets/images/app_landing2/l-2.png"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Format;
