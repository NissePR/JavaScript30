function logText(event) {
    console.log(this.classList.value);
    event.stopPropagation();
}

const divs = document.querySelectorAll('div');
divs.forEach(div => div.addEventListener('click', logText, {capture: false}));

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('Click!!');
}, {
    once: true
})