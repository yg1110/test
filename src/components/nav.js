import router from "../router/index.js";

class nav extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름

    return ["data-active"];
  }
  connectedCallback() {
    // DOM에 추가되면 실행되는 method;
    this.innerHTML = this.htmlparser();
    this.addClickEvent();
  }
  disconnectedCallback() {
    // DOM에서 제거면 실행되는 method
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되면 실행되는 method

    console.log(attrName);
    console.log(oldVal);
    console.log(newVal);
    this[attrName] = newVal;
  }
  adoptedCallback(oldDoc, newDoc) {
    // 다른 Document에서 옮겨지면 실행되는 method
  }
  htmlparser() {
    return `
    <ul>
        <li><a href="#" class="navbtn active">Home</a></li>
        <li><a href="#" class="navbtn">About</a></li>
        <li><a href="#" class="navbtn">Skill</a></li>
    </ul>
    `;
  }

  addClickEvent() {
    const a = document.querySelectorAll(".navbtn");
    [...a].forEach((v, i) => {
      v.addEventListener("click", () => {
        const active = document.querySelector(".active");
        active.classList.remove("active");
        v.classList.add("active");
        router(v.innerText);
      });
    });
  }
}
customElements.get("nav-content") || customElements.define("nav-content", nav);
