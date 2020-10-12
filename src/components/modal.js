import { PortfolioInfoLength } from "../__fixtures__/PortfolioInfo";

class modal extends HTMLElement {
  constructor() {
    super();
  }

  static create(el) {
    return new CurrentTime(el);
  }

  static get observedAttributes() {
    return ["data-props"];
  }

  disconnectedCallback() {
    document.removeEventListener("readystatechange", this.handleChange);
    super.disconnectedCallback();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "data-props") {
      const modal = document.querySelectorAll(".modal");
      this[attrName] = newVal;
      this.innerHTML = this.htmlparser(JSON.parse(newVal));
      if (modal.length === PortfolioInfoLength - 1) {
        this.script();
        this.addOpenMoalEvent();
      }
    }
  }

  work(data) {
    return data.work.reduce((htmlTag, v) => {
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
    const closeBtn = document.querySelectorAll(".close");
    const body = document.querySelector("body");
    const video = document.querySelectorAll("video");

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

        [...video].map((v) => {
          if (v.currentTime !== 0) {
            v.currentTime = 0;
            v.pause();
          }
        });

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
        modal[i].style.opacity = 0;
        modal[i].style.pointerEvents = "none";

        [...video].map((v) => {
          if (v.currentTime !== 0) {
            v.currentTime = 0;
            v.pause();
          }
        });

        modal[i + 1].style.opacity = 1;
        modal[i + 1].style.pointerEvents = "auto";
      });
    });

    [...closeBtn].forEach((v, i) => {
      v.addEventListener("click", () => {
        modal[i].style.opacity = 0;
        modal[i].style.pointerEvents = "none";

        [...video].map((v) => {
          if (v.currentTime !== 0) {
            v.currentTime = 0;
            v.pause();
          }
        });

        body.style.overflow = "auto";
      });
    });

    window.onclick = function (event) {
      [...close].some((v, i) => {
        if (event.target === v) {
          modal[i].style.opacity = 0;
          modal[i].style.pointerEvents = "none";

          [...video].map((v) => {
            if (v.currentTime !== 0) {
              v.currentTime = 0;
              v.pause();
            }
          });

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
        body.style.overflow = "hidden";
      });
    });
  }

  htmlparser(data) {
    const video =
      data.video !== undefined
        ? `
<video class="video-content" controls>
<source src="` +
          data.video +
          `" >
</video>
`
        : `<a href="` +
          data.link +
          `">
          <div class="bg-overlay2"></div>
          <div class="image-description">
            클릭시<br>github페이지로<br>이동됩니다.
          </div>
          <img class="video-content image-content" src="` +
          data.image +
          `" alt="` +
          data.title +
          `"></a>`;

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
          <div class="video">` +
      video +
      `<p>` +
      data.date +
      `</p>
          </div>
          <div class="projectDesciption">
            <h2 class="contribution">[제가 작업한 부분]</h2><br>
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
