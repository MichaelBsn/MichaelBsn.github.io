let container = document.querySelector('.instrument-container')
let audioContext;
let primaryGain;
let noteOsc;

function makeBeep(hertz) {
    noteOsc = audioContext.createOscillator();

    noteOsc.frequency.setValueAtTime(hertz, 0)
    noteOsc.type = 'triangle'


    noteOsc.connect(primaryGain);
    noteOsc.start();
}

function drawKeyF4() {
    let key = document.createElement('button')

    key.addEventListener('mousedown', () => makeBeep(349.228))
    key.addEventListener('mouseup', () => noteOsc.stop())

    key.className = 'key'
    container.appendChild(key)
}
function drawKeyA4() {
    let key = document.createElement('button')

    key.addEventListener('mousedown', () => makeBeep(440))
    key.addEventListener('mouseup', () => noteOsc.stop())

    key.className = 'key'
    container.appendChild(key)
}
function drawKeyC5() {
    let key = document.createElement('button')

    key.addEventListener('mousedown', () => makeBeep(523.251))
    key.addEventListener('mouseup', () => noteOsc.stop())

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
    drawKeyC5()
})