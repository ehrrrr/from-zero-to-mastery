var button = document.getElementById("todoBtn");
var resetBtn = document.getElementById("resetBtn");
var clearBtn = document.getElementById("clearBtn");
var input = document.getElementById("todoInput");
var ul = document.getElementById("todoList");


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
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(todoInput.value));
    li.appendChild(span);
    li.appendChild(createDeleteBtn());
    ul.appendChild(li);
    //ul.appendChild(createDeleteBtn());
    todoInput.value = "";
    resetBtn.disabled = false;
}

function isFilledIn() {
    return (input.value.length > 0) ? true : false 
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
    if (event.target && event.target.matches("span")) {
        if(event.target.matches("span.done")) {
            event.target.classList.remove("done");
        } else {
            event.target.className = "done"; // new class name here
            clearBtn.disabled = false;
        }
    }
  }

  function resetList() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    if(!ul.hasChildNodes()) {
        resetBtn.disabled = true;
    }
  } 

  function clearList() {
    var marked = ul.getElementsByClassName("done");
    var arrayLength = marked.length;
 
    while(arrayLength) {
        ul.removeChild(marked[arrayLength-1].parentNode);
        arrayLength--;
    }
    clearBtn.disabled = true;
  }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addListenerAfterLiClick);

resetBtn.addEventListener("click", resetList);

clearBtn.addEventListener("click", clearList);