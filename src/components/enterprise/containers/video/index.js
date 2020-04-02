import React from 'react';
import { Container, Section } from 'bloomer';
import PreviewIcon from '../../components/icon';
import { caretRight } from 'react-icons-kit/fa/caretRight';
import Typography from '../../../2020/Typography';
import './video.scss';

const Video = () => {
  return (
    <Section isPaddingless>
      <div className="video-wrapper enterprise-section">
        <div className="gradient-color overlay" />
        <Container>
          <div className="video-content-block main-title-wrapper">
            <Typography className="sitemain-subtitle" tag="h2">
              Our Video <span className="enterprise-text-orange">Presentation.</span>
            </Typography>
            <div className="sub-title-wrapper">
              <Typography className="site-subtitle2" tag="h3">
                You Should Know More About Us
              </Typography>
            </div>
            <Typography className="video-dec" tag="p">
              Let us help us the way we know how.
            </Typography>
            <div className="video-btn">
              <span>
                <PreviewIcon icon={caretRight} />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Video;
