class footer extends HTMLElement {
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
    <div>
    <p>Copyright &copy; 2020 YG.</p>

    <div class="footer-icon">
        <a href="https://yg1110.tistory.com/" title="tistory">
            <i class="fa fa-tumblr"></i>
        </a>
        <a href="https://github.com/yg1110" title="GitHub">
            <i class="fa fa-github"></i>
        </a>
        <a href="tel:010-0000-0000" title="phone">
            <i class="fa fa-phone"></i>
        </a>
        <a href="mailto:younggil9488@gmail.com" title="email">
            <i class="fa fa-envelope"></i>
        </a>
    </div>
</div>
`;
  }
}
customElements.get("footer-content") ||
  customElements.define("footer-content", footer);
