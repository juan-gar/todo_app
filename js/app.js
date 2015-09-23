//Problem: user interaction doesn't provide desired results

//Solution: add interactivity so the user can manage daily tasks


var taskInput = document.getElementById("new-task"); //new task
var addButton = document.getElementsByTagName("button")[0]; //First button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete tasks
var completedTasksHolder = document.getElementById("completed-tasks");; //complete tasks


//New task list item
var createNewTaskElement = function (taskString) {
	//Create list item
	var listItem = document.createElement("li");
	//input checkbox
	var checkBox = document.createElement("input"); //checkbox
	//label
	var label = document.createElement("label");
	//input text
	var editInput = document.createElement("input");
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");
	//Each element needs modifying 

	//Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

//Add a new task
var addTask = function () {
	console.log("Add task...");
	//When the Add button is pressed
	//Create a new list item with the text of #new-task:
	var listItem = createNewTaskElement("Some task")

	//Append listItem to incompleteTasksHolder
	incompleteTasksHolder.appendChild(listItem);
	bindTasksEvents(listItem, taskIncomplete);

};




//Edit an existing task
var editTask = function () {
	console.log("Edit task...");
	//When the edit button is pressed
		//If the class of the parent is .editmode
			//Switch from .editmode
			//label text becomes the input's value
		//else
			//Switch to .editMode
			//input value becomes the label text

		//Toggle .editMode on the parent
};




//Delete an existing task
var deleteTask = function () {
	console.log("Delete task...");
	//When the delete button is pressed
	//Remove list item from the ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
};



//Mark a task as complete
var taskCompleted = function () {
	console.log("Complete task...");
	//When the checkbox is checked
	//Append the list item into the #complete-tasks ul
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTasksEvents(listItem, taskIncomplete);
};



//Mark a task as incomplete
var taskIncomplete = function () {
	console.log("Task incomplete...");
	//When the checkbox is unchecked
	//Append the list item into the #incomplete-tasks ul
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTasksEvents(listItem, taskCompleted);
};


var bindTasksEvents = function (taskListItem, checkboxEventHandler) {
	console.log("Bind list item event");
	//select its children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button
		editButton.onclick = editTask;
		//bind deleteTask to delete button
		deleteButton.onclick = deleteTask;
		//bind checkboxEventHandler to checkbox
		checkBox.onchange = checkboxEventHandler;
}


//Set the click handler to the addTask function
addButton.onclick = addTask;


//Cycle over incompleteTasksHolder ul items
	//for each list item
	for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
		//bind events to list item children (taskCompleted)
		bindTasksEvents(incompleteTasksHolder.children[i], taskCompleted);
	};


//Cycle over completedTasksHolder ul items
	//for each list item
	for (var i = 0; i < completedTasksHolder.children.length; i++) {
		//bind events to list item children (taskIncomplete)
		bindTasksEvents(completedTasksHolder.children[i], taskIncomplete);
	};
		





