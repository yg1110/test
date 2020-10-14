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
          data.repositoryLink +
          `" target="_blank">
          <div class="image-description">
            클릭시<br>github페이지로<br>이동됩니다.
          </div>
          <img class="video-content image-content" src="` +
          data.image +
          `" alt="` +
          data.title +
          `"></a>`;

    const repositoryLink =
      data.repositoryLink !== undefined
        ? `<a class="repositoryLink" href="` +
          data.repositoryLink +
          `" target="_black">- 저장소 링크 -</a>`
        : ``;

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
      <div class="video">` +
      video +
      `<p>` +
      data.date +
      `</p>` +
      repositoryLink +
      `</div>
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
