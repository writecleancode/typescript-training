const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElementElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLUListElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLUListElement = document.querySelector('.categories');

let selectedCategory: Category;

type Category = 'general' | 'work' | 'gym' | 'hobby';

interface Task {
	name: string;
	done: boolean;
	category?: Category;
}

const categories: Category[] = ['general', 'work', 'gym', 'hobby'];

const tasks: Task[] = [
	{
		name: 'Wyrzucić śmieci',
		done: false,
		category: 'hobby',
	},
	{
		name: 'Pójść na siłowanię',
		done: true,
		category: 'gym',
	},
	{
		name: 'Nakarmić kota',
		done: false,
		category: 'work',
	},
];

const render = () => {
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

const renderCategories = () => {
	categories.forEach((category: Category) => {
		const categoryElement: HTMLLIElement = document.createElement('li');

		const radioInputElement: HTMLInputElement = document.createElement('input');
		radioInputElement.type = 'radio';
		radioInputElement.name = 'category';
		radioInputElement.value = category;
		radioInputElement.id = `category-${category}`;
		radioInputElement.addEventListener('change', () => {
			selectedCategory = category;
		});

		const labelElement: HTMLLabelElement = document.createElement('label');
		labelElement.htmlFor = `category-${category}`;
		labelElement.textContent = category;

		categoryElement.append(radioInputElement, labelElement);

		categoriesContainerElement.append(categoryElement);
	});
};

const addTask = (task: Task) => {
	tasks.push(task);
};

addButtonElementElement.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();
	
	addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
	render();
});

addTask({ name: 'Zrobić klatę', category: 'gym', done: false });
renderCategories();
render();
