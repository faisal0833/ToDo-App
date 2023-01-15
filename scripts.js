const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const taskDiv = document.getElementById("all-tasks");
const errorDiv = document.getElementById("error-div");

addTask.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = taskInput.value;

  if (taskText) {
    errorDiv.innerHTML = "";
    taskInput.value = "";

    // Create Div
    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single-task");

    // Create Input
    const singleTaskText = document.createElement("input");
    singleTaskText.type = "Text";
    singleTaskText.value = taskText;
    singleTaskText.setAttribute("readonly", "readonly");

    // Create Edit button
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";

    // Create Complete button
    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";

    // Create Delete button
    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    // Create Component
    singleTaskDiv.appendChild(singleTaskText);
    singleTaskDiv.appendChild(editTask);
    singleTaskDiv.appendChild(completeTask);
    singleTaskDiv.appendChild(deleteTask);

    // Add The Task
    taskDiv.appendChild(singleTaskDiv);

    // Edit Task Function
    editTask.addEventListener("click", function (e) {
      if(editTask.innerText == "Edit"){
        editTask.innerText = "Save";
        singleTaskText.removeAttribute("readonly");
        singleTaskText.focus();
      } else {
        editTask.innerText = "Edit";
        singleTaskText.setAttribute("readonly", "readonly");
      }
    });

    // Complete Task Function
    completeTask.addEventListener("click", function(e){
      if(completeTask.innerText == "Complete"){
        completeTask.innerText = "Completed";
        singleTaskDiv.classList.add("task-completed");
      }
    });

    // Delete Function
    deleteTask.addEventListener("click", function(e) {
      taskDiv.removeChild(singleTaskDiv);
    })
  } else {
    errorDiv.innerHTML = "<p>Please write task name!</p>";
  }
});
