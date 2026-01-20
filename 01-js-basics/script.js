const button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log("Button clicked");
});

console.log("Javascript");
console.log(5);
console.log(false);

let score = 10;
score = 20;

console.log(score);


console.log(0.1 + 0.2);

let score = 10;
score = 20;

console.log(score);

const isDarkMode = true;

if (isDarkMode === true) {
  console.log("Dark mode is on");
} else {
  console.log("Dark mode is off");
}


console.log(5>3);
console.log(2<1);
console.log(4>=4);
console.log(6<=5);
console.log(3===3);
console.log(3!==4);

const age = 17;

if (age >= 18) {
  console.log("Boleh daftar");
} else {
  console.log("Belum cukup umur");
}

const cartItems = 0;

if (cartItems > 0) {
  console.log("Ada item");
} else {
  console.log("Keranjang kosong");
}

const isLoggedIn = true;
const hasSubscription = true;

if (isLoggedIn && hasSubscription) {
  console.log("Tonton konten premium");
}
