// SLIDESHOW CODE ########################################


var slideImages = ['url("Images/photos/chassisStart.jpg")', 'url("Images/photos/fabLabW1Workshop.jpg")', 'url("Images/photos/fabLabW2Classroom.jpg")']
var slideTitles = ["The beginnings of our new chassis for the 2021 season", "Team members taking part in Pelisippi State's Fab Lab", "Second week at the Fab Lab"]
var slideTexts = ["First slide text", "Second slide text", "Third slide text"]


var slideIndex = 1;
var numSlides = slideTexts.length;

var dots = document.getElementsByClassName("dot");
var imageContainer = document.getElementById("slides-container");
var titleContainer = document.getElementById("ssTitle");
var textContainer = document.getElementById("ssText");
var counterContainer = document.getElementById("ssCounter");

dots[0].className = dots[0].className.replace("dot", "dot active")


//Changes the picture, title, text, number, and dots of the slideshow to accurately form a "slide"
function showSlide(n) {
	imageContainer.style.backgroundImage = slideImages[n - 1];
	titleContainer.innerHTML = slideTitles[n - 1];
	textContainer.innerHTML = slideTexts[n - 1];
	counterContainer.innerHTML = n + " / " + numSlides;
	
	for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace("dot active", "dot");
	}
	dots[n - 1].className = dots[n - 1].className.replace("dot", "dot active");
}

// Switches from slide (n) to slide (n+1) or slide one if the previous slide was the last one available
function cycleSlides() {
	slideIndex ++
	if (slideIndex > numSlides) {
		slideIndex = 1;
	}
	// console.log("Cycled to slide " + slideIndex);
	showSlide(slideIndex);
}

showSlide(1);
var newsChanger = setInterval(cycleSlides, 7000);
var restartNewsChangerTimer = 0;

// Resumes cycling between slides
function restartNewsChanger() {
	newsChanger = setInterval(cycleSlides, 7000);
	clearInterval(restartNewsChangerTimer);
	// console.log("NewsChanger restarted");
}

// Stops cycling between slides when a slide is selected with the dots
function stopNewsChanger() {
	if (newsChanger != 0) {
		clearInterval(newsChanger);
		newsChanger = 0
		restartNewsChangerTimer = setInterval(restartNewsChanger, 20000);
		// console.log("NewsChanger stopped");
	}
}

for (i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", stopNewsChanger);
}


// HAMBURGER MENU CODE ########################################


var menu = document.getElementById("hamburgerMenu");
var button = document.getElementById("hamburgerMenuIcon");
var button1 = document.getElementById("hamburgerMenuIcon1");
var menuStatus = "hidden"
var bitPass = 0;

// Handles opening and closing of the hamburger menu; if anything is clicked while the menu is open, the menu will automatically close
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

// Hides the hamburger menu
function hideMenu() {
	if (bitPass == 0) {
		menu.style.display = "none";
		menuStatus = "hidden";
	}
	bitPass = 0
}

button.addEventListener("click", toggleMenu);
button1.addEventListener("click", toggleMenu);

//closes the hamburger menu when a button inside of it is clicked
var destinations = document.getElementById("hamburgerMenuContainer");
destinations.addEventListener("click", toggleMenu);

//closes the hamburger menu when anything other than the menu items are clicked
var body = document.getElementById("body");
body.addEventListener("click", hideMenu);


// navbar appear ########################################


var clientHeight = document.getElementById('header').clientHeight;

window.onscroll = function() {scrollFunction()};

//Disables the topbar and enables the navbar when page is scrolled past the header and vice-versa when scrolling up to the header
function scrollFunction() {
  if (document.body.scrollTop > clientHeight || document.documentElement.scrollTop > clientHeight) {
    document.getElementById("navbar").style.top = "0";
		document.getElementById("hamburgerMenuIcon1").style.marginTop = "-1200px";
		// document.getElementById("navbar").style.display = "flex";
  } else {
    document.getElementById("navbar").style.top = "-1200px";
		document.getElementById("hamburgerMenuIcon1").style.marginTop = "auto";
		// document.getElementById("navbar").style.display = "none";
  }
}