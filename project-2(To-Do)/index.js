let inputTask = document.querySelector(".task-input");
let addBtn = document.querySelector(".add-task");
let list = document.querySelector("#list-container");

function addTask() {
  if (inputTask.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  } else {
    alert("Please Type some Task first!");
  }
  inputTask.value = "";
  saveData();
}

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function getTask() {
  list.innerHTML = localStorage.getItem("data");
}

getTask();
