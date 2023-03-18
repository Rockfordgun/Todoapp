const alert = document.querySelector('.alert');
const form = document.querySelector('.toDoForm');
const todo = document.getElementById('toDo');
const submitBtn = document.querySelector('.submitBtn');
const container = document.querySelector ('.toDo-container');
const list = document.querySelector ('.toDo-list');
const clearBtn = document.querySelector ('.clearBtn');

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", additem);

function additem (e) {
    e.preventDefault();
    const value = todo.value;
    const id = new Date().getTime().toString();
    if (value !== "" && editFlag === false) {
        console.log("Add Item To List");
    }else if (value !== "" && editFlag === true){
        console.log("Ediing");
    } else {
        console.log("Empty Value")
    }
}