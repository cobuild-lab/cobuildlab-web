import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonial = () => (
  <section className="testimonial-main">
    <div className="testimonial-back">
      <h1>testimonial</h1>
    </div>
    <Container>
      <Row>
        <Col xs="12">
          <div className="title">
            <h2>testimonial</h2>
            <h6>happy-client</h6>
            <hr className="bottom-border" />
          </div>
        </Col>
        <Col xl="8" className="offset-xl-2">
          <div className="testimonial-contain">
            <Row>
              <Col md="8" className="offset-md-2 pl-md-0">
                <Slider className="slide-1 testimonial-right" {...settings}>
                  <div>
                    <div className="testimonial-right">
                      <div className="media">
                        <img src="assets/images/landing/testimonial.png" alt="testimonial" />
                        <div className="media-body">
                          <h5>fcastillo18</h5>
                          Dominican Republic, Member since February 2019
                        </div>
                      </div>
                      <p>
                        The truth is that this a amazing template, they have done an incredible job.
                        Beside that, I had a little situation and with their help I could be able to
                        solve it, they give the right solution at once! Thanks!
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="testimonial-right">
                      <div className="media">
                        <img src="assets/images/landing/testimonial.png" alt="testimonial" />
                        <div className="media-body">
                          <h5>drinkstuff</h5>
                          United Kingdom, Member since April 2019
                        </div>
                      </div>
                      <p>
                        Great theme! Exactly what we were looking for for our new website. We had an
                        issue with the mega menus and we contacted support with a video demo of the
                        issue and example HTML/CSS via FreshDesk. The issue was fixed within 24
                        hours. Superb!
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="testimonial-right">
                      <div className="media">
                        <img src="assets/images/landing/testimonial.png" alt="testimonial" />
                        <div className="media-body">
                          <h5>adelinabrask1988</h5>
                          Denmark, Member since May 2019
                        </div>
                      </div>
                      <p>
                        Everything is perfect about this theme. And if something is not perfect the
                        team has helped me fast and friendly to adapt what I needed. It's a complete
                        and complex theme that has saved me money on extra apps . I recommend it
                        from the heart. Especially the team around it.
                      </p>
                    </div>
                  </div>
                </Slider>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="animat-test">
      <img src="assets/images/landing/animate-icon/sib-1.png" className="test-sib" alt="" />
      <img src="assets/images/landing/animate-icon/round-2.png" className="test-round" alt="" />
      <img src="assets/images/landing/animate-icon/ract.png" className="test-ract" alt="" />
      <img src="assets/images/landing/animate-icon/squar.png" className="test-squar1" alt="" />
      <img src="assets/images/landing/animate-icon/squar.png" className="test-squar2" alt="" />
    </div>
  </section>
);

export default Testimonial;
