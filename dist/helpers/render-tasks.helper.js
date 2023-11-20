export const render = (tasks, tasksContainerElement) => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        const id = `task-${index}`;
        if (task.category)
            taskElement.classList.add(task.category);
        const taskLabel = document.createElement('label');
        taskLabel.innerText = task.name;
        taskLabel.htmlFor = id;
        const taskStatus = document.createElement('input');
        taskStatus.type = 'checkbox';
        taskStatus.id = id;
        taskStatus.name = task.name;
        taskStatus.checked = task.done;
        taskStatus.addEventListener('click', () => (task.done = !task.done));
        taskElement.append(taskLabel, taskStatus);
        tasksContainerElement.append(taskElement);
    });
};
