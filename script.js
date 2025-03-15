let countdownTimer;
const countdownMins = document.getElementById("mins");
const countdownSecs = document.getElementById("secs");
const blinker = document.getElementById("blinker");

const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const stopButton = document.getElementById("stopButton");

function startCountdown() {

    clearInterval(countdownTimer)
    let minutes = parseInt(countdownMins.value, 10) || 0; // 10 means decimal, 0x means hexadecimal
    let seconds = parseInt(countdownSecs.value, 10) || 0;

    if (minutes === 0 && countdownSecs.value === "00") {
        alert("No input yet! \nEnter the number of minutes.");
        return;
    }

    countdownTimer = setInterval(() => {

        // countdownMins.style.color = "white";
        // countdownSecs.style.color = "white";
        blinker.style.color = "white"
        countdownMins.classList.remove("negativeCountdown")
        countdownSecs.classList.remove("negativeCountdown")
        // blinker.classList.remove("negativeCountdown")
        
        if (seconds <= 0 && minutes <= 0) {
            seconds--;
            // countdownMins.style.color = "red";
            // countdownSecs.style.color = "red";
            blinker.style.color = "red"
            countdownMins.classList.add("negativeCountdown")
            countdownSecs.classList.add("negativeCountdown")
            // blinker.classList.add("negativeCountdown")
                    
            if (seconds === -60) {
                minutes--;
                seconds = 0; 
            }
            } else {
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                }

        countdownMins.value = minutes.toString().padStart(2, "0");
        countdownSecs.value = seconds.toString().padStart(2, "0");
                
        }, 1000);
        }


startButton.addEventListener("click", startCountdown);

resetButton.addEventListener("click", function () {
    clearInterval(countdownTimer);
    countdownMins.value = "";
    countdownSecs.value = "00";
    minutes = 0;
    seconds = 0;
    // countdownMins.style.color = "white";
    // countdownSecs.style.color = "white";
    blinker.style.color = "white"
    countdownMins.classList.remove("negativeCountdown")
    countdownSecs.classList.remove("negativeCountdown")
    // blinker.classList.remove("negativeCountdown")
   
});

stopButton.addEventListener("click", function () {
    clearInterval(countdownTimer);
});