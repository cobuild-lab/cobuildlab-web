import React from 'react';
import { Container, Section } from 'bloomer';
import Image from '../../components/image';
import Slider from 'react-slick';
import './brands.scss';
import logo8Base from '../../../../assets/images/logos/8base-logo.png';
import logoAws from '../../../../assets/images/logos/aws-logo.png';
import logoGc from '../../../../assets/images/logos/gc-logo.png';
import logoFacebookReact from '../../../../assets/images/logos/facebook-react-logo.png';
import logoAndroid from '../../../../assets/images/logos/android-logo.png';
import logoIOS from '../../../../assets/images/logos/ios-logo.png';
// import logoReact from '../../../../assets/images/logos/react-logo.png';
// import logoNodeJs from '../../../../assets/images/logos/nodejs-logo.png';
// import logoPython from '../../../../assets/images/logos/python-logo.png';
// import logoAndroidIOS from '../../../../assets/images/logos/android-ios-logo.png';

/**
 *
 */
function Brand() {
  const BRANDS = [logoIOS,logoAndroid,logoFacebookReact,logoAws,logoGc,logo8Base ];

  const settings = {
    autoplaySpeed: 3000,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Section isPaddingless>
      <div className="brand-slider">
        <div className="enterprise-section" style={{ paddingTop: 0 }}>
          <Container>
            <Slider {...settings}>
              {BRANDS.map((logo, i) => (
                <div className="brand-item" key={i}>
                  <div className="brand-content">
                    <Image Path={logo} />
                  </div>
                </div>
              ))}
            </Slider>
          </Container>
        </div>
      </div>
    </Section>
  );
}

export default Brand;
