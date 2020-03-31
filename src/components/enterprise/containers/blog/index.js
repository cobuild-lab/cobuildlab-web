import React from 'react';
import { Container, Columns, Column, Section } from 'bloomer';
import { Subtitle, Description, Title, Titlespan2 } from '../../components/title';
import PreviewIcon from '../../components/icon';
import './blog.scss';
import { lightbulbO, calendarO, gavel } from 'react-icons-kit/fa';
import Img1 from '../../assets/images/blog/blog1.png';
import Img2 from '../../assets/images/blog/blog2.png';
import Img3 from '../../assets/images/blog/blog3.png';

const BlogData = [
  {
    id: 1,
    img: Img1,
    Icon: lightbulbO,
    title: 'Bussines Ideas & Innovation',
    subtitle: 'Williamson',
    subcontent: 'Web designer',
    content:
      "Lorem Ipsum is simply dummy text of the & printing typesetting industry. Lorem Ipsum has been the industry's                standard dummy text ever since the 1500s, when an unknown",
  },
  {
    id: 2,
    img: Img2,
    Icon: calendarO,
    title: 'Gives best Financial solution',
    subtitle: 'Miranda Roy',
    subcontent: 'Web developer',
    content:
      "Lorem Ipsum is simply dummy text of the & printing typesetting industry. Lorem Ipsum has been the industry's                standard dummy text ever since the 1500s, when an unknown",
  },
  {
    id: 3,
    img: Img3,
    Icon: gavel,
    title: 'Tax consultanct & planning',
    subtitle: 'Steve Thomas',
    subcontent: 'Web developer',
    content:
      "Lorem Ipsum is simply dummy text of the & printing typesetting industry. Lorem Ipsum has been the industry's                standard dummy text ever since the 1500s, when an unknown",
  },
];


const Blog = () => {
  return (
    <Section>
      <div className="blog-wrapper">
        <div className="enterprise-section">
          <Container>
            <div className="main-title-wrapper">
              <Subtitle Class="site-subtitle" Name="OUR MAIN MISSIONS" />
              <Titlespan2 Class="sitemain-subtitle" Name="Build Smart & Effective" Label="Management" />
              <Description
                Class="site-dec"
                Name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
              />
            </div>
            <Columns>
              {BlogData.map((data, i) => (
                <Column isSize={{ mobile: 12, desktop: 4 }}  key={data.id} >
                  <div className={`blog-${i}`}>
                    <div className="blog-content">
                      <div className="blog-first-block">
x                      </div>
                      <div className="blog-second-block">
                        <div className="blog-left-content">
                          <div className="blog-icon">
                            <span>
                              <PreviewIcon icon={data.Icon} />
                            </span>
                          </div>
                        </div>
                        <div className="blog-right-content">
                          <Title Class="blog-title" Name={data.title} />
                          <Description Class="blog-dec" Name={data.content} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Column>
              ))}
            </Columns>
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
