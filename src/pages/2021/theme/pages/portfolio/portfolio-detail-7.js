import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import { Container, Row, Col } from 'reactstrap';
const PortfolioDetail7 = () => (
  <Fragment>
    <Layout
      pathList={['portfolio details', 'left side image portfolio']}
      pathTitle="left side image portfolio">
      <section>
        <div className="collection-wrapper agency">
          <Container>
            <Row className="data-sticky_parent">
              <Col lg="12" sm="12" xs="12">
                <Container fluid={true}>
                  <Row>
                    <Col lg="6">
                      <Row>
                        <Col xs="12" className="product_img_scroll image-scroll" data-sticky_column>
                          <div>
                            <div>
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/portfolio/1.jpg"
                              />
                            </div>
                            <div>
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/portfolio/2.jpg"
                              />
                            </div>
                            <div>
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/portfolio/3.jpg"
                              />
                            </div>
                            <div>
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/portfolio/4.jpg"
                              />
                            </div>
                            <div>
                              <img
                                alt=""
                                className="img-fluid"
                                src="../assets/images/portfolio/5.jpg"
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="6" className="rtl-text">
                      <div className="product-right pro_sticky_info" data-sticky_column>
                        <div className="portfolio-detail m-b-20">
                          <h3 className="detail-head">project detail</h3>
                          <div className="detail-container d-flex p-t-0">
                            <div className="portfolio-left">
                              <h5 className="text-left">client :</h5>
                            </div>
                            <div className="portfolio-right">
                              <h5>john doe</h5>
                            </div>
                          </div>
                          <div className="detail-container d-flex">
                            <div className="portfolio-left">
                              <h5 className="text-left">date :</h5>
                            </div>
                            <div className="portfolio-right">
                              <h5>22 Nov 2019</h5>
                            </div>
                          </div>
                          <div className="detail-container d-flex">
                            <div className="portfolio-left">
                              <h5 className="text-left">link :</h5>
                            </div>
                            <div className="portfolio-right">
                              <h5>www.abcd.com</h5>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-detail">
                          <h3 className="detail-head">about project</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                          <div className="text-right m-t-10">
                            <a className="btn btn-default primary-btn radius-0" href="#">
                              visit project
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Layout>
  </Fragment>
);

export default PortfolioDetail7;
