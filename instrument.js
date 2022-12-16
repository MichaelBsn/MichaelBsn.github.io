let container = document.querySelector('.instrument-container')
let audioContext;
let primaryGain;


let noteOscF4;
function makeBeepF4() {
    noteOscF4 = audioContext.createOscillator();

    noteOscF4.frequency.setValueAtTime(349.228, 0)
    noteOscF4.type = 'triangle'

    noteOscF4.connect(primaryGain);
    noteOscF4.start();
}
function drawKeyF4() {
    let key = document.createElement('button')

    key.addEventListener('mousedown', () => makeBeepF4())
    key.addEventListener('mouseup', () => noteOscF4.stop())
    key.addEventListener('touchstart', () => makeBeepF4())
    key.addEventListener('touchend', () => noteOscF4.stop())

    key.innerText = 'F4'
    key.className = 'key'
    container.appendChild(key)
}

let noteOscA4;
function makeBeepA4() {
    noteOscA4 = audioContext.createOscillator();

    noteOscA4.frequency.setValueAtTime(440, 0)
    noteOscA4.type = 'triangle'

    noteOscA4.connect(primaryGain);
    noteOscA4.start();
}
function drawKeyA4() {
    let key = document.createElement('button')

    key.addEventListener('mousedown', () => makeBeepA4())
    key.addEventListener('mouseup', () => noteOscA4.stop())
    key.addEventListener('touchstart', () => makeBeepA4())
    key.addEventListener('touchend', () => noteOscA4.stop())

    key.innerText = 'A4'
    key.className = 'key'
    container.appendChild(key)
}

const initBtn = document.querySelector('#init-btn')
initBtn.addEventListener('click', () => {
    audioContext = new AudioContext()
    primaryGain = audioContext.createGain()
    primaryGain.gain.setValueAtTime(0.05, 0)
    primaryGain.connect(audioContext.destination)
    initBtn.className = 'hide'
    drawKeyF4()
    drawKeyA4()
})