import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Container, Row, Col } from 'reactstrap';
const Banner = () => {
  const [sideSection, setSideSection] = useState(false);

  const sidesection = () => {
    if (!sideSection) {
      setSideSection(true);
      document.querySelector('.side-section').classList.add('d-block');
    } else {
      setSideSection(false);
      document.querySelector('.side-section').classList.remove('d-block');
    }
  };

  return (
    <section className="music header" id="header">
      <div className="music-content">
        <div className="music-bg bg bg-shadow-top">
          <Tilt perspective="20000" transitionSpeed="3000">
            <div className="text-center w-100">
              <div className="img-height">
                <img alt="" className="img-fluid" src="/assets/images/music/man.png" />
              </div>
            </div>
          </Tilt>
        </div>
      </div>
      <div className="right-side">
        <div className="circle">
          <img alt="" className="img-fluid" src="/assets/images/music/icons/aero.png" />
        </div>
        <h1>
          2019 <span>18</span>
        </h1>
      </div>
      <div className="left-side">
        <h6 className="follow-text">follow us</h6>
        <ul>
          <li>
            <a href="#">
              <img alt="" className="img-fluid" src="/assets/images/music/icons/insta.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="" className="img-fluid" src="/assets/images/music/icons/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img alt="" className="img-fluid" src="/assets/images/music/icons/facebook.png" />
            </a>
          </li>
        </ul>
      </div>
      <Container className="music-container">
        <Row>
          <Col md="10" className="offset-md-1">
            <div className="play-bg d-flex">
              <div className="song-text-container h-100">
                <div className="d-flex h-100">
                  <div className="center-img">
                    <img alt="" className="img-fluid" src="/assets/images/music/icons/girl.png" />
                  </div>
                  <div className="song-text">
                    <h5 className="text-white song-head">Latest Song</h5>
                    <h6 className="text-white song-sub-head">Zrial doj</h6>
                  </div>
                </div>
              </div>
              <div className="play-setting m-auto">
                <div
                  aria-label="media player"
                  className="jp-audio"
                  id="jp_container_1"
                  role="application">
                  <div className="jp-type-playlist">
                    <div className="jp-gui jp-interface p-0 d-flex">
                      <div className="jp-controls">
                        <button className="jp-play m-r-15" role="button" tabIndex="0"></button>
                      </div>
                      <a onClick={sidesection}>
                        <i aria-hidden="true" className="fa fa-ellipsis-v"></i>
                      </a>
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
};

export default Banner;
