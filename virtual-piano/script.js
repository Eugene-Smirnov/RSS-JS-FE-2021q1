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

class Piano {
    constructor() {
        this._piano = document.querySelector('.piano');
        this._pianoKeys = Array.from(document.querySelectorAll('.piano-key'));
        // MOUSE EVENTS
        this._isMouseDown = false;
        this._piano.addEventListener('pointerdown', this._keyMouseDown.bind(this));
        this._piano.addEventListener('pointerup', this._keyMouseUp.bind(this));
        this._piano.addEventListener('pointerover', this._keyMouseOver.bind(this));
        this._piano.addEventListener('pointerout', this._keyMouseOut.bind(this));
        window.addEventListener('pointerup', this._mouseUp.bind(this));
        // KEYBOARD EVENTS
        window.addEventListener('keydown', this._keyDown.bind(this));
        window.addEventListener('keyup', this._keyUp.bind(this));
    }

    toggleNotation() {
        this._pianoKeys.forEach(key => key.classList.toggle('letters'));
    }

    // MOUSE EVENTS

    _mouseDown() {
        this._isMouseDown = true;
    }
    
    _mouseUp() {
        this._isMouseDown = false;
    }

    _keyMouseDown(event) {
        this._mouseDown.apply(this);
        let key = event.target.closest('.piano-key');
        key.classList.add('piano-key-active');  
        sounds.play(sounds[`${event.target.dataset.note}`])
    }

    _keyMouseUp(event) {
        this._mouseUp.apply(this);
        let key = event.target.closest('.piano-key');
        key.classList.remove('piano-key-active');   
    }

    _keyMouseOver(event) {
        if (!event.target) return;
        let keyOver = event.target.closest('.piano-key');
        if (this._isMouseDown) {
            keyOver.classList.add('piano-key-active');
            sounds.play(sounds[`${event.target.dataset.note}`])
        };
    }

    _keyMouseOut(event) {
        if (!event.target) return;
        let keyOut = event.target.closest('.piano-key');
        if (this._isMouseDown) {
            keyOut.classList.remove('piano-key-active');
        };
    }

    // KEYBOARD EVENTS

    _keyDown(event) {
        if (event.code.length > 5) return;
        if (event.repeat === true) return;
        const keyLetter = `${event.code[3]}`;
        
        let key;
        for (let div of this._pianoKeys) {
            if (div.dataset.letter === keyLetter) {
                key = div;
                break;
            };
        };
        if (key) {
            key.classList.add('piano-key-active');  
            sounds.play(sounds[`${key.dataset.note}`]);
        };
    };

    _keyUp(event) {
        if (event.code.length > 5) return;
        const keyLetter = `${event.code[3]}`;
        let key;
        for (let div of this._pianoKeys) {
            if (div.dataset.letter === keyLetter) {
                key = div;
                break;
            };
        };
        if (key) {
            key.classList.remove('piano-key-active');  
        };
    };
}

class Switcher {
    constructor(piano) {
        this._notesButton = document.querySelector('.btn-notes');
        this._lettersButton = document.querySelector('.btn-letters');
        this._buttonContainer = document.querySelector('.btn-container');
        this._piano = piano;

        this._buttonContainer.addEventListener('click', this._onNotationChange.bind(this));
    }

    _onNotationChange(event) {
        if (!(event.target instanceof HTMLButtonElement) || event.target.classList.contains('btn-active')) {
            return;
        }

        this._notesButton.classList.toggle('btn-active');
        this._lettersButton.classList.toggle('btn-active');
        this._piano.toggleNotation();
    }
}

const piano = new Piano();
new Switcher(piano);

class FullscreenSwitcher {
    constructor() {
        this._fullscreenButton = document.querySelector('.fullscreen');
        this._fullscreenButton.addEventListener('click', this._fullscreenSwitcher.bind(this));
    }

    _fullscreenSwitcher(event) {
        if (document.fullscreen) {
            document.exitFullscreen();
            return;
        };
        document.documentElement.requestFullscreen();
    };
}

new FullscreenSwitcher();