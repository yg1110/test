class about extends HTMLElement {
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
    <div class="about-header">
      <h1>정영길</h1>
      <h2>Front-End developer</h2>
      <h3>1994.11.10</h3>
      <h4><a href="mailto:younggil9488@gmail.com" title="email">younggil9488@gmail.com</a></h4>
      <h4>github - <a href="https://github.com/yg1110">https://github.com/yg1110</a></h4>
      <h4>tistory - <a href="https://yg1110.tistory.com/">https://yg1110.tistory.com/</a></h4>
    </div>

    <div class="academic-content">
      <h2 class="academic-title">학력사항 & 교육사항</h2>
      <div class="academic-description">
        <div class="academic-description-date">2013 ~ 2018</div>
        <div class="academic-description-name">한밭대학교</div>
        <div class="academic-description-department">컴퓨터공학과 졸업</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">2019 ~ 2020</div>
        <div class="academic-description-name">삼성 청년 소프트웨어 아카데미(SSAFY)</div>
        <div class="academic-description-department">2기 수료</div>
      </div>
    </div>

    <div class="academic-content">
      <h2 class="academic-title">자격증/수상내역</h2>
      <div class="academic-description">
        <div class="academic-description-date">2019.06</div>
        <div class="academic-description-name">네트워크 관리사 2급</div>
        <div class="academic-description-department">최종합격</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">2019.08</div>
        <div class="academic-description-name">정보 처리 기사</div>
        <div class="academic-description-department">최종합격</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">2020.03</div>
        <div class="academic-description-name">삼성 청년 소프트웨어 아카데미 공통 프로젝트</div>
        <div class="academic-description-department">지역 2등</div>
      </div>

      <div class="academic-description">
        <div class="academic-description-date">2020.05</div>
        <div class="academic-description-name">삼성 청년 소프트웨어 아카데미 특화 프로젝트</div>
        <div class="academic-description-department">지역 2등</div>
      </div>

    </div>

    <div class="academic-content">
      <h2 class="academic-title">자기소개</h2>
      <div class="introduction-content">
        <div class="introduction-body">
          <div>  
            <h3 class="introduction-question">[ 자기소개 ]</h3>
          </div>
          <div class="introduction-answer">
            <p>안녕하세요. 저는 정영길입니다.<br>
            저는 대학교시절 웹게임 공모전을 친구와 함께 나가면서 웹프로그래밍에 대해 관심을 가지게 되었고,
            그 이후 대학교를 졸업하고 삼성 청년 소프트웨어 아카데미(SSAFY)에서 SW 필수 지식 및 알고리즘 중심의 몰입형 코딩 교육을 바탕으로
            실전 SW 프로젝트 수행 및 협업 프로젝트 수행을 통해서 다른 개발자와의 협업하는 일련의 과정인 애자일을 경험하면서
            JavaScript의 언어에 자유롭고 비동기적 특성에 매력을 느꼈고, 계속해서 Front-End Developer 역할군으로 직접적인 서비스를 창출해 냄으로써
            Front-End Developer의 역량을 키웠습니다.</p>
          </div>
        </div>

        <div class="introduction-body">
          <div>
            <h3 class="introduction-question">[ 스타트업을 가고싶은 이유? ]</h3>
          </div>
          <div class="introduction-answer">
            <p>빠른성장, 오로지 나만의 코드를 작성할 수 있다는것<br>
            제가 웹에 대해 관심을 가지게 된 것은 대학교 3학년 web 게임 공모전에 나갔을 때부터입니다.
            아무것도 모르는 상태에서 친구 따라 나가본 첫 공모전은 모르는 게 투성이고, 투박한 디자인에
            완벽하지 않은 기능들 모든게 미숙했지만, 내가 만든 기능들이 톱니바퀴처럼 맞물려 돌아가는
            모습을 보면서 보람을 느끼고, 웹 개발자의 꿈을 꾸게 되었습니다.
            스타트업을 선택하게 된 이유도 제가 하나의 서비스를 만들때 모든 부분에 경험해볼 수 있고, 마지막에
            코드들이 맞물려 돌아가는 일련의 과정들로 희열을 느끼고 강한 동기부여가 되기 때문입니다.<br>
            또한 팀원들 모두 하나의 서비스에 책임감을 가지고 각자의 역할을 하면서
            서로에게 도움과 의지를 할 수 있는 개발분위기를 좋아하기 때문에 스타트업에 지원을 하게 되었습니다.</p>
          </div>
        </div>
        
        <div class="introduction-body">
          <div>
            <h3 class="introduction-question">[ 개발스타일 ]</h3>
          </div>
          <div class="introduction-answer">
            <p>에러를 두려워하지 않습니다.<br>
            저의 개발스타일은 일단 코드를 짜보고 직접 부딪혀서 에러를 경험하고, 그러한 에러 경험을 바탕으로 성장하는 개발스타일을 가지고 있습니다.
            하지만 초창기에는 계획없이 바로 코드를 작성하였기 때문에 처음에 잘못된 길로 가게 될 경우 많은 시간이 걸려 원했던 결과를 얻을 수 있었습니다.<br>
            이러한 문제점을 발견하여, 현재는 직접 코드를 작성하기 전에 Notion으로 만들어야 될 내용에 대해서 정리하고,
            어떤식으로 짜야될 것인지를 정하고 그 계획을 바탕으로 코드를 작성하기 시작합니다.</p>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}

export default about;
