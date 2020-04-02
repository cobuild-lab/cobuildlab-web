import React from 'react';
import { Container } from 'bloomer';
import Scroll from '../scroll';
import './copyright.scss';

const CopyRight = () => {
  return (
    <div className="footer-wrapper-copytext">
      <Container>
        <div className="footer-copyright-text">
          <div className="copyright-link">
            <span>© Copyright 2020 Business. All Rights Reserved</span>

            <span> Term & Condition / Privacy & Policy</span>
          </div>
          <Scroll />
        </div>
      </Container>
    </div>
  );
};

export default CopyRight;
