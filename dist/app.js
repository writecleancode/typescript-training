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
const render = () => {
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
const renderCategories = () => {
    categories.forEach((category) => {
        const categoryElement = document.createElement('li');
        const radioInputElement = document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener('change', () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement('label');
        labelElement.htmlFor = `category-${category}`;
        labelElement.textContent = category;
        categoryElement.append(radioInputElement, labelElement);
        categoriesContainerElement.append(categoryElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElementElement.addEventListener('click', (e) => {
    e.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
    render();
});
addTask({ name: 'Zrobić klatę', category: 'gym', done: false });
renderCategories();
render();
