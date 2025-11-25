const quotes = [
"Science is a way of thinking much more than it is a body of knowledge. — Carl Sagan",
"Research is what I'm doing when I don't know what I'm doing. — Wernher von Braun",
"The good thing about science is that it's true whether or not you believe in it. — Neil deGrasse Tyson",
"Somewhere, something incredible is waiting to be known. — Carl Sagan",
"In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual. — Galileo Galilei"
];


const todayIndex = new Date().getDay() % quotes.length;
document.addEventListener("DOMContentLoaded", () => {
document.getElementById("dailyQuote").textContent = quotes[todayIndex];
});




# ===== search.js =====
document.getElementById("searchBar").addEventListener("input", function () {
const q = this.value.toLowerCase();
const elements = document.querySelectorAll("body *");
elements.forEach(el => {
if (el.innerText && el.innerText.toLowerCase().includes(q)) {
el.style.background = "#333";
} else {
el.style.background = "";
}
});
});