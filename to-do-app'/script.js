const testobject = {
    task: "købe ind",
    count: "4",
    finished: true,
    id: 123
}

function renderList(item){
    const template = document.querySelector("#template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".list-task").innerHTML = `Task: ${item.task}`;
    copy.querySelector(".list-count").innerHTML = `Count: ${item.count}`;
    copy.querySelector(".list-id").innerHTML = `ID: ${item.id}`;
    if (item.finished === true) {
        copy.querySelector(".list-finished").classList.add("fa-check");
        copy.querySelector(".list-finished").classList.add("fa-solid");
    } else {
        copy.querySelector(".list-finished").classList.add("fa-x")
        copy.querySelector(".list-finished").classList.add("fa-solid");
    }
   

    const listParent = document.querySelector(".list");
    listParent.appendChild(copy);
}

renderList(testobject);