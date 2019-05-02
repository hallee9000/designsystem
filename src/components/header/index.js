import React from "react"
import { Link } from 'gatsby'
import cn from 'classnames'
import logo from './logo.svg'
import logoText from './logo-text.svg'
import './header.styl'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hung: false, scrollTop: 0 }
  }
  componentDidMount () {
    let scrollTop = window.pageYOffset
    window.onscroll = () => {
      scrollTop = window.pageYOffset
      if(scrollTop > 132){
        this.setState({
          hung: true,
          scrollTop: 132
        })
      }else{
        this.setState({
          hung: false,
          scrollTop
        })
      }
    }
  }
  componentWillUnmount () {
    window.onscroll = null
  }
  render () {
    const { hung, scrollTop } = this.state
    const paddingV = 40 - scrollTop * 25 / 132
    const height = 122 - scrollTop * 50 / 132
    return (
      <header className={cn('header', {'header-hung': hung})}>
        <nav className="container" style={{padding: `${paddingV}px 15px`,height: `${height}px`}}>
          <Link className="header-logo" to="/" rel="home">
            <img src={logo} alt="logo" className={cn({'logo-visible': hung})}/>
            <img src={logoText} alt="logo text" className={cn({'logo-visible': !hung})}/>
          </Link>
          <div className="header-menus">
            <Link to="#home-tutorial" rel="tutorial">TTORIAL</Link>
            <Link to="#home-article" rel="article">ARTICLE</Link>
            <Link to="#home-book" rel="book">BOOK</Link>
            <Link to="#home-case" rel="case">CASE</Link>
          </div>
          <div className="header-about">
            <Link to="/about" rel="about">ABOUT</Link>
          </div>
        </nav>
      </header>
    )
  }
}
