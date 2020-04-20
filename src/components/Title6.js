import React from 'react';
import { Title } from 'bloomer';
import Styled from 'styled-components'

const StyledTitle = Styled(Title)`
  color: #264A60;
  font-family: 'Lato-bold',sans-serif;
`;
// library.add(faStroopwafel, faCheck, faCode, faLayerGroup, faTachometerAlt, faEnvelope,)
class Title6 extends React.Component {
  render() {
    const { children, align } = this.props;
    return (
      <StyledTitle tag="h6" isSize={6} style={{ marginBottom: 15, marginTop: 15 }} hasTextAlign={align}>
        {children}
      </StyledTitle>
    );
  }
}
export default Title6;
