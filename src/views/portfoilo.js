import { PortfolioInfo } from "../__fixtures__/PortfolioInfo";

class portfolio extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.htmlparser(PortfolioInfo);
    this.script();
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
  htmlparser(PortfolioInfo) {
    let imageContent = "";
    let modalContent = "";

    PortfolioInfo.forEach((v) => {
      imageContent += `<image-content-mobile class="image-content-mobile"></image-content-mobile>`;
      modalContent += `<modal-content class="modal-content"></modal-content>`;
    });

    return (
      `
        <section class="gallery">
            <image-content-pc class="image-content-pc"></image-content-pc>` +
      imageContent +
      `
      </section>

        <section class="modal-section">` +
      modalContent +
      `</section>`
    );
  }
}

export default portfolio;

// customElements.get("router-view") ||
//   customElements.define("router-view", portfolio);
