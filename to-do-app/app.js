//variables
const FORM = document.querySelector("#form");
const CHECK = document.querySelector("#check");



FORM.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the value of the input field
    let taskValue = document.querySelector('#task-name').value;
    let taskCount = document.querySelector('#count').value;
    let id = self.crypto.randomUUID();
    let newItem = {
        task: taskValue,
        count: taskCount,
        finished: false,
        id: id
    };
  
    if (newItem.task.trim() === "") {
      alert('Please enter an item.');
      return; //Prevents the program from further executing
    }
  
    // Retrieve existing items from local storage or initialize an empty array
    let items = JSON.parse(localStorage.getItem('items')) || [];
  
    // Add the new item to the array
    items.push(newItem);
  
    // Store the updated array back in local storage
    localStorage.setItem('items', JSON.stringify(items));
  
    // Render the updated list
    renderItemList();
  
    // Clear the input field
    document.querySelector('#task-name').value = '';
    document.querySelector('#count').value = 0;
  });
  
  // Function to render the item list
function renderItemList() {
    let itemList = document.querySelector('.list');
    itemList.innerHTML = ''; // empty previous items
  
    let items = JSON.parse(localStorage.getItem('items')) || [];

    //sort items based on finished or not
    items.sort(function(a, b) {
        return a.finished - b.finished;
      });
  
    // Create list items and append them to the list
    items.forEach(function(item, index) {

        const template = document.querySelector("#template").content;
        const copy = template.cloneNode(true);
        copy.querySelector(".list-task").innerHTML = item.task;
        copy.querySelector("#list-count").innerHTML = item.count;

        //Variables for eventlisteners
        const CHECK = copy.querySelector("#check");
        const DELETE = copy.querySelector("#delete");
        const LIST_ITEM = copy.querySelector(".list-item");
        CHECK.checked = item.finished;

        if (item.finished) {
            LIST_ITEM.classList.add("finished");
        }


    const listParent = document.querySelector(".list");
    listParent.appendChild(copy);



    //Delete if deletebutton clicked
    DELETE.addEventListener("click", () => {
        //splice array to remove item
        items.splice(index, 1);
        //Update local storage
        localStorage.setItem("items", JSON.stringify(items));
        //rerender list
        renderItemList();
    })

    //Check checkmark for change and updateList
    CHECK.addEventListener('change', (e) => {
        console.log(e);
        // Toggle completion status
        item.finished = !item.finished;
        //Update local storage
        localStorage.setItem('items', JSON.stringify(items));
        //Render items to update UI
        renderItemList();
      });
  
      
    });
  }
  
  // Initial rendering of the item list
  renderItemList();
  