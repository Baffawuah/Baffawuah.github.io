
//setting up the array of sounds to be used through javascript
var sounds = [];
  sounds[0] = new Audio('resources/sound/HIP_Kick.ogg');
  sounds[1] = new Audio('resources/sound/808_Kick.ogg');
  sounds[2] = new Audio('resources/sound/DNC_Clap_6.ogg');
  sounds[3] = new Audio('resources/sound/HIP_Snare.ogg');
  sounds[4] = new Audio('resources/sound/808_CH.ogg');
  sounds[5] = new Audio('resources/sound/808_OH.ogg');
  sounds[6] = new Audio('');
  sounds[7] = new Audio('');
  sounds[8] = new Audio('');


$(document).ready(function(){
  //setting up pad drum functions
  $('.padbtn').click(function(){
    Dpad($(this).attr('id'));
  })
})

//particles.js creation function
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function()
{ console.log('callback - particles.js config loaded');});

//universal pad playing event so we can have an easier time binding it to the keyboard
function Dpad(pid){
  sounds[pid].pause();
  sounds[pid].currentTime = 0;
  sounds[pid].play();
}


//Key stroke events using switch based on ASCII character code
$(document).on('keypress', function(e){
  console.log('keystroke event');

  switch(e.which){
    //Q
    case 81: Dpad(0); break;
    case 113: Dpad(0); break;
    //W
    case 87: Dpad(1); break;
    case 119: Dpad(1); break;
    //E
    case 69: Dpad(2); break;
    case 101: Dpad(2); break;
    //A
    case 65: Dpad(3); break;
    case 97: Dpad(3); break;
    //S
    case 83: Dpad(4); break;
    case 115: Dpad(4); break;
    //D
    case 68: Dpad(5); break;
    case 100: Dpad(5); break;
  }
})