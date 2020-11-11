import React from 'react';
import { Container, Row } from 'reactstrap';
import CommonLayout from '../../../containers/common/common-layout';
import CardWrapper from '../../../containers/blog/card/grid-wrapper';
import { BlogsData } from '../../../database/blog/database';

const ClassicNoSidebar = ({}) => (
  <>
    <CommonLayout
      pathList={['blog', 'blog grid view', 'full width no sidebar']}
      pathTitle="BLOG FULL WIDTH WITH NO-SIDEBAR">
      <section className="agency blog blog-sec">
        <Container className="no-side">
          <Row>
            {BlogsData.length > 0
              ? BlogsData.slice(0, 3).map((item, index) => (
                <CardWrapper
                  key={`grid-no-sidebar-${index}`}
                  className="col-12"
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

export default ClassicNoSidebar;
