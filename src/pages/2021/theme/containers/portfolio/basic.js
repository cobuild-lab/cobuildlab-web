import React, { useState, Fragment } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { AllImgData, BagsImgData, FeshionImgData, ShoesImgData, WatchImgData } from './database';
import Lightbox from 'react-image-lightbox-next';
import { Container, Row, Col } from 'reactstrap';
const feshion = [
  require('../../public/assets/images/portfolio/1.jpg'),
  require('../../public/assets/images/portfolio/2.jpg'),
  require('../../public/assets/images/portfolio/3.jpg'),
  require('../../public/assets/images/portfolio/4.jpg'),
];

const bags = [
  require('../../public/assets/images/portfolio/5.jpg'),
  require('../../public/assets/images/portfolio/6.jpg'),
  require('../../public/assets/images/portfolio/7.jpg'),
  require('../../public/assets/images/portfolio/8.png'),
];

const watches = [
  require('../../public/assets/images/portfolio/11.jpg'),
  require('../../public/assets/images/portfolio/10.jpg'),
  require('../../public/assets/images/portfolio/12.png'),
];

const shoes = [
  require('../../public/assets/images/portfolio/9.jpg'),
  require('../../public/assets/images/portfolio/10.jpg'),
  require('../../public/assets/images/portfolio/12.png'),
  require('../../public/assets/images/portfolio/8.png'),
];

const AllImg = [
  require('../../public/assets/images/portfolio/1.jpg'),
  require('../../public/assets/images/portfolio/2.jpg'),
  require('../../public/assets/images/portfolio/3.jpg'),
  require('../../public/assets/images/portfolio/4.jpg'),
  require('../../public/assets/images/portfolio/5.jpg'),
  require('../../public/assets/images/portfolio/6.jpg'),
  require('../../public/assets/images/portfolio/7.jpg'),
  require('../../public/assets/images/portfolio/8.png'),
  require('../../public/assets/images/portfolio/9.jpg'),
  require('../../public/assets/images/portfolio/10.jpg'),
  require('../../public/assets/images/portfolio/11.jpg'),
  require('../../public/assets/images/portfolio/12.png'),
];

const Basic = ({ className, title, subTitle, fluid }) => {
  const initilindex = { index: 0 };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const [activeTab, setActiveTab] = useState('1');

  return (
    <Fragment>
      <section className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles">
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
                        <div
                          className="zoom_gallery"
                          data-source={AllImg[photoIndex.index]}
                          title="">
                          <div
                            className="overlay-background"
                            onClick={() =>
                              setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                            }>
                            <i aria-hidden="true" className="fa fa-plus"></i>
                          </div>
                          <img alt="" className="img-fluid blur-up lazyload" src={imgItem.img} />
                          {photoIndex.isOpen && (
                            <Lightbox
                              mainSrc={AllImg[photoIndex.index]}
                              nextSrc={AllImg[(photoIndex.index + 1) % AllImg.length]}
                              prevSrc={
                                AllImg[(photoIndex.index + AllImg.length - 1) % AllImg.length]
                              }
                              imageTitle={photoIndex.index + 1 + '/' + AllImg.length}
                              onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                              onMovePrevRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + AllImg.length - 1) % AllImg.length,
                                })
                              }
                              onMoveNextRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + 1) % AllImg.length,
                                })
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
                        <a
                          className="zoom_gallery"
                          data-source={feshion[photoIndex.index]}
                          href="#javascript"
                          title="">
                          <div
                            className="overlay-background"
                            onClick={() =>
                              setPhotoIndex({ ...photoIndex, index: i, isFeshion: true })
                            }>
                            <i aria-hidden="true" className="fa fa-plus"></i>
                          </div>
                          <img alt="" className="img-fluid blur-up lazyload" src={imgItem.img} />
                          {photoIndex.isFeshion && (
                            <Lightbox
                              mainSrc={feshion[photoIndex.index]}
                              nextSrc={feshion[(photoIndex.index + 1) % feshion.length]}
                              prevSrc={
                                feshion[(photoIndex.index + feshion.length - 1) % feshion.length]
                              }
                              imageTitle={photoIndex.index + 1 + '/' + feshion.length}
                              onCloseRequest={() =>
                                setPhotoIndex({ ...photoIndex, isFeshion: false })
                              }
                              onMovePrevRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + feshion.length - 1) % feshion.length,
                                })
                              }
                              onMoveNextRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + 1) % feshion.length,
                                })
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
                        <a
                          className="zoom_gallery"
                          data-source={bags[photoIndex.index]}
                          href="#javascript"
                          title="">
                          <div
                            className="overlay-background"
                            onClick={() =>
                              setPhotoIndex({ ...photoIndex, index: i, isBges: true })
                            }>
                            <i aria-hidden="true" className="fa fa-plus"></i>
                          </div>
                          <img alt="" className="img-fluid blur-up lazyload" src={imgItem.img} />
                          {photoIndex.isBges && (
                            <Lightbox
                              mainSrc={bags[photoIndex.index]}
                              nextSrc={bags[(photoIndex.index + 1) % bags.length]}
                              prevSrc={bags[(photoIndex.index + bags.length - 1) % bags.length]}
                              imageTitle={photoIndex.index + 1 + '/' + bags.length}
                              onCloseRequest={() => setPhotoIndex({ ...photoIndex, isBges: false })}
                              onMovePrevRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + bags.length - 1) % bags.length,
                                })
                              }
                              onMoveNextRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + 1) % bags.length,
                                })
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
            <TabPane tabId="4">
              {WatchImgData.map((imgItem, i) => {
                return (
                  <div className={className} key={i}>
                    <div className="overlay">
                      <div className="border-portfolio">
                        <a
                          className="zoom_gallery"
                          data-source={watches[photoIndex.index]}
                          href="#javascript"
                          title="">
                          <div
                            className="overlay-background"
                            onClick={() =>
                              setPhotoIndex({ ...photoIndex, index: i, isWatch: true })
                            }>
                            <i aria-hidden="true" className="fa fa-plus"></i>
                          </div>
                          <img alt="" className="img-fluid blur-up lazyload" src={imgItem.img} />
                          {photoIndex.isWatch && (
                            <Lightbox
                              mainSrc={watches[photoIndex.index]}
                              nextSrc={watches[(photoIndex.index + 1) % watches.length]}
                              prevSrc={
                                watches[(photoIndex.index + watches.length - 1) % watches.length]
                              }
                              imageTitle={photoIndex.index + 1 + '/' + watches.length}
                              onCloseRequest={() =>
                                setPhotoIndex({ ...photoIndex, isWatch: false })
                              }
                              onMovePrevRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + watches.length - 1) % watches.length,
                                })
                              }
                              onMoveNextRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + 1) % watches.length,
                                })
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
            <TabPane tabId="5">
              {ShoesImgData.map((imgItem, i) => {
                return (
                  <div className={className} key={i}>
                    <div className="overlay">
                      <div className="border-portfolio">
                        <a
                          className="zoom_gallery"
                          data-source={shoes[photoIndex.index]}
                          href="#javascript"
                          title="">
                          <div
                            className="overlay-background"
                            onClick={() =>
                              setPhotoIndex({ ...photoIndex, index: i, isShoes: true })
                            }>
                            <i aria-hidden="true" className="fa fa-plus"></i>
                          </div>
                          <img alt="" className="img-fluid blur-up lazyload" src={imgItem.img} />
                          {photoIndex.isShoes && (
                            <Lightbox
                              mainSrc={shoes[photoIndex.index]}
                              nextSrc={shoes[(photoIndex.index + 1) % shoes.length]}
                              prevSrc={shoes[(photoIndex.index + shoes.length - 1) % shoes.length]}
                              imageTitle={photoIndex.index + 1 + '/' + shoes.length}
                              onCloseRequest={() =>
                                setPhotoIndex({ ...photoIndex, isShoes: false })
                              }
                              onMovePrevRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + shoes.length - 1) % shoes.length,
                                })
                              }
                              onMoveNextRequest={() =>
                                setPhotoIndex({
                                  ...photoIndex,
                                  index: (photoIndex.index + 1) % shoes.length,
                                })
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
    </Fragment>
  );
};

export default Basic;
