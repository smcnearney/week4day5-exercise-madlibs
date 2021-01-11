'use strict';

console.log('Scripts Loaded');

const generateMadlib = document.querySelector('#generateMadlib');

generateMadlib.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // create a variable to store a list of selectors, grab every input //
    const inputSelectors = document.querySelectorAll('input');
    //get the responses //
    const nameResponse = document.querySelector('#nameResponse');
    const subjectResponse = document.querySelector('#subjectResponse');
    
    //for every item in the list I want to run the function //
    inputSelectors.forEach(function(inputItem) {
        if (inputItem.name === 'myName') {
            //console.log("Name:", inputItem.value);
            nameResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === 'mySubject') {
            //console.log("Subject:", inputItem.value);
            subjectResponse.innerHTML = inputItem.value;
        }
    })

})