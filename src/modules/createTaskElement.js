export function createTaskElement(elem, content, className) {
    const element = document.createElement(elem);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}