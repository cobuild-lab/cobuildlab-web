import React from 'react';
import Layout from '../../containers/common/common-layout';
import { AgencyData } from '../../database/pages/team/database';
import { Container, Row, Col } from 'reactstrap';
const TeamGrid = () => (
  <Layout pathList={['pages', 'team', 'team grid']} pathTitle="team grid">
    <section className="event team-sec speaker set-relative" id="speaker">
      <Container>
        <Row>
          {AgencyData.map((data, i) => {
            return (
              <Col md="3" sm="6" className="speker-container" key={i}>
                <div className="text-center">
                  <div className="team-img">
                    <img alt="" className="img-fluid" src={data.img} />
                    <div className="overlay"></div>
                    <div className="social">
                      <ul>
                        <li>
                          <a href="#">
                            <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i aria-hidden="true" className="fa fa-google center-content"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i aria-hidden="true" className="fa fa-globe center-content"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="employee">
                    <h5 className="e-name text-center font-secondary">{data.name}</h5>
                    <h6 className="post text-center ">{data.role}</h6>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  </Layout>
);

export default TeamGrid;
