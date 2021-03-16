// NOTATION SWITCHER

const buttonNotes = document.querySelector('.btn-notes');
const buttonLetters = document.querySelector('.btn-letters');
const buttonContainer = document.querySelector('.btn-container');
const keys = document.querySelectorAll('.piano-key')

function notationSwitcher(event) {
    let button = event.target.closest('button');
    if (!button || event.target.classList.contains('btn-active')) return;
    buttonNotes.classList.toggle('btn-active');
    buttonLetters.classList.toggle('btn-active');
    keys.forEach(key => {
        key.classList.toggle('notes'); 
        key.classList.toggle('letters');
    });
};

buttonContainer.addEventListener('click', notationSwitcher);

// // PIANO
// AUDIO
const sounds = {
    'a': new Audio('./assets/audio/a.mp3'),
    'a♯': new Audio('./assets/audio/a♯.mp3'),
    'b': new Audio('./assets/audio/b.mp3'),
    'c': new Audio('./assets/audio/c.mp3'),
    'c♯': new Audio('./assets/audio/c♯.mp3'),
    'd': new Audio('./assets/audio/d.mp3'),
    'd♯': new Audio('./assets/audio/d♯.mp3'),
    'e': new Audio('./assets/audio/e.mp3'),
    'f': new Audio('./assets/audio/f.mp3'),
    'f♯': new Audio('./assets/audio/f♯.mp3'),
    'g': new Audio('./assets/audio/g.mp3'),
    'g♯': new Audio('./assets/audio/g♯.mp3'),

    play(audio) {
        audio.currentTime = 0;
        audio.play();
    },
};
console.log(sounds);
// MOUSE EVENTS
const piano = document.querySelector('.piano');

let isMouseDown = false;
function isMouseDownSwitch() {
    isMouseDown = !isMouseDown;
};

window.addEventListener('mousedown', isMouseDownSwitch);
window.addEventListener('mouseup', isMouseDownSwitch);

function keyMouseUpDown(event) {
    let key = event.target.closest('.piano-key');
    key.classList.toggle('piano-key-active');   
};

function keyMouseDown(event) {
    keyMouseUpDown(event);
    sounds.play(sounds[`${event.target.dataset.note}`])
}

piano.addEventListener('mousedown', keyMouseDown);
piano.addEventListener('mouseup', keyMouseUpDown);

function keyMouseOver(event) {
    if (!event.target) return;
    let keyOver = event.target.closest('.piano-key');
    if (isMouseDown) {
        keyOver.classList.toggle('piano-key-active');
        sounds.play(sounds[`${event.target.dataset.note}`])
    };
};

piano.addEventListener('mouseover', keyMouseOver);

function keyMouseOut(event) {
    if (!event.target) return;
    let keyOut = event.target.closest('.piano-key');
    if (isMouseDown) {
        keyOut.classList.toggle('piano-key-active');
    };
};

piano.addEventListener('mouseout', keyMouseOut);