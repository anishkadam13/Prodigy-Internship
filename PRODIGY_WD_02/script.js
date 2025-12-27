let seconds = 0;
let timer = null;

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("display").innerText =
      `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  seconds = 0;
  document.getElementById("display").innerText = "00:00:00";
}
