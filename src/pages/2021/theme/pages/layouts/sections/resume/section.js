import React from 'react';
import Portfolio from '../../../../containers/portfolio/basic';
import { Row, Col } from 'reactstrap';
const Section = () => (
  <section className="resume portfolio-section zoom-gallery">
    <Row>
      <Col md="8" className="offset-md-2">
        <div className="title title2">
          <h6 className="font-primary borders main-text text-uppercase">
            <span>work</span>
          </h6>
          <div className="sub-title">
            <div>
              <h2 className="title-text">my latest work</h2>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Portfolio className="col-lg-3 col-sm-6 isotopeSelector" />
  </section>
);

export default Section;
