import { PortfolioInfo } from "../__fixtures__/PortfolioInfo";

class portfolio extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
  }
  connectedCallback() {
    // DOM에 추가되면 실행되는 method;
    this.innerHTML = this.htmlparser();
    this.script();
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

  script() {
    const modalContent = document.querySelectorAll("modal-content");
    const mobileImageContent = document.querySelectorAll(
      "image-content-mobile"
    );

    PortfolioInfo.map((data, i) => {
      modalContent[i].setAttribute("data-props", JSON.stringify(data));
      mobileImageContent[i].setAttribute("data-props", JSON.stringify(data));
    });
  }
  htmlparser() {
    return (
      `
        <section class="gallery">
            <image-content-pc class="image-content-pc"></image-content-pc>` +
      PortfolioInfo.map(
        (v) =>
          `<image-content-mobile class="image-content-mobile"></image-content-mobile>`
      ) +
      `
      </section>

        <section class="modal-section">` +
      PortfolioInfo.map(
        (v) => `<modal-content class="modal-content"></modal-content>`
      ) +
      `</section>`
    );
  }
}

export default portfolio;

// customElements.get("router-view") ||
//   customElements.define("router-view", portfolio);
