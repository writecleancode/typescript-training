import { Category } from '../types/types';

export const renderCategories = (
	categories: Category[],
	categoriesContainerElement: HTMLUListElement,
	selectedCategory: Category
) => {
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
