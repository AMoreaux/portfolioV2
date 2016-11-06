/**
 * Created by antoinemoreaux on 10/01/2016.
 */

var projectsBlock = document.getElementById('projects');
var mainPage = document.getElementById('main-page');
var projectNumber = 7;

document.getElementById("displayProjects").addEventListener('click', function(){
  'use strict';

  mainPage.classList.add('main-page-hidden');
  projectsBlock.classList.add('projects-display');
  appears();
});

function appears(){
  'use strict';
  document.body.scrollTop = 0;
  for(var i = 0; i < projectNumber; i++){
    document.getElementsByTagName('section')[i].classList.add('appears' );
  }
}

function disappears(){
  'use strict';
  for(var i = 0; i < projectNumber; i++){
    document.getElementsByTagName('section')[i].classList.remove('appears');
  }
}

document.getElementById("back").addEventListener('click', function(){
  'use strict';
  projectsBlock.classList.remove('projects-display');
  mainPage.classList.remove('main-page-hidden');

  disappears();

});