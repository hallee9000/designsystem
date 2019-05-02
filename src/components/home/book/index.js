import React from 'react'
import { Link, withPrefix } from 'gatsby'
import './book.styl'

export default ({ posts }) =>
  <ul className="book-items">
    {
      posts.map((post, index) =>
        <li
          className="book-item"
          key={index}
        >
          <Link className="item-card" to={post.slug}>
            <div
              className="card-cover"
              style={{backgroundImage: `url(${withPrefix(post.cover)})`}}
            />
            <h5 className="card-title">{post.title}</h5>
          </Link>
        </li>
      )
    }
  </ul>