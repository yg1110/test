class footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = this.htmlparser();
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
