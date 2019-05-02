import React from 'react'
import { withPrefix } from 'gatsby'
import './case.styl'

export default ({ posts }) =>
  <ul className="case-items">
    {
      posts.map((post, index) =>
        <li
          className="case-item"
          key={index}
        >
          <a href={post.link} target="_blank" className="item-card" rel="noopener noreferrer">
            <div
              className="card-cover"
              style={{backgroundImage: `url(${withPrefix('case/' + post.cover)})`}}
            />
            <h5 className="card-title">{post.title}</h5>
          </a>
        </li>
      )
    }
  </ul>