
const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.style.color = 'red';
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);


const blueHeading = document.createElement('h3');
blueHeading.style.color = 'blue';
blueHeading.textContent = "I'm a blue h3!";
container.appendChild(blueHeading);

const content = document.createElement('div');
content.style.cssText = 'border: black solid; background-color: pink;'

const heading = document.createElement('h1');
heading.textContent = "I'm in a div!";
content.appendChild(heading);

const paragraph = document.createElement('p');
paragraph.textContent = "ME TOO!";
content.appendChild(paragraph);

container.appendChild(content);
