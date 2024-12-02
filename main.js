// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');

let beatCounter = 0;
const countDisplay = document.getElementById('count-display');
const metronomeCheckbox = document.getElementById('metronome-checkbox');

const kickDrumCheckboxes = [
    document.getElementById('kick-drum-1'),
    document.getElementById('kick-drum-2'),
    document.getElementById('kick-drum-3'),
    document.getElementById('kick-drum-4')
];
const snareDrumCheckboxes = [
    document.getElementById('snare-drum-1'),
    document.getElementById('snare-drum-2'),
    document.getElementById('snare-drum-3'),
    document.getElementById('snare-drum-4')
];
const hiHatCheckboxes = [
    document.getElementById('hi-hat-1'),
    document.getElementById('hi-hat-2'),
    document.getElementById('hi-hat-3'),
    document.getElementById('hi-hat-4')
];

function update() {
    if (!metronomeCheckbox.checked) {
        return;
    }

    beatCounter++;

    if (beatCounter % 4 === 0) {
        tock.play();
    } else {
        tick.play();
    }
    
    if (kickDrumCheckboxes[(beatCounter - 1) % 4].checked) {
        kick.play();
    }
    if (snareDrumCheckboxes[(beatCounter - 1) % 4].checked) {
        snare.play();
    }
    if (hiHatCheckboxes[(beatCounter - 1) % 4].checked) {
        hiHat.play();
    }

   
    countDisplay.textContent = (beatCounter % 4) + 1;
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
