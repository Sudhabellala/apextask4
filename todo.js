document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-task");
    const todoList = document.getElementById("todo-list");
  
    addButton.addEventListener("click", () => {
      const task = input.value.trim();
      if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          listItem.remove();
        });
  
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        input.value = ""; // Clear input field
      }
    });
  });
  