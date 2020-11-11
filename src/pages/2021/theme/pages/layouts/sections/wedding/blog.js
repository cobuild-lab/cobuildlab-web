import React from 'react';
import Slider from 'react-slick';

import { BlogData } from '../../../../database/layouts/wedding/database';
import { Container, Row, Col } from 'reactstrap';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Blog = () => (
  <section className="wedding blog">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title">
            <img
              alt=""
              className="img-fluid title-img"
              src="/assets/images/wedding-img/bottom.png"
            />
            <div className="main-title">
              <h2 className="gradient-text">Our Beautiful Story</h2>
            </div>
            <div className="sub-title">
              <p>
                A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut mollit anim id est laborum. Sedut perspiciatis unde omnis.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid={true}>
      <div></div>
      <Row>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme" id="blog-slider" {...settings}>
            {BlogData.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <div className="blog-container">
                    <Row>
                      <Col md="6" sm="8" xs="12" className="offset-sm-2 offset-md-0">
                        <div className="set-skew">
                          <img alt="" className="img-fluid" src={item.img} />
                        </div>
                      </Col>
                      <Col md="6" sm="8" xs="12" className="offset-sm-2 offset-md-0">
                        <div className="center-text">
                          <div>
                            <h3 className="blog-text gradient-text"> {item.title}</h3>
                            <h6 className="blog-date">{item.date}</h6>
                            <h6 className="blog-place">{item.place}</h6>
                            <p className="blog-para">{item.desc}</p>
                            <button className="btn btn-blog">read more</button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Blog;
