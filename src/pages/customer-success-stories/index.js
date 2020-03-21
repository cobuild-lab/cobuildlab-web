import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Columns,
  Column,
  Card,
  CardContent,
  Content,
} from 'bloomer'
import 'bulma'
import '../../assets/fonts/Lato-Black.ttf'
import '../../assets/fonts/Lato-BlackItalic.ttf'
import '../../assets/fonts/Lato-Bold.ttf'
import '../../assets/fonts/Lato-BoldItalic.ttf'
import '../../assets/fonts/Lato-Hairline.ttf'
import '../../assets/fonts/Lato-HairlineItalic.ttf'
import '../../assets/fonts/Lato-Italic.ttf'
import '../../assets/fonts/Lato-Light.ttf'
import '../../assets/fonts/Lato-LightItalic.ttf'
import '../../assets/fonts/Lato-Regular.ttf'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  render() {
    const siteTitle = 'Customer Success Stories - Miami Labs | Cobuild Lab'
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description',
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'Success Cases for the Cobuild Lab in Miami' }]}
          title={siteTitle}
        />

        <Hero isColor="white" isSize="small">
          <HeroBody>
            <Container hasTextAlign="centered">
              <Columns isCentered>
                <Column>
                  <Title className="title-blog" isSize={1}>
                    New ideas, forged in Cobuild Lab
                  </Title>
                  <Subtitle isSize={5}>
                    Many enter, others leave. In the end, the most restless and
                    daring to undertake the digital world have found them
                    perfect place because they have been cared for and
                    understood in the particularities of their local businesses.
                    The laboratories in Miami by Cobuild Lab has allowed creating
                    new and better ideas, born of other ideas.
                  </Subtitle>
                  <br/>
                  <hr/>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
        <section className="section">
          <Container>
            <Columns className="is-multiline">
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                console.log(`DEBUG:`, node)
                return (
                  <Column key={node.fields.slug} isSize="1/3">
                    <Link to={node.fields.slug}>
                      <Card className="card-p">
                        <CardContent
                          className="card-post"
                          style={{
                            backgroundImage: `url(${
                              node.frontmatter.image.publicURL
                              })`,
                          }}
                        >
                          <Content className="title-post">
                            <Subtitle hasTextColor="white">{title}</Subtitle>
                          </Content>
                        </CardContent>
                      </Card>
                    </Link>
                  </Column>
                )
              })}
            </Columns>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 12
            filter: {fileAbsolutePath: {regex: "/(customer-success-stories)/.*\\.md$/"}}
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        image {
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 720) {
                                    aspectRatio
                                    base64
                                    sizes
                                    src
                                    srcSet
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
