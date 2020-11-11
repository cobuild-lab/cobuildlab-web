import React from 'react';
import Slider from 'react-slick';

import { BlogData } from '../../../../database/layouts/yoga/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Blog = () => (
  <section className="yoga blog">
    <Container>
      <Row>
        <Col md="8" className="offset-md-2">
          <div className="title title2">
            <h2>Gifts & Cards</h2>
            <img alt="" className="img-fluid" src="/assets/images/yoga-img/logo/wave-blue.png" />
          </div>
        </Col>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme" id="blog-slider" {...settings}>
            {BlogData.map((item, i) => {
              return (
                <div className="item" key={i}>
                  <div className="img-container">
                    <img alt="" className="img-fluid" src={item.img} />
                    <div className="overlay"></div>
                    <div className="blog-info set-abs">
                      <div className="center-text d-flex m-b-25">
                        <i aria-hidden="true" className="fa fa-user-o m-r-5"></i>
                        <h6 className="m-r-25 font-blog">{item.role}</h6>
                        <i aria-hidden="true" className="fa fa-calendar-o m-r-5 "></i>
                        <h6 className="font-blog">{item.date}</h6>
                      </div>
                      <h4 className="blog-text">{item.text}</h4>
                      <p className="borders-before">
                        <span>{item.heading}</span>
                      </p>
                      <p className="small-font">{item.desc}</p>
                      <div className="social-list">
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
                        </ul>
                      </div>
                    </div>
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
