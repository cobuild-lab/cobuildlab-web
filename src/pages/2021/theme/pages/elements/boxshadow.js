import React from 'react';
import Layout from '../../containers/common/common-layout';
import { BoxshadowData } from '../../database/elements/database';
import { Container, Row, Col } from 'reactstrap';
const Boxshadow = () => (
  <Layout pathList={['elements', 'box shadow']} pathTitle="elements with box shadow">
    {BoxshadowData.map((data, i) => {
      return (
        <section className="shadow-section agency" key={i}>
          <Container>
            <Row>
              <Col md="8" className="offset-md-2">
                <div className="title title2 title-inner">
                  <div className="main-title">
                    <h2 className="font-primary borders text-center main-text m-b-0">
                      <span className="text-uppercase">{data.heading}</span>
                    </h2>
                  </div>
                </div>
                <div className={`p-5 shadow-showcase text-center ${data.class}`}>
                  <h3 className="m-0 f-18 text-center shadow-font">{data.heading}</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    })}
  </Layout>
);

export default Boxshadow;
