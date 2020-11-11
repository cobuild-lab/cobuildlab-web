import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Breadcrumb1 = () => (
  <section className="p-b-0 agency inner-pagetitle">
    <div className="title title2 title-inner">
      <div className="main-title">
        <h2 className="font-primary borders text-center main-text text-uppercase m-b-0">
          <span>type-1</span>
        </h2>
      </div>
    </div>
    <section className="agency breadcrumb-section-main breadcrumb-back-none inner-1 breadcrumb-section-sm">
      <Container>
        <Row>
          <Col xs="12">
            <Col xs="12">
              <h2 className="breadcrumb-txt text-center">Breadcrumb</h2>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  </section>
);

export default Breadcrumb1;
