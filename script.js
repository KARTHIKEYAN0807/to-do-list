// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearCompletedButton = document.getElementById('clearCompletedButton');

    addTaskButton.addEventListener('click', addTask);
    clearCompletedButton.addEventListener('click', clearCompletedTasks);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${taskText}</span>
            <input type="checkbox" class="mark-completed">
        `;

        li.querySelector('.mark-completed').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    function clearCompletedTasks() {
        const completedTasks = document.querySelectorAll('.task-item.completed');
        completedTasks.forEach(task => task.remove());
    }
});
