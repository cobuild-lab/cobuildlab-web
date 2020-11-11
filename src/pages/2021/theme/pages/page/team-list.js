import React from 'react';
import Layout from '../../containers/common/common-layout';
import { AgencyData } from '../../database/pages/team/database';
import { Container, Row, Col } from 'reactstrap';
const TeamList = () => (
  <Layout pathList={['pages', 'team', 'team list']} pathTitle="team list">
    <section className="event team-sec team-grid speaker set-relative" id="speaker">
      <Container>
        <Row>
          {AgencyData.map((data, i) => {
            return (
              <Col lg="10" className="offset-lg-1 speker-container" key={i}>
                <div className="d-flex">
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
                    <h5 className="e-name text-center">{data.name}</h5>
                    <h6 className="post text-center ">{data.role}</h6>
                    <p className="team-para ">{data.desc}</p>
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
export default TeamList;
