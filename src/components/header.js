class header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = this.htmlparser();
  }
  htmlparser() {
    return `
        <h1>
            <a href="#">YG1110</a>
        </h1>`;
  }
}
customElements.get("header-content") ||
  customElements.define("header-content", header);
