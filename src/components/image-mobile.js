class image extends HTMLElement {
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
    // 속성이 추가/제거/변경되면 실행되는 method
    this[attrName] = newVal;
    this.innerHTML = this.htmlparser(JSON.parse(newVal));
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
      htmlTag += "<li class='test'>" + v + "</li>";
      return htmlTag;
    }, "");
  }

  tag(data) {
    return data.tag.reduce((span, v) => {
      span += "<span class='btn rounded " + v[1] + "'>" + v[0] + "</span>";
      return span;
    }, "");
  }

  htmlparser(data) {
    return (
      `
    <div class="modal-content">
    <div class="modal-header">
      <h2>` +
      data.title +
      `</h2>
      <h3>- ` +
      data.subTitle +
      ` -</h3>
    </div>
    ` +
      this.tag(data) +
      `
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
        <ul class="worklist">
        ` +
      this.work(data) +
      `
        </ul>
      </div>
    </div>
  </div>
    `
    );
  }
}
customElements.get("image-content-mobile") ||
  customElements.define("image-content-mobile", image);
