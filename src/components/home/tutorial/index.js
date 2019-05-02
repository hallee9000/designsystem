import React from 'react'
import { Link, withPrefix } from 'gatsby'
import cn from "classnames"
import './tutorial.styl'

export default ({ posts }) =>
  <ul className="toturial-items">
    {
      posts.map((post, index) =>
        <li
          className={cn('toturial-item', {'toturial-item-bigger': index===0})}
          key={index}
        >
          {
            post.published ?
            <Link
              to={post.slug}
              className="item-card"
            >
              <div className="card-cover" style={{backgroundImage: `url(${withPrefix(post.cover)})`}}/>
              <div className="card-content">
                <h3 className="content-title">{post.title}</h3>
              </div>
            </Link> :
            <div className="item-card item-card-unpublished">
              <div className="card-cover" style={{backgroundImage: `url(${withPrefix(post.cover)})`}}/>
              <div className="card-content">
                <small>COMING SOON</small>
                <h3 className="content-title">{post.title}</h3>
              </div>
            </div>
          }
        </li>
      )
    }
  </ul>