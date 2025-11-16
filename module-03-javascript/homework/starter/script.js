// Module 3 Homework - To-Do List Application

// TODO: Create an array to store todos
let todos = [];

// TODO: Create a counter for unique IDs
let nextId = 1;

// TODO: Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clear-completed');

// Current filter state
let currentFilter = 'all';

// TODO: Function to add a new todo
function addTodo(text) {
    // Create todo object with id, text, completed properties
    // Add to todos array
    // Increment nextId
    // Render the list
    let newTodo ={
        name: text,
        id: nextId,
        complete: false,
    };

    todos.push(newTodo);
    nextId++;
    
    renderTodos()
}

// TODO: Function to toggle todo completion
function toggleTodo(id) {
    // Find todo by id
    // Toggle its completed property
    // Render the list
    let todo = todos.find(function(todo) {
        return id === todo.id;
    }); 
    todo.complete = !todo.complete;
    renderTodos();
}

// TODO: Function to delete a todo
function deleteTodo(id) {
    // Filter out the todo with matching id
    
    let newTodo = todos.filter(function(todo){
        return todo.id !=id;
    });
    todos = newTodo;
    // Render the list
    renderTodos();
}


// TODO: Function to render todos
function renderTodos() {
    // Clear the list
    todoList.innerHTML = '';

    // Filter todos based on currentFilter
    let filteredTodos = todos;
    if (currentFilter === 'active') {
        // Show only incomplete todos
        filteredTodos = todos.filter(function(todo){
            return todo.complete === false;
        });
    } else if (currentFilter === 'completed') {
        // Show only completed todos
        filteredTodos = todos.filter(function(todo){
            return todo.complete === true;
        });
    }

    // Create DOM elements for each todo
    filteredTodos.forEach(function(todo) {
        // Create li element
        // Add class 'todo-item'
        // If completed, add 'completed' class
        let li = document.createElement('li');
        li.classList.add("todo-item");
        if (todo.complete === true) {
            li.classList.add('completed');
        }

        // Create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.complete;
        checkbox.addEventListener('change', function() {
            toggleTodo(todo.id);
        });
        // Create text span
        
        let span = document.createElement('span');
        span.textContent = todo.name
        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "x";
        deleteBtn.addEventListener ('click', function(){
            deleteTodo(todo.id);
        })

        // Add event listeners
        // Append to list
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li)
    });

    // Update count
    updateCount();
}

// TODO: Function to update the count display
function updateCount() {
    // Count active (incomplete) todos
    let count = todos.filter(function (todo){
        return todo.complete === false;
    }).length;

    // Update todoCount text
    todoCount.textContent = count + "item left"

}

// TODO: Function to clear completed todos
function clearCompleted() {
    // Filter out completed todos
    let newlist = todos.filter(function(todo){
        return todo.complete === true;
    });
    todos= newlist;
    // Render the list
    renderTodos();

}

// TODO: Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input value
    let text = todoInput.value;
    // Add todo if not empty
    if (text !== ""){
        addTodo(text);
        // Clear input
        todoInput.value = "";
    }
});

// TODO: Event listeners for filter buttons
filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        // Add 'active' to clicked button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Set currentFilter
        currentFilter = btn.dataset.filter;
        // Render todos
        renderTodos();
    });
});

// TODO: Event listener for clear completed button
clearCompletedBtn.addEventListener('click', clearCompleted);

// Initial render
renderTodos();
