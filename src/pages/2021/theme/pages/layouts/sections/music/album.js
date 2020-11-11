import React from 'react';
import { AlbumData } from '../../../../database/layouts/music/database';
import { Container, Row, Col } from 'reactstrap';
const Album = () => (
  <section className="music album bg-black pb-0">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title4">
            <div className="main-title">
              <h2>album list</h2>
            </div>
            <div className="sub-title">
              <p>Our Latest Album and details Song 2019</p>
            </div>
          </div>
        </Col>
        {AlbumData.length > 0
          ? AlbumData.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index}>
              <div className="album-list overlay-box text-center">
                <h5 className="text-uppercase list-head">{item.name}</h5>
                <div>
                  <h6 className="item-sublist">{item.date}</h6>
                  <h6 className="item-sublist">{item.day}</h6>
                  <h6 className="item-sublist">{item.time}</h6>
                </div>
              </div>
            </Col>
          ))
          : 'Album Data Not Found'}
      </Row>
    </Container>
  </section>
);

export default Album;
