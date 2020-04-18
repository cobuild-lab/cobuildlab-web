import React, { useEffect } from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroHeader, HeroBody, Hero, Section } from 'bloomer';
import Layout from '../../components/2020/Layout';
import Header from '../../components/2020/Header';
import HeroBodyContent from '../../components/2020/Hero';
import Service from '../../components/2020/Service';
import BusinessValue from '../../components/2020/BusinessValue';
import HomePageCustomerSuccessStories from '../../components/2020/HomePageCustomerSuccessStories';
import OurTeam from '../../components/2020/OurTeam';
import Contact from '../../components/2020/HomePageContact';
import TestimonialHomePage from '../../components/2020/TestimonialHomePage';
import HomePagePost from '../../components/2020/HomePagePost';
import { useScript } from '../../utils/hooks';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-modal-video/scss/modal-video.scss';
import 'bulma';

const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;

const HomePage = () => {
  useScript('https://apis.google.com/js/platform.js?onload=renderBadge');
  useScript('https://apis.google.com/js/platform.js?onload=renderOptIn');
  const data = useStaticQuery(query);

  useEffect(() => {
    window.renderBadge = function() {
      var ratingBadgeContainer = document.createElement('div');
      document.body.appendChild(ratingBadgeContainer);
      window.gapi.load('ratingbadge', function() {
        window.gapi.ratingbadge.render(ratingBadgeContainer, {
          merchant_id: process.env.MERCHANT_ID,
          position: 'BOTTOM_RIGHT',
        });
      });
    };

    window.renderOptIn = function() {
      window.gapi.load('surveyoptin', function() {
        window.gapi.surveyoptin.render({
          merchant_id: process.env.MERCHANT_ID,
          order_id: process.env.ORDER_ID,
          email: process.env.EMAIL,
          delivery_country: process.env.DELIVERY_CONTRY,
          estimated_delivery_date: process.env.ESTIMATED_DELIVERY_DATE,
        });
      });
    };

    window.___gcfg = {
      lang: 'en_US',
    };
  }, []);

  const title = get(data, 'site.siteMetadata.title');
  const description = get(data, 'site.siteMetadata.description');

  return (
    <Layout>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: description }]}
        title={title}
      />
      <Hero>
        <HeroHeader>
          <Header />
        </HeroHeader>
        <HeroBody>
          <HeroBodyContent />
        </HeroBody>
      </Hero>
      <Section>
        <Service />
      </Section>
      <Section>
        <BusinessValue />
      </Section>
      <Section>
        <HomePageCustomerSuccessStories />
      </Section>
      <Section isPaddingless>
        <OurTeam />
      </Section>
      <Section isPaddingless>
        <TestimonialHomePage />
      </Section>
      <Section>
        <HomePagePost />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Layout>
  );
};

export default HomePage;
