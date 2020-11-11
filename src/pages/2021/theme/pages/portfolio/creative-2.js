import React, { Fragment } from 'react';
import Layout from '../../containers/common/common-layout';
import { CreativeWrapperData } from '../../database/portfolio/database';
import { Container, Row, Col } from 'reactstrap';
const Creative2 = () => (
  <Fragment>
    <Layout pathList={['portfolio', 'trending layout 2']} pathTitle="trending layout 2">
      <section className="portfolio-creative portfolio-section creative2 p-0">
        <Container fluid={true}>
          <Row>
            {CreativeWrapperData.map((data, i) => {
              return (
                <Fragment key={i}>
                  <Col lg="3" md="6" className="p-0 isotopeSelector">
                    <img alt="" className="img-fluid" src={data.img} />
                  </Col>
                  <Col lg="3" md="6" className="p-0 h-100 my-auto">
                    <div className="portfolio-text m-auto text-center">
                      <h2 className="head-text">{data.title}</h2>
                      <p className="head-sub-text">{data.desc}</p>
                      <a className="btn btn-default primary-btn radius-0" href="#">
                        view more
                      </a>
                    </div>
                  </Col>
                </Fragment>
              );
            })}
          </Row>
        </Container>
      </section>
    </Layout>
  </Fragment>
);
export default Creative2;
