import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Container, Hero, HeroBody, HeroHeader } from 'bloomer';
import LandingHeader from './LandingHeader';
import BannerBackground from './BannerBackground';
import Footer from '../enterprise/containers/footer';
import CopyRight from '../enterprise/containers/copyright_text';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f4f6fb !important;
  overflow: hidden;
`;

const BannerWrapper = styled.div`
  position: relative;
`;

const StyledContainer = styled(Container)`
  position: relative;
  padding-top: 4.5rem;
  padding-left: 1.5rem;
  padding-right: 1rem;
`;

const LandingPageLayout = ({ siteDescription, siteTitle, withFooter, children }) => {
  let footer = null;
  
  if(withFooter)
    footer = (
      <Fragment>
          <Footer />
          <CopyRight />
      </Fragment>
    );

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
        <StyledContainer>
          { children }
        </StyledContainer>
        { footer }
      </Wrapper>
    </Fragment>
  );
}

export default LandingPageLayout;
