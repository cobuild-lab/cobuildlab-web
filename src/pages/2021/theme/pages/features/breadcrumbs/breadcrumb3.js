import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Breadcrumb3 = () => (
  <section className="p-b-0 agency inner-pagetitle">
    <div className="title title2 title-inner">
      <div className="main-title">
        <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
          <span>type-3</span>
        </h2>
      </div>
    </div>
    <section className="breadcrumb-section-main inner-3">
      <Container>
        <Row>
          <Col xs="12">
            <div className="breadcrumb-contain">
              <div>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-home"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-right"></i> contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="breadcrumb-txt">Breadcrumb</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </section>
);

export default Breadcrumb3;
