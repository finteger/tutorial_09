"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Todd Nash
   Date: 2024-10-08

*/


/* Store the current date & time */
var currentDay = new Date("October, 10, 2024 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display date & time */
document.getElementById("dateNow").innerHTML = 
dateStr + "<br />" + timeStr;

/* Display days left before January 1st, 2018 */
var newYear = new Date("January 1, 2024");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

document.getElementById("dateNow").innerHTML = "m/d/y <br /> h:m:s";

/* Display the time left until New Years Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";