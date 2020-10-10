import { PortfoiloPreview } from "../__fixtures__/PortfolioPreview";

class image extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.htmlparser(PortfoiloPreview);
  }

  htmlparser(PortfoiloPreview) {
    let result = `<ul>`;
    PortfoiloPreview.forEach((preview) => {
      result +=
        `
          <li>
              <div class="imageContainer">
                  <div class="imageDescription">
  
                      <div class="content">
                          <div class="bg-overlay"></div>
                          <div class="v-border"></div>
                          <div class="h-border"></div>
                          <div class="info">
                              <div class="title">` +
        preview.title +
        `
                              </div>
                              <div class="desciption">` +
        preview.desciption +
        `
                              </div>
                          </div>
                      </div>
                  </div>
                  <img class="image" src="` +
        preview.imagePath +
        `" alt="Ssafy-Shopper">
              </div>
          </li>`;
    });
    result += `</ul>`;
    return result;
  }
}
customElements.get("image-content-pc") ||
  customElements.define("image-content-pc", image);
