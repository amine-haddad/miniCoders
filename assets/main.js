"use strict";
function animate_text() {
  let delay = 150,
    delay_start = 0,
    contents,
    letters;

  document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
 
        // effet machine à écrire + animation CSS
        var span = document.createElement('span');
        span.innerHTML = letter.replace(/ /,'&nbsp;');
        elem.appendChild(span);
        // ---------
      }, delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}
animate_text();

/* ----------------------------------
----------PARTIE JS HOME_PAGE --------
-------------------------------------*/
"use strict";
function animate_home_text() {
  let delay = 100,
    delay_start = 0,
    contents,
    letters;

  document.querySelectorAll(".animate-home-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {
        // effet machine à écrire simple      
        elem.textContent += letter;
        // ---------
      }, delay_start + delay * index_1);
    });    
    delay_start += delay * letters.length;
  });
}
animate_home_text();

/* Partie Project */

// Get the modal1
var modal1 = document.getElementById('myModal1');

// Get the button1 that opens the modal1
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal1
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the image1, open the modal1
btn1.onclick = function() {
    modal1.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal1
span1.onclick = function() {
    modal1.style.display = "none";
}

// Get the modal2
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal2
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal2
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the image2, open the modal2
btn2.onclick = function() {
    modal2.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal2
span2.onclick = function() {
    modal2.style.display = "none";
}

// Get the modal3
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal3
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal3
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the image3, open the modal3
btn3.onclick = function() {
    modal3.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal3
span3.onclick = function() {
    modal3.style.display = "none";
}

//partie js header
/*fonction pour l'animation du menu descktop en burger menu quand il passe en mobilefirst.*/
function burgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
/*fonction pour que chaque page appelé par le menu descktop ou burger menu recharge la page.*/
function reloadThePage(){
  window.location.reload(); } 

// Partie Contact
