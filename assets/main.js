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


// Partie Contact

const message =
  "Thank you for submitting. John DOE will treat your request as soon as possible.";

document.getElementById("form");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});