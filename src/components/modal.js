class modal extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
  }
  connectedCallback() {
    // DOM에 추가되면 실행되는 method;
    this.innerHTML = this.htmlparser();
  }
  disconnectedCallback() {
    // DOM에서 제거면 실행되는 method
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되면 실행되는 method
  }
  adoptedCallback(oldDoc, newDoc) {
    // 다른 Document에서 옮겨지면 실행되는 method
  }
  htmlparser() {
    return `<div id="modal" class="modal">
    <span class="close">&times;</span>
    <span class="prevbtn">&lt;</span>
    <span class="nextbtn">&gt;</span>
    <div class="modal-position">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Ssafy-Shopper</h2>
          <h3>- 알레르기가 있는 사람들을 위한 건강먹거리 쇼핑몰 -</h3>
        </div>
        <div class="modal-body">
          <div class="video">
            <div class="video-container">
              <div class="jetpack-video-wrapper">
                <span class="embed-youtube">
                  <iframe
                    class="youtube-player"
                    src="https://www.youtube.com/embed/s0GnGdL_B8U"
                    allowfullscreen="true"
                  ></iframe>
                </span>
              </div>
            </div>
            <p>2020.12.10 ~ 2020.12.17 (1주)</p>
          </div>
          <div class="projectDesciption">
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
        </div>
        <div class="border"></div>
        <div class="modal-footer">
          <span class="btn green rounded">
            2인
          </span>
          <span class="btn light-green rounded">
            Front-End
          </span>
          <span class="btn orange rounded">
            SpringBoot
          </span>
          <span class="btn blue rounded">
            Vue.js
          </span>
          <span class="btn purple rounded">
            JavaScript
          </span>
          <span class="btn yellow rounded">
            SQL
          </span>
        </div>
      </div>
    </div>
  </div>`;
  }
}
customElements.get("modal-content") ||
  customElements.define("modal-content", modal);
