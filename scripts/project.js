/**
 * Created by antoinemoreaux on 10/01/2016.
 */

var projectsBlock = document.getElementById('projects');
var numberOfProjects = document.getElementsByTagName('section').length;
var position = 0;
var html = document.getElementsByTagName('html')[0];

document.getElementById("displayProjects").addEventListener('click', function(){
  'use strict';

  projectsBlock.classList.add('projects-display');
  html.style.overflowY = 'visible';

  setTimeout(function(){
    appears();
  }, 400);

});

function appears(){
  'use strict';
  for(var i = 0; i < 5; i++){
    document.getElementsByTagName('section')[i].classList.add('appears' );

  }
}

function disappears(){
  'use strict';
  for(var i = 0; i < 5; i++){
    document.getElementsByTagName('section')[i].classList.remove('appears');
  }
}

document.getElementById("back").addEventListener('click', function(){
  'use strict';
  projectsBlock.classList.remove('projects-display');
  html.style.overflowY = 'hidden';
  disappears();

});