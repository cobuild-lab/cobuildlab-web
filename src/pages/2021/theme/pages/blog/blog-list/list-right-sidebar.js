import React from 'react';
import { BlogsList } from '../../../database/blog/database';
import { Container, Row, Col } from 'reactstrap';
// import Custom Components
import CommonLayout from '../../../containers/common/common-layout';
import CardWrapper from '../../../containers/blog/card/list-wrapper';
import Categories from '../../../containers/blog/categories';
import PopularPosts from '../../../containers/blog/posts';
import NewsLetter from '../../../containers/blog/newsletter';
import Instagram from '../../../containers/blog/instagram';

const ListRightSidebar = ({}) => (
  <>
    <CommonLayout
      pathList={['blog', 'blog list view', 'right sidebar']}
      pathTitle="BLOG WITH RIGHT-SIDEBAR">
      <section className="agency blog blog-sec blog-sidebar  blog-list sider">
        <Container>
          <Row className="pl-0 pr-0">
            <Col lg="9">
              <div>
                {BlogsList.length > 0
                  ? BlogsList.map((item, index) => (
                    <CardWrapper
                      key={`grid-no-sidebar-${index}`}
                      className="col-12 blog-sec blog-list"
                      image={item.image}
                      blogDate={item.createdAt}
                      place={item.place}
                      title={item.title}
                      description={item.description}
                      readUrl={item.readUrl}
                    />
                  ))
                  : '!! No Blogs Found'}
              </div>
            </Col>
            <Col lg="3">
              <div className="blog-side">
                <Categories />
                <PopularPosts />
                <NewsLetter />
                <Instagram />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  </>
);

export default ListRightSidebar;
