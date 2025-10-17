let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
const newDiv = document.createElement('div');
newDiv.innerHTML = 'Hello World';
newDiv.style.backgroundColor = 'yellow';
document.body.appendChild(newDiv);
});

