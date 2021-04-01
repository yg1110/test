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
      <h2 class="skill-title">Language</h2>
      <div class="skill-description">
        <div class="skill-description-name">HTML5</div>
        <div class="skill-description-link">웹 접근성과 웹 표준을 고려한 웹페이지 제작가능</div>
      </div>

      <div class="skill-description">
        <div class="skill-description-name">CSS</div>
        <div class="skill-description-link">퍼블리싱 작업 및 애니메이션 기능 구현 가능</div>
      </div>

      <div class="skill-description">
        <div class="skill-description-name">Javascript</div>
        <div class="skill-description-link">ES5, ES6 문법 사용 가능</div>
      </div>
      
      <div class="skill-description">
        <div class="skill-description-name">.NET</div>
        <div class="skill-description-link">MVVM 패턴을 이용한 XAML 및 CS개발</div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">Framework</h2>
      <div class="skill-description">
        <div class="skill-description-name">Vue.js</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">React</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">Express.js</div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">Library</h2>
      <div class="skill-description">
        <div class="skill-description-name">Webpack</div>
        <div class="skill-description-link">
            <div>모듈 번들링하여 개발환경 구성 가능</div>
        </div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">ESLint</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">Prettier</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">Babel</div>
        <div class="skill-description-link">
          <div>ES6와 ES5문법에 대한 이해 및 개발환경구성 가능</div>
        </div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">Testing</h2>
      <div class="skill-description">
        <div class="skill-description-name">StoryBook</div>
        <div class="skill-description-link">
            <div>화면단위 테스팅에 사용</div>
        </div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">DB</h2>
      <div class="skill-description">
        <div class="skill-description-name">SQL</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">MongoDB</div>
      </div>
    </div>
    `;
  }
}

export default skill;

// customElements.get("router-view") ||
//   customElements.define("router-view", portfolio);
