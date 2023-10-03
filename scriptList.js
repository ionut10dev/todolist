

// localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("list");

  tasks.forEach((taskText) => {
    const li = createTaskElement(taskText); // Create task element with "X" button
    list.appendChild(li);
  });
}

// task and save to localStorage
function addTask() {
  const valueAdd = document.getElementById("add").value;
  if (!valueAdd) return alert("Please add a value"); // Don't add empty tasks

  const list = document.getElementById("list");
  const li = createTaskElement(valueAdd);

  list.appendChild(li);

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(valueAdd);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.getElementById("add").value = "";
}

// remove task
function removeTask(text) {
  const list = document.getElementById("list");
  const listItems = list.getElementsByTagName("li");

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === text) {
      list.removeChild(listItems[i]);
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const updateTask = tasks.filter((x) => x !== text);
      localStorage.setItem("tasks", JSON.stringify(updateTask));
      break;
    }
  }
}

// Event listeners
window.addEventListener("load", () => {
  loadTasks();
});

document.getElementById("add-button").addEventListener("click", () => {
  addTask();
});

// dark mode
function toggleDarkMode() {
  const container = document.querySelector(".container");
  container.classList.toggle("dark-mode");

  const isDarkMode = container.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}

// x- button
function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.addEventListener("click", () => {
    removeTask(taskText);
  });

  li.appendChild(removeButton);
  return li;
}
// remove
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.parentElement;
    const text = li.textContent.trim(); 
    removeTask(text);
  }
});
