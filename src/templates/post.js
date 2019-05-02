import React from "react"
import { graphql } from "gatsby"
import cn from "classnames"
import Layout from "components/layout"
import SEO from "components/seo"
import './post.styl'

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { title, date, author, translator, sourceLink } = post.frontmatter
    return (
      <Layout location={this.props.location}>
        <SEO
          title={title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="layout-post">
          <div className="container">
            <div className="post-title">
              <h1>{title}</h1>
              <span>{date}</span>
            </div>
            <div className="post-meta">
              <p>作者：{author}</p>
              <p className={cn({hide: !translator})}>翻译：{translator}</p>
              <p>原始链接：<a href={sourceLink} target="_blank" rel="noopener noreferrer">{sourceLink}</a></p>
            </div>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
        author
        translator
        sourceLink
      }
    }
  }
`
