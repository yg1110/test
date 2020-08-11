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
      <h2 class="skill-title">JavaScirpt(TypeScript)</h2>
      <div class="skill-description">
        <div class="skill-description-name">기초문법</div>
        <div class="skill-description-link">
            <div>배열함수(map, reduce 등) 선언 및 사용 가능</div>
            <div>객체 선언 및 사용 가능</div>
            <div>Class 선언 및 사용 가능</div>
            <div>this와 스코프에 대한 이해</div>
            <div>클로저에 대한 이해</div>
            <div>모듈화 가능</div>
            <div>React에 TypeScript를 적용하여 프로젝트 진행 중</div>
        </div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">DOM 조작</div>
        <div class="skill-description-link">
            <div>태그 생성 및 수정 가능</div>
            <div>DOM에 접근하여 스타일 변경가능</div>
            <div>버튼 이벤트 선언 가능</div>
        </div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">Vanilla 프로젝트 경험</div>
        <div class="skill-description-link">
          <div>개인 프로젝트 1회(현재 페이지)</div>
        </div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">Webpack & Babel</h2>
      <div class="skill-description">
        <div class="skill-description-name">webpack</div>
        <div class="skill-description-link">
            <div>모듈 번들링하여 개발환경 구성 가능</div>
        </div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">Babel</div>
        <div class="skill-description-link">
          <div>ES6와 ES5문법에 대한 이해 및 개발환경구성 가능</div>
        </div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">Vue.js</h2>
      <div class="skill-description">
        <div class="skill-description-name">라이프 사이클</div>
        <div class="skill-description-link">라이프 사이클 이해 및 활용가능(비동기적 특성 해결 등)</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">데이터 전달</div>
        <div class="skill-description-link">Props와 Emit을 이용하여 부모, 자식간 데이터 전달 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">상태관리</div>
        <div class="skill-description-link">Vuex을 이용한 상태관리 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">서버통신</div>
        <div class="skill-description-link">axios, XMLHttpRequest를 이용하여 서버와 통신 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">프로젝트 경험</div>
        <div class="skill-description-link">삼성 청년소프트웨어 아카데미(SSAFY) 협업 프로젝트 4회 (수상 2회)</div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">React</h2>
      <div class="skill-description">
        <div class="skill-description-name">state 조작</div>
        <div class="skill-description-link">Class와 Hook버전 모두 State 조작 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">라이프 사이클</div>
        <div class="skill-description-link">Class 라이프사이클, Hooks useEffect 사용 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">최적화</div>
        <div class="skill-description-link">memo, useMemo, useCallback 사용 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">데이터 전달</div>
        <div class="skill-description-link">Reducer, ContextAPI를 이용한 데이터 전달 가능</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">프로젝트 경험</div>
        <div class="skill-description-link">물물교환 사이트 제작 협업프로젝트 진행 중(3인)</div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">서버 (Spring & DB)</h2>
      <div class="skill-description">
      <div class="skill-description-name">DB</div>
        <div class="skill-description-link">
          <div>Spring MyBatis를 이용한 SQL연동 가능</div>
        </div>
      </div>

      <div class="skill-description">
        <div class="skill-description-name">통신방식</div>
        <div class="skill-description-link">
          <div>RESTful API 사용으로 유연한 통신방식 경험</div>
        </div>
      </div>

      <div class="skill-description">
        <div class="skill-description-name">소셜로그인</div>
        <div class="skill-description-link">
          <div>Oauth2.0 / FirebaseAuth를 이용한 소셜로그인 구현</div>
        </div>
      </div>

      <div class="skill-description">
        <div class="skill-description-name">시큐어코딩</div>
        <div class="skill-description-link">
          <div>SpringSecurity를 이용한 권한에 따른 페이지 조작</div>
          <div>DB추가시 XSS-filter 적용</div>
          <div>데이터 통신시 JWT를 이용한 암호화 적용</div>
        </div>
      </div>
    </div>

    <div class="skill-content">
      <h2 class="skill-title">협업 툴</h2>
      <div class="skill-description">
        <div class="skill-description-name">GIT</div>
        <div class="skill-description-link">협업시 브렌치를 따로 나누어 개발한 경험 있음</div>
      </div>
      <div class="skill-description">
        <div class="skill-description-name">JIRA & Notion</div>
        <div class="skill-description-link">협업 프로젝트 계획을 세울때 사용한 경험 있습니다.</div>
      </div>
    </div>
    `;
  }
}

export default skill;

// customElements.get("router-view") ||
//   customElements.define("router-view", portfolio);
