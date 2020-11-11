import React from 'react';
import { SponsorData } from '../../../../database/layouts/music/database';
import { Container, Row, Col } from 'reactstrap';
const Sponsor = () => (
  <section className="music bg-black p-0" id="sponsor">
    <Container>
      <Row className="sponsor">
        <Col md="10" className="offset-md-1">
          <div className="title title4">
            <div className="main-title">
              <h2 className="text-uppercase">sponsors</h2>
            </div>
            <div className="sub-title">
              <p>Our new sponsors 2019</p>
            </div>
          </div>
        </Col>
        {SponsorData.map((item, index) => {
          return (
            <Col lg="3" md="4" sm="6" key={index}>
              <div className="sponsor-img">
                <div className="text-center">
                  <div className="overlay-box">
                    <img alt="" className="img-fluid" src={item.img} />
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  </section>
);

export default Sponsor;
