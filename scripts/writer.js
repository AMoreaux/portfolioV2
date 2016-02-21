/**
 * Created by antoinemoreaux on 10/01/2016.
 */

window.onload = function () {

  'use strict';

  document.body.classList.add('body-visible');

  var sentences = ["websites.", "beautiful APIs.", "Angular Apps."];

  var text = document.getElementById('enum');

  var underscore = document.getElementsByClassName("underscore")[0];

  var position = 0, positionLetter = 0;

  var visibility = true;

  setInterval(blink, 500);

  function blink() {
    if (visibility) {
      underscore.classList.add("invisibility");
    } else {
      underscore.classList.remove("invisibility");
    }
    visibility = !visibility;
  }

  var construct = function () {
    var word = sentences[position].split('');

    var displayWord = "";

    var intervalConstruct = setInterval(function () {
      displayWord = word[positionLetter];
      text.textContent = text.textContent + displayWord;
      positionLetter++;

      if (positionLetter === word.length) {
        positionLetter = 0;
        position = (position === sentences.length - 1) ? 0 : position + 1;
        clearInterval(intervalConstruct);
        setTimeout(destruct, 1500);
      }
    }, 180);
  };

  var destruct = function () {

    var intervalDestruct = setInterval(function () {
      text.textContent = text.textContent.substring(0, text.textContent.length - 1);
      if (text.textContent.length === 0) {
        clearInterval(intervalDestruct);
        construct(sentences[position]);
      }
    }, 100);
  };

  construct(sentences[position]);

};

