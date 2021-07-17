const todo_form = document.getElementById("todo_form")
const input = document.getElementById("input");
const todobox = document.getElementById("todobox");
const completed_todo = document.getElementById("completed_todo");
const button1 = document.getElementById("button");
const compTodo = document.getElementById("completed_todos_list");
const tick = document.getElementById('tick');

// let inputVal = input.value.trim()

let todos = []
let completed_todos = []

let completed_todos_counter = -1

todo_form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input.value.trim() != "") {
        todos.push(input.value.trim())
        input.value = ""
    }

    init();


    console.log(todos)
})



function removeItem(arr, index) {
    let remove_item = arr[index]
    // alert(remove_item)
    arr.splice(remove_item, 1)
    init()
    // alert(`Array: ${arr} <br/> Index: ${index}`)
}

function clearAll(arr) {
    arr.splice(0, arr.length)

    init()
}

function add_completed_todo(index) {
    let completed_item = todos[index]

    completed_todos.push(completed_item)
    removeItem(todos, index)
}


function init() {
    todobox.innerHTML = ""
    completed_todo.innerHTML = ""
    let counter = -1

    todos.forEach((todo) => {
        counter++
        todobox.innerHTML += `
        <div class="todo">
            <div class="todo_desc">
                ${todo}
            </div>
            <div id="button" class="buttons">
                <button class="cross"onclick=removeItem(todos,${counter})><i class='fa fa-remove'></i></button>
                <button id="tick" class="tick" onclick=add_completed_todo(${counter})><i class='fa fa-check'></i></button>
            </div>
        </div>`
    })

    counter = -1

    completed_todos.forEach((todo) => {
        completed_todos_counter++
        completed_todo.innerHTML += `
    <div class="todo">
        <div class="todo_desc">
            ${todo}
        </div>
        <div id="button", class="buttons">
            <button onclick=removeItem(completed_todos,${counter})><i class='fa fa-remove'></i></button>
        </div>
    </div>`
    })
}

