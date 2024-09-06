const displayTime = document.querySelector('.display-watch');
const stopButton = document.querySelector('#stop-btn');
const startButton = document.querySelector('#start-btn');
const resetButton = document.querySelector('#reset-btn');

let timerId = null; // timerId to store setInterval, at the begining to empty

// initialize milisec, sec and minutes == 0 at the begining
let miliSec = 0;
let sec = 0;
let minutes = 0;

// Start Button to start timer
startButton.addEventListener('click', () => {

    // starting Timer in 10 milisec using setInterval and storing it in TimerId to clearInterval later
    timerId = setInterval(startWatch, 10);

});

// Stop Button to stop Timer
stopButton.addEventListener('click', () => {

    // if timerId is not equal to nulll, then it removes setInterval using clearInterval inbuilt Function
    if (timerId != null) {
        clearInterval(timerId);
    }

});

// Reset Button to reset Timer
resetButton.addEventListener('click', () => {

    // if timerId is not equal to nulll, then it stops timer
    if (timerId != null) {
        clearInterval(timerId);
    }

    // updating displayTime to 00 and updating values to milisec, sec and minutes to 00
    displayTime.innerText = `00 : 00 : 00`;
    miliSec = 0;
    sec = 0;
    minutes = 0;

});


// Function to start timer
function startWatch() {

    // if timer start update miliSec
    miliSec++;   

    if (miliSec == 100) {  // 100 milisec = 1 sec
        sec++; // updating sec
        miliSec = 0; // once milisec = 100 then make it to 0 again

        if (sec == 60) { // 60 sec = 1 min
            minutes++; // updating minutes
            sec = 0; // once sec = 60 then make it to 0 again
        }
    }

    // making two digit numbers still if it is less than
    let miliSecString = miliSec < 10 ? `0${miliSec}` : miliSec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minutesString = minutes < 10 ? `0${minutes}` : minutes;

    // displaying the timer
    displayTime.innerText = `${minutesString} : ${secString} : ${miliSecString}`;
}
