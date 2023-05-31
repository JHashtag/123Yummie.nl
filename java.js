/**
 * If the page is scrolled down more than the height of the header, then remove the class "ver1nav" and
 * add the class "ver2nav" to the header. If the page is scrolled up less than the height of the
 * header, then remove the class "ver2nav" and add the class "ver1nav" to the header.
 */
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.remove("ver1nav");
    header.classList.add("ver2nav");
  } else {
    header.classList.remove("ver2nav");
    header.classList.add("ver1nav");
  }
}

/**
 * When the user clicks the button with the id of 'openNav', the sidebar will open to a width of 250px
 * and the main content will move over 250px to the right.
 */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

/**
 * When the user clicks the close button, the sidebar will close and the main content will be
 * displayed.
 */


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

/**
 * It changes the text in the HTML elements with the ID's vak1, vak2, vak3, vak4 and vak5.
 */

var vak1 = document.getElementById("vak1");
var vak2 = document.getElementById("vak2");
var vak3 = document.getElementById("vak3");
var vak4 = document.getElementById("vak4");
var vak5 = document.getElementById("vak5");

function maandelijks(){
  vak1.innerHTML ="/Maand";
  vak2.innerHTML ="€5";
  vak3.innerHTML ="/Maand";
  vak4.innerHTML ="€2,50";
  vak5.innerHTML ="/Maand";
}
function halfjaar(){
  vak1.innerHTML ="/Halfjaar";
  vak2.innerHTML ="€25";
  vak3.innerHTML ="/Halfjaar";
  vak4.innerHTML ="€10";
  vak5.innerHTML ="/Halfjaar";
}
function jaarlijks(){
  vak1.innerHTML ="/Jaar";
  vak2.innerHTML ="€45";
  vak3.innerHTML ="/Jaar";
  vak4.innerHTML ="€20";
  vak5.innerHTML ="/Jaar";
}



/* A countdown timer. */
var countDownDate = new Date("Oct 17, 2023 20:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);