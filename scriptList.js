//  localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("list");

  tasks.forEach((taskText) => {
    const li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);
  });
}

//  task and save  localStorage
function addTask() {
  const valueAdd = document.getElementById("add").value;
  if (!valueAdd) return; // Don't add empty tasks

  const li = document.createElement("li");
  li.textContent = valueAdd;

  document.getElementById("list").appendChild(li);

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(valueAdd);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("add").value = "";
}

window.addEventListener("load", () => {
  loadTasks();
});

document.getElementById("add-button").addEventListener("click", () => {
  addTask();
});

//  dark mode
function toggleDarkMode() {
  const container = document.querySelector(".container");
  container.classList.toggle("dark-mode");

  const isDarkMode = container.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}
