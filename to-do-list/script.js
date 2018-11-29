var button = document.getElementById("todoBtn");
var input = document.getElementById("todoInput");
var ul = document.getElementById("todoList");



function isFilledIn() {
    return (input.value.length > 0) ? true : false 
}


function deleteElement(event) {
    event.target.parentNode.remove();
}

function createDeleteBtn() {
    var btn = document.createElement("button");
    btn.className = "deleteBtn";
    btn.innerHTML = 'X';
    btn.onclick = deleteElement;
    return btn;
}

function createListElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    li.appendChild(createDeleteBtn());
    ul.appendChild(li);
    //ul.appendChild(createDeleteBtn());
    todoInput.value = "";
}


function addListAfterClick() {
	if (isFilledIn()) {
        createListElement();
	}
}

function addListAfterKeypress(event) {
	if (isFilledIn() && event.keyCode === 13) {
        createListElement();
	}
}

function addListenerAfterLiClick(event) {
    if (event.target && event.target.matches("li")) {
        if(event.target.matches("li.done")) {
            event.target.classList.remove("done");
        } else {
            event.target.className = "done"; // new class name here
        }
    }
  }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addListenerAfterLiClick);

