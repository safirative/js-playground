const tasks = [
  "Belajar DOM",
  "Belajar Array",
  "Belajar UI Logic"
];

const list = document.getElementById("list");

// add index number
tasks.forEach((task, index) => {
  const item = document.createElement("li");
  item.textContent = index + 1 + ". " + task;
  list.appendChild(item);
});

// trying other forEach
const todos = ["Belajar", "Makan", "Tidur"];
const ctx = { name: "Fira" };

todos.forEach(function(item, index, arr) {
  console.log(index + 1 + ". " + item);
  console.log(arr);
  console.log(this.name);
}, ctx);
