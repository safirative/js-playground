const tasks = [
  "Belajar DOM",
  "Belajar Array",
  "Belajar UI Logic"
];

const list = document.getElementById("list");

tasks.forEach((task) => {
  const item = document.createElement("li");
  item.textContent = task;
  list.appendChild(item);
});
