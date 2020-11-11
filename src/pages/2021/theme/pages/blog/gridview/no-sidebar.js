import React from 'react';
import { Container, Row } from 'reactstrap';
// import Custom Components
import Header from '../../../containers/common/header';
import Breadcrumb from '../../../containers/common/breadcrumb';
import CardWrapper from '../../../containers/blog/card/grid-wrapper';
import { BlogsData } from '../../../database/blog/database';

const NoSidebar = ({}) => (
  <>
    <Header className="agency" />

    <Breadcrumb list={['blog', 'blog grid view', 'no sidebar']} title="BLOG WITH NO-SIDEBAR" />

    <section className="agency blog blog-sec">
      <Container className="no-side">
        <Row>
          {BlogsData.length > 0
            ? BlogsData.map((item, index) => (
              <CardWrapper
                key={`grid-no-sidebar-${index}`}
                className="col-xl-4 col-md-6"
                image={item.image}
                blogDate={item.createdAt}
                place={item.place}
                title={item.title}
                description={item.description}
                readUrl={item.readUrl}
              />
            ))
            : '!! No Blogs Found'}
        </Row>
      </Container>
    </section>
  </>
);

export default NoSidebar;
