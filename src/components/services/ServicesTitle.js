import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H4 from '../Typography/H4';

const Container = styled.div`
  margin-bottom: 1em;
`;

const ServicesTitle = ({ children }) => (
  <Container>
    <H4>{children}</H4>
  </Container>
);

ServicesTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ServicesTitle;