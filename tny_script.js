"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Todd Nash
   Date: 2024-10-08

*/

runClock();
setInterval("runClock()", 1000);

function runClock(){

/* Store the current date & time */
var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display date & time */
document.getElementById("dateNow").innerHTML = 
dateStr + "<br />" + timeStr;

/* Display days left before January 1st, 2018 */
var newYear = new Date("January 1, 2024");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);

/* Calculate the days left until New Years  */
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

/* Calculate the hours left in the day */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

/* Calculate the minutes leftover in the day */
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

/* Calculate the seconds leftover in the day */
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


document.getElementById("dateNow").innerHTML = `${dateStr} <br /> ${timeStr}`;

/* Display the time left until New Years Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);


}



