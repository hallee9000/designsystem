import React from "react"
import { Link, withPrefix } from 'gatsby'
import './footer.styl'

export default () =>
  <footer className="footer container">
    <div className="footer-wrapper">
      <div className="wrapper-section">
        <h5>DesignSystem</h5>
        <Link className="wrapper-link" to="/">首页</Link><br/>
        <Link className="wrapper-link" to="/about">关于</Link>
      </div>
      <div className="wrapper-section">
        <h5>小伙伴们</h5>
        <a className="wrapper-link" href="https://juuun.io" target="_blank" rel="noopener noreferrer">Juuun</a><br/>
        <a className="wrapper-link" href="https://figmacn.com" target="_blank" rel="noopener noreferrer">Figma 中文网</a><br/>
        <a className="wrapper-link" href="https://framercn.com" target="_blank" rel="noopener noreferrer">Framer 中文网</a><br/>
      </div>
      <div className="wrapper-section wrapper-about">
        <h5>关于</h5>
        <span>Designed & Developed by: </span><br/>
        <img src={withPrefix('/codesigner-logo.png')} alt="codesigner logo"/><br/>
        <img src={withPrefix('/qrcode-grey.png')} alt="weixin qrcode"/><br/><br/>
        <span>Copyright © {new Date().getFullYear()} Codesigner, Built with&nbsp;<a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a></span>
      </div>
    </div>
  </footer>