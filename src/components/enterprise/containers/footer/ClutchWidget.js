import React from 'react';
import styled from 'styled-components';
import { useScript } from '../../../../utils/hooks';

const Container = styled.div`
  margin-top: 1em;
  padding-left: 0.5em;
`;

const Title = styled.span`
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5em;
  display: block;
`;

const ClutchWidget = () => {
  const [loaded, error] = useScript('https://widget.clutch.co/static/js/widget.js');

  return (
    <Container>
      <Title>CLUTCH:</Title>
      {loaded && (
        <div
          className="clutch-widget"
          data-url="https://widget.clutch.co"
          data-widget-type="1"
          data-height="500"
          data-darkbg="1"
          data-clutchcompany-id="615903"></div>
      )}
      {error ? error : ''}
    </Container>
  );
};

export default ClutchWidget;
