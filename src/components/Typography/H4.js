import styled from 'styled-components';
import colors from './colors.json';
import commonStyles from './common-styles';

/* 
  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
  if you want read about how work font-size with calc and vw go to:
  https://css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/ 

*/

const H4  = styled.h4`
  ${commonStyles}
  font-weight: bold;
  font-family: 'Lato-bold', sans-serif;
  font-size: calc(40px + (50 - 40) * ((100vw - 320px) / (1920 - 320)));
  color: ${colors.indigo};
`;

export default H4;
