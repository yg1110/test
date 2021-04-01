import router from "../router/index.js";

class nav extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["data-active"];
  }
  connectedCallback() {
    this.innerHTML = this.htmlparser();
    this.addClickEvent();
  }
  htmlparser() {
    return `
    <ul>
        <li><a href="#" class="navbtn active">2019 ~ 2020</a></li>
        <li><a href="#" class="navbtn">2021</a></li>
        <li><a href="#" class="navbtn">About</a></li>
        <li><a href="#" class="navbtn">Skill</a></li>
        <li><a href="https://github.com/yg1110/Portfolio" class="navbtn">사이트 소개</a></li>
    </ul>
    `;
  }

  addClickEvent() {
    const a = document.querySelectorAll(".navbtn");
    [...a].forEach((v, i) => {
      if (i === a.length - 1) return;
      v.addEventListener("click", () => {
        const active = document.querySelector(".active");
        active.style.pointerEvents = "auto";
        active.classList.remove("active");
        v.classList.add("active");
        v.style.pointerEvents = "none";
        router(v.innerText);
      });
    });
  }
}
customElements.get("nav-content") || customElements.define("nav-content", nav);
