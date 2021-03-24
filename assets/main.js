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


//partie js header
function burgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

