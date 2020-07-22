class image extends HTMLElement {
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
    <ul>
        <li>
            <div class="imageContainer">
                <div class="imageDescription">

                    <div class="content">
                        <div class="bg-overlay"></div>
                        <div class="v-border"></div>
                        <div class="h-border"></div>
                        <div class="info">
                            <div class="title">
                                Ssafy-Shopper
                            </div>
                            <div class="desciption">
                                - 식품의 영양정보를 한눈에! -
                            </div>
                        </div>
                    </div>
                </div>
                <img class="image" src="./images/Ssafy-Shopper.png" alt="Ssafy-Shopper" onclick="openModal(0)">
            </div>
        </li>
        <li>
            <div class="imageContainer">
                <div class="imageDescription">
                    <div class="content">
                        <div class="bg-overlay"></div>
                        <div class="v-border"></div>
                        <div class="h-border"></div>
                        <div class="info">
                            <div class="title">
                                Newspace
                            </div>
                            <div class="desciption">
                                - 내가 원하는 키워드에 포함되는 뉴스는? -
                            </div>
                        </div>
                    </div>
                </div>

                <img class="image" src="./images/Newspace.png" alt="Newspace" onclick="openModal(1)">
            </div>
        </li>
        <li>
            <div class="imageContainer">
                <div class="imageDescription">
                    <div class="content">
                        <div class="bg-overlay"></div>
                        <div class="v-border"></div>
                        <div class="h-border"></div>
                        <div class="info">
                            <div class="title">
                                냉장고를 부탁해
                            </div>
                            <div class="desciption">
                                - 내가 가진 재료로 만들수 있는 요리는? -
                            </div>
                        </div>
                    </div>
                </div>

                <img class="image" src="./images/냉장고를부탁해.png" alt="냉장고를부탁해" onclick="openModal(2)">
            </div>
        </li>
        <li>
            <div class="imageContainer">
                <div class="imageDescription">
                    <div class="content">
                        <div class="bg-overlay"></div>
                        <div class="v-border"></div>
                        <div class="h-border"></div>
                        <div class="info">
                            <div class="title">
                                IT for You
                            </div>
                            <div class="desciption">
                                - 기술면접 우리와 함께! -
                            </div>
                        </div>
                    </div>
                </div>
                <img class="image" src="./images/ItForYou.png" alt="ItForYou" onclick="openModal(3)">
            </div>
        </li>
    </ul>
    `;
  }
}
customElements.get("image-content") ||
  customElements.define("image-content", image);
