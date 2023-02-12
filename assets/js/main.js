var timeStart, timeEnd;
var timeTaken;
var timeDiff;
var timeIndicator;
var isStart = false;
window.scrollTo({
  left: 0
});
console.log("Link to original Figma designs: ");
console.log('https://www.figma.com/file/QrCXxMbcHrhCWeXDOqCp0c/Time-and-You?node-id=0%3A1');

function recordTime() {

  if (!isStart) {
    timeStart = performance.now();
    document.getElementById("start-button").innerHTML = "STOP";
    document.getElementById("start-button").style.background = "#FFDFCD";
    isStart = true;
  } else {

    timeEnd = performance.now();
    document.getElementById("start-button").innerHTML = "RESTART";
    document.getElementById("start-button").style.background = "#FFFCB6";


    timeTaken = ((timeEnd - timeStart) / 1000).toFixed(2);
    isStart = false;
    document.getElementById("info").style.display = "block";

    displayInfo();
  }

  function displayInfo() {
    timeDiff = timeTaken - 5;
    if (timeDiff > 0) {
      timeIndicator = "slower";
    } else if (timeDiff < 0) {
      timeIndicator = "faster";
    } else {
      timeIndicator = "PERFECT and differs";
    }


    document.getElementById("info-section").innerHTML = "It took you <pinkText>" + Math.abs(timeTaken) + "  seconds </pinkText> to count to 5. <br><br> Your perception of time is " + timeIndicator + " by " + (Math.abs(timeDiff)).toFixed(3) + " seconds <br><br> <middleText>This means....<br>1 minute feels like " + (timeTaken / 5).toFixed(2) + " minutes <br>1 month feels like " + (((timeTaken / 5) * 2628288) / 86400).toFixed(1) + " days <br> 1 year feels like " + (((timeTaken / 5) * 31536000) / 2628288).toFixed(0) + " months, and</middleText> <br> <largeText>50  years feel like  " + (((timeTaken / 5) * 50)).toFixed(0) + " years to you</largeText><br><br>";
  }

  function validateForm(e) {

    let timeInput = document.forms["timeCalculate"]["formInput"].value;

    timeTaken = timeInput;
    displayInfo();
    console.log("Math formula used for calculating relative time:");
    console.log("((timeTaken / 5) * secondsInTotalTimePeriod) / secondsInUnitTimePeriod");

    e.preventDefault();

  }

  const form = document.getElementById('timeForm');

  form.addEventListener('input', validateForm);
  form.addEventListener('submit', validateForm);



}

/* javascript */
$(".clickme").click(function(){console.log("t6547");});
$(".clickme").click(function(e){

})
