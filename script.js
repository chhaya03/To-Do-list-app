
const userInput = document.getElementById("user-input");
const listContainer = document.querySelector(".list-container");



function addTask() {
    if (userInput.value === '') {      //  it will give alert on clicking add button without input value in box
        alert("you must write something!");
    }

    else {                              // what if we add task in input box  what happens

        // when we add any task in input box then automatically it will be in form of  list tag in the list container class 
        let li = document.createElement("li");
        li.innerText = userInput.value;
        listContainer.appendChild(li);

        // right end of the task list , have created span tag 
        let span = document.createElement("span");
        span.innerHTML = "x";   // value of span tag is x (cancel sign)
        li.appendChild(span);

    }

    userInput.value = "";   // after adding input task into the list then input box will be empty 
    saveData();

}




// after clicking on list container (added tasks) ,see what happens
listContainer.addEventListener("click", function (e) {

    // it will be toggle like checked it means when we will click on out task list it will checked right (as completed task)
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    // after clicking span tag (right end of list cross) , task will be removed
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);






// for not disappearing data even after refreshing ui page

function saveData() {

    localStorage.setItem("data", listContainer.innerHTML);
}



function showTask() {

    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();




