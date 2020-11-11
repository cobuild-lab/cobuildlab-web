import React from 'react';
import { AppData } from '../../../../database/pages/team/database';
import { Container, Row, Col } from 'reactstrap';
const App = () => (
  <section className="app2 team-section">
    <Container>
      <Row>
        <Col xs="12">
          <div className="title title2 title-inner">
            <div className="main-title">
              <h2 className="font-primary borders text-center text-uppercase m-b-0">
                <span>team 3</span>
              </h2>
            </div>
          </div>
        </Col>
        {AppData.map((data, i) => {
          return (
            <Col md="3" sm="6" className="text-center teams" key={i}>
              <div className="our-team">
                <div className="set-relative">
                  <div className="border-around overflow-hide m-auto">
                    <div className="set-relative overflow-hide">
                      <img alt="" className="img-fluid team" src={data.img} />
                      <div className="overlay-team set-abs">
                        <img
                          alt=""
                          className="img-fluid wave"
                          src="../assets/images/app_landing2/team/hover-wave-black.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="set-relative set-border">
                  <div className="set-abs top-0 borders"></div>
                </div>
                <div className="employee">
                  <h4 className="e-name text-center">{data.name}</h4>
                  <h6 className="post text-center ">{data.role}</h6>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);

export default App;
