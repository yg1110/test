class portfolio2021 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.htmlparser();
  }

  htmlparser() {
    return `
        <section class="gallery">
         λΉμ΄μμ
        </section>
      `;
  }
}

export default portfolio2021;

// customElements.get("router-view") ||
//   customElements.define("router-view", portfolio);
