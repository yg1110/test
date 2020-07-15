import React from "react";
import "./App.css";

function App({ SsafyShopper, Newspace, 냉장고를부탁해, ItForYou }) {
  return (
    <div className="wrapper">
      <header className="top">
        <h1>
          <a href="#" title="Katosnap">
            YG
          </a>
        </h1>
      </header>

      <nav className="flex-nav">
        <a href="#" className="toggleNav">
          <i className="fa fa-bars"></i> Menu
        </a>
        <ul>
          <li>
            <a href="#" title="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#" title="About">
              About
            </a>
          </li>
          <li>
            <a href="#" title="Work">
              Project
            </a>
          </li>
          <li className="social">
            <a href="https://github.com/yg1110" title="GitHub">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="social">
            <a href="https://yg1110.tistory.com/" title="tistory">
              <i className="fa fa-tumblr"></i>
            </a>
          </li>
        </ul>
      </nav>

      <section className="gallery">
        <ul>
          <li className="gallery-image">
            <img
              src={SsafyShopper}
              width="720px"
              height="480px"
              alt="Ssafy-Shopper"
            />
          </li>
          <li className="gallery-image">
            <img src={Newspace} width="720px" height="480px" alt="Newspace" />
          </li>
          <li className="gallery-image">
            <img
              src={냉장고를부탁해}
              width="720px"
              height="480px"
              alt="냉장고를부탁해"
            />
          </li>
          <li className="gallery-image">
            <img src={ItForYou} width="720px" height="480px" alt="ItForYou" />
          </li>
        </ul>
      </section>

      <section className="details">
        <h2>test</h2>
      </section>

      <footer>
        <p>&copy; yg1110</p>
      </footer>
    </div>
  );
}

App.defaultProps = {
  SsafyShopper: require("./assets/images/Ssafy-Shopper.png"),
  Newspace: require("./assets/images/Newspace.png"),
  냉장고를부탁해: require("./assets/images/냉장고를부탁해.png"),
  ItForYou: require("./assets/images/ItForYou.png")
};

export default App;
