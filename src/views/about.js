class about extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = this.htmlparser();
  }

  htmlparser() {
    return `
    <div class="about-header">
      <h1>정영길</h1>
      <h2>Front-End developer</h2>
      <h3>1994.11.10</h3>
      <h4><a href="mailto:younggil9488@gmail.com" title="email">younggil9488@gmail.com</a></h4>
      <h4>github - <a href="https://github.com/yg1110">https://github.com/yg1110</a></h4>
      <h4>tistory - <a href="https://yg1110.tistory.com/">https://yg1110.tistory.com/</a></h4>
    </div>

    <div class="academic-content">
      <h2 class="academic-title">경력 요약</h2>
      <div class="academic-description">
        <div class="academic-description-date">2013 ~ 2019</div>
        <div class="academic-description-name">한밭대학교</div>
        <div class="academic-description-department">컴퓨터공학과 졸업</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">2019 ~ 2020</div>
        <div class="academic-description-name">삼성 청년 소프트웨어 아카데미(SSAFY)</div>
        <div class="academic-description-department">2기 수료</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">2020 ~ 현재</div>
        <div class="academic-description-name">Hura</div>
        <div class="academic-description-department">재직중</div>
      </div>
    </div>

    <div class="academic-content">
      <h2 class="academic-title">경력 상세</h2>

      <div class="academic-description">
        <div class="academic-description-date">RFTM</div>
        <div class="academic-description-name">수신기 제어 테스트 프로그램(C#, WPF)</div>
        <div class="academic-description-department">제어 로직 및 UI 구현</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">EdgeRF</div>
        <div class="academic-description-name">수신기 제어 프로그램(C#, WPF)</div>
        <div class="academic-description-department">UI 구현</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">FMS</div>
        <div class="academic-description-name">온습도, 방향 탐지하는 장비 모니터링 웹사이트(React)</div>
        <div class="academic-description-department">UI 구현</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">ML Front</div>
        <div class="academic-description-name">불법전파 구분하고 학습시키는 웹사이트(React)</div>
        <div class="academic-description-department">UI 구현</div>
      </div>
    </div>
  </div>
      `;
  }
}

export default about;
