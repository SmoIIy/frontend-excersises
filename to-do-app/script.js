// const testobject = {
//     task: "købe ind",
//     count: "4",
//     finished: true,
//     id: 123
// }
// function renderList(item){
//     const template = document.querySelector("#template").content;
//     const copy = template.cloneNode(true);
//     copy.querySelector(".list-task").innerHTML = `Task: ${item.task}`;
//     copy.querySelector(".list-count").innerHTML = `Count: ${item.count}`;
//     copy.querySelector(".list-id").innerHTML = `ID: ${item.id}`;
//     if (item.finished === true) {
//         copy.querySelector(".list-finished").classList.add("fa-check");
//         copy.querySelector(".list-finished").classList.add("fa-solid");
//     } else {
//         copy.querySelector(".list-finished").classList.add("fa-x")
//         copy.querySelector(".list-finished").classList.add("fa-solid");
//     }
   

//     const listParent = document.querySelector(".list");
//     listParent.appendChild(copy);
// }

// renderList(testobject);

//-------------------------------------------------//
const list_container = document.querySelector(".list"); 
const template = document.querySelector("#template");
const addbutton = document.querySelector("#add");
let items = grapList();

function grapList(){
    const value = localStorage.getItem("todo") || "[]";

    
    return JSON.parse(value);
}

function setList(items){
    const itemsJson = JSON.stringify(items);

    localStorage.setItem("todo", itemsJson);
}

function addToList(){
    items.unshift({
        item_name: "",
        count: 0,
        finished: false,
        id: 0
    });
    setList(items);
    refreshList();
}

function refreshList(){
    //TODO: Sort items
    
    list_container.innerHTML = "";

    items.forEach(item => {
        const itemElement = template.content.cloneNode(true);
        const taskNameInput = itemElement.querySelector(".list-task");
        const finishedInput = itemElement.querySelector("#check");

        taskNameInput.value = item.item_name;
        finishedInput.checked = item.finished;

        list_container.appendChild(itemElement);
    });
}

addbutton.addEventListener("click", () => {
    addToList();
    console.log("test");
})

refreshList();
console.log(items);