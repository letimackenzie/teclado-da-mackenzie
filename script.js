function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('playing');
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0; // Rewind to the start
  audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
