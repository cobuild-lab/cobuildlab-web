import React from 'react';
import Layout from '../../containers/common/common-layout';
import PortfolioSection from '../layouts/sections/portfolio-layout/section';
import { Container, Row, Col } from 'reactstrap';
const Gallery = () => (
  <Layout pathList={['elements', 'gallery']} pathTitle="elements with gallery">
    <section className="resume portfolio-section zoom-gallery agency">
      <Container>
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
        <PortfolioSection />
      </Container>
    </section>
  </Layout>
);

export default Gallery;
