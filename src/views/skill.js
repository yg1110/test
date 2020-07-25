class skill extends HTMLElement {
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
    return `
    <div class="skill-content">
      <h2 class="skill-title">HTML</h2>
      <div class="skill-description">
        <div class="skill-description-name">시맨틱 태그</div>
        <div class="skill-description-link">시맨틱 태그 표준을 적용한 코드 구현가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name"><del>웹표준</del></div>
        <div class="skill-description-link"><del>웹 접근성과 웹 표준을 고려한 웹페이지 제작가능</del></div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">CSS</h2>
      <div class="skill-description">
        <div class="skill-description-name">position</div>
        <div class="skill-description-link">content를 원하는 곳에 위치시킬 수 있음</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">display</div>
        <div class="skill-description-link">원하는 레이아웃 구성가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">transition</div>
        <div class="skill-description-link">간단한 애니메이션 효과 구현 가능(투명도, 크기변경)</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">반응형 웹</div>
        <div class="skill-description-link">at Rule을 이용한 반응형 웹 구현가능</div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">SCSS</h2>
      <div class="skill-description">
        <div class="skill-description-name">mixin</div>
        <div class="skill-description-link">중복된 css효과 mixin을 개선 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">variables</div>
        <div class="skill-description-link">변수 선언 및 활용 가능</div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">JavaScirpt</h2>
      <div class="skill-description">
        <div class="skill-description-name">기초문법</div>
        <div class="skill-description-link">
            <div>배열함수 선언 및 사용 가능</div>
            <div>객체 선언 및 사용 가능</div>
            <div>this와 스코프에 대한 이해</div>
        </div>
      </div>
    </div>

    `;
  }
}

export default skill;

// customElements.get("router-view") ||
//   customElements.define("router-view", portfolio);
