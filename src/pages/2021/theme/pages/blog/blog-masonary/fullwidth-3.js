import React from 'react';
import { MesonryData } from '../../../database/blog/database';
import Masonry from 'react-masonry-css';
import { Container } from 'reactstrap';
import CommonLayout from '../../../containers/common/common-layout';
import CardWrapper from '../../../containers/blog/card/grid-wrapper';

const Fullwidth3 = () => (
  <CommonLayout pathList={['blog', 'blog Masonry', '3 columns']} pathTitle="BLOG WITH 3-columns">
    <section className="portfolio-section agency blog blog-sec blog-no-sidebar">
      <Container fluid={true}>
        <div className="isotopeContainer">
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid masonry-with-dec row"
            columnClassName="col-lg-4 col-md-6 col-12">
            {MesonryData.length > 0
              ? MesonryData.map((item, index) => (
                <CardWrapper
                  key={index}
                  className=""
                  image={item.image}
                  blogDate={item.createdAt}
                  place={item.place}
                  title={item.title}
                  description={item.description}
                  readUrl={item.readUrl}
                />
              ))
              : '!! No Blogs Found'}
          </Masonry>
        </div>
      </Container>
    </section>
  </CommonLayout>
);

export default Fullwidth3;
