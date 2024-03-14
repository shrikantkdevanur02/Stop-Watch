let displayTime = document.getElementById("displayTime");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function Stop_watch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  // Adding zero before single digit
  function addZero(n) {
    return n < 10 ? "0" + n : n;
  }

  // Displaying time on the screen
  displayTime.innerHTML = `${addZero(hours)} : ${addZero(minutes)} : ${addZero(
    seconds
  )}`;
}

function start_time() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(Stop_watch, 1000);
}

function stop_time() {
  clearInterval(timer);
}
function reset_time() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = `00 : 00 :  00`;
}
