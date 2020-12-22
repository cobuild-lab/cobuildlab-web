import React from 'react';
import styled from 'styled-components';
import SmoothScrollingButton from '../Button/ButtonSmoothScrolling';

const Container = styled.div`
  padding-top: 1.5rem;
`;

const ValueCardFooter = () => (
  <Container>
    <SmoothScrollingButton href="#contact-2020">Contact Us</SmoothScrollingButton>
  </Container>
);

export default ValueCardFooter;
