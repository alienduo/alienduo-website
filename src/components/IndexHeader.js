import React from 'react'

class IndexHeader extends React.Component {
  render() {
    return (
      <section className="hero-main is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <figure className="image" style={{ padding: "10px 20px" }}>
                  <img src="/img/alienduo-logo.svg" alt="Alien Duo" />
                </figure>
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
            <h2 className="subtitle">
              The Magnificent
            </h2>
            <h1 className="title" style={{ color: "yellow", fontFamily: "Bangers", fontSize: "120pt", textShadow: "-5px 0 black, 0 10px red, 10px 0 black, 0 -10px black" }}>
              Alien <span style={{ color: "blue" }}>Duo</span>
            </h1>
            <h1 className="title is-white" style={{ fontSize: "32pt", color: "white", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"}}>
              The first code+creative studio* created by <b>aliens</b>.
            </h1>
            <h2 className="subtitle">
              * Or "startup", but not a boring one :-P
            </h2>
          </div>
        </div>

      </section>
    )
  }
}

export default IndexHeader
