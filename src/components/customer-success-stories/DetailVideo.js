import React from 'react';
import styled from 'styled-components';
import videoImg from '../../assets/images/customers/video.png';
import VideoPlayIcon from '../2020/VideoPlayIcon';

const Container = styled.div`
  position: relative;
  margin-top: 3em;
  box-shadow: 0px 15px 30px #00000040;
  display: flex;
`;

const IconContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 35%;
  left: 45%;
  @media screen and (max-width: 768px) {
    top: 25%;
    left: 40%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const DetailVideo = () => (
  <Container>
    <Image src={videoImg} alt="video" />
    <IconContainer>
      <VideoPlayIcon />
    </IconContainer>
  </Container>
);

export default DetailVideo;
