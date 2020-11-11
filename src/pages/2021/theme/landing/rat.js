import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Rat = () => (
  <section className="rate-us-section">
    <div className="rate-us-back">
      <h1>Any Problem</h1>
    </div>
    <Container>
      <Row>
        <Col xs="12">
          <div className="rate-us-contain">
            <div>
              <div className="rating-porson">
                <img
                  src="assets/images/landing/rating-parson.png"
                  className="img-fluid"
                  alt="rating-paron"
                />
              </div>
              <h1>Have Any Problem ?</h1>
              <p>No Worries-Support Services is Always To Support You</p>
              <a href="#" className="btn-gradient ">
                purchase now
              </a>
              <ul className="ratin-start">
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="animat-rat">
      <img src="assets/images/landing/animate-icon/sib-1.png" className="rat-sib" alt="" />
      <img src="assets/images/landing/animate-icon/round-2.png" className="rat-round" alt="" />
      <img src="assets/images/landing/animate-icon/ract.png" className="rat-ract" alt="" />
      <img src="assets/images/landing/animate-icon/squar.png" className="rat-squar1" alt="" />
      <img src="assets/images/landing/animate-icon/squar.png" className="rat-squar2" alt="" />
    </div>
  </section>
);

export default Rat;
