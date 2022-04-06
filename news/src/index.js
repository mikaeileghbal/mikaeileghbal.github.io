import { apiURL, sourceURL, apiKey } from "./newsUrl.js";
import "./components/Article/Article.js";
import triggerEvent from "./customEvents.js";

const main = document.getElementById("main-articles");
const selectSource = document.getElementById("source");
const defaultSource = "bbc-news";

document.addEventListener("DOMContentLoaded", async () => {
	triggerEvent(document, "actionstart", {});
	updateActicles();
	await updateSource();
	selectSource.value = defaultSource;

	const btnViewGrid = document.getElementById("btnViewRow");
	btnViewGrid.addEventListener("click", (e) => {
		main.classList.add("row");
		btnViewGrid.classList.add("active");
		btnViewRow.classList.remove("active");
	});

	const btnViewRow = document.getElementById("btnViewGrid");
	btnViewRow.addEventListener("click", (e) => {
		main.classList.remove("row");
		btnViewRow.classList.add("active");
		btnViewGrid.classList.remove("active");
	});
});

async function updateSource() {
	const res = await fetch(sourceURL);
	const results = await res.json();

	results.sources.forEach((source) => {
		selectSource[selectSource.length] = new Option(source.name, source.id);
	});

	selectSource.addEventListener("change", (e) => {
		console.log(e.target.value);
		triggerEvent(document, "actionstart", {});
		updateActicles(e.target.value);
	});
}

async function updateActicles(source = defaultSource) {
	main.innerHTML = "";
	const res = await fetch(apiURL + `sources=${source}&apiKey=${apiKey}`);
	const results = await res.json();
	results.articles.map(createArticle);
	setTimeout(() => {
		triggerEvent(document, "actionend", {});
	}, 100);
}

function createArticle(article) {
	const articleElem = document.createElement("news-article");
	articleElem.article = article;
	main.appendChild(articleElem);
}
