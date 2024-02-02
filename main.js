
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
function deleteTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
