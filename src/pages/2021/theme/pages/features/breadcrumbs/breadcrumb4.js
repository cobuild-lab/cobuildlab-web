import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Breadcrumb4 = () => (
  <section className="agency inner-pagetitle">
    <div className="title title2 title-inner">
      <div className="main-title">
        <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
          <span>type-4</span>
        </h2>
      </div>
    </div>
    <section className="breadcrumb-section-main inner-4 ">
      <Container>
        <Row>
          <Col xs="12">
            <div className="breadcrumb-contain">
              <div>
                <h2 className="breadcrumb-txt">contact</h2>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-double-right"></i> contact
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

export default Breadcrumb4;
