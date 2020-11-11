import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
var settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: '60px',
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 359,
      settings: {
        slidesToShow: 1,
        centerPadding: '65px',
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

const Trainer = () => (
  <section className="gym trainers">
    <Container className="overflow-hide">
      <Row>
        <Col xs="12">
          <div className="title">
            <div className="text-center">
              <div>
                <h6 className=" borders-before">
                  <span>OUR PROGRESS</span>
                </h6>
              </div>
              <div className="main-title">
                <h2>our trainers</h2>
              </div>
            </div>
          </div>
        </Col>
        <Col xs="12">
          <Slider
            className="owl-carousel owl-theme trainers-slider"
            id="trainers-slider"
            {...settings}>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/1.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/2.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/3.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/4.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/5.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/3.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/2.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/3.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/4.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item">
              <img alt="" className="img-fluid" src="/assets/images/gym/traniers/5.jpg" />
              <div className="text-center trainers-info">
                <h3 className=" m-b-10">Ethan Robbines</h3>
                <div className="socials-lists">
                  <ul className="socials-horizontal justify-content-center">
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
                        <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Trainer;
