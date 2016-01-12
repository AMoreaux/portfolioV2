/**
 * Created by antoinemoreaux on 10/01/2016.
 */

var projectsBlock = document.getElementById('projects');

document.getElementById("displayProjects").addEventListener('click', function(){
  'use strict';

  projectsBlock.classList.add('projects-display');
  appears();
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
  disappears();

});