let mic;
let micVol;
let pfp;
let mul = 1;

function setup() {
    pfp = select("#pfp");
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    thing()
}

function touchStarted() {
    getAudioContext().resume();
}

function thing() {
    micVol = mic.getLevel();
    if(micVol > 0.02) {
        pfp.elt.classList.add("pfp-active");
    } else {
        setTimeout(thing2, 450 * mul)
    }
    mul += 1
}

function thing2() {
    pfp.elt.classList.remove("pfp-active")
}