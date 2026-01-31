// Event tanpa e

const btn1 = document.getElementById("btn1");
const text = document.getElementById("text");

btn1.addEventListener("click", () => {
  text.textContent = "Aku berubah walaupun klik apa pun";
});


// Event pakai e

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.textContent = "Aku yang diklik!";
  });
});


// event : submit form interaction
const form = document.getElementById("myForm");
const info = document.getElementById("info");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  info.textContent = "Form disubmit, tapi screen tidak reload";
});
