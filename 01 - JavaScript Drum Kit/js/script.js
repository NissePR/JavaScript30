function playSound(event) {
    const audio = document.querySelector(`audio[data-key=${event.key}]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key=${event.key}]`);
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

