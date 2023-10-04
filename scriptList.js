// localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const list = document.getElementById("list");

  tasks.forEach((taskText) => {
    const li = createTaskElement(taskText);
    list.appendChild(li);
  });
}

// task and save to localStorage
function addTask() {
  const valueAdd = document.getElementById("add").value;
  if (!valueAdd) return alert("Please add a value");

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
    const listItemText = listItems[i].textContent.replace("X", "").trim();
    if (listItemText === text) {
      list.removeChild(listItems[i]);
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      const updatedTasks = tasks.filter((x) => x !== listItemText);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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

  // change text button
  var button = document.getElementById("dark-mode-button");
  if (button.innerText === "dark mode") {
    button.innerText = "light mode";
  } else {
    button.innerText = "dark mode";
  }
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
