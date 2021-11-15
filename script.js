// SLIDESHOW CODE
var slideImages = ['url("Images/photos/robo.jpg")', 'url("Images/photos/fly4whiteguy.jpg")', 'url("Images/sponsors/MCS.png")']
var slideTitles = ["slide one", "slide two", "guess what... slide three!"]
var slideTexts = ["First slide text", "Second slide text", "Third slide text"]


var slideIndex = 1;
var numSlides = slideTexts.length;

var dots = document.getElementsByClassName("dot");
var imageContainer = document.getElementById("slides-container");
var titleContainer = document.getElementById("ssTitle");
var textContainer = document.getElementById("ssText");
var counterContainer = document.getElementById("ssCounter");

function showSlide(n) {
	imageContainer.style.backgroundImage = slideImages[n - 1];
	titleContainer.innerHTML = slideTitles[n - 1];
	textContainer.innerHTML = slideTexts[n - 1];
	counterContainer.innerHTML = n + " / " + numSlides;

	for (i = 0; i < dots.length; i++) {
		if(i != n) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
	}
}

function cycleSlides() {
	slideIndex ++
	if (slideIndex > numSlides) {
		slideIndex = 1;
	}
	showSlide(slideIndex);
	// console.log("Cycled to slide " + slideIndex);
}

showSlide(1);
var newsChanger = setInterval(cycleSlides, 7000);

for (i = 0; i < dots.length; i++) {
	dots[i].addEventListener("click", clearInterval(newsChanger));
}

/*			OUTDATED SLIDESHOW CODE
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("newsSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
		//slides[i].style.zIndex = "0";
	}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
	//slides[slideIndex-1].style.zIndex = "10";
  dots[slideIndex-1].className += " active";
}

function changeSlides() {
	plusSlides(1);
}

showSlides(slideIndex);
var newsChanger = setInterval(changeSlides, 7000);
*/

// HAMBURGER MENU CODE
var menu = document.getElementById("hamburgerMenu");
var button = document.getElementById("hamburgerMenuIcon");
var button1 = document.getElementById("hamburgerMenuIcon1");
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
button1.addEventListener("click", toggleMenu);

//closes the hamburger menu when a button inside of it is clicked
var destinations = document.getElementById("hamburgerMenuList");
destinations.addEventListener("click", toggleMenu);

//closes the hamburger menu when anything other than the menu items are clicked
var body = document.getElementById("body");
body.addEventListener("click", hideMenu);

//document.addEventListener('contextmenu', event => event.preventDefault());

/*					USED FOR JOIN US FORM IFRAME --OUTDATED--	
$(function(){
  $('#joinUs').click(function(){ 
    if(!$('#iframe').length) {
      $('#iframeHolder').html('<iframe id="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfBtnBe92Y_NIFXODOuqEao3xzNIFigf_Q8IIrsw1BoU9K3Dg/viewform?" width="700" height="450"></iframe>');
    }
  });   
});

// For Join Us button in hamburger menu
$(function(){
  $('#joinUsHamburger').click(function(){ 
    if(!$('#iframe').length) {
      $('#iframeHolder').html('<iframe id="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfBtnBe92Y_NIFXODOuqEao3xzNIFigf_Q8IIrsw1BoU9K3Dg/viewform?" width="700" height="450"></iframe>');
    }
  });   
});

$(function(){
  $('#joinUsSplash').click(function(){ 
    if(!$('#iframe').length) {
      $('#iframeHolder').html('<iframe id="iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSfBtnBe92Y_NIFXODOuqEao3xzNIFigf_Q8IIrsw1BoU9K3Dg/viewform?" width="700" height="450"></iframe>');
    }
  });   
});
*/

// navbar appear

var clientHeight = document.getElementById('header').clientHeight;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > clientHeight || document.documentElement.scrollTop > clientHeight) {
    document.getElementById("navbar").style.top = "0";
		// document.getElementById("navbar").style.display = "flex";
  } else {
    document.getElementById("navbar").style.top = "-1200px";
		// document.getElementById("navbar").style.display = "none";
  }
}


