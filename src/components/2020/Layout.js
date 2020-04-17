import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from '../enterprise/containers/footer/Footer';
import styled from 'styled-components';
import { useScript } from '../../utils/hooks';
import '../../assets/css/2020/common.scss';
import 'bulma';
// import NewsletterModal from '../NewsletterModal';

const Container = styled.div`
  background-color: #f4f6fb !important;
  overflow: hidden;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Layout = ({ children }) => {
  useScript('https://apis.google.com/js/platform.js?onload=renderBadge');
  useScript('https://apis.google.com/js/platform.js?onload=renderOptIn');

  useEffect(() => {
    if (process.env.BABGE_STATE !== 'development') {
      window.renderBadge = function() {
        var ratingBadgeContainer = document.createElement('div');
        document.body.appendChild(ratingBadgeContainer);
        window.gapi.load('ratingbadge', function() {
          window.gapi.ratingbadge.render(ratingBadgeContainer, {
            merchant_id: 42,
            position: 'BOTTOM_RIGHT',
          });
        });
      };

      window.renderOptIn = function() {
        window.gapi.load('surveyoptin', function() {
          window.gapi.surveyoptin.render({
            merchant_id: 'MERCHANT_ID',
            order_id: 'ORDER_ID',
            email: 'CUSTOMER_EMAIL',
            delivery_country: 'COUNTRY_CODE',
            estimated_delivery_date: 'YYYY-MM-DD',
          });
        });
      };

      window.___gcfg = {
        lang: 'en_US',
      };
    }
  }, []);

  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;

// <NewsletterModal />;
