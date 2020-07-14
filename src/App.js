import React from "react";
import "./App.css";

function App() {
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
            <a href="https://github.com/kathykato" title="GitHub">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="social">
            <a href="https://github.com/kathykato" title="GitHub">
              <i className="fa fa-tumblr"></i>
            </a>
          </li>
        </ul>
      </nav>

      <section className="gallery">
        <ul>
          <li className="gallery-image">
            <img src="https://source.unsplash.com/hclTKUfuf1U" alt="Katosnap" />
          </li>
          <li className="gallery-image">
            <img src="https://source.unsplash.com/DOExRUPPwYY" alt="Katosnap" />
          </li>
          <li className="gallery-image">
            <img src="https://source.unsplash.com/a6x7YPiNxwI" alt="Katosnap" />
          </li>
          <li className="gallery-image">
            <img src="https://source.unsplash.com/AiORnUT6sC0" alt="Katosnap" />
          </li>
          <li className="gallery-image">
            <img src="https://source.unsplash.com/DGVA6sqYdUA" alt="Katosnap" />
          </li>
        </ul>
      </section>

      <section className="details">
        <h2>Sign up today for the latest updates!</h2>
      </section>

      <footer>
        <p>&copy; yg1110</p>
      </footer>
    </div>
  );
}

export default App;
