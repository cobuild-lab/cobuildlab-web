import styled from 'styled-components';

export const MansoryContainer = styled.div`
  column-count: 3;
  column-gap: 1em;
  max-width: 900px;
  margin: auto;
  @media (max-width: 575.98px) {
    column-count: 2;
  }
`;

export const MansoryItem = styled.figure`
  background-color: #eee;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
`;

export const MansoryImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  cursor: pointer;
`;

export const MansorySliderItem = styled.div`
  height: 85vh;
`;

export const MansorySliderImage = styled.img`
  width: auto;
  height: 100%;
  margin: auto;
`;
