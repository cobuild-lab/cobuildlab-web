import React, { Fragment } from 'react';
import SeoMetaTags from '../components/SeoMetaTags';
import 'bulma';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import '../assets/scss/index.scss';
import Header from './2021/theme/landing/header';
import GiftSection from './2021/theme/landing/git-section';
import DemoSection from './2021/theme/landing/demo';
import PortfolioSection from './2021/theme/landing/portfolio';
import WhatinsideSection from './2021/theme/landing/whatinside';
import BlogSection from './2021/theme/landing/blog';
import ElementSection from './2021/theme/landing/elements';
import FeaturesSection from './2021/theme/landing/features';
import TestimonialSection from './2021/theme/landing/testimonial';
import RatSection from './2021/theme/landing/rat';
import FooterSection from './2021/theme/landing/footer';

const IndexPage = () => (
  <div className="main-wrapper">
    <SeoMetaTags />
    <Fragment>
      <div className="landing-page">
        <Header />

        <GiftSection />

        <DemoSection />

        <PortfolioSection />

        <WhatinsideSection />

        <BlogSection />

        <ElementSection />

        <FeaturesSection />

        <TestimonialSection />

        <RatSection />

        <FooterSection />
      </div>
    </Fragment>
  </div>
);

export default IndexPage;
