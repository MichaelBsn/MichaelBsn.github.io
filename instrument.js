let container = document.querySelector('.instrument-container')
let audioContext;
let primaryGain;
let noteOsc;

function makeBeep(hertz) {
    noteOsc = audioContext.createOscillator();
    noteOsc.frequency.setValueAtTime(hertz, 0)
    noteOsc.connect(primaryGain);
    noteOsc.start();
    noteOsc.stop(audioContext.currentTime + 0.25)
}

function drawInstrument() {
    let key = document.createElement('button')
    key.addEventListener('click', () => makeBeep(440))
    key.className = 'key'
    container.appendChild(key)
}

document.querySelector('#init-btn').addEventListener('click', () => {
    audioContext = new AudioContext()
    primaryGain = audioContext.createGain()
    primaryGain.gain.setValueAtTime(0.05, 0)
    primaryGain.connect(audioContext.destination)
    drawInstrument()
})