/**
 * Created by antoinemoreaux on 10/01/2016.
 */

var projectsBlock = document.getElementById('projects');
var numberOfProjects = document.getElementsByTagName('section').length;
var position = 0;
var body = document.getElementsByTagName('body')[0];

document.getElementById("displayProjects").addEventListener('click', function(){
  'use strict';

  projectsBlock.classList.add('projects-display');
  body.style.overflowY = 'visible';
  body.style.overflowX = 'hidden';

  setTimeout(function(){
    appears();
  }, 400);

});

function appears(){
  'use strict';
  document.getElementsByTagName('section')[position].classList.add('appears');
  position++;
  setTimeout(function(){
    if(position === numberOfProjects-1){
      position = 0;
      return;
    }
    appears(projectsBlock[position]);
  }, 400);
}

function disappears(){
  'use strict';
  document.getElementsByTagName('section')[position].classList.remove('appears');
  position++;
  if(position === numberOfProjects-1){
    position = 0;
    return;
  }
  disappears(position);
}

document.getElementById("back").addEventListener('click', function(){
  'use strict';

  projectsBlock.classList.remove('projects-display');
  body.style.overflowY = 'hidden';
  disappears();

});