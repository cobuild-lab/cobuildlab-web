import React, { Fragment } from 'react';
import { GalleryData } from '../../../database/features/breadcrumb/database';
import Slider from 'react-slick';
import { Container, Row } from 'reactstrap';
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
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

const GalleryWrapper = () => (
  <Slider className="owl-carousel owl-theme img-slider" {...settings}>
    {GalleryData.map((data, i) => (
      <div className="item" key={i}>
        <div className={`${data.img}`}></div>
      </div>
    ))}
  </Slider>
);

const VideoWrapper = () => (
  <div
    className="blocks"
    data-vide-bg="/assets/video/sea.mp4"
    data-vide-options="position: 0% 50%"
    id="block"
    style={{ width: '100%;', height: '100%;' }}>
    <video id="bgvid" playsInline="" autoPlay={true} muted="" loop="">
      <source src="/assets/video/sea.mp4" type="video/mp4" />
    </video>
  </div>
);

const DefaultWrapper = () => <Fragment></Fragment>;

const BreadcrumbSection = ({
  showcaseType,
  className,
  setOver,
  textRight,
  justifyContent,
  bgDark,
  classDiv,
  path,
  title,
  style,
}) => {
  const Showcase = () => {
    switch (showcaseType) {
    case 'Video':
      return <VideoWrapper />;
    case 'Gallery':
      return <GalleryWrapper />;
    default:
      return <DefaultWrapper />;
    }
  };
  return (
    <section className={`agency breadcrumb-section ${bgDark}`}>
      {Showcase()}
      <Container className={`${setOver} `}>
        <Row>
          <div className={className}>
            <h2 className={`breadcrumb-text ${textRight}`}>{style}</h2>
          </div>
          <div className={classDiv}>
            <ul className={`breadcrumb ${justifyContent}`}>
              <li>
                <a href="#">{path}</a>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BreadcrumbSection;
