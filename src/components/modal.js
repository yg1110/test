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
            <video controls class="video-content">
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
