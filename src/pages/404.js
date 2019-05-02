import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import './404.styl'

export default ({location}) =>
  <Layout location={location}>
    <SEO title="404 房间" />
    <div className="not-found">
      <div className="container">
        <h1>404</h1>
        <blockquote className="not-found-quote">
          404 房间里空空如也。
        </blockquote>
        <Link to="/">回到首页</Link>
      </div>
    </div>
  </Layout>