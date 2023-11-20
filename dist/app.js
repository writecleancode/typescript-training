import { render } from './helpers/render-tasks.helper.js';
import { renderCategories } from './helpers/render-categories.helper.js';
const taskNameInputElement = document.querySelector('#name');
const addButtonElementElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
let selectedCategory;
const categories = ['general', 'work', 'gym', 'hobby'];
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
};
addButtonElementElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
addTask({ name: 'Zrobić klatę', category: 'gym', done: false });
renderCategories(categories, categoriesContainerElement, selectedCategory);
render(tasks, tasksContainerElement);
