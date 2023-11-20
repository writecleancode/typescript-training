import { Task } from '../types/types';

export const render = (tasks: Task[], tasksContainerElement: HTMLUListElement) => {
	tasksContainerElement.innerHTML = '';
	tasks.forEach((task: Task, index: number) => {
		const taskElement: HTMLLIElement = document.createElement('li');
		const id = `task-${index}`;
		if (task.category) taskElement.classList.add(task.category);

		const taskLabel: HTMLLabelElement = document.createElement('label');
		taskLabel.innerText = task.name;
		taskLabel.htmlFor = id;

		const taskStatus: HTMLInputElement = document.createElement('input');
		taskStatus.type = 'checkbox';
		taskStatus.id = id;
		taskStatus.name = task.name;
		taskStatus.checked = task.done;
		taskStatus.addEventListener('click', () => (task.done = !task.done));

		taskElement.append(taskLabel, taskStatus);

		tasksContainerElement.append(taskElement);
	});
};
