// HAMBURGER MENU CODE
var menu = document.getElementById("hamburgerMenu");
var button = document.getElementById("hamburgerMenuIcon");
var menuStatus = "hidden"
var bitPass = 0;

function toggleMenu() {
	if (menuStatus == "hidden") {
		menu.style.display = "inline-block";
		menuStatus = "shown";
	} else if (menuStatus == "shown") {
		menu.style.display = "none";
		menuStatus = "hidden";
	}
	bitPass = 1;
}


function hideMenu() {
	if (bitPass == 0) {
		menu.style.display = "none";
		menuStatus = "hidden";
	}
	bitPass = 0
}

button.addEventListener("click", toggleMenu);

//closes the hamburger menu when a button inside of it is clicked
var destinations = document.getElementById("hamburgerMenuList");
destinations.addEventListener("click", toggleMenu);

//closes the hamburger menu when anything other than the menu items are clicked
var body = document.getElementsByTagName("body")[0];
body.addEventListener("click", hideMenu);
