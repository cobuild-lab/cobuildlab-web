import React from 'react'
import { Container, Columns, Column, Image } from 'bloomer'
import { StaticQuery, graphql } from 'gatsby'

class Carousel extends React.Component {
  render() {
    const { children, folder } = this.props
    const allImages = children
      .toString()
      .split(/\r?\n|\r/)
      .filter(text => text.indexOf('./media') > -1)
      .map(src => src.replace('./', folder + '/'))
    return (
      <StaticQuery
        query={graphql`
          {
            allFile(
              filter: { relativePath: { regex: "/.*(.png|.jpg|.gif|jpeg)$/" } }
            ) {
              edges {
                node {
                  publicURL
                  relativePath
                }
              }
            }
          }
        `}
        render={data => (
          <Container>
            <Columns>
              {data.allFile.edges.map((node, index) => {
                const path = node.node.relativePath
                if (allImages.includes(path) === true)
                  return (
                    <Column key={index}>
                      <Image isRatio="4:3" src={node.node.publicURL} />
                    </Column>
                  )
                return null
              })}
            </Columns>
          </Container>
        )}
      />
    )
  }
}

export default Carousel
