import React from 'react';
import Slider from 'react-slick';
import { BlogData } from '../../../../database/layouts/music/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  arrows: false,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Blog = () => (
  <section className="music blog bg-album bg-shadow-top-bottom pb-0">
    <Container>
      <Row>
        <Col md="10" className="offset-md-1">
          <div className="title title4">
            <div className="main-title">
              <h2>blog</h2>
            </div>
            <div className="sub-title">
              <p>our new activities</p>
            </div>
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
                    <div className="blog-info set-abs bottom-0">
                      <div className="center-text flex m-b-25">
                        <i aria-hidden="true" className="fa fa-user-o m-r-5"></i>
                        <h6 className="m-r-25 font-blog">{item.role}</h6>
                        <i aria-hidden="true" className="fa fa-calendar-o m-r-5 "></i>
                        <h6 className="font-blog">{item.date}</h6>
                      </div>
                      <h4 className="blog-text">{item.title}</h4>
                      <p className="borders-before">
                        <span>{item.heading}</span>
                      </p>
                      <p className="small-font">{item.desc}</p>
                      <div className="social-list">
                        <ul>
                          <li>
                            <a href="#">
                              <div className="center-content">
                                <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="center-content">
                                <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <div className="center-content">
                                <i aria-hidden="true" className="fa fa-google center-content"></i>
                              </div>
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
