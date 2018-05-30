import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
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

  <section className="section has-background-black has-text-white">
<div className="container">
    <div className="tile is-ancestor">
      <div className="tile is-9 is-vertical is-parent">
        <div className="tile is-child">
          <div className="content has-text-white is-large">
            <h1 className="has-text-warning" style={{ fontFamily: "Bangers"}}>
              Hello, Humans! 👋
            </h1>
            <p>
              Let us introduce ourselves. We're a couple of <span className="has-text-warning">aliens</span> 👽👽. We were space-time traveling engineers on our home planet.
            </p>
          </div>
        </div>
        <div className="tile is-child">
          <figure className="image">
            <img src="/img/comic000-001.jpg" />
          </figure>
        </div>
      </div>

      <div className="tile is-vertical is-parent">
        <div className="tile is-child">
          <p>
            In other words, We spent our days teleporting stuff . . .
          </p>
          <figure className="image">
            <img src="/img/comic000-002.jpg" />
          </figure>
        </div>
        <div className="tile is-child">
          <p>
            . . . from one place 🍏 . . .
          </p>
          <figure className="image">
            <img src="/img/comic000-003.jpg" />
          </figure>
        </div>
        <div className="tile is-child">
          <p>
            . . . to somewhere else 🤔.
          </p>

          <figure className="image">
            <img src="/img/comic000-004.jpg" />
          </figure>
        </div>
      </div>
    </div>

    <div className="tile is-ancestor">
       <div className="tile is-parent is-vertical">
        <div className="tile is-child is-12">
          <div className="content has-text-white is-large has-text-centered">
            <p>
              Everything was just fine but . . . due to a system malfunction 😱 -- you humans call it a <span className="has-text-warning">bug</span>🐞, that's cute -- we ended up teleported to this beautiful planet 🌎 of yours. 
            </p>
           <h1 className="title" style={{ color: "red", fontFamily: "Bangers", fontSize: "100pt", textShadow: "-5px 0 white, 0 10px white, 10px 0 black, 0 -10px black" }}>
            *** System Failure ***
      </h1>
     
          </div>
        </div>
        <div className="tile is-child">
          <figure className="image">
            <img src="/img/comic000-005.jpg" />
          </figure>
        </div>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-parent is-vertical">
          <div className="tile is-child">
            <div className="content has-text-white is-large">
              <p>
                Although we're used to have eternal sunsets 🌅 on our planet...
              </p>
            </div>
          </div>
          <div className="tile is-child">
            <figure className="image">
              <img src="/img/comic000-010.jpg" />
            </figure>
          </div>
        </div>

        <div className="tile is-parent is-vertical">
          <div className="tile is-child">
            <div className="content has-text-white is-large">
              <p>
                ...We fell in <span className="has-text-red">love</span> 💚 with Earth.
              </p>
            </div>
          </div>

          <div className="tile is-child">
            <figure className="image">
              <img src="/img/comic000-011.jpg" />
            </figure>
          </div>
        </div>

        <div className="tile is-parent is-vertical">
          <div className="tile is-child">
            <div className="content has-text-white is-large">
              <p>
                Maybe because here you don't have to worry about sun flares <span className="has-text-warning">burning</span> 🔥 your home overnight. A downside of <a href="https://news.ycombinator.com/item?id=17124850">planets tidally locked</a> to their stars 🙁.
              </p>
            </div>
          </div>

          <div className="tile is-child">
            <figure className="image">
              <img src="/img/comic000-009.jpg" />
            </figure>
          </div>
        </div>

      </div>

    </div>

  </div>

  </section>

  <section className="has-background-black has-text-white has-text-centered">
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child">
          <figure className="image">
            <img src="/img/comic000-007.jpg" />
          </figure>
        </div>
        <div className="tile is-child" style={{ padding: "30px"}}>
          <div className="content is-large">
            <p>
            So We decided to stay here with you gals and guys 🎉 at least for a while! <br /><br />Oh, and there's also this <span className="has-text-info">small detail</span>: current human science doesn't support teleportation yet 🤔, so we just can't go back for now.<br /><br /> No problem though, we'r not in a hurry.
            </p>
          </div>
        </div>
        <div className="tile is-child">
          <figure className="image">
            <img src="/img/comic000-006.jpg" />
          </figure>
        </div>
      </div>
    </div>

  </section>

  <section className="section has-background-black has-text-white">
    <div className="container">
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child">
          <div className="content is-large">
            <p>
              But, you know, we also need to pay the bills 🙀. 
            </p>
           <h1 className="title" style={{ color: "red", fontFamily: "Bangers", fontSize: "100pt", textShadow: "-5px 0 white, 0 10px white, 10px 0 black, 0 -10px black" }}>
              Oh Noooo...
      </h1>
 
          </div>
        </div>
        <div className="tile is-child is-5">
          <figure className="image">
            <img src="/img/comic000-008.jpg" />
          </figure>
        </div>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child">
          <figure className="image">
            <img src="/img/comic000-012.jpg" />
          </figure>
          <figure className="image">
            <img src="/img/comic000-013.jpg" />
          </figure>
        </div>
        <div className="tile is-child" style={{ padding: "30px"}}>
          <div className="content is-large">
            <p>
              Good news is: as soon as we got here we discovered that computer code 💻 -- especially those written in Lisp 😋 -- is the closest thing to the technology we are familiar with on our planet!
            </p>
            <p>Which means we can code 💻🐒, give back to humans to thanks for the hospitability 🙏 and get paid for that 💸!</p>
           <h1 className="title" style={{ color: "yellow", fontFamily: "Bangers", fontSize: "100pt", textShadow: "-5px 0 red, 0 10px red, 10px 0 black, 0 -10px black" }}>
  Let's hack!
      </h1>
 
          </div>
        </div>
      </div>
    </div>

</div>
  </section>

  <section className="section">
  <div className="container">
    <div className="columns">
      <div className="column">
        <div className="content is-large">
          <p>
            So fast forward to today, we're bootstrapping 👢 our own <span className="has-text-warning">code+creative studio</span> ✊! You can also call it our own startup 🦄.
          </p>
          <p>
            We are crazy about hacking code -- and drinking <span className="has-text-warning">beer</span> 🍺, cheers! -- and creating experiments and apps using exciting technologies like
            <div className="tags">
            <span className="tag is-primary is-large">🤖 Artificial Intelligence</span>,
            <span className="tag is-info is-large">🌐 Web</span>,
            <span className="tag is-danger is-large">🎨 Generative Art</span> and
            <span className="tag is-warning is-large">🎵 Music</span>.
            </div>
          </p>
          <p>
            We are going to share every step on this journey of running our studio with you, just follow us on <a href="https://twitter.com/alienduo">Twitter 🐦</a> and feel free to interact with us there. We came in peace ✌️.
          </p>
        </div>
      </div>
      <div className="column">
        <figure className="image is-2by3">
          <img src="/img/alien-coding.jpg" />
        </figure>

      </div>
    </div>

  </div>
  </section>

<section className="hero-changelog is-fullheight">
  <div className="hero-body">
    <div className="container has-text-centered">
      <h1 className="title" style={{ color: "yellow", fontFamily: "Bangers", fontSize: "120pt", textShadow: "-5px 0 black, 0 10px red, 10px 0 black, 0 -10px black" }}>
        Support us!
      </h1>
      <h1 className="title is-white" style={{ fontSize: "32pt", color: "white", textShadow: "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black"}}>
          <p>
            If you like what we're doing here, please support us on <a href="https://patreon.com/alienduo">Patreon 🚀</a>! We have many, many cool ideas that we want to implement and your support will make
            them become true! 👽👽❤️
          </p>

      </h1>

    </div>
  </div>

</section>

<footer className="footer has-text-white has-background-black">
  <div className="container">
    <div className="columns">
      <div className="column">
          <div className="content has-text-centered">
            <img src="/img/alienduo-logo.svg" style={{ filter: "invert(100%)" }} height="50px" alt="Alien Duo" />
          </div>
      </div>
      <div className="column is-two-thirds">
          <div className="content">
            <p>
              The magnificent <strong className="has-text-warning">Alien Duo</strong> is a meta-mix of software engineering and creative/art/design studio/startup.
              We're openly documenting the process in the form of a constantly updated Webcomics and Social Network presence.<br /><br />
              We create webapps, prototypes, demos, games, stories, art and music to solve humans problems and express our own ideas.<br /><br />
              We know that <strong className="has-text-warning">you want to believe</strong>, so believe on us, we're real aliens running a company.
            </p>
          </div>
      </div>
      <div className="column">
          <div className="menu buttons">
            <ul className="menu-list">
              <li>
                <a href="https://twitter.com/alienduo" className="button is-warning is-outlined">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://patreon.com/alienduo" className="button is-warning is-outlined">
                  Patreon
                </a>
              </li>
              <li>
                <a href="mailto:contact@alienduo.com" className="button is-warning is-outlined">
                  Contact
                </a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </div>
</footer>

  </div>
)

export default IndexPage
