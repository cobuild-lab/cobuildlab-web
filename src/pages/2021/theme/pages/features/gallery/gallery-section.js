import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import {
  AllImgData,
  BagsImgData,
  FeshionImgData,
  ShoesImgData,
  WatchImgData,
} from '../../../database/features/gallery/database';
import Lightbox from 'react-image-lightbox-next';
import { Container, Row, Col } from 'reactstrap';
const feshion = [
  require('../../../public/assets/images/portfolio/1.jpg'),
  require('../../../public/assets/images/portfolio/2.jpg'),
  require('../../../public/assets/images/portfolio/3.jpg'),
  require('../../../public/assets/images/portfolio/4.jpg'),
];

const bags = [
  require('../../../public/assets/images/portfolio/5.jpg'),
  require('../../../public/assets/images/portfolio/6.jpg'),
  require('../../../public/assets/images/portfolio/7.jpg'),
  require('../../../public/assets/images/portfolio/8.png'),
];

const watches = [
  require('../../../public/assets/images/portfolio/13.jpg'),
  require('../../../public/assets/images/portfolio/11.jpg'),
  require('../../../public/assets/images/portfolio/10.jpg'),
  require('../../../public/assets/images/portfolio/12.png'),
];

const shoes = [
  require('../../../public/assets/images/portfolio/9.jpg'),
  require('../../../public/assets/images/portfolio/10.jpg'),
  require('../../../public/assets/images/portfolio/12.png'),
  require('../../../public/assets/images/portfolio/8.png'),
];

const Basic = ({ className, title, subTitle, fluid }) => {
  const [activeTab, setActiveTab] = useState('1');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isBges, setIsBges] = useState(false);
  const [isWatch, setIsWatch] = useState(false);
  const [isShoes, setIsShoes] = useState(false);

  return (
    <section className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery agency">
      <div className="filter-section">
        <Container fluid={true}>
          <Row>
            <Col xs="12">
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
                    Fashion
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab == '3' ? 'active' : ''}
                    onClick={() => setActiveTab('3')}>
                    Bags
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab == '4' ? 'active' : ''}
                    onClick={() => setActiveTab('4')}>
                    Shoes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab == '5' ? 'active' : ''}
                    onClick={() => setActiveTab('5')}>
                    Watch
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={fluid || 'container'}>
        <TabContent className="isotopeContainer row" activeTab={activeTab}>
          <TabPane tabId="1">
            {AllImgData.map((imgItem, i) => {
              return (
                <div className={className} key={i}>
                  <div className="overlay">
                    <div className="border-portfolio">
                      <div className="zoom_gallery" data-attribute="SRL" title="">
                        <div className="overlay-background">
                          <i aria-hidden="true" className="fa fa-plus"></i>
                        </div>

                        <img
                          alt=""
                          className="img-fluid blur-up lazyload"
                          onClick={() => setIsOpen(true)}
                          src={imgItem.img}
                        />
                        {isOpen && (
                          <Lightbox
                            mainSrc={feshion[photoIndex]}
                            nextSrc={feshion[(photoIndex + 1) % feshion.length]}
                            prevSrc={feshion[(photoIndex + feshion.length - 1) % feshion.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                              setPhotoIndex((photoIndex + feshion.length - 1) % feshion.length)
                            }
                            onMoveNextRequest={() =>
                              setPhotoIndex((photoIndex + 1) % feshion.length)
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {title && (
                    <div className="portfolio-text">
                      <h3 className="head-text">{title}</h3>
                      <h6 className="head-sub-text">{subTitle}</h6>
                    </div>
                  )}
                </div>
              );
            })}
          </TabPane>
          <TabPane tabId="2">
            {FeshionImgData.map((imgItem, i) => {
              return (
                <div className={className} key={i}>
                  <div className="overlay">
                    <div className="border-portfolio">
                      <a className="zoom_gallery" data-source="" href="#javascript" title="">
                        <img
                          alt=""
                          className="img-fluid blur-up lazyload"
                          onClick={() => setIsOpen(true)}
                          src={imgItem.img}
                        />
                        {isOpen && (
                          <Lightbox
                            mainSrc={feshion[photoIndex]}
                            nextSrc={feshion[(photoIndex + 1) % feshion.length]}
                            prevSrc={feshion[(photoIndex + feshion.length - 1) % feshion.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                              setPhotoIndex((photoIndex + feshion.length - 1) % feshion.length)
                            }
                            onMoveNextRequest={() =>
                              setPhotoIndex((photoIndex + 1) % feshion.length)
                            }
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  {title && (
                    <div className="portfolio-text">
                      <h3 className="head-text">{title}</h3>
                      <h6 className="head-sub-text">{subTitle}</h6>
                    </div>
                  )}
                </div>
              );
            })}
          </TabPane>
          <TabPane tabId="3">
            {BagsImgData.map((imgItem, i) => {
              return (
                <div className={className} key={i}>
                  <div className="overlay">
                    <div className="border-portfolio">
                      <a className="zoom_gallery" data-source="" href="#javascript" title="">
                        <img
                          alt=""
                          className="img-fluid blur-up lazyload"
                          onClick={() => setIsBges(true)}
                          src={imgItem.img}
                        />
                        {isBges && (
                          <Lightbox
                            mainSrc={bags[photoIndex]}
                            nextSrc={bags[(photoIndex + 1) % bags.length]}
                            prevSrc={bags[(photoIndex + bags.length - 1) % bags.length]}
                            onCloseRequest={() => setIsBges(false)}
                            onMovePrevRequest={() =>
                              setPhotoIndex((photoIndex + bags.length - 1) % bags.length)
                            }
                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % bags.length)}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  {title && (
                    <div className="portfolio-text">
                      <h3 className="head-text">{title}</h3>
                      <h6 className="head-sub-text">{subTitle}</h6>
                    </div>
                  )}
                </div>
              );
            })}
          </TabPane>
          <TabPane tabId="4">
            {ShoesImgData.map((imgItem, i) => {
              return (
                <div className={className} key={i}>
                  <div className="overlay">
                    <div className="border-portfolio">
                      <a className="zoom_gallery" data-source="" href="#javascript" title="">
                        <img
                          alt=""
                          className="img-fluid blur-up lazyload"
                          onClick={() => setIsWatch(true)}
                          src={imgItem.img}
                        />
                        {isWatch && (
                          <Lightbox
                            mainSrc={shoes[photoIndex]}
                            nextSrc={shoes[(photoIndex + 1) % shoes.length]}
                            prevSrc={shoes[(photoIndex + shoes.length - 1) % shoes.length]}
                            onCloseRequest={() => setIsWatch(false)}
                            onMovePrevRequest={() =>
                              setPhotoIndex((photoIndex + shoes.length - 1) % shoes.length)
                            }
                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % shoes.length)}
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  {title && (
                    <div className="portfolio-text">
                      <h3 className="head-text">{title}</h3>
                      <h6 className="head-sub-text">{subTitle}</h6>
                    </div>
                  )}
                </div>
              );
            })}
          </TabPane>
          <TabPane tabId="5">
            {WatchImgData.map((imgItem, i) => {
              return (
                <div className={className} key={i}>
                  <div className="overlay">
                    <div className="border-portfolio">
                      <a className="zoom_gallery" data-source="" href="#javascript" title="">
                        <img
                          alt=""
                          className="img-fluid blur-up lazyload"
                          onClick={() => setIsShoes(true)}
                          src={imgItem.img}
                        />
                        {isShoes && (
                          <Lightbox
                            mainSrc={watches[photoIndex]}
                            nextSrc={watches[(photoIndex + 1) % watches.length]}
                            prevSrc={watches[(photoIndex + watches.length - 1) % watches.length]}
                            onCloseRequest={() => setIsShoes(false)}
                            onMovePrevRequest={() =>
                              setPhotoIndex((photoIndex + watches.length - 1) % watches.length)
                            }
                            onMoveNextRequest={() =>
                              setPhotoIndex((photoIndex + 1) % watches.length)
                            }
                          />
                        )}
                      </a>
                    </div>
                  </div>
                  {title && (
                    <div className="portfolio-text">
                      <h3 className="head-text">{title}</h3>
                      <h6 className="head-sub-text">{subTitle}</h6>
                    </div>
                  )}
                </div>
              );
            })}
          </TabPane>
        </TabContent>
      </div>

      {/* <!-- pagination Start --> */}
      <div className="pagination_sec">
        <div className="content_detail__pagination cdp">
          <ul>
            <li>
              <a className="prev" href="#">
                <i aria-hidden="true" className="fa fa-angle-double-left"></i>
              </a>
            </li>
            <li>
              <a className="active cdp_i" href="#">
                1
              </a>
            </li>
            <li>
              <a className="cdp_i" href="#">
                2
              </a>
            </li>
            <li>
              <a className="cdp_i" href="#">
                3
              </a>
            </li>
            <li>
              <a className="next" href="#">
                <i aria-hidden="true" className="fa fa-angle-double-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- pagination End --> */}
    </section>
  );
};

export default Basic;
