import React from 'react'
import Layout from "components/layout"
import SEO from 'components/seo'
import { Tutorial, Article, Book, Case } from 'components/home'
import './home.styl'
import homePosts from './home.json'

export default class extends React.Component {
  render () {
    const { tutorial, article, book, casePosts } = homePosts
    return (
      <Layout location={this.props.location}>
        <SEO
          title="首页"
        />
        <div className="layout-home container">
          <div className="home-quote">
            <p className="quote-content">
              如果不能在构建产品的方式上创新，你的产品就无法创新。
              <sup><a href="https://airbnb.design/the-way-we-build/" target="_blank" rel="noopener noreferrer">*</a></sup>
            </p>
            <p className="quote-author">Alex Schleifer / Airbnb</p>
          </div>
          <div className="home-section" id="home-tutorial">
            <h1 className="section-title">{tutorial.title}</h1>
            <p className="section-description">{tutorial.brief}</p>
            <Tutorial posts={tutorial.posts}/>
          </div>
          <div className="home-section" id="home-article">
            <h1 className="section-title">{article.title}</h1>
            <p className="section-description">{article.brief}</p>
            <Article posts={article.posts}/>
          </div>
          <div className="home-section" id="home-book">
            <h1 className="section-title">{book.title}</h1>
            <p className="section-description">{book.brief}</p>
            <Book posts={book.posts}/>
          </div>
          <div className="home-section" id="home-case">
            <h1 className="section-title">{casePosts.title}</h1>
            <p className="section-description">{casePosts.brief}</p>
            <Case posts={casePosts.posts}/>
          </div>
        </div>
      </Layout>
    )
  }
}
