import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {
  AllImgData,
  UsZoneData,
  VisitData,
  AnnualData,
} from '../../../../database/layouts/event/database';
import { Container, Row, Col } from 'reactstrap';
const Gallery = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <section className="event portfolio-section zoom-gallery set-relative">
      <div className="circle"></div>
      <Container>
        <Row>
          <Col md="10" className="offset-md-1">
            <div className="title title3">
              <div className="main-title">
                <h2>
                  <span>our</span> schedule
                </h2>
              </div>
              <div className="sub-title">
                <p>
                  Register now and reserve your seat for this <span>year's Unice,</span> the largest{' '}
                  <span>web development</span> and online marketing <span>conference in UK,</span>
                  covering everything you need to know in order to develop a successful online
                  business.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="filter-section">
            <Nav tabs className="filter-container isotopeFilters">
              <NavItem className="list-inline filter">
                <NavLink
                  className={activeTab == '1' ? 'active' : ''}
                  onClick={() => setActiveTab('1')}>
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab == '2' ? 'active' : ''}
                  onClick={() => setActiveTab('2')}>
                  Us Zone
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab == '3' ? 'active' : ''}
                  onClick={() => setActiveTab('3')}>
                  Annual Event
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab == '4' ? 'active' : ''}
                  onClick={() => setActiveTab('4')}>
                  Visit Event
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <div className="isotopeContainer">
          <TabContent className="isotopeContainer" activeTab={activeTab}>
            <TabPane tabId="1">
              <Masonry
                breakpointCols={3}
                className="my-masonry-grid row"
                columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                {AllImgData.map((data, i) => {
                  return (
                    <div className="isotopeSelector" key={i}>
                      <div className="overlay">
                        <div className="border-portfolio">
                          <a
                            className="zoom_gallery"
                            data-source="http://500px.com/photo/32736307"
                            href="/assets/images/event/gallery/1.jpg">
                            <div className="overlay-background">
                              <i className="fa fa-link"></i>
                            </div>
                            <img alt="" className="img-fluid" src={data.img} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Masonry>
            </TabPane>
            <TabPane tabId="2">
              <Masonry
                breakpointCols={3}
                className="my-masonry-grid row"
                columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                {UsZoneData.map((data, i) => {
                  return (
                    <div className="isotopeSelector" key={i}>
                      <div className="overlay">
                        <div className="border-portfolio">
                          <a
                            className="zoom_gallery"
                            data-source="http://500px.com/photo/32736307"
                            href="/assets/images/event/gallery/1.jpg">
                            <div className="overlay-background">
                              <i className="fa fa-link"></i>
                            </div>
                            <img alt="" className="img-fluid" src={data.img} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Masonry>
            </TabPane>
            <TabPane tabId="3">
              <Masonry
                breakpointCols={3}
                className="my-masonry-grid row"
                columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                {AnnualData.map((data, i) => {
                  return (
                    <div className="isotopeSelector" key={i}>
                      <div className="overlay">
                        <div className="border-portfolio">
                          <a
                            className="zoom_gallery"
                            data-source="http://500px.com/photo/32736307"
                            href="/assets/images/event/gallery/1.jpg">
                            <div className="overlay-background">
                              <i className="fa fa-link"></i>
                            </div>
                            <img alt="" className="img-fluid" src={data.img} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Masonry>
            </TabPane>
            <TabPane tabId="4">
              <Masonry
                breakpointCols={3}
                className="my-masonry-grid row"
                columnClassName="my-masonry-grid_column col-lg-4 col-md-6 col-12">
                {VisitData.map((data, i) => {
                  return (
                    <div className="isotopeSelector" key={i}>
                      <div className="overlay">
                        <div className="border-portfolio">
                          <a
                            className="zoom_gallery"
                            data-source="http://500px.com/photo/32736307"
                            href="/assets/images/event/gallery/1.jpg">
                            <div className="overlay-background">
                              <i className="fa fa-link"></i>
                            </div>
                            <img alt="" className="img-fluid" src={data.img} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Masonry>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
