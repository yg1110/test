class modal extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["data-props"];
  }
  connectedCallback() {
    // DOM에 추가되면 실행되는 method;
  }
  disconnectedCallback() {
    // DOM에서 제거면 실행되는 method
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    const modal = document.querySelectorAll(".modal");
    this[attrName] = newVal;
    this.innerHTML = this.htmlparser(JSON.parse(newVal));
    if (modal.length === 3) {
      this.script();
      this.addOpenMoalEvent();
    }
  }

  adoptedCallback(oldDoc, newDoc) {
    // 다른 Document에서 옮겨지면 실행되는 method
  }

  work(data) {
    return data.work.reduce((htmlTag, v) => {
      // let li = document.createElement("li");
      // li.innerText = v;
      // console.log("<li>" + v + "</li>");
      // console.log(li.value);
      htmlTag += "<li>" + v + "</li>";
      return htmlTag;
    }, "");
  }

  tag(data) {
    return data.tag.reduce((span, v) => {
      span += "<span class='btn rounded " + v[1] + "'>" + v[0] + "</span>";
      return span;
    }, "");
  }

  script() {
    const modal = document.querySelectorAll(".modal");
    const close = document.querySelectorAll(".modal-position");
    const span = document.querySelectorAll(".close");
    const body = document.querySelector("body");
    const video = document.querySelectorAll(".video-content");

    const prevbtn = document.querySelectorAll(".prevbtn");
    const nextbtn = document.querySelectorAll(".nextbtn");

    [...prevbtn].forEach((v, i) => {
      if (i === 0) {
        prevbtn[i].style.display = "none";
        return;
      }
      v.addEventListener("click", () => {
        modal[i].style.opacity = 0;
        modal[i].style.pointerEvents = "none";
        modal[i - 1].style.opacity = 1;
        modal[i - 1].style.pointerEvents = "auto";
      });
    });

    [...nextbtn].forEach((v, i) => {
      if (i === nextbtn.length - 1) {
        nextbtn[i].style.display = "none";
        return;
      }

      v.addEventListener("click", () => {
        //modal[i].style.transform = "translateX(-100%)";
        modal[i].style.opacity = 0;
        modal[i].style.pointerEvents = "none";

        modal[i + 1].style.opacity = 1;
        modal[i + 1].style.pointerEvents = "auto";
      });
    });

    [...span].forEach((v, i) => {
      v.addEventListener("click", () => {
        modal[i].style.opacity = 0;
        modal[i].style.pointerEvents = "none";
        video[i].currentTime = 0;
        video[i].pause();
        body.style.overflow = "auto";
      });
    });

    window.onclick = function(event) {
      [...close].some((v, i) => {
        if (event.target === v) {
          modal[i].style.opacity = 0;
          modal[i].style.pointerEvents = "none";
          video[i].currentTime = 0;
          video[i].pause();
          body.style.overflow = "auto";
          return true;
        }
        return false;
      });
    };
  }

  addOpenMoalEvent() {
    const image = document.querySelectorAll(".image");
    const modal = document.querySelectorAll(".modal");
    const body = document.querySelector("body");

    [...image].forEach((v, i) => {
      v.addEventListener("click", () => {
        modal[i].style.opacity = 1;
        modal[i].style.pointerEvents = "auto";
        //modal[i].style.transition = "transform 0.5s ease 0s, opacity 0.5s ease 0.5s"
        body.style.overflow = "hidden";
      });
    });
  }

  htmlparser(data) {
    return (
      `
    <div id="modal" class="modal">
    <span class="close">&times;</span>
    <span class="prevbtn">&lt;</span>
    <span class="nextbtn">&gt;</span>
    <div class="modal-position">
      <div class="modal-content">
        <div class="modal-header">
          <h2>` +
      data.title +
      `</h2>
          <h3>- ` +
      data.subTitle +
      ` -</h3>
        </div>
        <div class="modal-body">
          <div class="video">
            <video class="video-content" controls allowfullscreen>
              <source src="` +
      data.video +
      `" >
            </video>
            <p>` +
      data.date +
      `</p>
          </div>
          <div class="projectDesciption">
            <ul>
            ` +
      this.work(data) +
      `
            </ul>
          </div>
        </div>
        <div class="border"></div>
        <div class="modal-footer">` +
      this.tag(data) +
      `
        </div>
      </div>
    </div>
  </div>
  `
    );
  }
}
customElements.get("modal-content") ||
  customElements.define("modal-content", modal);
