import Template from "./template.js";

export class Article extends HTMLElement {
  set article(article) {
    console.log(article);
    this.innerHTML = Template.render(article);
  }
}
customElements.define("news-article", Article);
