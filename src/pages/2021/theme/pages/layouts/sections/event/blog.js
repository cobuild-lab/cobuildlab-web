import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import { BlogData } from '../../../../database/layouts/event/database';

var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 480,
  arrows: false,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1440,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Blog = () => (
  <section className="event blog set-relative">
    <div className="circle"></div>
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title3">
            <div className="main-title">
              <h2>
                <span>our </span>blog
              </h2>
            </div>
            <div className="sub-title">
              <p>
                Register now and reserve your seat for this <span>year's Unice,</span> the largest{' '}
                <span>web development</span> and online marketing <span>conference in UK,</span>
                covering everything you need to know in order to develop a successful online
                business.
              </p>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <Slider className="owl-carousel owl-theme" {...settings}>
            {BlogData.length > 0
              ? BlogData.map((item, index) => (
                <div className="item" key={`blog-${index}`}>
                  <div className="img-container">
                    <img alt="" className="img-fluid" src={item.photo} />
                    <div className="overlay"></div>
                    <div className="blog-info set-abs bottom-0">
                      <div className="center-text flex m-b-20">
                        <i className="fa fa-user-o m-r-5"></i>
                        <h6 className="m-r-25 font-blog">{item.user}</h6>
                        <i className="fa fa-calendar-o m-r-5 "></i>
                        <h6 className="font-blog">{item.date}</h6>
                      </div>
                      <h4 className="blog-text">{item.title}</h4>
                      <p className="borders-before">
                        <span>Detais This Event</span>
                      </p>
                      <p className="small-font">{item.details}...</p>
                      <div className="social-list">
                        <ul>
                          <li>
                            <a href="#">
                              <div className="center-content">
                                <i className="fa fa-facebook center-content"></i>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="center-content">
                                <i className="fa fa-twitter center-content"></i>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="center-content">
                                <i className="fa fa-google center-content"></i>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              : 'No Records Found !!'}
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Blog;
