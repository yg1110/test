import React from "react";
import "./App.css";

function App({ SsafyShopper, Newspace, 냉장고를부탁해, ItForYou }) {
  // const modal = document.getElementById("modal");
  // const span = document.querySelector(".close");

  const openModal = () => {
    // modal.style.display = "block";
  };

  // span.onclick = function() {
  //   modal.style.display = "none";
  // };

  // window.onclick = function(event) {
  //   if (event.target === modal) {
  //     modal.style.display = "none";
  //   }
  // };

  return (
    <div classNameName="wrapper">
      <header className="top">
        <h1>
          <a href="#">YG1110</a>
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </ul>
      </nav>
      <section className="gallery">
        <ul>
          <li>
            <div className="imageContainer">
              <div className="imageDescription">
                <div className="content">
                  <div className="bg-overlay"></div>
                  <div className="v-border"></div>
                  <div className="h-border"></div>
                  <div className="info">
                    <div className="title">Ssafy-Shopper</div>
                    <div className="desciption">
                      - 식품의 영양정보를 한눈에! -
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="image"
                src="./images/Ssafy-Shopper.png"
                alt="Ssafy-Shopper"
                onclick={openModal()}
              />
            </div>
          </li>
          <li>
            <div className="imageContainer">
              <div className="imageDescription">
                <div className="content">
                  <div className="bg-overlay"></div>
                  <div className="v-border"></div>
                  <div className="h-border"></div>
                  <div className="info">
                    <div className="title">Newspace</div>
                    <div className="desciption">
                      - 내가 원하는 키워드에 포함되는 뉴스는? -
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="image"
                src="./images/Newspace.png"
                alt="Newspace"
                onclick={openModal()}
              />
            </div>
          </li>
          <li>
            <div className="imageContainer">
              <div className="imageDescription">
                <div className="content">
                  <div className="bg-overlay"></div>
                  <div className="v-border"></div>
                  <div className="h-border"></div>
                  <div className="info">
                    <div className="title">냉장고를 부탁해</div>
                    <div className="desciption">
                      - 내가 가진 재료로 만들수 있는 요리는? -
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="image"
                src="./images/냉장고를부탁해.png"
                alt="냉장고를부탁해"
                onclick={openModal()}
              />
            </div>
          </li>
          <li>
            <div className="imageContainer">
              <div className="imageDescription">
                <div className="content">
                  <div className="bg-overlay"></div>
                  <div className="v-border"></div>
                  <div className="h-border"></div>
                  <div className="info">
                    <div className="title">IT for You</div>
                    <div className="desciption">- 기술면접 우리와 함께! -</div>
                  </div>
                </div>
              </div>
              <img
                className="image"
                src="./images/ItForYou.png"
                alt="ItForYou"
                onclick={openModal()}
              />
            </div>
          </li>
        </ul>
      </section>
      <div id="modal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>
            <h3>Ssafy-Shopper</h3>
          </div>
          <div className="modal-body">
            <div className="imageContent">
              <span className="prevbtn">&lt;</span>
              <img src="./images/Ssafy-Shopper.png" alt="Ssafy-Shopper" />
              <span className="nextbtn">&gt;</span>
            </div>
            <div className="projecttitle">
              <h2>Ssafy-Shopper</h2>
              <h4>- 안전먹거리 식품 쇼핑몰 -</h4>
            </div>
            <div className="projectDesciption">
              <ul>
                <li>로그인, 회원가입 UI / UX 구현</li>
                <li>장바구니 UI / UX 구현</li>
                <li>Q&A 게시판 UI / UX 구현</li>
                <li>식품 안전나라 식품 영양 공공데이터 파싱</li>
                <li>식품 리스트 출력</li>
                <li>알레르기, 품절에 따른 이미지 처리</li>
                <li>식품별 영양정보 차트 출력</li>
              </ul>
            </div>
            <div className="projectContent">
              <div className="useLibrary">
                사용 기술:
                <ul>
                  <li>Javascript</li>
                  <li>Vue.js</li>
                  <li>Spring</li>
                </ul>
              </div>
              <div className="people">
                인원수, 역할군 :<p>2인, Front-End</p>
              </div>
              <div className="video">
                시연 영상:
                <span className="videoContent">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  <span>WATCHING VIDEO</span>
                </span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <span>CLOSE PROJECT</span>
          </div>
        </div>
      </div>

      <footer>
        <p>Copyright &copy; 2020 YG.</p>
        <a href="https://yg1110.tistory.com/" title="tistory">
          <i className="fa fa-tumblr"></i>
        </a>
        <a href="https://github.com/yg1110" title="GitHub">
          <i className="fa fa-github"></i>
        </a>
        <a href="tel:010-0000-0000" title="phone">
          <i className="fa fa-phone"></i>
        </a>
        <a href="mailto:younggil9488@gmail.com" title="email">
          <i className="fa fa-envelope"></i>
        </a>
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
