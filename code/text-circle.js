//split text to chars
//and then map each char
//to a span element with dynamic style
const text = document.querySelector(".circle__text p");

text.innerHTML = text.textContent
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 14.5}deg)">${char}</span>`
	)
	.join("");

// const title = document.querySelector(".main-title");
// console.log(title.textContent);
// console.log(
// 	title.textContent
// 		.split("")
// 		.map((char, i) => `<span class="headline-chars">${char}</span>`)
// );
// title.innerHTML = title.textContent
// 	.split("")
// 	.map((char, i) => {
// 		if (char === " ") {
// 			return `<span class="headline-chars">&nbsp</span>`;
// 		} else {
// 			return `<span class="headline-chars">${char}</span>`;
// 		}
// 	})
// 	.join("");

//const title = document.querySelector(".move");

// const logo = document.querySelector(".logo-m");
// console.log(logo.textContent);
// logo.innerHTML = logo.textContent
// 	.split("")
// 	.map((char, i) => {
// 		if (char === " ") {
// 			return `<span>&nbsp</span>`;
// 		} else {
// 			return `<span>${char}</span>`;
// 		}
// 	})
// 	.join("");

