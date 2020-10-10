class image extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["data-props"];
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    this[attrName] = newVal;
    this.innerHTML = this.htmlparser(JSON.parse(newVal));
  }

  work(data) {
    return data.work.reduce((htmlTag, v) => {
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
