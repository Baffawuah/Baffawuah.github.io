init();
showTime();

//loading json files
function loadJson(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");

  xobj.open("GET", "quote.json", true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

//where the magic happens
function init() {
  console.log("loaded");

  loadJson(function(response) {
    //loading the json into the program
    var actual_json = JSON.parse(response);

    var random = Math.floor(Math.random() * actual_json.length);

    //overwriting elements in the document with the quotes
    document.getElementById("quotehdr").innerHTML = actual_json[random].text;
    document.getElementById("quotebd").innerHTML = actual_json[random].from;

    //setting the background image for the dashboard
    document.body.style.backgroundImage =
      "url('https://images.wallpaperscraft.com/image/mountains_summer_lake_trees_forest_95632_1920x1080.jpg')";
  });
}

//show time
function showTime() {
  time = document.getElementById("time");

  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // figure out the AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hour Format

  hour = hour % 12 || 12;

  //Output Time

  time.innerHTML =
    hour +
    "<span>:</span>" +
    addZero(min) +
    "<span>:</span>" +
    addZero(sec) +
    " " +
    amPm;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//random Bg and Greeting Based on time of day
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //morning
  } else if (hour < 18) {
    //afternoon
  } else {
    //evening
  }
}
