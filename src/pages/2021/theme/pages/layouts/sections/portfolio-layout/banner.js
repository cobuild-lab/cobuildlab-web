import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Banner = () => (
  <section className="portfolio-metro bg p-b-0 agency">
    <Container fluid={true}>
      <Container>
        <Row>
          <Col md="9" sm="9" className="text-center ">
            <div className="portfolio_section">
              <div>
                <h1 className="breadcrumb-text">
                  {' '}
                  great <span className="bold-text color-animated">portfolio metro</span>
                </h1>
              </div>
            </div>
          </Col>
          <Col md="2" sm="3" className="text-center">
            <img
              alt=""
              className="img-fluid man"
              src="/assets/images/portfolio/portfolio-new/man.png"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  </section>
);

export default Banner;
