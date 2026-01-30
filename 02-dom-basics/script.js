// DOM title
const title = document.getElementById("title");
console.log(title);
title.textContent = "Belajar DOM itu seru";

// DOM subtitle
const subtitle = document.getElementById("subtitle");
subtitle.textContent = "DOM berhasil disentuh";

// learn .textContext vs .innerHTML
const info = document.getElementById("info");
info.innerHTML = "<strong>Halo</strong> Dunia";

const message = document.getElementById("message");
message.innerHTML = "Status : <span> Online </span>";

// toggle UI state using classList
const text = document.getElementById("text");
text.classList.add("highlight");


// event handling : add event listener
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  text.textContent = "Aku diklik!";
});
