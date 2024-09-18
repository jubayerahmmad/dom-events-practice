const addTaskBtn = document.getElementById("add-task-btn");
const inputTask = document.getElementById("input-value");
const tableBody = document.getElementById("table-body");
const clearAll = document.getElementById("clear-btn");

addTaskBtn.addEventListener("click", function () {
  const taskText = inputTask.value;
  const tr = document.createElement("tr");
  const tdNum = document.createElement("td");
  tdNum.innerText = tableBody.childElementCount + 1;
  //! tdNum.innerText = tableBody.childElementCount + 1;
  const tdTask = document.createElement("td");
  tdTask.innerText = taskText;
  const tdDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  btnDelete.classList.add("btn", "btn-success", "btn-xs");
  btnDelete.addEventListener("click", function () {
    tr.remove();
  });
  tdDelete.appendChild(btnDelete);
  tr.appendChild(tdNum);
  tr.appendChild(tdTask);
  tr.appendChild(tdDelete);
  tableBody.appendChild(tr);
});

clearAll.addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all rows?")) {
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
    inputTask.value = "";
  }
});
