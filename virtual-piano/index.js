const buttonNotes = document.querySelector('.btn-notes');
const buttonLetters = document.querySelector('.btn-letters');
const buttonContainer = document.querySelector('.btn-container');
const keys = document.querySelectorAll('.piano-key')

function notationSwitcher(event) {
    let button = event.target.closest('button');
    if (!button || event.target.classList.contains('btn-active')) return;
    buttonNotes.classList.toggle('btn-active');
    buttonLetters.classList.toggle('btn-active');
    keys.forEach(key => key.classList.toggle('notes'));
    keys.forEach(key => key.classList.toggle('letters'));
};

buttonContainer.addEventListener('click', notationSwitcher);