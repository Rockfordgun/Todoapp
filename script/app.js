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
//clear items//
clearBtn.addEventListener('click', clearItems);

function additem (e) {
    e.preventDefault();
    const value = todo.value;
    const id = new Date().getTime().toString();
    if (value !== "" && editFlag === false) {
        const element = document.createElement ('article');
        element.classList.add("list-item");
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <!-- edit btn -->
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <!-- delete btn -->
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;
        list.appendChild(element);

        displayAlert('You have added A Item to your list', 'success');

        container.classList.add("show-container");
        //add to storage
        addToLocalStorage (id, value);
        //Default
        setBackToDefault () ;

    }else if (value !== "" && editFlag === true){
        console.log("Ediing");
    } else {
        displayAlert("You didnt enter anything!", "danger")
    }
}

//Alert//

function displayAlert (text, action) {
    alert.textContent = text;
    alert.classList.add (`alert-${action}`); 
//Remove Alert
setTimeout (function () {
    alert.textContent = "";
    alert.classList.remove (`alert-${action}`); 
},1000);
}

//Clear all items//
function clearItems (){
    const items = document.querySelectorAll('.list-item');
    if (items.length > 0 ){
        items.forEach (function(item){
         list.removeChild(item);   
        });
    }
    container.classList.remove("show-container");
    displayAlert("Cleared Content", "success");
    setBackToDefault();
    localStorage.removeItem('list');
}

//Default//
function setBackToDefault (){
    todo.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit";
}
//Localstorage//
function addToLocalStorage (id,value){
    console.log('Add To local Storage');
}


