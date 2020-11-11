import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { BlogData } from '../../../../database/layouts/agency/database';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 575,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
  ],
};

const Blog = () => (
  <section className="agency blog blog-bg" id="blog">
    <Container>
      <Row>
        <Col md="6" className="offset-md-3">
          <div className="title">
            <div className="main-title">
              <h2 className="text-capitalize text-center">latest blog</h2>
            </div>
            <div className="sub-title">
              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been
              </p>
            </div>
          </div>
        </Col>
        <Col xs="12">
          {useMemo(
            () =>
              BlogData &&
              (BlogData.length > 0 ? (
                <Slider className="owl-carousel owl-theme" {...settings}>
                  {BlogData.map((item, index) => (
                    <div className="item" key={`blog-${index}`}>
                      <div className="blog-agency">
                        <div className="blog-contain">
                          <img alt="" className="img-fluid" src={item.photo} />
                          <div className="img-container center-content">
                            <div className="center-content">
                              <div className="blog-info">
                                <div className="m-b-10">
                                  <div className="center-text">
                                    <i aria-hidden="true" className="fa fa-clock-o"></i>
                                    <h6 className="m-r-25 font-blog">{item.date}</h6>
                                    <i aria-hidden="true" className="fa fa-map-marker"></i>
                                    <h6 className="font-blog">{item.place}</h6>
                                  </div>
                                </div>
                                <h5 className="blog-head">{item.title}</h5>
                                <p className="para2">{item.details}.....</p>
                                <div className="m-t-20">
                                  <a className="text-uppercase" href="#">
                                    read more
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="flex flex-1 items-center justify-center">No courses found!</div>
              )),
            [BlogData],
          )}
        </Col>
      </Row>
    </Container>
  </section>
);

export default Blog;
