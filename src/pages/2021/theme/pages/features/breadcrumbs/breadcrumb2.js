import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Breadcrumb2 = () => (
  <section className="p-b-0 agency inner-pagetitle">
    <div className="title title2 title-inner">
      <div className="main-title">
        <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
          <span>type-2</span>
        </h2>
      </div>
    </div>
    <section className="breadcrumb-section-main inner-2 breadcrumb-section-sm">
      <Container>
        <Row>
          <Col xs="12">
            <div className="breadcrumb-contain">
              <div>
                <h2 className="breadcrumb-txt">breadcrumb </h2>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-right"></i>feature
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-right"></i>breadcrumb center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </section>
);

export default Breadcrumb2;
