import React from 'react';
import { Container, Row } from 'reactstrap';
// import Custom Components
import CommonLayout from '../../../containers/common/common-layout';
import CardWrapper from '../../../containers/blog/card/grid-wrapper';
import { BlogsData } from '../../../database/blog/database';

const NoSidebar = ({}) => (
  <>
    <CommonLayout
      pathList={['blog', 'blog grid view', 'no sidebar']}
      pathTitle="BLOG WITH NO-SIDEBAR">
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
    </CommonLayout>
  </>
);

export default NoSidebar;
