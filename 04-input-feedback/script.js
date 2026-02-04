const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const info = document.getElementById("info");
const button = document.getElementById("submitBtn");

button.addEventListener("click", () => {
  const name = nameInput.value;
  const message = messageInput.value;

  if (name === "" || message === "") {
    info.textContent = "Form belum lengkap";
    info.className = "error";
  } else {
    info.textContent = `Hai ${name}, pesannya: ${message}`;
    info.className = "success";
  }
});
