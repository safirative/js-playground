// DOM title
const title = document.getElementById("title");
console.log(title);
title.textContent = "Belajar DOM itu seru";

//DOM subtitle
const subtitle = document.getElementById("subtitle");
subtitle.textContent = "DOM berhasil disentuh";

// learn .textContext vs .innerHTML
const info = document.getElementById("info");
info.innerHTML = "<strong>Halo</strong> Dunia";
