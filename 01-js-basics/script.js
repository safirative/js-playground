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

const isAdmin = false;
const isEditor = true;

if (isAdmin || isEditor) {
  console.log("Bisa edit konten");
} else {
  console.log("Tidak bisa edit konten");
}

const isLoggedIn = false;
const isAdmin = true;
const hasSubscription = true;

if ((isLoggedIn && hasSubscription) || isAdmin) {
  console.log("Bisa akses panel admin");
} else {
  console.log("Akses ditolak");
}


const nama = "Fira";
const streakDay = 5;

console.log(`Halo ${nama}, kamu sudah belajar selama ${streakDay} hari berturut-turut!🔥`);


const appName = "Cute Timer";
const timeLeft = 5;

console.log(`Welcome to ${appName}`);
console.log(`Time left: ${timeLeft} minutes`);


// learn conditional
const timeLeft = 0;

if (timeLeft > 0) {
  console.log("Timer is running ⏱️");
} else {
  console.log("Time's up! ⏰");
}


// learn conditional - 2
const isLoggedIn = true;
const isPremium = true;
const isBanned = false;

if (isLoggedIn && !isBanned && isPremium) {
  console.log("✨ Welcome to premium content! ✨");
} else if (isLoggedIn && !isBanned) {
  console.log("Welcome to free content! 🎉");
} else {
  console.log("Access denied 🚫");
}


// learn function
function sayHello(name) {
  console.log(`Hello, ${name}! 👋`);
}

sayHello("Fira");


// learn arrow function
const sayHi = (name) => {
  console.log(`Hi, ${name}! 😎`);
}

sayHi("Fira"); 


// learn arrow function emoji timer
const getEmoji = (timeLeft) => {
  if (timeLeft > 5) return "⏱️";
  else if (timeLeft > 2) return "🔥";
  else return "⚠️";
}

// test arrow function
console.log(getEmoji(6)); // ⏱️
console.log(getEmoji(4)); // 🔥
console.log(getEmoji(1)); // ⚠️



// learn looping
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


for (let i = 10; i > 5; i--) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  console.log('Putaran ke-' + i);
}

//learn while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let timeLefts = 5;


while (timeLefts > 0) {
  console.log(timeLefts);
  timeLefts--;
}


// learn return function
function add(a, b) {
  return a + b;
}
const result = add(2, 3);
console.log(result);


function calculateTimerMinutes(seconds) {
  return seconds / 60;
}
const minutes = calculateTimerMinutes(300);
console.log(`Timer: ${minutes} minutes`);


function checkLogin(isLoggedIn) {
  if (!isLoggedIn) {
    return "Please login first";
  }
  return "Welcome back!";
}

const message1 = checkLogin(false);
const message2 = checkLogin(true);

console.log(message1);
console.log(message2);


// learn arrow function
const sayGreeting = (name) => {
  return `Hello ${name}`;
};

console.log(sayGreeting("Safira"));


// trying arrow function
const getTimerLabel = (minutes) => {
  if (minutes >= 60) {
    return "Long Timer";
  }

  return "Short Timer";
};

console.log(getTimerLabel(90));
console.log(getTimerLabel(25));

// learn basic array usage
const fruits = ["Apple", "Banana", "Strawberry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
