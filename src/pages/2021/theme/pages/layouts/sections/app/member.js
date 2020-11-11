import React from 'react';
import { MemberData } from '../../../../database/layouts/app/database';
import { Container, Row, Col } from 'reactstrap';
const Member = () => (
  <section className="app2 team-section p-t-0">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title2">
            <img alt="" className="img-fluid title-img" src="/assets/images/logo/2.png" />
            <h6 className="font-primary borders main-text">
              <span>our team</span>
            </h6>
            <div className="sub-title">
              <h2 className="title-text text-capitalize text-center">our team member</h2>
            </div>
          </div>
        </Col>
        {MemberData.map((data, i) => {
          return (
            <Col md="3" sm="6" className="teams" key={`members-${i}`}>
              <div className="our-team">
                <div className="set-relative">
                  <div className="border-around overflow-hide m-auto">
                    <div className="set-relative overflow-hide">
                      <img alt="" className="img-fluid team" src={data.img} />
                      <div className="overlay-team set-abs">
                        <img
                          alt=""
                          className="img-fluid wave"
                          src="/assets/images/app_landing2/team/hover-wave.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="set-relative set-border">
                  <div className="set-abs top-0 borders"></div>
                </div>
                <div className="employee">
                  <h4 className="e-name">{data.name}</h4>
                  <h6 className="post">{data.role}</h6>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);

export default Member;
