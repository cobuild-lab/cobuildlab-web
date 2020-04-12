import React from 'react';
import Helmet from 'react-helmet';
import { HeroHeader, HeroBody, Hero, Section, Container } from 'bloomer';
import styled from 'styled-components';

import H1 from '../components/Typography/H1';
import Paragraph from '../components/Typography/Paragraph';
import { TextOrange } from '../components/Typography/TextHelpers';

import Layout from '../components/2020/Layout';
import Header from '../components/2020/Header';
import BannerBackground from '../components/2020/BannerBackground';
import CustomerSuccessStories from '../components/customer-success-stories/CustomerSuccessStories';

const siteTitle = 'Customer Success Stories - Miami Labs | Cobuild Lab';

const Wrapper = styled.div`
  position: relative;
`;

const TitleContainer = styled.div`
  margin-top: 6.5em;
  & > p {
    margin-top: 3em;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    & > p {
      width: 100%;
    }
    margin-top: 2em;
  }
`;

const Description = styled(Paragraph)`
  line-height: 1.5;
`;

const CustomesWrapper = styled.div`
  margin-bottom: 4.5em;
`;

const CustomerSuccessStoriesIndex = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[{ name: 'description', content: 'Success Cases for the Cobuild Lab in Miami' }]}
      title={siteTitle}
    />
    <Hero>
      <HeroHeader>
        <Header />
      </HeroHeader>
      <HeroBody>
        <Wrapper>
          <BannerBackground />
          <Container>
            <TitleContainer>
              <H1>
                New <TextOrange>Ideas</TextOrange>, forged <br />
                at <TextOrange>Cobuild Lab</TextOrange>
              </H1>
              <Description>
                Many enter, others leave. In the end, the most restless and daring to undertake the
                digital world have found them perfect place because they have been cared for and
                understood in the particularities of their local businesses. The laboratories in
                Miami by Cobuild Lab has allowed creating new and better ideas, born of other ideas.
              </Description>
            </TitleContainer>
          </Container>
        </Wrapper>
      </HeroBody>
    </Hero>
    <Section>
      <Container>
        <CustomesWrapper>
          <CustomerSuccessStories />
        </CustomesWrapper>
      </Container>
    </Section>
  </Layout>
);
export default CustomerSuccessStoriesIndex;