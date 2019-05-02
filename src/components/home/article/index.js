import React from 'react'
import { Link } from 'gatsby'
import './article.styl'

export default ({ posts }) =>
  <ul className="article-items">
    {
      posts.map((post, index) =>
        <li
          className="article-item"
          key={index}
        >
          <Link to={post.slug} className="item-card" >
            <h3 className="card-title">{post.title}</h3>
          </Link>
        </li>
      )
    }
  </ul>