import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const GitSection = () => (
  <>
    {/*  <!--gif section start--> */}
    <section className="home-section pb-0" id="home">
      <Container>
        <Row>
          <Col sm="8" className="offset-sm-2">
            <div>
              <div className="home-container">
                <div className="home-logo-container">
                  <img
                    src="assets/images/landing/home/main-icon.png"
                    alt=""
                    className="img-fluid logo"
                  />
                </div>
                <h1>One stop for all one page landings...</h1>
                <p>
                  Unice is Perfect landing HTML template for any business. it has all features and
                  modules to create your amazing landing page. you can use this template for selling
                  Agency, app landding, coffee, event, gym, music, digital, pizza, resume, sass,
                  wedding, yoga etc.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="home-contain">
        <ul>
          <li className="inner-slide1">
            <img src="assets/images/landing/home/2.png" className="img-fluid" alt="" />
          </li>
          <li className="inner-slide2">
            <img src="assets/images/landing/home/3.png" className="img-fluid" alt="" />
          </li>

          <li className="inner-slide4">
            <img src="assets/images/landing/home/4.png" className="img-fluid" alt="" />
          </li>
          <li className="inner-slide5">
            <img src="assets/images/landing/home/5.png" className="img-fluid" alt="" />
          </li>
        </ul>
      </div>
      <div className="animate-gif">
        <img
          src="assets/images/landing/animate-icon/squar.png"
          className="img-fluid hom-suar1"
          alt=""
        />
        <img
          src="assets/images/landing/animate-icon/squar.png"
          className="img-fluid hom-suar2"
          alt=""
        />
        <img
          src="assets/images/landing/animate-icon/ract.png"
          className="img-fluid hom-ract1"
          alt=""
        />
        <img
          src="assets/images/landing/animate-icon/ract.png"
          className="img-fluid hom-ract2"
          alt=""
        />
        <img
          src="assets/images/landing/animate-icon/round-3.png"
          className="img-fluid hom-round1"
          alt=""
        />
        <img
          src="assets/images/landing/animate-icon/round-4.png"
          className="img-fluid hom-round2"
          alt=""
        />
        <img
          src="assets/images/landing/animate-icon/sib-2.png"
          className="img-fluid hom-sib2"
          alt=""
        />
      </div>
      <div className="inner-slide3">
        <img src="assets/images/landing/home/12.png" className="main-gif img-fluid" alt="" />
      </div>
    </section>
  </>
  // {/* <!--gif section end--> */}
);

export default GitSection;
