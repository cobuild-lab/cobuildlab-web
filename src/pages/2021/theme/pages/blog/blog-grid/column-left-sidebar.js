import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
// import Custom Components
import CommonLayout from '../../../containers/common/common-layout';
import CardWrapper from '../../../containers/blog/card/grid-wrapper';
import Categories from '../../../containers/blog/categories';
import PopularPosts from '../../../containers/blog/posts';
import NewsLetter from '../../../containers/blog/newsletter';
import Instagram from '../../../containers/blog/instagram';

const query = `{
    blogs {
      id
      title
      image
      description
      readUrl
      likes
      comments
      createdAt
      createdBy
    }
  }`;

const LeftSidebar = (props) => (
  <>
    <CommonLayout
      pathList={['blog', 'blog grid view', 'left sidebar']}
      pathTitle="BLOG WITH Left-SIDEBAR">
      <section className="agency blog blog-sec blog-sidebar">
        <Container>
          <Row>
            <Col lg="9" className="order-lg-2">
              <Row>
                {props.blogs && props.blogs.length > 0
                  ? props.blogs.map((item, index) => (
                    <CardWrapper
                      key={`grid-no-sidebar-${index}`}
                      className="col-md-6"
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

LeftSidebar.getInitialProps = async () => {
  const response = await axios.post(`http://localhost:3000/api/graphql`, {
    query,
  });

  return { ...response.data.data };
};

export default LeftSidebar;
