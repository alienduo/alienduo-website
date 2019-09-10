import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import prism from "prismjs/themes/prism-twilight.css"
import PostHeader from '../components/PostHeader'

class CapsulePostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <PostHeader title={`${post.frontmatter.title}`} date={`${post.frontmatter.date}`} cover={post.frontmatter.cover.childImageSharp.sizes} />
        <section className="section">
          <div className="container">
            <div className="content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />

              <ul>
                {previous && (
                  <li>
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  </li>
                )}

                {next && (
                  <li>
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CapsulePostTemplate

export const pageQuery = graphql`
  query CapsulePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        cover {
          childImageSharp{
            sizes(
              maxWidth: 1024,
              traceSVG: { background: "#000000", color: "#ffdd57" }
            ) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
