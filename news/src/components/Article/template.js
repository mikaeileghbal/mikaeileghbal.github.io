export default {
	render(article) {
		return `${this.css()}
            ${this.html(article)}`;
	},

	html(article) {
		return `<div class="article">
              <a href="${article.url}">
                <h2>${article.title}</h2>
                <span class="author">${
									article.author ? article.author : ""
								}  :  </span><span class="date">${article.publishedAt.slice(
			0,
			10
		)}</span>
                <img src="${article.urlToImage}" alt="" />
                <p>${article.description}</p>
              </a>
            </div>`;
	},

	css() {
		return `<style>
    #main-articles {
      margin: 24px auto;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: max-content;
      grid-auto-flow: row dense;
    }

    #main-articles.row {
        grid-template-columns: 1fr;
        padding:0px; 
    }
    
    #main-articles.row img{
      width:150px;
      border-radius:4px;
      float:right;
      top:0;
      margin:16px 8px 16px 32px;
    }
    #main-articles.row a::after{
      content:"";
      clear:both;
      display:table;
    }

    .article {
      padding: 10px;
      margin-bottom: 8px;
      background-color: #f4f4f4;
      transition: 0.6s;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      height: 100%;
    }
    .article:hover img {
      opacity: 0.6;
    }
    .article a {
      text-decoration: none;
      color: #333;
    }
    .article h2 {
      color: #333;
      font-size: 18px;
      margin-bottom: 0;
    }
    .article span {
      color: gray;
      font-family: sans-serif;
      font-size: 12px;
    }
    .article img {
      width: 100%;
      transition: 0.2s;
      margin-top: 16px;
    }
    .article p {
      font-family: sans-serif;
      font-size: 14px;
      line-height: 1.5;
      word-break: break-all;
    }
    </style>
    `;
	},
};
