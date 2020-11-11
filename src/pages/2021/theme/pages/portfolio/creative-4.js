import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import { Container, Row, Col } from 'reactstrap';
const Creative4 = () => (
  <Fragment>
    <Layout pathList={['portfolio', 'trending layout 4']} pathTitle="trending layout 4">
      <section className="portfolio-creative portfolio-section  creative2 creative3 p-0">
        <Container fluid={true}>
          <Row>
            <Col lg="4">
              <Row>
                <Col xs="12" className="p-0 isotopeSelector">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/1.jpg" />
                </Col>
                <Col xs="12" className="p-0">
                  <div className="portfolio-text media">
                    <div className="media-body">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum</h5>
                    </div>
                    <div className="text-right">
                      <a className="btn btn-default primary-btn bor" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="p-0 isotopeSelector">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/2.jpg" />
                </Col>
                <Col xs="12" className="p-0 ">
                  <div className="portfolio-text media">
                    <div className="media-body">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum</h5>
                    </div>
                    <div className="text-right">
                      <a className="btn btn-default primary-btn bor" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <Row>
                <Col xs="12" className="set-order p-0">
                  <div className="portfolio-text media">
                    <div className="media-body">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum</h5>
                    </div>
                    <div className="text-right">
                      <a className="btn btn-default primary-btn bor" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="p-0 isotopeSelector">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/3.jpg" />
                </Col>
                <Col xs="12" className="p-0">
                  <div className="portfolio-text media">
                    <div className="media-body">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum</h5>
                    </div>
                    <div className="text-right">
                      <a className="btn btn-default primary-btn bor" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="p-0 isotopeSelector">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/4.jpg" />
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <Row>
                <Col xs="12" className="p-0 isotopeSelector">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/1.jpg" />
                </Col>
                <Col xs="12" className="p-0">
                  <div className="portfolio-text media">
                    <div className="media-body">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum</h5>
                    </div>
                    <div className="text-right">
                      <a className="btn btn-default primary-btn bor" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
                <Col xs="12" className="p-0 isotopeSelector">
                  <img alt="" className="img-fluid" src="../assets/images/portfolio/2.jpg" />
                </Col>
                <Col xs="12" className="p-0">
                  <div className="portfolio-text media">
                    <div className="media-body">
                      <h2 className="head-text">Lorem Ipsum</h2>
                      <h5 className="head-sub-text">Lorem Ipsum</h5>
                    </div>
                    <div className="text-right">
                      <a className="btn btn-default primary-btn bor" href="#">
                        view more
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  </Fragment>
);

export default Creative4;
