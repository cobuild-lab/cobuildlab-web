import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Container, Section, Hero, HeroBody, HeroHeader, Columns, Column } from 'bloomer';
import 'bulma';

// COMPONENTS
import LandingHeader from '../components/2020/LandingHeader';
import BadgeIndustry from '../components/2020/BadgeIndustry';
import NewLandingForm from '../components/2020/NewLandingForm';
import Typography from '../components/2020/Typography';
import BannerBackground from '../components/2020/BannerBackground';
import StudyCase from '../components/2020/StudyCase';

// RESOURCES
import badge1 from '../resources/badges1.png';
import badge2 from '../resources/badges2.png';
import badge3 from '../resources/badges3.png';
import badge4 from '../resources/badges4.png';

import styled from 'styled-components';

// TYPOGRAPHY CONFIG
const title = {
  default: {
    level: 7,
    fontWeight: 'bold',
  },
  lg: {
    level: 4,
    fontWeight: 'bold',
  },
};

const subTitle = {
  default: {
    level: 8,
    fontWeight: 'bold',
  },
  lg: {
    level: 7,
    fontWeight: 'bold',
  },
};

const paragraph = {
  default: {
    level: 9,
    fontWeight: 'normal',
  },
  lg: {
    level: 8,
    fontWeight: 'normal',
  },
};

const Wrapper = styled.div`
  background-color: #f4f6fb !important;
  overflow: hidden;
`;

const Box = styled.div`
  background-color: #fff;
  box-shadow: 0px 8px 30px #264a6017;
  width: 100%;
  heigth: 100%;
  padding: 1.25rem;
`;

const StyledSection = styled(Section)`
  position: relative;
`;

const StudyCaseContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 2.5rem;
`;

const BannerWrapper = styled.div`
  position: relative;
`;

export default class AppsDevStudy extends Component {
  render() {
    const siteTitle = 'Developing new Apps in Miami';
    const siteSubtitle = 'We transform ideas into working Apps';
    const siteDescription =
      'We transform requirements into working software. We specialize in building web and mobile applications for Small and Medium Businesses.';
    const landingName = 'Apps Development Study Case';

    return (
      <Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Wrapper>
          <Hero>
            <HeroHeader>
              <LandingHeader />
            </HeroHeader>
            <HeroBody isPaddingless>
              <BannerWrapper>
                <BannerBackground />
              </BannerWrapper>
            </HeroBody>
          </Hero>
          <Container>
            <StyledSection>
            <Columns isDesktop>
              <Column isSize={{ desktop: 7 }}>
                <Typography tag="h1" size={title}>
                  Developing new Software Products in Miami
                </Typography>
                <Typography tag="h2" size={subTitle}>
                  {siteSubtitle}
                </Typography>
                <Typography tag="p" size={paragraph}>
                  {siteDescription}
                </Typography>
                <StudyCaseContainer>
                  <StudyCase />
                </StudyCaseContainer>
                <BadgeIndustry />
              </Column>
              <Column isSize={{ desktop: 5 }}>
                <Box>
                  <div className="has-text-centered">
                    <img src={badge1} className="badge" />
                    <img src={badge2} className="badge" />
                    <img src={badge3} className="badge" />
                    <img src={badge4} className="badge-google" />
                  </div>
                  <NewLandingForm landingName={landingName} />
                </Box>
              </Column>
            </Columns>
          </StyledSection>
          </Container>
        </Wrapper>
      </Fragment>
    );

    /*
    return (
      <React.Fragment>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <section className="hero is-fullheight">
          <div className="hero-body no-padding-hero">
            <div className="content">
              <div className="columns is-desktop">
                <div className="column is-8 h-100 bg-header-study">
                  <div className="view-content-zoom">
                    <div>
                      <img src={logo} className="logo" />
                    </div>
                    <Title className="title-squeezing">
                      Developing new Software Products in Miami
                    </Title>
                    <h2 className="subtitle-squeezing">{siteSubtitle}</h2>
                    <p className="text-description-all">{siteDescription}</p>
                    <StudyCase />
                    <BadgeIndustry />
                  </div>
                </div>

                <div className="column h-100 is-4 bg-form-landing Aligner">
                  <div className="has-text-centered view-badge">
                    <img src={badge1} className="badge" />
                    <img src={badge2} className="badge" />
                    <img src={badge3} className="badge" />
                    <img src={badge4} className="badge-google" />
                  </div>
                  <NewLandingForm landingName={landingName} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
    /**/
  }
}
