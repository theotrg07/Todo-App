// SELECTORS
const input = document.querySelector('#input-field');
const btn = document.querySelector('#add-task-btn');
const list = document.querySelector('.list');

// EVENT LISTENERS
btn.addEventListener('click', addTask);
list.addEventListener('click', deleteTask);

// FUNCTIONS
function addTask(e){
    e.preventDefault();
    if(input.value === ''){
        alert("You must write something in order to add it!");
    }else{
    
    // Create a div which includes the task and the delete button and name it with a class
    const Task = document.createElement('div'); 
    Task.classList.add('task');

    // Create the task itself, name it with a class and add it to the parent div(Task)
    const newTodo = document.createElement('li')
    newTodo.innerText = input.value;
    newTodo.classList.add('todo-item');
    Task.appendChild(newTodo);

    // Create the delete button and add to it two classes
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteButton.classList.add('delete-btn');

    // Add the button to the parent div(Task)
    Task.appendChild(deleteButton);
    // Attach the Task div to the ul
    list.appendChild(Task);
    
    // Set the input value to nothing after adding a task
    input.value = '';

}
}

function deleteTask(e){
    item = e.target;
    if(item.classList[0] === "delete-btn"){
        // e.target.parentElement.remove();
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
}