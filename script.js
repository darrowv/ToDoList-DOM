const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-button");
const inputText = document.getElementById("input");

addButton.addEventListener("click", () => {
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "done";

  check.addEventListener("click", () => {
    if (check.checked) {
      text.style.textDecoration = "line-through";
    } else {
      text.style.textDecoration = "none";
    }
  });

  const text = document.createElement("p");
  text.className = "task-text";
  text.textContent = inputText.value;

  const delBtn = document.createElement("button");
  delBtn.className = "remove-task";
  delBtn.textContent = "×";

  delBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  if (inputText.value !== "") {
    taskList.prepend(taskItem);
    taskItem.append(check);
    taskItem.append(text);
    taskItem.append(delBtn);
  }

  inputText.value = "";
});
