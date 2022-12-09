const audioContext = new AudioContext();

const primaryGain = audioContext.createGain()
primaryGain.gain.setValueAtTime(0.05, 0)
primaryGain.connect(audioContext.destination)

function makeBeep(hertz) {
    const noteOsc = audioContext.createOscillator();
    noteOsc.frequency.setValueAtTime(hertz, 0)
    noteOsc.connect(primaryGain);
    noteOsc.start();
    noteOsc.stop(audioContext.currentTime + 0.25)
}

document.querySelector('#note-c-natural').addEventListener('click', () => {
    makeBeep(523.25)
})
document.querySelector('#note-c-sharp').addEventListener('click', () => {
    makeBeep(554.37)
})
document.querySelector('#note-d-natural').addEventListener('click', () => {
    makeBeep(587.33)
})
document.querySelector('#note-d-sharp').addEventListener('click', () => {
    makeBeep(622.25)
})
document.querySelector('#note-e-natural').addEventListener('click', () => {
    makeBeep(659.25)
})
document.querySelector('#note-f-natural').addEventListener('click', () => {
    makeBeep(698.46)
})
document.querySelector('#note-f-sharp').addEventListener('click', () => {
    makeBeep(739.99)
})
document.querySelector('#note-g-natural').addEventListener('click', () => {
    makeBeep(783.99)
})
document.querySelector('#note-g-sharp').addEventListener('click', () => {
    makeBeep(830.61)
})
document.querySelector('#note-a-natural').addEventListener('click', () => {
    makeBeep(880)
})
document.querySelector('#note-a-sharp').addEventListener('click', () => {
    makeBeep(932.33)
})
document.querySelector('#note-b-natural').addEventListener('click', () => {
    makeBeep(987.77)
})

