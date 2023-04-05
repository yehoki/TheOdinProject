import _ from 'lodash';
import myName from './myName';
import './style.css';
import Icon from './icon.svg';


function component() {
    // const element = document.createElement('div');
    const myNameEl = document.createElement('div');

    myNameEl.textContent = myName('NameHere');
    myNameEl.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
  
    myNameEl.appendChild(myIcon);


    return myNameEl;
  
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    // return element;
  }
  
  document.body.appendChild(component());


  // When exporting a single function - used export default, when exporting multiple use named exports - this allows to import any of the exported functions instead of all at once.

  /* 
  Named exports: 
  export {
    fnOne,
    fnTwo,
  };


  */ 