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
            <h3 class="introduction-question">[ 진로 선택의 이유 ]</h3>
          </div>
          <div class="introduction-answer">
            <p>제가 웹에 대해 관심을 가지게 된 것은 대학교 3학년 web 게임 공모전에 나갔을 때부터입니다.
            아무것도 모르는 상태에서 친구 따라 나가본 첫 공모전은 모르는 게 투성이고, 투박한 디자인에
            완벽하지 않은 기능들 모든게 미숙했지만, 제가 만든 기능들이 마지막에 톱니바퀴처럼 맞물려 돌아가는
            모습을 보면서 보람을 느끼고, 이러한 경험들이 개발을 하는데 강한 동기부여가 되면서, 웹 개발자의 꿈을 꾸게 되었습니다.</p>
          </div>
        </div>
      </div>
    </div>
      `;
  }
}

export default about;
