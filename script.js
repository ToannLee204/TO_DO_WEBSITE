document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Thêm task mới
    addButton.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.classList.add('task');

        // Nút đánh dấu hoàn thành
        const completeButton = document.createElement('button');
        completeButton.textContent = '✔️';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Nút sửa
        const editButton = document.createElement('button');
        editButton.textContent = '✏️';
        editButton.addEventListener('click', function() {
            const newTaskText = prompt('Edit task:', taskSpan.textContent);
            if (newTaskText !== null) {
                taskSpan.textContent = newTaskText.trim() || taskSpan.textContent;
            }
        });

        // Nút xóa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        todoInput.value = '';
        todoInput.focus();
    }
});
