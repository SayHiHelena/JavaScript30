window.addEventListener("keydown", playSound);

function playSound(e) {
  // create the variable for the audio  we want to play based on the key code
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  // if it's a invalid key, return
  if(!audio) return;
  // else, rewind the audio and play it
  audio.currentTime = 0;
  audio.play();

  // highlight the selected key
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  key.classList.toggle("playing"); // add: on VS. toggle: click-on, click-of
}

// remove the highlight
/* method 1 */
window.addEventListener("keyup", function(e) {
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.remove('playing');
});

/* method 2 */
// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// function removeTransition(e) {
//   if(e.propertyName != "transform") return;
//   e.target.classList.remove('playing');
// }
