import { Category, Task } from './types/types';
import { render } from './helpers/render-tasks.helper.js';
import { renderCategories } from './helpers/render-categories.helper.js';

const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElementElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLUListElement = document.querySelector('.tasks');
const categoriesContainerElement: HTMLUListElement = document.querySelector('.categories');

let selectedCategory: Category;

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

const addTask = (task: Task) => {
	tasks.push(task);
};

addButtonElementElement.addEventListener('click', (e: MouseEvent) => {
	e.preventDefault();

	addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
	render(tasks, tasksContainerElement);
});

addTask({ name: 'Zrobić klatę', category: 'gym', done: false });
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
