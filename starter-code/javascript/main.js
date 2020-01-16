var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
    // printMilliseconds();
    printSeconds();
    printMinutes();
}

function printMinutes() {
    let mins = chronometer.twoDigitsNumber(chronometer.getMinutes());
    console.log(mins);
    minDec.textContent = mins[0];
    minUni.textContent = mins[1];
    // console.log("printMinutes");
}

function printSeconds() {
    let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
    console.log(sec);
    secDec.textContent = sec[0];
    secUni.textContent = sec[1];
    // console.log("printSeconds");
}

function printMilliseconds() {
    // let mil = chronometer.twoDigitsNumber(chronometer.startClick());
    // console.log(mil);
    // milDec.textContent = `${mil[0]}`;
    // milUni.textContent = `${mil[1]}`;
    console.log("printMilliseconds");
}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    // Set the btnLeft button with the text STOP, and the class btn stop.
    btnLeft.textContent = "STOP";
    btnLeft.classList.replace("start", "stop");
    
}

function setSplitBtn() {
    btnRight.textContent = "SPLIT";
    btnRight.classList.replace("reset", "split")

}

function setStartBtn() {
    // Set the btnLeft button with the text START, and the class btn start.
    btnLeft.textContent = "START";
    btnLeft.classList.replace("stop", "start");
    
}

function setResetBtn() {
    // Set the btnRight button with the text RESET, and the class btn reset.
    btnRight.textContent = "RESET";
    btnRight.classList.replace("split", "reset")
}

// Start/Stop Button

btnLeft.addEventListener('click', function () {
    if (btnLeft.classList.contains("start")) {
        chronometer.startClick(printTime);
        // printTime();
        setStopBtn();
        setSplitBtn();
        console.log("start");
    }
    else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
        console.log("stop");
        // console.log(chronometer.startClick);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
});
