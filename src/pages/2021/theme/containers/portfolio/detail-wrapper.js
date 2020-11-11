import React, { Fragment, useState } from 'react';
import Slider from 'react-slick';
import { PortfolioDetail1Data } from './database';
import Lightbox from 'react-image-lightbox-next';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const images = [
  require('../../public/assets/images/portfolio/2.jpg'),
  require('../../public/assets/images/portfolio/3.jpg'),
  require('../../public/assets/images/portfolio/5.jpg'),
  require('../../public/assets/images/portfolio/4.jpg'),
  require('../../public/assets/images/portfolio/5.jpg'),
];
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 575,
      settings: { slidesToShow: 1 },
    },
  ],
};
var settings1 = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const BannerWrapper = () => (
  <Container fluid={true} className="blog-sec detail2 p-0">
    <Row>
      <Col xs="12">
        <div className="bg-blog-detail">
          <div className="center-content">
            <h1 className="text-white feature-text">featured products</h1>
            <Row>
              <Col md="8" className="offset-md-2">
                <p className="text-white text-center">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

const SliderWrapper = () => (
  <div className="container-fluid blog-sec detail2 p-0">
    <Slider className="owl-carousel owl-theme portfolio-header" {...settings1}>
      <div className="item">
        <img alt="" className="img-fluid" src="../assets/images/inner-page/blogs/1.jpg" />
      </div>
      <div className="item">
        <img alt="" className="img-fluid" src="../assets/images/inner-page/blogs/2.jpg" />
      </div>
    </Slider>
  </div>
);
const DefaultWrapper = () => <Fragment></Fragment>;

const TwoImageWrapper = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 m-b-30">
        <img alt="" className="img-fluid m-b-20" src="../assets/images/inner-page/blogs/1.jpg" />
        <img alt="" className="img-fluid" src="../assets/images/inner-page/blogs/2.jpg" />
      </div>
    </div>
  </div>
);

const VideoWrapper = () => {
  const [modal, setModal] = useState();
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div className="container blog-sec videos">
      <div className="row">
        <div className="col-md-8 offset-md-2 m-b-50">
          <div className="video w-100">
            <a className="button center-content" onClick={toggle}>
              <img
                alt="video"
                className="img-fluid"
                src="/assets/images/saas1/testimonial-video-icon.png"
              />
            </a>
          </div>
          <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
            <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
            <ModalBody className="iframe-modal">
              <iframe
                className="mfp-iframe"
                frameBorder="0"
                allowFullScreen=""
                src="//www.youtube.com/embed/dNIfsv1rKJo?autoplay=1"></iframe>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

const DetailWrapper = ({ showcaseType }) => {
  const Showcase = () => {
    switch (showcaseType) {
    case 'Banner':
      return <BannerWrapper />;
    case 'Slider':
      return <SliderWrapper />;
    case 'Video':
      return <VideoWrapper />;
    case 'Image':
      return <TwoImageWrapper />;
    default:
      return <DefaultWrapper />;
    }
  };

  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const onMovePrev = () => {
    const prev = (photoIndex.index + images.length - 1) % images.length;
    setPhotoIndex({ ...photoIndex, index: prev });
  };
  const onMoveNext = () => {
    const next = (photoIndex.index + 1) % images.length;
    setPhotoIndex({ ...photoIndex, index: next });
  };

  return (
    <Fragment>
      <section className="portfolio-section port-col zoom-gallery detail-page fullwidth-portfolio">
        {Showcase()}

        <div className="container-fluid p-t-30 px-0">
          <div className="row">
            <Slider className="portfolio-slider col-sm-12" {...settings}>
              {PortfolioDetail1Data.map((data, i) => {
                return (
                  <div className="item" key={i}>
                    <div className="isotopeSelector">
                      <div className="overlay">
                        <div className="border-portfolio">
                          <a
                            className="zoom_gallery"
                            data-source={images[photoIndex.index]}
                            href={null}
                            title="Into The Blue">
                            <img
                              alt=""
                              className="img-fluid blur-up lazyload"
                              onClick={() =>
                                setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                              }
                              src={data.img}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {photoIndex.isOpen && (
          <Lightbox
            mainSrc={images[photoIndex.index]}
            nextSrc={images[(photoIndex.index + 1) % images.length]}
            prevSrc={images[(photoIndex.index + images.length - 1) % images.length]}
            imageTitle={photoIndex.index + 1 + '/' + images.length}
            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
            onMovePrevRequest={onMovePrev}
            onMoveNextRequest={onMoveNext}
          />
        )}

        <div className="container m-t-50">
          <div className="row">
            <div className="col-md-6">
              <div className="portfolio-detail">
                <h3 className="detail-head">project detail</h3>
                <div className="detail-container d-flex p-t-0">
                  <div className="portfolio-left">
                    <h5 className="text-left">client :</h5>
                  </div>
                  <div className="portfolio-right">
                    <h5>john doe</h5>
                  </div>
                </div>
                <div className="detail-container d-flex">
                  <div className="portfolio-left">
                    <h5 className="text-left">date :</h5>
                  </div>
                  <div className="portfolio-right">
                    <h5>22 Nov 2019</h5>
                  </div>
                </div>
                <div className="detail-container d-flex">
                  <div className="portfolio-left">
                    <h5 className="text-left">link :</h5>
                  </div>
                  <div className="portfolio-right">
                    <h5>www.abcd.com</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="portfolio-detail">
                <h3 className="detail-head">about project</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
                <div className="text-right m-t-10">
                  <a className="btn btn-default primary-btn radius-0" href="#">
                    visit project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- pagination Start --> */}
        <div className="pagination_sec">
          <div className="content_detail__pagination cdp">
            <ul>
              <li>
                <a className="prev" href="#">
                  <i aria-hidden="true" className="fa fa-angle-double-left"></i>
                </a>
              </li>
              <li>
                <a className="active cdp_i" href="#">
                  1
                </a>
              </li>
              <li>
                <a className="cdp_i" href="#">
                  2
                </a>
              </li>
              <li>
                <a className="cdp_i" href="#">
                  3
                </a>
              </li>
              <li>
                <a className="next" href="#">
                  <i aria-hidden="true" className="fa fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- pagination End --> */}
      </section>
    </Fragment>
  );
};
export default DetailWrapper;
