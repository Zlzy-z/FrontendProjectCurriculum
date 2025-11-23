// ES6 Features Practice

// ============================================
// Exercise 1: Arrow Functions
// ============================================

// TODO: Convert this traditional function to an arrow function
function addTraditional(a, b) {
    return a + b;
}

// TODO: Write this as an arrow function
const add = (a, b) => a + b;
 // Replace null with arrow function

// TODO: Convert this to an arrow function
function double(n) {
    return n * 2;
}


const doubleArrow = n => n * 2; // Replace null

// TODO: Write an arrow function that takes an array of numbers
// and returns a new array with all values doubled
const doubleArray = arr => arr.map(n => n * 2); // Use map() with arrow function

document.getElementById('test-arrow').addEventListener('click', () => {
    const output = document.getElementById('output-1');
    try {
        output.innerHTML = `
            add(5, 3) = ${add ? add(5, 3) : 'Not implemented'}<br>
            double(7) = ${doubleArrow ? doubleArrow(7) : 'Not implemented'}<br>
            doubleArray([1,2,3]) = [${doubleArray ? doubleArray([1, 2, 3]) : 'Not implemented'}]
        `;
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
});

// ============================================
// Exercise 2: Destructuring
// ============================================

const person = {
    name: 'Alice',
    age: 25,
    city: 'New York',
    job: 'Developer'
};

// TODO: Use destructuring to extract name and age
const{name, age} = person;
// const { name, age } = person;


const colors = ['red', 'green', 'blue', 'yellow'];

// TODO: Use destructuring to get first and second colors
const [first, second] = colors
// const [first, second] = colors;

// TODO: Write a function that takes an object and uses destructuring
// in the parameters
function displayUser({name, age}) {
    return `${name} is ${age} years old`;
}


document.getElementById('test-destructuring').addEventListener('click', () => {
    const output = document.getElementById('output-2');
    try {
        const { name, age } = person;
        const [first, second] = colors;
        output.innerHTML = `
            Name: ${name}<br>
            Age: ${age}<br>
            First color: ${first}<br>
            Second color: ${second}<br>
            ${displayUser(person)}
        `;
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
});

// ============================================
// Exercise 3: Spread Operator
// ============================================

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// TODO: Combine arrays using spread
const combined = null; // Use [...arr1, ...arr2]

const combinedarr =  [...arr1, ...arr2]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// TODO: Combine objects using spread
const combinedObj = {...obj1, ...obj2}; // Use {...obj1, ...obj2}

// TODO: Create a function that takes any number of arguments
// and returns their sum (use rest parameters)
function sum( ...numbers ) {
    // Use reduce to sum all numbers
    return number;
}

document.getElementById('test-spread').addEventListener('click', () => {
    const output = document.getElementById('output-3');
    try {
        output.innerHTML = `
            Combined array: [${combined || 'Not implemented'}]<br>
            Combined object: ${JSON.stringify(combinedObj) || 'Not implemented'}<br>
            sum(1,2,3,4,5) = ${sum(1, 2, 3, 4, 5)}
        `;
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
});

// ============================================
// Exercise 4: Template Literals
// ============================================

// TODO: Create a function that uses template literals
// to format a user greeting
function createGreeting(name, age, city) {
    // Use template literals with ${} for variables
    const message = `My name is ${name}, I'm ${age} years old and I am from ${city}.`;

    return message;
}

// TODO: Create a multi-line HTML string using template literals
function createCard(title, description, price) {
    // Use template literals for multi-line string
    const html = `
  <div>
    <h1>${title}</h1>
    <p>${description}</p>
    <p> ${price}</p>
  </div>
`
return html;
}

document.getElementById('test-template').addEventListener('click', () => {
    const output = document.getElementById('output-4');
    try {
        const greeting = createGreeting('Bob', 30, 'Boston');
        const card = createCard('Product', 'Description here', 29.99);
        output.innerHTML = `
            ${greeting}<br><br>
            Card HTML:<br>
            ${card.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
        `;
    } catch (e) {
        output.textContent = 'Error: ' + e.message;
    }
});

// Solutions are in the comments below - try not to peek!

/*
SOLUTIONS:

// Arrow Functions
const add = (a, b) => a + b;
const doubleArrow = n => n * 2;
const doubleArray = arr => arr.map(n => n * 2);

// Destructuring
const { name, age } = person;
const [first, second] = colors;
function displayUser({ name, age }) {
    return `${name} is ${age} years old`;
}

// Spread
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

// Template Literals
function createCard(title, description, price) {
    return `
        <div class="card">
            <h3>${title}</h3>
            <p>${description}</p>
            <span>$${price}</span>
        </div>
    `;
}
*/
