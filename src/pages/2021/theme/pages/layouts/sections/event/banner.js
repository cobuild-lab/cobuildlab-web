import React, { useRef } from 'react';
import Typed from 'react-typed';
import CountdownComponent from '../../../../containers/common/countdown';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'next/router';

const Banner = ({ router }) => {
  const scrollToRef = (val) => {
    document.querySelector(`#${val}`).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="event header" id="home">
      <div className="header3 bg">
        <div className="event-content">
          <Container>
            <Row>
              <Col xl="6" md="10" className="offset-xl-3 offset-md-1">
                <div className="center-text">
                  <div className="text-center w-100">
                    <div className="h1-margin">
                      <h1>
                        come{' '}
                        <span className="typed">
                          <Typed
                            strings={['Unice']}
                            typeSpeed={80}
                            backSpeed={50}
                            showCursor={false}
                            loop></Typed>
                        </span>
                      </h1>
                    </div>
                    <div className="wedding-time">
                      <div>
                        <div className="event-countdown">
                          <CountdownComponent />
                        </div>
                      </div>
                    </div>
                    <h4 className="text-white">
                      <i className="fa fa-map-marker m-r-10 text-white"></i>
                      Zexson Pro, New York, NY 254
                    </h4>
                    <h5 className="header-sub-text text-white">
                      <i className="fa fa-calendar m-r-10"></i>
                      01-04 March 2019
                    </h5>
                    <div className="text-center link-horizontal">
                      <a className=" btn btn-default back-white text-uppercase border-not" href="#">
                        view event details
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {router.pathname !== '/elements/count-down' ? (
          <div className="set-bottom set-abs">
            <a className="center-content down" onClick={() => scrollToRef('booking')}>
              <img alt="" className="scroll-down" src="/assets/images/event/image-down.png" />
            </a>
          </div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default withRouter(Banner);
