import React from 'react';
import { BlogsData } from '../../../database/blog/database';
import { Container, Row, Col } from 'reactstrap';
// import Custom Components
import CommonLayout from '../../../containers/common/common-layout';
import CardWrapper from '../../../containers/blog/card/grid-wrapper';

const BigPostNoSidebarColumn = ({}) => (
  <>
    <CommonLayout
      pathList={['blog', 'blog mix layout', 'grid mix with no sidebar']}
      pathTitle="BLOG WITH NO-SIDEBAR">
      <section className="agency blog blog-sec blog-no-sidebar">
        <Container>
          <Row>
            <Col lg="12">
              <Row>
                <CardWrapper
                  className="col-12"
                  image="/assets/images/agency/blog/12-main.jpg"
                  blogDate="June 19, 2019"
                  place="Phonics ,Newyork"
                  title="Twice profit than before you"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of
                                    type and scrambled it to make a type specimen book..............."
                  readUrl="#javascrpt"
                />
                {BlogsData.length > 0
                  ? BlogsData.map((item, index) => (
                    <CardWrapper
                      key={`grid-no-sidebar-${index}`}
                      className="col-lg-4 col-md-6"
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
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  </>
);

export default BigPostNoSidebarColumn;
