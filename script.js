const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  let days = Math.floor(totalSeconds / 3600 / 24);
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  if (seconds == 1) {
    const sec = "Sec";
    let secs = document.getElementById("Secs");
    secs.innerText = sec;
  } else if(seconds == 0){
    const sec = "Sec";
    let secs = document.getElementById("Secs");
    secs.innerText = sec;
  } else {
    let secs = document.getElementById("Secs");
    secs.innerText = "Secs";
  }

  if (minutes == 1) {
    const min = "Min";
    let mins = document.getElementById("mins");
    mins.innerText = min;
  } else if(minutes == 0){
    const min = "Min";
    let mins = document.getElementById("mins");
    mins.innerText = min;
  } else {
    let mins = document.getElementById("mins");
    mins.innerText = "Mins";
  }

  if (hours == 1) {
    const hour = "Hour";
    let hours2 = document.getElementById("hours2");
    hours2.innerText = hour;
  } else if(hours == 0){
    const hour = "Hour";
    let hours2 = document.getElementById("hours2");
    hours2.innerText = hour;
  } else {
    let hours2 = document.getElementById("hours2");
    hours2.innerText = "Hours";
  }

  if (days == 1) {
    const days = "Day";
    let days2 = document.getElementById("days2");
    days2.innerText = days;
  } else if(days == 0){
    const days = "Day";
    let days2 = document.getElementById("days2");
    days2.innerText = days;
  } else {
    let days2 = document.getElementById("days2");
    days2.innerText = "Days";
  }
     
}

countdown();

setInterval(countdown, 1000);
