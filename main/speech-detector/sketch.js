let mic;
let micVol;
let pfp;

function setup() {
    pfp = select("#pfp");
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    micVol = mic.getLevel();
    console.log(pfp)
    console.log(micVol);
    if(micVol > 0.03) {
        pfp.elt.classList.add("pfp-active");
    } else {
        pfp.elt.classList.remove("pfp-active");
    }
}

function touchStarted() {
    getAudioContext().resume();
}