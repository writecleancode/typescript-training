export const renderCategories = () => {
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
