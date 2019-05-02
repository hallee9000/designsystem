import React from "react"
import Footer from "./footer"
import Header from "./header"
import "assets/style.styl"
import "./layout.styl"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div className="default-layout">
        <Header location={location}/>
        <div className="layout-wrapper">
          {children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Layout
