import React from 'react'
import Img from 'gatsby-image'

class PostHeader extends React.Component {
  render() {
    console.log('cover', this.props.cover)
    return (
      <section className="hero">
        <Img
          sizes={this.props.cover}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "250px",
          }}
        />
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a href="/">
                  <figure className="image" style={{ padding: "10px 20px" }}>
                    <img src="/img/alienduo-logo.svg" alt="Alien Duo" />
                  </figure>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <div className="buttons">
                    <a className="button is-outlined is-dark" href="https://twitter.com/alienduo">
                      Twitter
                    </a>
                    <a className="button is-outlined is-dark" href="https://patreon.com/alienduo">
                      Patreon
                    </a>
                    <a className="button is-outlined is-dark" href="mailto:contact@alienduo.com">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-white" style={{ fontSize: "32pt", color: "white", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"}}>
              { this.props.title }
            </h1>
            <h2 className="subtitle">
              { this.props.date }
            </h2>
          </div>
        </div>

      </section>
    )
  }
}

export default PostHeader
